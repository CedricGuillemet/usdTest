const USD_EXTENSIONS = ['.usd', '.usda', '.usdc', '.usdz'];

export interface DroppedFile {
  /** Relative path including directories, e.g. "house/GingerBreadHouse.usdc" */
  relativePath: string;
  /** Just the filename */
  name: string;
  /** The File object for reading contents */
  file: File;
}

export interface DropResult {
  /** All files collected (including from subdirectories) */
  allFiles: DroppedFile[];
  /** The auto-detected root USD file */
  rootFile: DroppedFile;
}

export interface DropHandlerCallbacks {
  onFilesDropped: (result: DropResult) => void;
  onDragEnter?: () => void;
  onDragLeave?: () => void;
}

const FILE_IGNORE = new Set(['.DS_Store', 'Thumbs.db', '.gitignore', 'README.md']);
const DIR_IGNORE = new Set(['.git', 'node_modules', '__MACOSX']);

/**
 * Recursively read all files from a FileSystemDirectoryEntry.
 */
async function readDirectoryRecursive(dir: FileSystemDirectoryEntry): Promise<FileSystemFileEntry[]> {
  const entries: FileSystemFileEntry[] = [];

  async function readAll(reader: FileSystemDirectoryReader): Promise<FileSystemEntry[]> {
    const batch: FileSystemEntry[] = await new Promise((resolve, reject) =>
      reader.readEntries(resolve, reject)
    );
    if (batch.length === 0) return [];
    const rest = await readAll(reader);
    return [...batch, ...rest];
  }

  const allEntries = await readAll(dir.createReader());

  for (const entry of allEntries) {
    if (entry.isFile) {
      if (!FILE_IGNORE.has(entry.name)) {
        entries.push(entry as FileSystemFileEntry);
      }
    } else if (entry.isDirectory) {
      if (!DIR_IGNORE.has(entry.name)) {
        const subFiles = await readDirectoryRecursive(entry as FileSystemDirectoryEntry);
        entries.push(...subFiles);
      }
    }
  }

  return entries;
}

/**
 * Convert a FileSystemFileEntry to a File with its relative path.
 */
function entryToDroppedFile(entry: FileSystemFileEntry): Promise<DroppedFile> {
  return new Promise((resolve, reject) => {
    entry.file(
      (file) => {
        // fullPath starts with "/" — strip the leading slash
        let relativePath = entry.fullPath;
        if (relativePath.startsWith('/')) relativePath = relativePath.substring(1);
        resolve({ relativePath, name: file.name, file });
      },
      reject
    );
  });
}

/**
 * Determine which file is most likely the root USD file.
 * Prefers: shallowest path, .usda over others, then first USD file found.
 */
function findRootFile(files: DroppedFile[]): DroppedFile | null {
  const usdFiles = files.filter(f => {
    const ext = '.' + f.name.split('.').pop()?.toLowerCase();
    return USD_EXTENSIONS.includes(ext);
  });

  if (usdFiles.length === 0) return null;
  if (usdFiles.length === 1) return usdFiles[0];

  // Sort by path depth (shallowest first), then name
  usdFiles.sort((a, b) => {
    const depthA = a.relativePath.split('/').length;
    const depthB = b.relativePath.split('/').length;
    if (depthA !== depthB) return depthA - depthB;
    return a.relativePath.localeCompare(b.relativePath);
  });

  // Prefer .usda at the shallowest level
  const shallowestDepth = usdFiles[0].relativePath.split('/').length;
  const topLevel = usdFiles.filter(f => f.relativePath.split('/').length === shallowestDepth);
  const usda = topLevel.find(f => f.name.toLowerCase().endsWith('.usda'));
  return usda || topLevel[0];
}

export function setupDropHandler(target: HTMLElement, callbacks: DropHandlerCallbacks) {
  const overlay = document.getElementById('dropOverlay');
  let dragCounter = 0;

  function showOverlay() { overlay?.classList.add('active'); }
  function hideOverlay() { overlay?.classList.remove('active'); }

  target.addEventListener('dragenter', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter++;
    if (dragCounter === 1) { showOverlay(); callbacks.onDragEnter?.(); }
  });

  target.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter--;
    if (dragCounter <= 0) { dragCounter = 0; hideOverlay(); callbacks.onDragLeave?.(); }
  });

  target.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  target.addEventListener('drop', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter = 0;
    hideOverlay();

    const dt = e.dataTransfer;
    if (!dt) return;

    // Collect all FileSystemEntry objects (supports folders)
    const allEntries: FileSystemEntry[] = [];
    const hasEntryAPI = dt.items?.length > 0 &&
      ('webkitGetAsEntry' in dt.items[0] || 'getAsEntry' in dt.items[0]);

    if (hasEntryAPI && dt.items) {
      for (let i = 0; i < dt.items.length; i++) {
        const item = dt.items[i];
        const entry: FileSystemEntry | null =
          ('getAsEntry' in item)
            ? (item as any).getAsEntry()
            : (item as any).webkitGetAsEntry();
        if (entry) allEntries.push(entry);
      }
    }

    let droppedFiles: DroppedFile[];

    if (allEntries.length > 0) {
      // Recursively collect files from entries (handles folders)
      const fileEntries: FileSystemFileEntry[] = [];
      for (const entry of allEntries) {
        if (entry.isFile) {
          if (!FILE_IGNORE.has(entry.name)) {
            fileEntries.push(entry as FileSystemFileEntry);
          }
        } else if (entry.isDirectory) {
          if (!DIR_IGNORE.has(entry.name)) {
            const subFiles = await readDirectoryRecursive(entry as FileSystemDirectoryEntry);
            fileEntries.push(...subFiles);
          }
        }
      }
      droppedFiles = await Promise.all(fileEntries.map(entryToDroppedFile));
    } else {
      // Fallback: plain File API (no folder support)
      droppedFiles = [];
      if (dt.files) {
        for (let i = 0; i < dt.files.length; i++) {
          const f = dt.files[i];
          droppedFiles.push({ relativePath: f.name, name: f.name, file: f });
        }
      }
    }

    if (droppedFiles.length === 0) return;

    const rootFile = findRootFile(droppedFiles);
    if (!rootFile) {
      console.warn('No USD file found in the dropped files.');
      return;
    }

    callbacks.onFilesDropped({ allFiles: droppedFiles, rootFile });
  });

  // Prevent default on body to avoid browser opening files
  document.body.addEventListener('dragenter', (e) => e.preventDefault());
  document.body.addEventListener('dragover', (e) => e.preventDefault());
  document.body.addEventListener('drop', (e) => e.preventDefault());
}
