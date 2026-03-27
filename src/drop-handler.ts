const VALID_EXTENSIONS = ['.usd', '.usda', '.usdc', '.usdz'];

export interface DropHandlerCallbacks {
  onFilesDropped: (fileName: string, buffer: ArrayBuffer) => void;
  onDragEnter?: () => void;
  onDragLeave?: () => void;
}

export function setupDropHandler(canvas: HTMLCanvasElement, callbacks: DropHandlerCallbacks) {
  const overlay = document.getElementById('dropOverlay');
  let dragCounter = 0;

  function showOverlay() {
    overlay?.classList.add('active');
  }

  function hideOverlay() {
    overlay?.classList.remove('active');
  }

  canvas.addEventListener('dragenter', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter++;
    if (dragCounter === 1) {
      showOverlay();
      callbacks.onDragEnter?.();
    }
  });

  canvas.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter--;
    if (dragCounter <= 0) {
      dragCounter = 0;
      hideOverlay();
      callbacks.onDragLeave?.();
    }
  });

  canvas.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  canvas.addEventListener('drop', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter = 0;
    hideOverlay();

    const files = e.dataTransfer?.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const name = file.name.toLowerCase();
    const isValid = VALID_EXTENSIONS.some(ext => name.endsWith(ext));

    if (!isValid) {
      console.warn(`Unsupported file type: ${file.name}. Accepted: ${VALID_EXTENSIONS.join(', ')}`);
      return;
    }

    const buffer = await file.arrayBuffer();
    callbacks.onFilesDropped(file.name, buffer);
  });

  // Also handle drag events on document body for better coverage
  document.body.addEventListener('dragenter', (e) => {
    e.preventDefault();
  });

  document.body.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  document.body.addEventListener('drop', (e) => {
    e.preventDefault();
  });
}
