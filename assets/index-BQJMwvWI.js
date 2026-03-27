import { _ as Qe, __tla as __tla_0 } from "./index-ULxToQKq.js";
let Zf;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    var $o = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    function Nf(G) {
        if (G.__esModule) return G;
        var _e = G.default;
        if (typeof _e == "function") {
            var te = function ne() {
                return this instanceof ne ? Reflect.construct(_e, arguments, this.constructor) : _e.apply(this, arguments);
            };
            te.prototype = _e.prototype;
        } else te = {};
        return Object.defineProperty(te, "__esModule", {
            value: !0
        }), Object.keys(G).forEach(function(ne) {
            var X = Object.getOwnPropertyDescriptor(G, ne);
            Object.defineProperty(te, ne, X.get ? X : {
                enumerable: !0,
                get: function() {
                    return G[ne];
                }
            });
        }), te;
    }
    var zf = {
        exports: {}
    };
    const Gf = {}, Yf = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Gf
    }, Symbol.toStringTag, {
        value: "Module"
    })), Ee = Nf(Yf);
    (function(G, _e) {
        var te = ((ne)=>{
            var X = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
            return typeof __filename < "u" && (X = X || __filename), function(er = {
                locateFile: (L, V)=>(!V && X && (V = X.substr(0, X.lastIndexOf("/") + 1)), V + L),
                ...ne,
                urlModifier: ne?.urlModifier
            }) {
                function L() {
                    return z.buffer != ae.buffer && oe(), ae;
                }
                function V() {
                    return z.buffer != ae.buffer && oe(), vi;
                }
                function re() {
                    return z.buffer != ae.buffer && oe(), _i;
                }
                function ye() {
                    return z.buffer != ae.buffer && oe(), hi;
                }
                function k() {
                    return z.buffer != ae.buffer && oe(), yi;
                }
                function j() {
                    return z.buffer != ae.buffer && oe(), pi;
                }
                function J() {
                    return z.buffer != ae.buffer && oe(), mi;
                }
                function Te() {
                    return z.buffer != ae.buffer && oe(), gi;
                }
                var l = er, $e, ke;
                if (l.ready = new Promise((e, r)=>{
                    $e = e, ke = r;
                }), l.expectedDataFileDownloads || (l.expectedDataFileDownloads = 0), l.expectedDataFileDownloads++, l.urlCallbackFromWorker = (...e)=>{
                    const r = Math.random().toString(36);
                    let i = e[0];
                    typeof i == "string" && (i = i.split("/").pop()), i = "\x1B[1;92m" + i + "\x1B[0m";
                    const t = new Promise((a)=>{
                        setTimeout(()=>{
                            a(void 0);
                        }, 10);
                    }), n = new Promise((a)=>{
                        let o;
                        o = (s)=>{
                            s.data.cmd === "callHandlerAsyncResult" && s.data.handler === "urlModifier" && s.data.uniqueMessageId === r && (self.removeEventListener("message", o), a(s.data.result));
                        }, self.addEventListener("message", o);
                    });
                    return postMessage({
                        cmd: "callHandlerAsync",
                        handler: "urlModifier",
                        args: {
                            ...e,
                            uniqueMessageId: r
                        }
                    }), Promise.race([
                        n,
                        t
                    ]);
                }, function() {
                    if (!(l.ENVIRONMENT_IS_PTHREAD || l.$ww)) {
                        var e = function(r) {
                            typeof window == "object" ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/") : typeof process > "u" && typeof location < "u" && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
                            var i = "emHdBindings.data", t = "emHdBindings.data";
                            typeof l.locateFilePackage == "function" && !l.locateFile && (l.locateFile = l.locateFilePackage, K("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));
                            var n = l.locateFile ? l.locateFile(t, "") : t, a = r.remote_package_size;
                            function o(_, h, y, C) {
                                if (typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string") {
                                    Ee.readFile(_, function(S, F) {
                                        S ? C(S) : y(F.buffer);
                                    });
                                    return;
                                }
                                var b = new XMLHttpRequest;
                                b.open("GET", _, !0), b.responseType = "arraybuffer", b.onprogress = function(S) {
                                    var F = _, w = h;
                                    if (S.total && (w = S.total), S.loaded) {
                                        b.addedTotal ? l.dataFileDownloads[F].loaded = S.loaded : (b.addedTotal = !0, l.dataFileDownloads || (l.dataFileDownloads = {}), l.dataFileDownloads[F] = {
                                            loaded: S.loaded,
                                            total: w
                                        });
                                        var E = 0, U = 0, O = 0;
                                        for(var q in l.dataFileDownloads){
                                            var B = l.dataFileDownloads[q];
                                            E += B.total, U += B.loaded, O++;
                                        }
                                        E = Math.ceil(E * l.expectedDataFileDownloads / O), l.setStatus && l.setStatus(`Downloading data... (${U}/${E})`);
                                    } else l.dataFileDownloads || l.setStatus && l.setStatus("Downloading data...");
                                }, b.onerror = function(S) {
                                    throw new Error("NetworkError for: " + _);
                                }, b.onload = function(S) {
                                    if (b.status == 200 || b.status == 304 || b.status == 206 || b.status == 0 && b.response) {
                                        var F = b.response;
                                        y(F);
                                    } else throw new Error(b.statusText + " : " + b.responseURL);
                                }, b.send(null);
                            }
                            function s(_) {
                                console.error("package error:", _);
                            }
                            var u = null, f = l.getPreloadedPackage ? l.getPreloadedPackage(n, a) : null;
                            f || o(n, a, function(_) {
                                u ? (u(_), u = null) : f = _;
                            }, s);
                            function c() {
                                function _(S, F) {
                                    if (!S) throw F + new Error().stack;
                                }
                                l.FS_createPath("/", "usd", !0, !0), l.FS_createPath("/usd", "ar", !0, !0), l.FS_createPath("/usd/ar", "resources", !0, !0), l.FS_createPath("/usd", "hd", !0, !0), l.FS_createPath("/usd/hd", "resources", !0, !0), l.FS_createPath("/usd/hd/resources", "codegenTemplates", !0, !0), l.FS_createPath("/usd", "httpResolver", !0, !0), l.FS_createPath("/usd/httpResolver", "resources", !0, !0), l.FS_createPath("/usd", "ndr", !0, !0), l.FS_createPath("/usd/ndr", "resources", !0, !0), l.FS_createPath("/usd", "sdf", !0, !0), l.FS_createPath("/usd/sdf", "resources", !0, !0), l.FS_createPath("/usd", "usd", !0, !0), l.FS_createPath("/usd/usd", "resources", !0, !0), l.FS_createPath("/usd/usd/resources", "codegenTemplates", !0, !0), l.FS_createPath("/usd/usd/resources", "usd", !0, !0), l.FS_createPath("/usd", "usdGeom", !0, !0), l.FS_createPath("/usd/usdGeom", "resources", !0, !0), l.FS_createPath("/usd/usdGeom/resources", "usdGeom", !0, !0), l.FS_createPath("/usd", "usdHydra", !0, !0), l.FS_createPath("/usd/usdHydra", "resources", !0, !0), l.FS_createPath("/usd/usdHydra/resources", "shaders", !0, !0), l.FS_createPath("/usd/usdHydra/resources", "usdHydra", !0, !0), l.FS_createPath("/usd", "usdImaging", !0, !0), l.FS_createPath("/usd/usdImaging", "resources", !0, !0), l.FS_createPath("/usd", "usdLux", !0, !0), l.FS_createPath("/usd/usdLux", "resources", !0, !0), l.FS_createPath("/usd/usdLux/resources", "usdLux", !0, !0), l.FS_createPath("/usd", "usdRender", !0, !0), l.FS_createPath("/usd/usdRender", "resources", !0, !0), l.FS_createPath("/usd/usdRender/resources", "usdRender", !0, !0), l.FS_createPath("/usd", "usdShade", !0, !0), l.FS_createPath("/usd/usdShade", "resources", !0, !0), l.FS_createPath("/usd/usdShade/resources", "usdShade", !0, !0), l.FS_createPath("/usd", "usdShaders", !0, !0), l.FS_createPath("/usd/usdShaders", "resources", !0, !0), l.FS_createPath("/usd/usdShaders/resources", "shaders", !0, !0), l.FS_createPath("/usd", "usdSkel", !0, !0), l.FS_createPath("/usd/usdSkel", "resources", !0, !0), l.FS_createPath("/usd/usdSkel/resources", "usdSkel", !0, !0), l.FS_createPath("/usd", "usdVol", !0, !0), l.FS_createPath("/usd/usdVol", "resources", !0, !0), l.FS_createPath("/usd/usdVol/resources", "usdVol", !0, !0);
                                function h(S, F, w) {
                                    this.start = S, this.end = F, this.audio = w;
                                }
                                h.prototype = {
                                    requests: {},
                                    open: function(S, F) {
                                        this.name = F, this.requests[F] = this, l.addRunDependency(`fp ${this.name}`);
                                    },
                                    send: function() {},
                                    onload: function() {
                                        var S = this.byteArray.subarray(this.start, this.end);
                                        this.finish(S);
                                    },
                                    finish: function(S) {
                                        var F = this;
                                        l.FS_createDataFile(this.name, null, S, !0, !0, !0), l.removeRunDependency(`fp ${F.name}`), this.requests[this.name] = null;
                                    }
                                };
                                for(var y = r.files, C = 0; C < y.length; ++C)new h(y[C].start, y[C].end, y[C].audio || 0).open("GET", y[C].filename);
                                function b(S) {
                                    _(S, "Loading data file failed."), _(S.constructor.name === ArrayBuffer.name, "bad input to processPackageData");
                                    var F = new Uint8Array(S);
                                    h.prototype.byteArray = F;
                                    for(var w = r.files, E = 0; E < w.length; ++E)h.prototype.requests[w[E].filename].onload();
                                    l.removeRunDependency("datafile_emHdBindings.data");
                                }
                                l.addRunDependency("datafile_emHdBindings.data"), l.preloadResults || (l.preloadResults = {}), l.preloadResults[i] = {
                                    fromCache: !1
                                }, f ? (b(f), f = null) : u = b;
                            }
                            l.calledRun ? c() : (l.preRun || (l.preRun = []), l.preRun.push(c));
                        };
                        e({
                            files: [
                                {
                                    filename: "/usd/ar/resources/plugInfo.json",
                                    start: 0,
                                    end: 589
                                },
                                {
                                    filename: "/usd/hd/resources/codegenTemplates/schemaClass.cpp",
                                    start: 589,
                                    end: 9620
                                },
                                {
                                    filename: "/usd/hd/resources/codegenTemplates/schemaClass.h",
                                    start: 9620,
                                    end: 20258
                                },
                                {
                                    filename: "/usd/hd/resources/plugInfo.json",
                                    start: 20258,
                                    end: 20483
                                },
                                {
                                    filename: "/usd/httpResolver/resources/plugInfo.json",
                                    start: 20483,
                                    end: 20823
                                },
                                {
                                    filename: "/usd/ndr/resources/plugInfo.json",
                                    start: 20823,
                                    end: 21397
                                },
                                {
                                    filename: "/usd/plugInfo.json",
                                    start: 21397,
                                    end: 21448
                                },
                                {
                                    filename: "/usd/sdf/resources/plugInfo.json",
                                    start: 21448,
                                    end: 22544
                                },
                                {
                                    filename: "/usd/usd/resources/codegenTemplates/api.h",
                                    start: 22544,
                                    end: 24646
                                },
                                {
                                    filename: "/usd/usd/resources/codegenTemplates/plugInfo.json",
                                    start: 24646,
                                    end: 25003
                                },
                                {
                                    filename: "/usd/usd/resources/codegenTemplates/schemaClass.cpp",
                                    start: 25003,
                                    end: 37342
                                },
                                {
                                    filename: "/usd/usd/resources/codegenTemplates/schemaClass.h",
                                    start: 37342,
                                    end: 54229
                                },
                                {
                                    filename: "/usd/usd/resources/codegenTemplates/tokens.cpp",
                                    start: 54229,
                                    end: 55817
                                },
                                {
                                    filename: "/usd/usd/resources/codegenTemplates/tokens.h",
                                    start: 55817,
                                    end: 59072
                                },
                                {
                                    filename: "/usd/usd/resources/codegenTemplates/wrapSchemaClass.cpp",
                                    start: 59072,
                                    end: 68578
                                },
                                {
                                    filename: "/usd/usd/resources/codegenTemplates/wrapTokens.cpp",
                                    start: 68578,
                                    end: 71099
                                },
                                {
                                    filename: "/usd/usd/resources/generatedSchema.usda",
                                    start: 71099,
                                    end: 86803
                                },
                                {
                                    filename: "/usd/usd/resources/plugInfo.json",
                                    start: 86803,
                                    end: 92530
                                },
                                {
                                    filename: "/usd/usd/resources/usd/schema.usda",
                                    start: 92530,
                                    end: 110774
                                },
                                {
                                    filename: "/usd/usdGeom/resources/generatedSchema.usda",
                                    start: 110774,
                                    end: 355640
                                },
                                {
                                    filename: "/usd/usdGeom/resources/plugInfo.json",
                                    start: 355640,
                                    end: 371761
                                },
                                {
                                    filename: "/usd/usdGeom/resources/usdGeom/schema.usda",
                                    start: 371761,
                                    end: 500520
                                },
                                {
                                    filename: "/usd/usdHydra/resources/generatedSchema.usda",
                                    start: 500520,
                                    end: 501538
                                },
                                {
                                    filename: "/usd/usdHydra/resources/plugInfo.json",
                                    start: 501538,
                                    end: 502826
                                },
                                {
                                    filename: "/usd/usdHydra/resources/shaders/empty.glslfx",
                                    start: 502826,
                                    end: 504049
                                },
                                {
                                    filename: "/usd/usdHydra/resources/shaders/shaderDefs.usda",
                                    start: 504049,
                                    end: 510806
                                },
                                {
                                    filename: "/usd/usdHydra/resources/usdHydra/schema.usda",
                                    start: 510806,
                                    end: 518107
                                },
                                {
                                    filename: "/usd/usdImaging/resources/plugInfo.json",
                                    start: 518107,
                                    end: 531776
                                },
                                {
                                    filename: "/usd/usdLux/resources/generatedSchema.usda",
                                    start: 531776,
                                    end: 610666
                                },
                                {
                                    filename: "/usd/usdLux/resources/plugInfo.json",
                                    start: 610666,
                                    end: 620463
                                },
                                {
                                    filename: "/usd/usdLux/resources/usdLux/schema.usda",
                                    start: 620463,
                                    end: 662394
                                },
                                {
                                    filename: "/usd/usdRender/resources/generatedSchema.usda",
                                    start: 662394,
                                    end: 685685
                                },
                                {
                                    filename: "/usd/usdRender/resources/plugInfo.json",
                                    start: 685685,
                                    end: 688784
                                },
                                {
                                    filename: "/usd/usdRender/resources/usdRender/schema.usda",
                                    start: 688784,
                                    end: 705492
                                },
                                {
                                    filename: "/usd/usdShade/resources/generatedSchema.usda",
                                    start: 705492,
                                    end: 721492
                                },
                                {
                                    filename: "/usd/usdShade/resources/plugInfo.json",
                                    start: 721492,
                                    end: 727378
                                },
                                {
                                    filename: "/usd/usdShade/resources/usdShade/schema.usda",
                                    start: 727378,
                                    end: 754223
                                },
                                {
                                    filename: "/usd/usdShaders/resources/plugInfo.json",
                                    start: 754223,
                                    end: 754902
                                },
                                {
                                    filename: "/usd/usdShaders/resources/shaders/previewSurface.glslfx",
                                    start: 754902,
                                    end: 768823
                                },
                                {
                                    filename: "/usd/usdShaders/resources/shaders/primvarReader.glslfx",
                                    start: 768823,
                                    end: 770046
                                },
                                {
                                    filename: "/usd/usdShaders/resources/shaders/shaderDefs.usda",
                                    start: 770046,
                                    end: 784976
                                },
                                {
                                    filename: "/usd/usdShaders/resources/shaders/transform2d.glslfx",
                                    start: 784976,
                                    end: 786199
                                },
                                {
                                    filename: "/usd/usdShaders/resources/shaders/uvTexture.glslfx",
                                    start: 786199,
                                    end: 787422
                                },
                                {
                                    filename: "/usd/usdSkel/resources/generatedSchema.usda",
                                    start: 787422,
                                    end: 802913
                                },
                                {
                                    filename: "/usd/usdSkel/resources/plugInfo.json",
                                    start: 802913,
                                    end: 805907
                                },
                                {
                                    filename: "/usd/usdSkel/resources/usdSkel/schema.usda",
                                    start: 805907,
                                    end: 816312
                                },
                                {
                                    filename: "/usd/usdVol/resources/generatedSchema.usda",
                                    start: 816312,
                                    end: 840757
                                },
                                {
                                    filename: "/usd/usdVol/resources/plugInfo.json",
                                    start: 840757,
                                    end: 843193
                                },
                                {
                                    filename: "/usd/usdVol/resources/usdVol/schema.usda",
                                    start: 843193,
                                    end: 849069
                                }
                            ],
                            remote_package_size: 849069
                        });
                    }
                }(), !l.ENVIRONMENT_IS_PTHREAD) {
                    let e = function() {
                        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    };
                    const r = 1024 * 1024 * 1024, i = 4 * 1024 * 1024 * 1024, t = e() ? r : i;
                    l.wasmMemory = new WebAssembly.Memory({
                        initial: 256,
                        maximum: t / 65536,
                        shared: !0
                    });
                }
                var li = Object.assign({}, l), Ar = "./this.program", rr = (e, r)=>{
                    throw r;
                }, jr = typeof window == "object", pe = typeof importScripts == "function", Z = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", T = l.ENVIRONMENT_IS_PTHREAD || !1, Q = "";
                function di(e) {
                    return l.locateFile ? l.locateFile(e, Q) : Q + e;
                }
                var Me, Re, ir;
                if (Z) {
                    var Oe = Ee, Dr = Ee;
                    pe ? Q = Dr.dirname(Q) + "/" : Q = __dirname + "/", Me = (r, i)=>(r = nr(r) ? new URL(r) : Dr.normalize(r), Oe.readFileSync(r, i ? void 0 : "utf8")), ir = (r)=>{
                        var i = Me(r, !0);
                        return i.buffer || (i = new Uint8Array(i)), i;
                    }, Re = (r, i, t, n = !0)=>{
                        r = nr(r) ? new URL(r) : Dr.normalize(r), Oe.readFile(r, n ? void 0 : "utf8", (a, o)=>{
                            a ? t(a) : i(n ? o.buffer : o);
                        });
                    }, !l.thisProgram && process.argv.length > 1 && (Ar = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), rr = (r, i)=>{
                        throw process.exitCode = r, i;
                    }, l.inspect = ()=>"[Emscripten Module object]";
                    let e;
                    try {
                        e = Ee;
                    } catch (r) {
                        throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'), r;
                    }
                    $o.Worker = e.Worker;
                } else (jr || pe) && (pe ? Q = self.location.href : typeof document < "u" && document.currentScript && (Q = document.currentScript.src), X && (Q = X), Q.indexOf("blob:") !== 0 ? Q = Q.substr(0, Q.replace(/[?#].*/, "").lastIndexOf("/") + 1) : Q = "", Z || (Me = (e)=>{
                    var r = new XMLHttpRequest;
                    return r.open("GET", e, !1), r.send(null), r.responseText;
                }, pe && (ir = (e)=>{
                    var r = new XMLHttpRequest;
                    return r.open("GET", e, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
                }), Re = (e, r, i)=>{
                    var t = new XMLHttpRequest;
                    t.open("GET", e, !0), t.responseType = "arraybuffer", t.onload = ()=>{
                        if (t.status == 200 || t.status == 0 && t.response) {
                            r(t.response);
                            return;
                        }
                        i();
                    }, t.onerror = i, t.send(null);
                }));
                Z && typeof performance > "u" && ($o.performance = Ee.performance);
                var ui = console.log.bind(console), fi = console.error.bind(console);
                Z && (ui = (...e)=>Oe.writeSync(1, e.join(" ") + `
`), fi = (...e)=>Oe.writeSync(2, e.join(" ") + `
`));
                var Tr = l.print || ui, K = l.printErr || fi;
                Object.assign(l, li), li = null, l.arguments && l.arguments, l.thisProgram && (Ar = l.thisProgram), l.quit && (rr = l.quit);
                var We;
                l.wasmBinary && (We = l.wasmBinary), typeof WebAssembly != "object" && de("no native wasm support detected");
                var z, ci, be = !1, me;
                function Ie(e, r) {
                    e || de(r);
                }
                var ae, vi, _i, hi, yi, pi, mi, gi;
                function oe() {
                    var e = z.buffer;
                    l.HEAP8 = ae = new Int8Array(e), l.HEAP16 = _i = new Int16Array(e), l.HEAPU8 = vi = new Uint8Array(e), l.HEAPU16 = hi = new Uint16Array(e), l.HEAP32 = yi = new Int32Array(e), l.HEAPU32 = pi = new Uint32Array(e), l.HEAPF32 = mi = new Float32Array(e), l.HEAPF64 = gi = new Float64Array(e);
                }
                var tr = l.INITIAL_MEMORY || 16777216;
                if (Ie(tr >= 5242880, "INITIAL_MEMORY should be larger than STACK_SIZE, was " + tr + "! (STACK_SIZE=5242880)"), T) z = l.wasmMemory;
                else if (l.wasmMemory) z = l.wasmMemory;
                else if (z = new WebAssembly.Memory({
                    initial: tr / 65536,
                    maximum: 65536,
                    shared: !0
                }), !(z.buffer instanceof SharedArrayBuffer)) throw K("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), Z && K("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"), Error("bad memory");
                oe(), tr = z.buffer.byteLength;
                var wi = [], Ci = [], Ei = [];
                function Mo() {
                    if (l.preRun) for(typeof l.preRun == "function" && (l.preRun = [
                        l.preRun
                    ]); l.preRun.length;)bi(l.preRun.shift());
                    xr(wi);
                }
                function ki() {
                    T || (!l.noFSInit && !d.init.initialized && d.init(), d.ignorePermissions = !1, xr(Ci));
                }
                function Ro() {
                    if (!T) {
                        if (l.postRun) for(typeof l.postRun == "function" && (l.postRun = [
                            l.postRun
                        ]); l.postRun.length;)Wo(l.postRun.shift());
                        xr(Ei);
                    }
                }
                function bi(e) {
                    wi.unshift(e);
                }
                function Oo(e) {
                    Ci.unshift(e);
                }
                function Wo(e) {
                    Ei.unshift(e);
                }
                var ge = 0, xe = null;
                function qf(e) {
                    return e;
                }
                function He(e) {
                    ge++, l.monitorRunDependencies && l.monitorRunDependencies(ge);
                }
                function Se(e) {
                    if (ge--, l.monitorRunDependencies && l.monitorRunDependencies(ge), ge == 0 && xe) {
                        var r = xe;
                        xe = null, r();
                    }
                }
                function de(e) {
                    l.onAbort && l.onAbort(e), e = "Aborted(" + e + ")", K(e), me = 1, e += ". Build with -sASSERTIONS for more info.";
                    var r = new WebAssembly.RuntimeError(e);
                    throw ke(r), r;
                }
                var Io = "data:application/octet-stream;base64,", Si = (e)=>e.startsWith(Io), nr = (e)=>e.startsWith("file://"), Pe;
                Pe = "emHdBindings.wasm", Si(Pe) || (Pe = di(Pe));
                function Pi(e) {
                    if (e == Pe && We) return new Uint8Array(We);
                    if (ir) return ir(e);
                    throw "both async and sync fetching of the wasm failed";
                }
                function xo(e) {
                    if (!We && (jr || pe)) {
                        if (typeof fetch == "function" && !nr(e)) return fetch(e, {
                            credentials: "same-origin"
                        }).then((r)=>{
                            if (!r.ok) throw "failed to load wasm binary file at '" + e + "'";
                            return r.arrayBuffer();
                        }).catch(()=>Pi(e));
                        if (Re) return new Promise((r, i)=>{
                            Re(e, (t)=>r(new Uint8Array(t)), i);
                        });
                    }
                    return Promise.resolve().then(()=>Pi(e));
                }
                function Fi(e, r, i) {
                    return xo(e).then((t)=>WebAssembly.instantiate(t, r)).then((t)=>t).then(i, (t)=>{
                        K(`failed to asynchronously prepare wasm: ${t}`), de(t);
                    });
                }
                function Ho(e, r, i, t) {
                    return !e && typeof WebAssembly.instantiateStreaming == "function" && !Si(r) && !nr(r) && !Z && typeof fetch == "function" ? fetch(r, {
                        credentials: "same-origin"
                    }).then((n)=>{
                        var a = WebAssembly.instantiateStreaming(n, i);
                        return a.then(t, function(o) {
                            return K(`wasm streaming compile failed: ${o}`), K("falling back to ArrayBuffer instantiation"), Fi(r, i, t);
                        });
                    }) : Fi(r, i, t);
                }
                function Lo() {
                    var e = {
                        a: fd
                    };
                    function r(t, n) {
                        return v = t.exports, v = D.instrumentWasmExports(v), v = Vf(v), as(v.Hd), v.Dd, Oo(v.Bd), ci = n, Se(), v;
                    }
                    He();
                    function i(t) {
                        r(t.instance, t.module);
                    }
                    if (l.instantiateWasm) try {
                        return l.instantiateWasm(e, r);
                    } catch (t) {
                        K(`Module.instantiateWasm callback failed with error: ${t}`), ke(t);
                    }
                    return Ho(We, Pe, e, i).catch(ke), {};
                }
                var P, I;
                function Uo(e, r) {
                    return D.handleAsync(async ()=>{
                        let n = he(e);
                        n.startsWith("/http") && (n = n.slice(1)), n.includes("http:/") && (n = n.replace("http:/", "http://")), n.includes("https:/") && (n = n.replace("https:/", "https://"));
                        let a = null, o = null, s = n.split("/").pop();
                        if (s = "\x1B[1;92m" + s + "\x1B[0m", T) {
                            let u;
                            try {
                                u = await l.urlCallbackFromWorker(n);
                            } catch (f) {
                                console.error(s, "Error in thread callback for", n, "error:", f);
                            }
                            a = u;
                        } else if (typeof l.urlModifier == "function") {
                            const u = l.urlModifier;
                            let f = u(n);
                            f instanceof Promise && (f = await f), a = f;
                        }
                        try {
                            a && typeof a == "object" ? "getFile" in a ? o = await (await a.getFile()).arrayBuffer() : "file" in a ? o = await new Promise((u, f)=>{
                                a.file((c)=>{
                                    const _ = new FileReader;
                                    _.onload = ()=>u(_.result), _.onerror = f, _.readAsArrayBuffer(c);
                                }, f);
                            }) : a instanceof File ? o = await a.arrayBuffer() : a instanceof Blob ? o = await new Promise((u, f)=>{
                                const c = new FileReader;
                                c.onload = ()=>u(c.result), c.onerror = f, c.readAsArrayBuffer(a);
                            }) : a instanceof ArrayBuffer && (o = a) : typeof a == "string" && (n = a);
                        } catch (u) {
                            console.error("Error after main thread callback in fetch_asset for", n, "error:", u), l.HEAP32[r >> 2] = 0, l.HEAP32[(r >> 2) + 1] = 0;
                            return;
                        }
                        try {
                            o === null && (o = await fetch(n).then((c)=>c.arrayBuffer()).catch((c)=>null)), (!o || o.byteLength === 0) && (console.error(s, "Error fetching asset – couldn't fetch", n), o = new ArrayBuffer(1));
                            const u = o.byteLength, f = Je(u);
                            V().set(new Uint8Array(o), f >>> 0), l.HEAP32[r >> 2] = f, l.HEAP32[(r >> 2) + 1] = u;
                            return;
                        } catch (u) {
                            console.error("Error in fetch_asset for", n, u), l.HEAP32[r >> 2] = 0, l.HEAP32[(r >> 2) + 1] = 0;
                            return;
                        }
                    });
                }
                function Bo(e) {
                    typeof self < "u" ? typeof self.loadedFiles > "u" && (self.loadedFiles = []) : console.log("Neither window nor self is defined"), self.loadedFiles.push(he(e));
                }
                function Vo(e, r) {
                    const i = he(e), t = he(r);
                    let n = document.createElement("a");
                    n.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(i)), n.setAttribute("download", t), n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n);
                }
                function $r(e) {
                    this.name = "ExitStatus", this.message = `Program terminated with exit(${e})`, this.status = e;
                }
                var Mr = (e)=>{
                    e.terminate(), e.onmessage = (r)=>{};
                }, No = (e)=>{
                    var r = $.pthreads[e];
                    delete $.pthreads[e], Mr(r), ti(e), $.runningWorkers.splice($.runningWorkers.indexOf(r), 1), r.pthread_ptr = 0;
                }, zo = (e)=>{
                    var r = $.pthreads[e];
                    r.postMessage({
                        cmd: "cancel"
                    });
                }, Ai = (e)=>{
                    var r = $.pthreads[e];
                    Ie(r), $.returnWorkerToPool(r);
                }, Go = (e, r)=>(V().fill(0, e, e + r), e), ji = (e)=>{
                    var r = $.getNewWorker();
                    if (!r) return 6;
                    $.runningWorkers.push(r), $.pthreads[e.pthread_ptr] = r, r.pthread_ptr = e.pthread_ptr;
                    var i = {
                        cmd: "run",
                        start_routine: e.startRoutine,
                        arg: e.arg,
                        pthread_ptr: e.pthread_ptr
                    };
                    return Z && r.unref(), r.postMessage(i, e.transferList), 0;
                }, ar = 0, or = ()=>Hr || ar > 0, x = {
                    isAbs: (e)=>e.charAt(0) === "/",
                    splitPath: (e)=>{
                        var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
                        return r.exec(e).slice(1);
                    },
                    normalizeArray: (e, r)=>{
                        for(var i = 0, t = e.length - 1; t >= 0; t--){
                            var n = e[t];
                            n === "." ? e.splice(t, 1) : n === ".." ? (e.splice(t, 1), i++) : i && (e.splice(t, 1), i--);
                        }
                        if (r) for(; i; i--)e.unshift("..");
                        return e;
                    },
                    normalize: (e)=>{
                        var r = x.isAbs(e), i = e.substr(-1) === "/";
                        return e = x.normalizeArray(e.split("/").filter((t)=>!!t), !r).join("/"), !e && !r && (e = "."), e && i && (e += "/"), (r ? "/" : "") + e;
                    },
                    dirname: (e)=>{
                        var r = x.splitPath(e), i = r[0], t = r[1];
                        return !i && !t ? "." : (t && (t = t.substr(0, t.length - 1)), i + t);
                    },
                    basename: (e)=>{
                        if (e === "/") return "/";
                        e = x.normalize(e), e = e.replace(/\/$/, "");
                        var r = e.lastIndexOf("/");
                        return r === -1 ? e : e.substr(r + 1);
                    },
                    join: function() {
                        var e = Array.prototype.slice.call(arguments);
                        return x.normalize(e.join("/"));
                    },
                    join2: (e, r)=>x.normalize(e + "/" + r)
                }, Yo = ()=>{
                    if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") return (t)=>(t.set(crypto.getRandomValues(new Uint8Array(t.byteLength))), t);
                    if (Z) try {
                        var e = Ee, r = e.randomFillSync;
                        if (r) return (t)=>e.randomFillSync(t);
                        var i = e.randomBytes;
                        return (t)=>(t.set(i(t.byteLength)), t);
                    } catch  {}
                    de("initRandomDevice");
                }, Di = (e)=>(Di = Yo())(e), ue = {
                    resolve: function() {
                        for(var e = "", r = !1, i = arguments.length - 1; i >= -1 && !r; i--){
                            var t = i >= 0 ? arguments[i] : d.cwd();
                            if (typeof t != "string") throw new TypeError("Arguments to path.resolve must be strings");
                            if (!t) return "";
                            e = t + "/" + e, r = x.isAbs(t);
                        }
                        return e = x.normalizeArray(e.split("/").filter((n)=>!!n), !r).join("/"), (r ? "/" : "") + e || ".";
                    },
                    relative: (e, r)=>{
                        e = ue.resolve(e).substr(1), r = ue.resolve(r).substr(1);
                        function i(f) {
                            for(var c = 0; c < f.length && f[c] === ""; c++);
                            for(var _ = f.length - 1; _ >= 0 && f[_] === ""; _--);
                            return c > _ ? [] : f.slice(c, _ - c + 1);
                        }
                        for(var t = i(e.split("/")), n = i(r.split("/")), a = Math.min(t.length, n.length), o = a, s = 0; s < a; s++)if (t[s] !== n[s]) {
                            o = s;
                            break;
                        }
                        for(var u = [], s = o; s < t.length; s++)u.push("..");
                        return u = u.concat(n.slice(o)), u.join("/");
                    }
                }, Ti = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, Fe = (e, r, i)=>{
                    r >>>= 0;
                    for(var t = r + i, n = r; e[n] && !(n >= t);)++n;
                    if (n - r > 16 && e.buffer && Ti) return Ti.decode(e.slice(r, n));
                    for(var a = ""; r < n;){
                        var o = e[r++];
                        if (!(o & 128)) {
                            a += String.fromCharCode(o);
                            continue;
                        }
                        var s = e[r++] & 63;
                        if ((o & 224) == 192) {
                            a += String.fromCharCode((o & 31) << 6 | s);
                            continue;
                        }
                        var u = e[r++] & 63;
                        if ((o & 240) == 224 ? o = (o & 15) << 12 | s << 6 | u : o = (o & 7) << 18 | s << 12 | u << 6 | e[r++] & 63, o < 65536) a += String.fromCharCode(o);
                        else {
                            var f = o - 65536;
                            a += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023);
                        }
                    }
                    return a;
                }, Rr = [], Le = (e)=>{
                    for(var r = 0, i = 0; i < e.length; ++i){
                        var t = e.charCodeAt(i);
                        t <= 127 ? r++ : t <= 2047 ? r += 2 : t >= 55296 && t <= 57343 ? (r += 4, ++i) : r += 3;
                    }
                    return r;
                }, Or = (e, r, i, t)=>{
                    if (i >>>= 0, !(t > 0)) return 0;
                    for(var n = i, a = i + t - 1, o = 0; o < e.length; ++o){
                        var s = e.charCodeAt(o);
                        if (s >= 55296 && s <= 57343) {
                            var u = e.charCodeAt(++o);
                            s = 65536 + ((s & 1023) << 10) | u & 1023;
                        }
                        if (s <= 127) {
                            if (i >= a) break;
                            r[i++ >>> 0] = s;
                        } else if (s <= 2047) {
                            if (i + 1 >= a) break;
                            r[i++ >>> 0] = 192 | s >> 6, r[i++ >>> 0] = 128 | s & 63;
                        } else if (s <= 65535) {
                            if (i + 2 >= a) break;
                            r[i++ >>> 0] = 224 | s >> 12, r[i++ >>> 0] = 128 | s >> 6 & 63, r[i++ >>> 0] = 128 | s & 63;
                        } else {
                            if (i + 3 >= a) break;
                            r[i++ >>> 0] = 240 | s >> 18, r[i++ >>> 0] = 128 | s >> 12 & 63, r[i++ >>> 0] = 128 | s >> 6 & 63, r[i++ >>> 0] = 128 | s & 63;
                        }
                    }
                    return r[i >>> 0] = 0, i - n;
                };
                function sr(e, r, i) {
                    var t = Le(e) + 1, n = new Array(t), a = Or(e, n, 0, n.length);
                    return r && (n.length = a), n;
                }
                var qo = ()=>{
                    if (!Rr.length) {
                        var e = null;
                        if (Z) {
                            var r = 256, i = Buffer.alloc(r), t = 0, n = process.stdin.fd;
                            try {
                                t = Oe.readSync(n, i);
                            } catch (a) {
                                if (a.toString().includes("EOF")) t = 0;
                                else throw a;
                            }
                            t > 0 ? e = i.slice(0, t).toString("utf-8") : e = null;
                        } else typeof window < "u" && typeof window.prompt == "function" ? (e = window.prompt("Input: "), e !== null && (e += `
`)) : typeof readline == "function" && (e = readline(), e !== null && (e += `
`));
                        if (!e) return null;
                        Rr = sr(e, !0);
                    }
                    return Rr.shift();
                }, we = {
                    ttys: [],
                    init () {},
                    shutdown () {},
                    register (e, r) {
                        we.ttys[e] = {
                            input: [],
                            output: [],
                            ops: r
                        }, d.registerDevice(e, we.stream_ops);
                    },
                    stream_ops: {
                        open (e) {
                            var r = we.ttys[e.node.rdev];
                            if (!r) throw new d.ErrnoError(43);
                            e.tty = r, e.seekable = !1;
                        },
                        close (e) {
                            e.tty.ops.fsync(e.tty);
                        },
                        fsync (e) {
                            e.tty.ops.fsync(e.tty);
                        },
                        read (e, r, i, t, n) {
                            if (!e.tty || !e.tty.ops.get_char) throw new d.ErrnoError(60);
                            for(var a = 0, o = 0; o < t; o++){
                                var s;
                                try {
                                    s = e.tty.ops.get_char(e.tty);
                                } catch  {
                                    throw new d.ErrnoError(29);
                                }
                                if (s === void 0 && a === 0) throw new d.ErrnoError(6);
                                if (s == null) break;
                                a++, r[i + o] = s;
                            }
                            return a && (e.node.timestamp = Date.now()), a;
                        },
                        write (e, r, i, t, n) {
                            if (!e.tty || !e.tty.ops.put_char) throw new d.ErrnoError(60);
                            try {
                                for(var a = 0; a < t; a++)e.tty.ops.put_char(e.tty, r[i + a]);
                            } catch  {
                                throw new d.ErrnoError(29);
                            }
                            return t && (e.node.timestamp = Date.now()), a;
                        }
                    },
                    default_tty_ops: {
                        get_char (e) {
                            return qo();
                        },
                        put_char (e, r) {
                            r === null || r === 10 ? (Tr(Fe(e.output, 0)), e.output = []) : r != 0 && e.output.push(r);
                        },
                        fsync (e) {
                            e.output && e.output.length > 0 && (Tr(Fe(e.output, 0)), e.output = []);
                        },
                        ioctl_tcgets (e) {
                            return {
                                c_iflag: 25856,
                                c_oflag: 5,
                                c_cflag: 191,
                                c_lflag: 35387,
                                c_cc: [
                                    3,
                                    28,
                                    127,
                                    21,
                                    4,
                                    0,
                                    1,
                                    0,
                                    17,
                                    19,
                                    26,
                                    0,
                                    18,
                                    15,
                                    23,
                                    22,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0
                                ]
                            };
                        },
                        ioctl_tcsets (e, r, i) {
                            return 0;
                        },
                        ioctl_tiocgwinsz (e) {
                            return [
                                24,
                                80
                            ];
                        }
                    },
                    default_tty1_ops: {
                        put_char (e, r) {
                            r === null || r === 10 ? (K(Fe(e.output, 0)), e.output = []) : r != 0 && e.output.push(r);
                        },
                        fsync (e) {
                            e.output && e.output.length > 0 && (K(Fe(e.output, 0)), e.output = []);
                        }
                    }
                }, Xo = (e, r)=>Math.ceil(e / r) * r, $i = (e)=>{
                    e = Xo(e, 65536);
                    var r = Ht(65536, e);
                    return r ? Go(r, e) : 0;
                }, M = {
                    ops_table: null,
                    mount (e) {
                        return M.createNode(null, "/", 16895, 0);
                    },
                    createNode (e, r, i, t) {
                        if (d.isBlkdev(i) || d.isFIFO(i)) throw new d.ErrnoError(63);
                        M.ops_table || (M.ops_table = {
                            dir: {
                                node: {
                                    getattr: M.node_ops.getattr,
                                    setattr: M.node_ops.setattr,
                                    lookup: M.node_ops.lookup,
                                    mknod: M.node_ops.mknod,
                                    rename: M.node_ops.rename,
                                    unlink: M.node_ops.unlink,
                                    rmdir: M.node_ops.rmdir,
                                    readdir: M.node_ops.readdir,
                                    symlink: M.node_ops.symlink
                                },
                                stream: {
                                    llseek: M.stream_ops.llseek
                                }
                            },
                            file: {
                                node: {
                                    getattr: M.node_ops.getattr,
                                    setattr: M.node_ops.setattr
                                },
                                stream: {
                                    llseek: M.stream_ops.llseek,
                                    read: M.stream_ops.read,
                                    write: M.stream_ops.write,
                                    allocate: M.stream_ops.allocate,
                                    mmap: M.stream_ops.mmap,
                                    msync: M.stream_ops.msync
                                }
                            },
                            link: {
                                node: {
                                    getattr: M.node_ops.getattr,
                                    setattr: M.node_ops.setattr,
                                    readlink: M.node_ops.readlink
                                },
                                stream: {}
                            },
                            chrdev: {
                                node: {
                                    getattr: M.node_ops.getattr,
                                    setattr: M.node_ops.setattr
                                },
                                stream: d.chrdev_stream_ops
                            }
                        });
                        var n = d.createNode(e, r, i, t);
                        return d.isDir(n.mode) ? (n.node_ops = M.ops_table.dir.node, n.stream_ops = M.ops_table.dir.stream, n.contents = {}) : d.isFile(n.mode) ? (n.node_ops = M.ops_table.file.node, n.stream_ops = M.ops_table.file.stream, n.usedBytes = 0, n.contents = null) : d.isLink(n.mode) ? (n.node_ops = M.ops_table.link.node, n.stream_ops = M.ops_table.link.stream) : d.isChrdev(n.mode) && (n.node_ops = M.ops_table.chrdev.node, n.stream_ops = M.ops_table.chrdev.stream), n.timestamp = Date.now(), e && (e.contents[r] = n, e.timestamp = n.timestamp), n;
                    },
                    getFileDataAsTypedArray (e) {
                        return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
                    },
                    expandFileStorage (e, r) {
                        var i = e.contents ? e.contents.length : 0;
                        if (!(i >= r)) {
                            var t = 1024 * 1024;
                            r = Math.max(r, i * (i < t ? 2 : 1.125) >>> 0), i != 0 && (r = Math.max(r, 256));
                            var n = e.contents;
                            e.contents = new Uint8Array(r), e.usedBytes > 0 && e.contents.set(n.subarray(0, e.usedBytes), 0);
                        }
                    },
                    resizeFileStorage (e, r) {
                        if (e.usedBytes != r) if (r == 0) e.contents = null, e.usedBytes = 0;
                        else {
                            var i = e.contents;
                            e.contents = new Uint8Array(r), i && e.contents.set(i.subarray(0, Math.min(r, e.usedBytes))), e.usedBytes = r;
                        }
                    },
                    node_ops: {
                        getattr (e) {
                            var r = {};
                            return r.dev = d.isChrdev(e.mode) ? e.id : 1, r.ino = e.id, r.mode = e.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = e.rdev, d.isDir(e.mode) ? r.size = 4096 : d.isFile(e.mode) ? r.size = e.usedBytes : d.isLink(e.mode) ? r.size = e.link.length : r.size = 0, r.atime = new Date(e.timestamp), r.mtime = new Date(e.timestamp), r.ctime = new Date(e.timestamp), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r;
                        },
                        setattr (e, r) {
                            r.mode !== void 0 && (e.mode = r.mode), r.timestamp !== void 0 && (e.timestamp = r.timestamp), r.size !== void 0 && M.resizeFileStorage(e, r.size);
                        },
                        lookup (e, r) {
                            throw d.genericErrors[44];
                        },
                        mknod (e, r, i, t) {
                            return M.createNode(e, r, i, t);
                        },
                        rename (e, r, i) {
                            if (d.isDir(e.mode)) {
                                var t;
                                try {
                                    t = d.lookupNode(r, i);
                                } catch  {}
                                if (t) for(var n in t.contents)throw new d.ErrnoError(55);
                            }
                            delete e.parent.contents[e.name], e.parent.timestamp = Date.now(), e.name = i, r.contents[i] = e, r.timestamp = e.parent.timestamp, e.parent = r;
                        },
                        unlink (e, r) {
                            delete e.contents[r], e.timestamp = Date.now();
                        },
                        rmdir (e, r) {
                            var i = d.lookupNode(e, r);
                            for(var t in i.contents)throw new d.ErrnoError(55);
                            delete e.contents[r], e.timestamp = Date.now();
                        },
                        readdir (e) {
                            var r = [
                                ".",
                                ".."
                            ];
                            for(var i in e.contents)e.contents.hasOwnProperty(i) && r.push(i);
                            return r;
                        },
                        symlink (e, r, i) {
                            var t = M.createNode(e, r, 41471, 0);
                            return t.link = i, t;
                        },
                        readlink (e) {
                            if (!d.isLink(e.mode)) throw new d.ErrnoError(28);
                            return e.link;
                        }
                    },
                    stream_ops: {
                        read (e, r, i, t, n) {
                            var a = e.node.contents;
                            if (n >= e.node.usedBytes) return 0;
                            var o = Math.min(e.node.usedBytes - n, t);
                            if (o > 8 && a.subarray) r.set(a.subarray(n, n + o), i);
                            else for(var s = 0; s < o; s++)r[i + s] = a[n + s];
                            return o;
                        },
                        write (e, r, i, t, n, a) {
                            if (r.buffer === L().buffer && (a = !1), !t) return 0;
                            var o = e.node;
                            if (o.timestamp = Date.now(), r.subarray && (!o.contents || o.contents.subarray)) {
                                if (a) return o.contents = r.subarray(i, i + t), o.usedBytes = t, t;
                                if (o.usedBytes === 0 && n === 0) return o.contents = r.slice(i, i + t), o.usedBytes = t, t;
                                if (n + t <= o.usedBytes) return o.contents.set(r.subarray(i, i + t), n), t;
                            }
                            if (M.expandFileStorage(o, n + t), o.contents.subarray && r.subarray) o.contents.set(r.subarray(i, i + t), n);
                            else for(var s = 0; s < t; s++)o.contents[n + s] = r[i + s];
                            return o.usedBytes = Math.max(o.usedBytes, n + t), t;
                        },
                        llseek (e, r, i) {
                            var t = r;
                            if (i === 1 ? t += e.position : i === 2 && d.isFile(e.node.mode) && (t += e.node.usedBytes), t < 0) throw new d.ErrnoError(28);
                            return t;
                        },
                        allocate (e, r, i) {
                            M.expandFileStorage(e.node, r + i), e.node.usedBytes = Math.max(e.node.usedBytes, r + i);
                        },
                        mmap (e, r, i, t, n) {
                            if (!d.isFile(e.node.mode)) throw new d.ErrnoError(43);
                            var a, o, s = e.node.contents;
                            if (!(n & 2) && s.buffer === L().buffer) o = !1, a = s.byteOffset;
                            else {
                                if ((i > 0 || i + r < s.length) && (s.subarray ? s = s.subarray(i, i + r) : s = Array.prototype.slice.call(s, i, i + r)), o = !0, a = $i(r), !a) throw new d.ErrnoError(48);
                                L().set(s, a >>> 0);
                            }
                            return {
                                ptr: a,
                                allocated: o
                            };
                        },
                        msync (e, r, i, t, n) {
                            return M.stream_ops.write(e, r, 0, t, i, !1), 0;
                        }
                    }
                }, Ko = (e, r, i, t)=>{
                    var n = `al ${e}`;
                    Re(e, (a)=>{
                        Ie(a, `Loading data file "${e}" failed (no arrayBuffer).`), r(new Uint8Array(a)), n && Se();
                    }, (a)=>{
                        if (i) i();
                        else throw `Loading data file "${e}" failed.`;
                    }), n && He();
                }, Jo = (e, r, i, t, n, a)=>d.createDataFile(e, r, i, t, n, a), Zo = l.preloadPlugins || [], Qo = (e, r, i, t)=>{
                    typeof Browser < "u" && Browser.init();
                    var n = !1;
                    return Zo.forEach((a)=>{
                        n || a.canHandle(r) && (a.handle(e, r, i, t), n = !0);
                    }), n;
                }, es = (e, r, i, t, n, a, o, s, u, f)=>{
                    var c = r ? ue.resolve(x.join2(e, r)) : e;
                    function _(h) {
                        function y(C) {
                            f && f(), s || Jo(e, r, C, t, n, u), a && a(), Se();
                        }
                        Qo(h, c, y, ()=>{
                            o && o(), Se();
                        }) || y(h);
                    }
                    He(), typeof i == "string" ? Ko(i, (h)=>_(h), o) : _(i);
                }, rs = (e)=>{
                    var r = {
                        r: 0,
                        "r+": 2,
                        w: 577,
                        "w+": 578,
                        a: 1089,
                        "a+": 1090
                    }, i = r[e];
                    if (typeof i > "u") throw new Error(`Unknown file open mode: ${e}`);
                    return i;
                }, Wr = (e, r)=>{
                    var i = 0;
                    return e && (i |= 365), r && (i |= 146), i;
                }, d = {
                    root: null,
                    mounts: [],
                    devices: {},
                    streams: [],
                    nextInode: 1,
                    nameTable: null,
                    currentPath: "/",
                    initialized: !1,
                    ignorePermissions: !0,
                    ErrnoError: null,
                    genericErrors: {},
                    filesystems: null,
                    syncFSRequests: 0,
                    lookupPath (e, r = {}) {
                        if (e = ue.resolve(e), !e) return {
                            path: "",
                            node: null
                        };
                        var i = {
                            follow_mount: !0,
                            recurse_count: 0
                        };
                        if (r = Object.assign(i, r), r.recurse_count > 8) throw new d.ErrnoError(32);
                        for(var t = e.split("/").filter((_)=>!!_), n = d.root, a = "/", o = 0; o < t.length; o++){
                            var s = o === t.length - 1;
                            if (s && r.parent) break;
                            if (n = d.lookupNode(n, t[o]), a = x.join2(a, t[o]), d.isMountpoint(n) && (!s || s && r.follow_mount) && (n = n.mounted.root), !s || r.follow) for(var u = 0; d.isLink(n.mode);){
                                var f = d.readlink(a);
                                a = ue.resolve(x.dirname(a), f);
                                var c = d.lookupPath(a, {
                                    recurse_count: r.recurse_count + 1
                                });
                                if (n = c.node, u++ > 40) throw new d.ErrnoError(32);
                            }
                        }
                        return {
                            path: a,
                            node: n
                        };
                    },
                    getPath (e) {
                        for(var r;;){
                            if (d.isRoot(e)) {
                                var i = e.mount.mountpoint;
                                return r ? i[i.length - 1] !== "/" ? `${i}/${r}` : i + r : i;
                            }
                            r = r ? `${e.name}/${r}` : e.name, e = e.parent;
                        }
                    },
                    hashName (e, r) {
                        for(var i = 0, t = 0; t < r.length; t++)i = (i << 5) - i + r.charCodeAt(t) | 0;
                        return (e + i >>> 0) % d.nameTable.length;
                    },
                    hashAddNode (e) {
                        var r = d.hashName(e.parent.id, e.name);
                        e.name_next = d.nameTable[r], d.nameTable[r] = e;
                    },
                    hashRemoveNode (e) {
                        var r = d.hashName(e.parent.id, e.name);
                        if (d.nameTable[r] === e) d.nameTable[r] = e.name_next;
                        else for(var i = d.nameTable[r]; i;){
                            if (i.name_next === e) {
                                i.name_next = e.name_next;
                                break;
                            }
                            i = i.name_next;
                        }
                    },
                    lookupNode (e, r) {
                        var i = d.mayLookup(e);
                        if (i) throw new d.ErrnoError(i, e);
                        for(var t = d.hashName(e.id, r), n = d.nameTable[t]; n; n = n.name_next){
                            var a = n.name;
                            if (n.parent.id === e.id && a === r) return n;
                        }
                        return d.lookup(e, r);
                    },
                    createNode (e, r, i, t) {
                        var n = new d.FSNode(e, r, i, t);
                        return d.hashAddNode(n), n;
                    },
                    destroyNode (e) {
                        d.hashRemoveNode(e);
                    },
                    isRoot (e) {
                        return e === e.parent;
                    },
                    isMountpoint (e) {
                        return !!e.mounted;
                    },
                    isFile (e) {
                        return (e & 61440) === 32768;
                    },
                    isDir (e) {
                        return (e & 61440) === 16384;
                    },
                    isLink (e) {
                        return (e & 61440) === 40960;
                    },
                    isChrdev (e) {
                        return (e & 61440) === 8192;
                    },
                    isBlkdev (e) {
                        return (e & 61440) === 24576;
                    },
                    isFIFO (e) {
                        return (e & 61440) === 4096;
                    },
                    isSocket (e) {
                        return (e & 49152) === 49152;
                    },
                    flagsToPermissionString (e) {
                        var r = [
                            "r",
                            "w",
                            "rw"
                        ][e & 3];
                        return e & 512 && (r += "w"), r;
                    },
                    nodePermissions (e, r) {
                        return d.ignorePermissions ? 0 : r.includes("r") && !(e.mode & 292) || r.includes("w") && !(e.mode & 146) || r.includes("x") && !(e.mode & 73) ? 2 : 0;
                    },
                    mayLookup (e) {
                        var r = d.nodePermissions(e, "x");
                        return r || (e.node_ops.lookup ? 0 : 2);
                    },
                    mayCreate (e, r) {
                        try {
                            var i = d.lookupNode(e, r);
                            return 20;
                        } catch  {}
                        return d.nodePermissions(e, "wx");
                    },
                    mayDelete (e, r, i) {
                        var t;
                        try {
                            t = d.lookupNode(e, r);
                        } catch (a) {
                            return a.errno;
                        }
                        var n = d.nodePermissions(e, "wx");
                        if (n) return n;
                        if (i) {
                            if (!d.isDir(t.mode)) return 54;
                            if (d.isRoot(t) || d.getPath(t) === d.cwd()) return 10;
                        } else if (d.isDir(t.mode)) return 31;
                        return 0;
                    },
                    mayOpen (e, r) {
                        return e ? d.isLink(e.mode) ? 32 : d.isDir(e.mode) && (d.flagsToPermissionString(r) !== "r" || r & 512) ? 31 : d.nodePermissions(e, d.flagsToPermissionString(r)) : 44;
                    },
                    MAX_OPEN_FDS: 4096,
                    nextfd () {
                        for(var e = 0; e <= d.MAX_OPEN_FDS; e++)if (!d.streams[e]) return e;
                        throw new d.ErrnoError(33);
                    },
                    getStreamChecked (e) {
                        var r = d.getStream(e);
                        if (!r) throw new d.ErrnoError(8);
                        return r;
                    },
                    getStream: (e)=>d.streams[e],
                    createStream (e, r = -1) {
                        return d.FSStream || (d.FSStream = function() {
                            this.shared = {};
                        }, d.FSStream.prototype = {}, Object.defineProperties(d.FSStream.prototype, {
                            object: {
                                get () {
                                    return this.node;
                                },
                                set (i) {
                                    this.node = i;
                                }
                            },
                            isRead: {
                                get () {
                                    return (this.flags & 2097155) !== 1;
                                }
                            },
                            isWrite: {
                                get () {
                                    return (this.flags & 2097155) !== 0;
                                }
                            },
                            isAppend: {
                                get () {
                                    return this.flags & 1024;
                                }
                            },
                            flags: {
                                get () {
                                    return this.shared.flags;
                                },
                                set (i) {
                                    this.shared.flags = i;
                                }
                            },
                            position: {
                                get () {
                                    return this.shared.position;
                                },
                                set (i) {
                                    this.shared.position = i;
                                }
                            }
                        })), e = Object.assign(new d.FSStream, e), r == -1 && (r = d.nextfd()), e.fd = r, d.streams[r] = e, e;
                    },
                    closeStream (e) {
                        d.streams[e] = null;
                    },
                    chrdev_stream_ops: {
                        open (e) {
                            var r = d.getDevice(e.node.rdev);
                            e.stream_ops = r.stream_ops, e.stream_ops.open && e.stream_ops.open(e);
                        },
                        llseek () {
                            throw new d.ErrnoError(70);
                        }
                    },
                    major: (e)=>e >> 8,
                    minor: (e)=>e & 255,
                    makedev: (e, r)=>e << 8 | r,
                    registerDevice (e, r) {
                        d.devices[e] = {
                            stream_ops: r
                        };
                    },
                    getDevice: (e)=>d.devices[e],
                    getMounts (e) {
                        for(var r = [], i = [
                            e
                        ]; i.length;){
                            var t = i.pop();
                            r.push(t), i.push.apply(i, t.mounts);
                        }
                        return r;
                    },
                    syncfs (e, r) {
                        typeof e == "function" && (r = e, e = !1), d.syncFSRequests++, d.syncFSRequests > 1 && K(`warning: ${d.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
                        var i = d.getMounts(d.root.mount), t = 0;
                        function n(o) {
                            return d.syncFSRequests--, r(o);
                        }
                        function a(o) {
                            if (o) return a.errored ? void 0 : (a.errored = !0, n(o));
                            ++t >= i.length && n(null);
                        }
                        i.forEach((o)=>{
                            if (!o.type.syncfs) return a(null);
                            o.type.syncfs(o, e, a);
                        });
                    },
                    mount (e, r, i) {
                        var t = i === "/", n = !i, a;
                        if (t && d.root) throw new d.ErrnoError(10);
                        if (!t && !n) {
                            var o = d.lookupPath(i, {
                                follow_mount: !1
                            });
                            if (i = o.path, a = o.node, d.isMountpoint(a)) throw new d.ErrnoError(10);
                            if (!d.isDir(a.mode)) throw new d.ErrnoError(54);
                        }
                        var s = {
                            type: e,
                            opts: r,
                            mountpoint: i,
                            mounts: []
                        }, u = e.mount(s);
                        return u.mount = s, s.root = u, t ? d.root = u : a && (a.mounted = s, a.mount && a.mount.mounts.push(s)), u;
                    },
                    unmount (e) {
                        var r = d.lookupPath(e, {
                            follow_mount: !1
                        });
                        if (!d.isMountpoint(r.node)) throw new d.ErrnoError(28);
                        var i = r.node, t = i.mounted, n = d.getMounts(t);
                        Object.keys(d.nameTable).forEach((o)=>{
                            for(var s = d.nameTable[o]; s;){
                                var u = s.name_next;
                                n.includes(s.mount) && d.destroyNode(s), s = u;
                            }
                        }), i.mounted = null;
                        var a = i.mount.mounts.indexOf(t);
                        i.mount.mounts.splice(a, 1);
                    },
                    lookup (e, r) {
                        return e.node_ops.lookup(e, r);
                    },
                    mknod (e, r, i) {
                        var t = d.lookupPath(e, {
                            parent: !0
                        }), n = t.node, a = x.basename(e);
                        if (!a || a === "." || a === "..") throw new d.ErrnoError(28);
                        var o = d.mayCreate(n, a);
                        if (o) throw new d.ErrnoError(o);
                        if (!n.node_ops.mknod) throw new d.ErrnoError(63);
                        return n.node_ops.mknod(n, a, r, i);
                    },
                    create (e, r) {
                        return r = r !== void 0 ? r : 438, r &= 4095, r |= 32768, d.mknod(e, r, 0);
                    },
                    mkdir (e, r) {
                        return r = r !== void 0 ? r : 511, r &= 1023, r |= 16384, d.mknod(e, r, 0);
                    },
                    mkdirTree (e, r) {
                        for(var i = e.split("/"), t = "", n = 0; n < i.length; ++n)if (i[n]) {
                            t += "/" + i[n];
                            try {
                                d.mkdir(t, r);
                            } catch (a) {
                                if (a.errno != 20) throw a;
                            }
                        }
                    },
                    mkdev (e, r, i) {
                        return typeof i > "u" && (i = r, r = 438), r |= 8192, d.mknod(e, r, i);
                    },
                    symlink (e, r) {
                        if (!ue.resolve(e)) throw new d.ErrnoError(44);
                        var i = d.lookupPath(r, {
                            parent: !0
                        }), t = i.node;
                        if (!t) throw new d.ErrnoError(44);
                        var n = x.basename(r), a = d.mayCreate(t, n);
                        if (a) throw new d.ErrnoError(a);
                        if (!t.node_ops.symlink) throw new d.ErrnoError(63);
                        return t.node_ops.symlink(t, n, e);
                    },
                    rename (e, r) {
                        var i = x.dirname(e), t = x.dirname(r), n = x.basename(e), a = x.basename(r), o, s, u;
                        if (o = d.lookupPath(e, {
                            parent: !0
                        }), s = o.node, o = d.lookupPath(r, {
                            parent: !0
                        }), u = o.node, !s || !u) throw new d.ErrnoError(44);
                        if (s.mount !== u.mount) throw new d.ErrnoError(75);
                        var f = d.lookupNode(s, n), c = ue.relative(e, t);
                        if (c.charAt(0) !== ".") throw new d.ErrnoError(28);
                        if (c = ue.relative(r, i), c.charAt(0) !== ".") throw new d.ErrnoError(55);
                        var _;
                        try {
                            _ = d.lookupNode(u, a);
                        } catch  {}
                        if (f !== _) {
                            var h = d.isDir(f.mode), y = d.mayDelete(s, n, h);
                            if (y) throw new d.ErrnoError(y);
                            if (y = _ ? d.mayDelete(u, a, h) : d.mayCreate(u, a), y) throw new d.ErrnoError(y);
                            if (!s.node_ops.rename) throw new d.ErrnoError(63);
                            if (d.isMountpoint(f) || _ && d.isMountpoint(_)) throw new d.ErrnoError(10);
                            if (u !== s && (y = d.nodePermissions(s, "w"), y)) throw new d.ErrnoError(y);
                            d.hashRemoveNode(f);
                            try {
                                s.node_ops.rename(f, u, a);
                            } catch (C) {
                                throw C;
                            } finally{
                                d.hashAddNode(f);
                            }
                        }
                    },
                    rmdir (e) {
                        var r = d.lookupPath(e, {
                            parent: !0
                        }), i = r.node, t = x.basename(e), n = d.lookupNode(i, t), a = d.mayDelete(i, t, !0);
                        if (a) throw new d.ErrnoError(a);
                        if (!i.node_ops.rmdir) throw new d.ErrnoError(63);
                        if (d.isMountpoint(n)) throw new d.ErrnoError(10);
                        i.node_ops.rmdir(i, t), d.destroyNode(n);
                    },
                    readdir (e) {
                        var r = d.lookupPath(e, {
                            follow: !0
                        }), i = r.node;
                        if (!i.node_ops.readdir) throw new d.ErrnoError(54);
                        return i.node_ops.readdir(i);
                    },
                    unlink (e) {
                        var r = d.lookupPath(e, {
                            parent: !0
                        }), i = r.node;
                        if (!i) throw new d.ErrnoError(44);
                        var t = x.basename(e), n = d.lookupNode(i, t), a = d.mayDelete(i, t, !1);
                        if (a) throw new d.ErrnoError(a);
                        if (!i.node_ops.unlink) throw new d.ErrnoError(63);
                        if (d.isMountpoint(n)) throw new d.ErrnoError(10);
                        i.node_ops.unlink(i, t), d.destroyNode(n);
                    },
                    readlink (e) {
                        var r = d.lookupPath(e), i = r.node;
                        if (!i) throw new d.ErrnoError(44);
                        if (!i.node_ops.readlink) throw new d.ErrnoError(28);
                        return ue.resolve(d.getPath(i.parent), i.node_ops.readlink(i));
                    },
                    stat (e, r) {
                        var i = d.lookupPath(e, {
                            follow: !r
                        }), t = i.node;
                        if (!t) throw new d.ErrnoError(44);
                        if (!t.node_ops.getattr) throw new d.ErrnoError(63);
                        return t.node_ops.getattr(t);
                    },
                    lstat (e) {
                        return d.stat(e, !0);
                    },
                    chmod (e, r, i) {
                        var t;
                        if (typeof e == "string") {
                            var n = d.lookupPath(e, {
                                follow: !i
                            });
                            t = n.node;
                        } else t = e;
                        if (!t.node_ops.setattr) throw new d.ErrnoError(63);
                        t.node_ops.setattr(t, {
                            mode: r & 4095 | t.mode & -4096,
                            timestamp: Date.now()
                        });
                    },
                    lchmod (e, r) {
                        d.chmod(e, r, !0);
                    },
                    fchmod (e, r) {
                        var i = d.getStreamChecked(e);
                        d.chmod(i.node, r);
                    },
                    chown (e, r, i, t) {
                        var n;
                        if (typeof e == "string") {
                            var a = d.lookupPath(e, {
                                follow: !t
                            });
                            n = a.node;
                        } else n = e;
                        if (!n.node_ops.setattr) throw new d.ErrnoError(63);
                        n.node_ops.setattr(n, {
                            timestamp: Date.now()
                        });
                    },
                    lchown (e, r, i) {
                        d.chown(e, r, i, !0);
                    },
                    fchown (e, r, i) {
                        var t = d.getStreamChecked(e);
                        d.chown(t.node, r, i);
                    },
                    truncate (e, r) {
                        if (r < 0) throw new d.ErrnoError(28);
                        var i;
                        if (typeof e == "string") {
                            var t = d.lookupPath(e, {
                                follow: !0
                            });
                            i = t.node;
                        } else i = e;
                        if (!i.node_ops.setattr) throw new d.ErrnoError(63);
                        if (d.isDir(i.mode)) throw new d.ErrnoError(31);
                        if (!d.isFile(i.mode)) throw new d.ErrnoError(28);
                        var n = d.nodePermissions(i, "w");
                        if (n) throw new d.ErrnoError(n);
                        i.node_ops.setattr(i, {
                            size: r,
                            timestamp: Date.now()
                        });
                    },
                    ftruncate (e, r) {
                        var i = d.getStreamChecked(e);
                        if (!(i.flags & 2097155)) throw new d.ErrnoError(28);
                        d.truncate(i.node, r);
                    },
                    utime (e, r, i) {
                        var t = d.lookupPath(e, {
                            follow: !0
                        }), n = t.node;
                        n.node_ops.setattr(n, {
                            timestamp: Math.max(r, i)
                        });
                    },
                    open (e, r, i) {
                        if (e === "") throw new d.ErrnoError(44);
                        r = typeof r == "string" ? rs(r) : r, i = typeof i > "u" ? 438 : i, r & 64 ? i = i & 4095 | 32768 : i = 0;
                        var t;
                        if (typeof e == "object") t = e;
                        else {
                            e = x.normalize(e);
                            try {
                                var n = d.lookupPath(e, {
                                    follow: !(r & 131072)
                                });
                                t = n.node;
                            } catch  {}
                        }
                        var a = !1;
                        if (r & 64) if (t) {
                            if (r & 128) throw new d.ErrnoError(20);
                        } else t = d.mknod(e, i, 0), a = !0;
                        if (!t) throw new d.ErrnoError(44);
                        if (d.isChrdev(t.mode) && (r &= -513), r & 65536 && !d.isDir(t.mode)) throw new d.ErrnoError(54);
                        if (!a) {
                            var o = d.mayOpen(t, r);
                            if (o) throw new d.ErrnoError(o);
                        }
                        r & 512 && !a && d.truncate(t, 0), r &= -131713;
                        var s = d.createStream({
                            node: t,
                            path: d.getPath(t),
                            flags: r,
                            seekable: !0,
                            position: 0,
                            stream_ops: t.stream_ops,
                            ungotten: [],
                            error: !1
                        });
                        return s.stream_ops.open && s.stream_ops.open(s), l.logReadFiles && !(r & 1) && (d.readFiles || (d.readFiles = {}), e in d.readFiles || (d.readFiles[e] = 1)), s;
                    },
                    close (e) {
                        if (d.isClosed(e)) throw new d.ErrnoError(8);
                        e.getdents && (e.getdents = null);
                        try {
                            e.stream_ops.close && e.stream_ops.close(e);
                        } catch (r) {
                            throw r;
                        } finally{
                            d.closeStream(e.fd);
                        }
                        e.fd = null;
                    },
                    isClosed (e) {
                        return e.fd === null;
                    },
                    llseek (e, r, i) {
                        if (d.isClosed(e)) throw new d.ErrnoError(8);
                        if (!e.seekable || !e.stream_ops.llseek) throw new d.ErrnoError(70);
                        if (i != 0 && i != 1 && i != 2) throw new d.ErrnoError(28);
                        return e.position = e.stream_ops.llseek(e, r, i), e.ungotten = [], e.position;
                    },
                    read (e, r, i, t, n) {
                        if (t < 0 || n < 0) throw new d.ErrnoError(28);
                        if (d.isClosed(e)) throw new d.ErrnoError(8);
                        if ((e.flags & 2097155) === 1) throw new d.ErrnoError(8);
                        if (d.isDir(e.node.mode)) throw new d.ErrnoError(31);
                        if (!e.stream_ops.read) throw new d.ErrnoError(28);
                        var a = typeof n < "u";
                        if (!a) n = e.position;
                        else if (!e.seekable) throw new d.ErrnoError(70);
                        var o = e.stream_ops.read(e, r, i, t, n);
                        return a || (e.position += o), o;
                    },
                    write (e, r, i, t, n, a) {
                        if (t < 0 || n < 0) throw new d.ErrnoError(28);
                        if (d.isClosed(e)) throw new d.ErrnoError(8);
                        if (!(e.flags & 2097155)) throw new d.ErrnoError(8);
                        if (d.isDir(e.node.mode)) throw new d.ErrnoError(31);
                        if (!e.stream_ops.write) throw new d.ErrnoError(28);
                        e.seekable && e.flags & 1024 && d.llseek(e, 0, 2);
                        var o = typeof n < "u";
                        if (!o) n = e.position;
                        else if (!e.seekable) throw new d.ErrnoError(70);
                        var s = e.stream_ops.write(e, r, i, t, n, a);
                        return o || (e.position += s), s;
                    },
                    allocate (e, r, i) {
                        if (d.isClosed(e)) throw new d.ErrnoError(8);
                        if (r < 0 || i <= 0) throw new d.ErrnoError(28);
                        if (!(e.flags & 2097155)) throw new d.ErrnoError(8);
                        if (!d.isFile(e.node.mode) && !d.isDir(e.node.mode)) throw new d.ErrnoError(43);
                        if (!e.stream_ops.allocate) throw new d.ErrnoError(138);
                        e.stream_ops.allocate(e, r, i);
                    },
                    mmap (e, r, i, t, n) {
                        if (t & 2 && !(n & 2) && (e.flags & 2097155) !== 2) throw new d.ErrnoError(2);
                        if ((e.flags & 2097155) === 1) throw new d.ErrnoError(2);
                        if (!e.stream_ops.mmap) throw new d.ErrnoError(43);
                        return e.stream_ops.mmap(e, r, i, t, n);
                    },
                    msync (e, r, i, t, n) {
                        return e.stream_ops.msync ? e.stream_ops.msync(e, r, i, t, n) : 0;
                    },
                    munmap: (e)=>0,
                    ioctl (e, r, i) {
                        if (!e.stream_ops.ioctl) throw new d.ErrnoError(59);
                        return e.stream_ops.ioctl(e, r, i);
                    },
                    readFile (e, r = {}) {
                        if (r.flags = r.flags || 0, r.encoding = r.encoding || "binary", r.encoding !== "utf8" && r.encoding !== "binary") throw new Error(`Invalid encoding type "${r.encoding}"`);
                        var i, t = d.open(e, r.flags), n = d.stat(e), a = n.size, o = new Uint8Array(a);
                        return d.read(t, o, 0, a, 0), r.encoding === "utf8" ? i = Fe(o, 0) : r.encoding === "binary" && (i = o), d.close(t), i;
                    },
                    writeFile (e, r, i = {}) {
                        i.flags = i.flags || 577;
                        var t = d.open(e, i.flags, i.mode);
                        if (typeof r == "string") {
                            var n = new Uint8Array(Le(r) + 1), a = Or(r, n, 0, n.length);
                            d.write(t, n, 0, a, void 0, i.canOwn);
                        } else if (ArrayBuffer.isView(r)) d.write(t, r, 0, r.byteLength, void 0, i.canOwn);
                        else throw new Error("Unsupported data type");
                        d.close(t);
                    },
                    cwd: ()=>d.currentPath,
                    chdir (e) {
                        var r = d.lookupPath(e, {
                            follow: !0
                        });
                        if (r.node === null) throw new d.ErrnoError(44);
                        if (!d.isDir(r.node.mode)) throw new d.ErrnoError(54);
                        var i = d.nodePermissions(r.node, "x");
                        if (i) throw new d.ErrnoError(i);
                        d.currentPath = r.path;
                    },
                    createDefaultDirectories () {
                        d.mkdir("/tmp"), d.mkdir("/home"), d.mkdir("/home/web_user");
                    },
                    createDefaultDevices () {
                        d.mkdir("/dev"), d.registerDevice(d.makedev(1, 3), {
                            read: ()=>0,
                            write: (t, n, a, o, s)=>o
                        }), d.mkdev("/dev/null", d.makedev(1, 3)), we.register(d.makedev(5, 0), we.default_tty_ops), we.register(d.makedev(6, 0), we.default_tty1_ops), d.mkdev("/dev/tty", d.makedev(5, 0)), d.mkdev("/dev/tty1", d.makedev(6, 0));
                        var e = new Uint8Array(1024), r = 0, i = ()=>(r === 0 && (r = Di(e).byteLength), e[--r]);
                        d.createDevice("/dev", "random", i), d.createDevice("/dev", "urandom", i), d.mkdir("/dev/shm"), d.mkdir("/dev/shm/tmp");
                    },
                    createSpecialDirectories () {
                        d.mkdir("/proc");
                        var e = d.mkdir("/proc/self");
                        d.mkdir("/proc/self/fd"), d.mount({
                            mount () {
                                var r = d.createNode(e, "fd", 16895, 73);
                                return r.node_ops = {
                                    lookup (i, t) {
                                        var n = +t, a = d.getStreamChecked(n), o = {
                                            parent: null,
                                            mount: {
                                                mountpoint: "fake"
                                            },
                                            node_ops: {
                                                readlink: ()=>a.path
                                            }
                                        };
                                        return o.parent = o, o;
                                    }
                                }, r;
                            }
                        }, {}, "/proc/self/fd");
                    },
                    createStandardStreams () {
                        l.stdin ? d.createDevice("/dev", "stdin", l.stdin) : d.symlink("/dev/tty", "/dev/stdin"), l.stdout ? d.createDevice("/dev", "stdout", null, l.stdout) : d.symlink("/dev/tty", "/dev/stdout"), l.stderr ? d.createDevice("/dev", "stderr", null, l.stderr) : d.symlink("/dev/tty1", "/dev/stderr"), d.open("/dev/stdin", 0), d.open("/dev/stdout", 1), d.open("/dev/stderr", 1);
                    },
                    ensureErrnoError () {
                        d.ErrnoError || (d.ErrnoError = function(r, i) {
                            this.name = "ErrnoError", this.node = i, this.setErrno = function(t) {
                                this.errno = t;
                            }, this.setErrno(r), this.message = "FS error";
                        }, d.ErrnoError.prototype = new Error, d.ErrnoError.prototype.constructor = d.ErrnoError, [
                            44
                        ].forEach((e)=>{
                            d.genericErrors[e] = new d.ErrnoError(e), d.genericErrors[e].stack = "<generic error, no stack>";
                        }));
                    },
                    staticInit () {
                        d.ensureErrnoError(), d.nameTable = new Array(4096), d.mount(M, {}, "/"), d.createDefaultDirectories(), d.createDefaultDevices(), d.createSpecialDirectories(), d.filesystems = {
                            MEMFS: M
                        };
                    },
                    init (e, r, i) {
                        d.init.initialized = !0, d.ensureErrnoError(), l.stdin = e || l.stdin, l.stdout = r || l.stdout, l.stderr = i || l.stderr, d.createStandardStreams();
                    },
                    quit () {
                        d.init.initialized = !1;
                        for(var e = 0; e < d.streams.length; e++){
                            var r = d.streams[e];
                            r && d.close(r);
                        }
                    },
                    findObject (e, r) {
                        var i = d.analyzePath(e, r);
                        return i.exists ? i.object : null;
                    },
                    analyzePath (e, r) {
                        try {
                            var i = d.lookupPath(e, {
                                follow: !r
                            });
                            e = i.path;
                        } catch  {}
                        var t = {
                            isRoot: !1,
                            exists: !1,
                            error: 0,
                            name: null,
                            path: null,
                            object: null,
                            parentExists: !1,
                            parentPath: null,
                            parentObject: null
                        };
                        try {
                            var i = d.lookupPath(e, {
                                parent: !0
                            });
                            t.parentExists = !0, t.parentPath = i.path, t.parentObject = i.node, t.name = x.basename(e), i = d.lookupPath(e, {
                                follow: !r
                            }), t.exists = !0, t.path = i.path, t.object = i.node, t.name = i.node.name, t.isRoot = i.path === "/";
                        } catch (n) {
                            t.error = n.errno;
                        }
                        return t;
                    },
                    createPath (e, r, i, t) {
                        e = typeof e == "string" ? e : d.getPath(e);
                        for(var n = r.split("/").reverse(); n.length;){
                            var a = n.pop();
                            if (a) {
                                var o = x.join2(e, a);
                                try {
                                    d.mkdir(o);
                                } catch  {}
                                e = o;
                            }
                        }
                        return o;
                    },
                    createFile (e, r, i, t, n) {
                        var a = x.join2(typeof e == "string" ? e : d.getPath(e), r), o = Wr(t, n);
                        return d.create(a, o);
                    },
                    createDataFile (e, r, i, t, n, a) {
                        var o = r;
                        e && (e = typeof e == "string" ? e : d.getPath(e), o = r ? x.join2(e, r) : e);
                        var s = Wr(t, n), u = d.create(o, s);
                        if (i) {
                            if (typeof i == "string") {
                                for(var f = new Array(i.length), c = 0, _ = i.length; c < _; ++c)f[c] = i.charCodeAt(c);
                                i = f;
                            }
                            d.chmod(u, s | 146);
                            var h = d.open(u, 577);
                            d.write(h, i, 0, i.length, 0, a), d.close(h), d.chmod(u, s);
                        }
                        return u;
                    },
                    createDevice (e, r, i, t) {
                        var n = x.join2(typeof e == "string" ? e : d.getPath(e), r), a = Wr(!!i, !!t);
                        d.createDevice.major || (d.createDevice.major = 64);
                        var o = d.makedev(d.createDevice.major++, 0);
                        return d.registerDevice(o, {
                            open (s) {
                                s.seekable = !1;
                            },
                            close (s) {
                                t && t.buffer && t.buffer.length && t(10);
                            },
                            read (s, u, f, c, _) {
                                for(var h = 0, y = 0; y < c; y++){
                                    var C;
                                    try {
                                        C = i();
                                    } catch  {
                                        throw new d.ErrnoError(29);
                                    }
                                    if (C === void 0 && h === 0) throw new d.ErrnoError(6);
                                    if (C == null) break;
                                    h++, u[f + y] = C;
                                }
                                return h && (s.node.timestamp = Date.now()), h;
                            },
                            write (s, u, f, c, _) {
                                for(var h = 0; h < c; h++)try {
                                    t(u[f + h]);
                                } catch  {
                                    throw new d.ErrnoError(29);
                                }
                                return c && (s.node.timestamp = Date.now()), h;
                            }
                        }), d.mkdev(n, a, o);
                    },
                    forceLoadFile (e) {
                        if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                        if (typeof XMLHttpRequest < "u") throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                        if (Me) try {
                            e.contents = sr(Me(e.url), !0), e.usedBytes = e.contents.length;
                        } catch  {
                            throw new d.ErrnoError(29);
                        }
                        else throw new Error("Cannot load without read() or XMLHttpRequest.");
                    },
                    createLazyFile (e, r, i, t, n) {
                        function a() {
                            this.lengthKnown = !1, this.chunks = [];
                        }
                        if (a.prototype.get = function(y) {
                            if (!(y > this.length - 1 || y < 0)) {
                                var C = y % this.chunkSize, b = y / this.chunkSize | 0;
                                return this.getter(b)[C];
                            }
                        }, a.prototype.setDataGetter = function(y) {
                            this.getter = y;
                        }, a.prototype.cacheLength = function() {
                            var y = new XMLHttpRequest;
                            if (y.open("HEAD", i, !1), y.send(null), !(y.status >= 200 && y.status < 300 || y.status === 304)) throw new Error("Couldn't load " + i + ". Status: " + y.status);
                            var C = Number(y.getResponseHeader("Content-length")), b, S = (b = y.getResponseHeader("Accept-Ranges")) && b === "bytes", F = (b = y.getResponseHeader("Content-Encoding")) && b === "gzip", w = 1024 * 1024;
                            S || (w = C);
                            var E = (O, q)=>{
                                if (O > q) throw new Error("invalid range (" + O + ", " + q + ") or no bytes requested!");
                                if (q > C - 1) throw new Error("only " + C + " bytes available! programmer error!");
                                var B = new XMLHttpRequest;
                                if (B.open("GET", i, !1), C !== w && B.setRequestHeader("Range", "bytes=" + O + "-" + q), B.responseType = "arraybuffer", B.overrideMimeType && B.overrideMimeType("text/plain; charset=x-user-defined"), B.send(null), !(B.status >= 200 && B.status < 300 || B.status === 304)) throw new Error("Couldn't load " + i + ". Status: " + B.status);
                                return B.response !== void 0 ? new Uint8Array(B.response || []) : sr(B.responseText || "", !0);
                            }, U = this;
                            U.setDataGetter((O)=>{
                                var q = O * w, B = (O + 1) * w - 1;
                                if (B = Math.min(B, C - 1), typeof U.chunks[O] > "u" && (U.chunks[O] = E(q, B)), typeof U.chunks[O] > "u") throw new Error("doXHR failed!");
                                return U.chunks[O];
                            }), (F || !C) && (w = C = 1, C = this.getter(0).length, w = C, Tr("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = C, this._chunkSize = w, this.lengthKnown = !0;
                        }, typeof XMLHttpRequest < "u") {
                            if (!pe) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                            var o = new a;
                            Object.defineProperties(o, {
                                length: {
                                    get: function() {
                                        return this.lengthKnown || this.cacheLength(), this._length;
                                    }
                                },
                                chunkSize: {
                                    get: function() {
                                        return this.lengthKnown || this.cacheLength(), this._chunkSize;
                                    }
                                }
                            });
                            var s = {
                                isDevice: !1,
                                contents: o
                            };
                        } else var s = {
                            isDevice: !1,
                            url: i
                        };
                        var u = d.createFile(e, r, s, t, n);
                        s.contents ? u.contents = s.contents : s.url && (u.contents = null, u.url = s.url), Object.defineProperties(u, {
                            usedBytes: {
                                get: function() {
                                    return this.contents.length;
                                }
                            }
                        });
                        var f = {}, c = Object.keys(u.stream_ops);
                        c.forEach((h)=>{
                            var y = u.stream_ops[h];
                            f[h] = function() {
                                return d.forceLoadFile(u), y.apply(null, arguments);
                            };
                        });
                        function _(h, y, C, b, S) {
                            var F = h.node.contents;
                            if (S >= F.length) return 0;
                            var w = Math.min(F.length - S, b);
                            if (F.slice) for(var E = 0; E < w; E++)y[C + E] = F[S + E];
                            else for(var E = 0; E < w; E++)y[C + E] = F.get(S + E);
                            return w;
                        }
                        return f.read = (h, y, C, b, S)=>(d.forceLoadFile(u), _(h, y, C, b, S)), f.mmap = (h, y, C, b, S)=>{
                            d.forceLoadFile(u);
                            var F = $i(y);
                            if (!F) throw new d.ErrnoError(48);
                            return _(h, L(), F, y, C), {
                                ptr: F,
                                allocated: !0
                            };
                        }, u.stream_ops = f, u;
                    }
                }, he = (e, r)=>(e >>>= 0, e ? Fe(V(), e, r) : ""), A = {
                    DEFAULT_POLLMASK: 5,
                    calculateAt (e, r, i) {
                        if (x.isAbs(r)) return r;
                        var t;
                        if (e === -100) t = d.cwd();
                        else {
                            var n = A.getStreamFromFD(e);
                            t = n.path;
                        }
                        if (r.length == 0) {
                            if (!i) throw new d.ErrnoError(44);
                            return t;
                        }
                        return x.join2(t, r);
                    },
                    doStat (e, r, i) {
                        try {
                            var t = e(r);
                        } catch (s) {
                            if (s && s.node && x.normalize(r) !== x.normalize(d.getPath(s.node))) return -54;
                            throw s;
                        }
                        k()[i >>> 2 >>> 0] = t.dev, k()[i + 4 >>> 2 >>> 0] = t.mode, j()[i + 8 >>> 2 >>> 0] = t.nlink, k()[i + 12 >>> 2 >>> 0] = t.uid, k()[i + 16 >>> 2 >>> 0] = t.gid, k()[i + 20 >>> 2 >>> 0] = t.rdev, I = [
                            t.size >>> 0,
                            (P = t.size, +Math.abs(P) >= 1 ? P > 0 ? +Math.floor(P / 4294967296) >>> 0 : ~~+Math.ceil((P - +(~~P >>> 0)) / 4294967296) >>> 0 : 0)
                        ], k()[i + 24 >>> 2 >>> 0] = I[0], k()[i + 28 >>> 2 >>> 0] = I[1], k()[i + 32 >>> 2 >>> 0] = 4096, k()[i + 36 >>> 2 >>> 0] = t.blocks;
                        var n = t.atime.getTime(), a = t.mtime.getTime(), o = t.ctime.getTime();
                        return I = [
                            Math.floor(n / 1e3) >>> 0,
                            (P = Math.floor(n / 1e3), +Math.abs(P) >= 1 ? P > 0 ? +Math.floor(P / 4294967296) >>> 0 : ~~+Math.ceil((P - +(~~P >>> 0)) / 4294967296) >>> 0 : 0)
                        ], k()[i + 40 >>> 2 >>> 0] = I[0], k()[i + 44 >>> 2 >>> 0] = I[1], j()[i + 48 >>> 2 >>> 0] = n % 1e3 * 1e3, I = [
                            Math.floor(a / 1e3) >>> 0,
                            (P = Math.floor(a / 1e3), +Math.abs(P) >= 1 ? P > 0 ? +Math.floor(P / 4294967296) >>> 0 : ~~+Math.ceil((P - +(~~P >>> 0)) / 4294967296) >>> 0 : 0)
                        ], k()[i + 56 >>> 2 >>> 0] = I[0], k()[i + 60 >>> 2 >>> 0] = I[1], j()[i + 64 >>> 2 >>> 0] = a % 1e3 * 1e3, I = [
                            Math.floor(o / 1e3) >>> 0,
                            (P = Math.floor(o / 1e3), +Math.abs(P) >= 1 ? P > 0 ? +Math.floor(P / 4294967296) >>> 0 : ~~+Math.ceil((P - +(~~P >>> 0)) / 4294967296) >>> 0 : 0)
                        ], k()[i + 72 >>> 2 >>> 0] = I[0], k()[i + 76 >>> 2 >>> 0] = I[1], j()[i + 80 >>> 2 >>> 0] = o % 1e3 * 1e3, I = [
                            t.ino >>> 0,
                            (P = t.ino, +Math.abs(P) >= 1 ? P > 0 ? +Math.floor(P / 4294967296) >>> 0 : ~~+Math.ceil((P - +(~~P >>> 0)) / 4294967296) >>> 0 : 0)
                        ], k()[i + 88 >>> 2 >>> 0] = I[0], k()[i + 92 >>> 2 >>> 0] = I[1], 0;
                    },
                    doMsync (e, r, i, t, n) {
                        if (!d.isFile(r.node.mode)) throw new d.ErrnoError(43);
                        if (t & 2) return 0;
                        var a = V().slice(e, e + i);
                        d.msync(r, a, n, i, t);
                    },
                    varargs: void 0,
                    get () {
                        var e = k()[+A.varargs >>> 2 >>> 0];
                        return A.varargs += 4, e;
                    },
                    getp () {
                        return A.get();
                    },
                    getStr (e) {
                        var r = he(e);
                        return r;
                    },
                    getStreamFromFD (e) {
                        var r = d.getStreamChecked(e);
                        return r;
                    }
                };
                function Ir(e) {
                    if (T) return W(0, 1, e);
                    me = e, or() || ($.terminateAllThreads(), l.onExit && l.onExit(e), be = !0), rr(e, new $r(e));
                }
                var is = (e, r)=>{
                    if (me = e, T) throw Ri(e), "unwind";
                    Ir(e);
                }, lr = is, Mi = (e)=>{
                    if (e instanceof $r || e == "unwind") return me;
                    rr(1, e);
                }, $ = {
                    unusedWorkers: [],
                    runningWorkers: [],
                    tlsInitFunctions: [],
                    pthreads: {},
                    init () {
                        T ? $.initWorker() : $.initMainThread();
                    },
                    initMainThread () {
                        for(var e = 10; e--;)$.allocateUnusedWorker();
                        bi(()=>{
                            He(), $.loadWasmModuleToAllWorkers(()=>Se());
                        });
                    },
                    initWorker () {
                        Hr = !1;
                    },
                    setExitStatus: (e)=>{
                        me = e;
                    },
                    terminateAllThreads__deps: [
                        "$terminateWorker"
                    ],
                    terminateAllThreads: ()=>{
                        for (var e of $.runningWorkers)Mr(e);
                        for (var e of $.unusedWorkers)Mr(e);
                        $.unusedWorkers = [], $.runningWorkers = [], $.pthreads = [];
                    },
                    returnWorkerToPool: (e)=>{
                        var r = e.pthread_ptr;
                        delete $.pthreads[r], $.unusedWorkers.push(e), $.runningWorkers.splice($.runningWorkers.indexOf(e), 1), e.pthread_ptr = 0, ti(r);
                    },
                    receiveObjectTransfer (e) {},
                    threadInitTLS () {
                        $.tlsInitFunctions.forEach((e)=>e());
                    },
                    loadWasmModuleToWorker: (e)=>new Promise((r)=>{
                            e.onmessage = (a)=>{
                                var o = a.data, s = o.cmd;
                                if (o.targetThread && o.targetThread != Pr()) {
                                    var u = $.pthreads[o.targetThread];
                                    u ? u.postMessage(o, o.transferList) : K(`Internal error! Worker sent a message "${s}" to target pthread ${o.targetThread}, but that thread no longer exists!`);
                                    return;
                                }
                                if (s === "checkMailbox") Er();
                                else if (s === "spawnThread") ji(o);
                                else if (s === "cleanupThread") Ai(o.thread);
                                else if (s === "killThread") No(o.thread);
                                else if (s === "cancelThread") zo(o.thread);
                                else if (s === "loaded") e.loaded = !0, Z && !e.pthread_ptr && e.unref(), r(e);
                                else if (s === "alert") alert(`Thread ${o.threadId}: ${o.text}`);
                                else if (o.target === "setimmediate") e.postMessage(o);
                                else if (s === "callHandler") l[o.handler](...o.args);
                                else if (s === "callHandlerAsync") {
                                    const f = o.args;
                                    let c;
                                    const _ = l[o.handler];
                                    _ instanceof Function && (c = _(...f));
                                    const h = {
                                        ...f,
                                        cmd: "callHandlerAsyncResult",
                                        handler: o.handler,
                                        id: o.id
                                    };
                                    c instanceof Promise ? c.then((y)=>{
                                        h.result = y, e.postMessage(h);
                                    }) : (h.result = c, e.postMessage(h));
                                } else s && K(`worker sent an unknown command ${s}`);
                            }, e.onerror = (a)=>{
                                var o = "worker sent an error!";
                                throw K(`${o} ${a.filename}:${a.lineno}: ${a.message}`), a;
                            }, Z && (e.on("message", (a)=>e.onmessage({
                                    data: a
                                })), e.on("error", (a)=>e.onerror(a)));
                            var i = [], t = [
                                "onExit",
                                "onAbort",
                                "print",
                                "printErr"
                            ];
                            for (var n of t)l.hasOwnProperty(n) && i.push(n);
                            e.postMessage({
                                cmd: "load",
                                handlers: i,
                                urlOrBlob: l.mainScriptUrlOrBlob || X,
                                wasmMemory: z,
                                wasmModule: ci
                            });
                        }),
                    loadWasmModuleToAllWorkers (e) {
                        if (T) return e();
                        Promise.all($.unusedWorkers.map($.loadWasmModuleToWorker)).then(e);
                    },
                    allocateUnusedWorker () {
                        var e, r = di("emHdBindings.worker.js");
                        e = new Worker(r), $.unusedWorkers.push(e);
                    },
                    getNewWorker () {
                        return $.unusedWorkers.length == 0 && ($.allocateUnusedWorker(), $.loadWasmModuleToWorker($.unusedWorkers[0])), $.unusedWorkers.pop();
                    }
                };
                l.PThread = $;
                var xr = (e)=>{
                    for(; e.length > 0;)e.shift()(l);
                }, ts = ()=>{
                    var e = Pr(), r = j()[e + 52 >>> 2 >>> 0], i = j()[e + 56 >>> 2 >>> 0], t = r - i;
                    zt(r, t), p(r);
                };
                l.establishStackSpace = ts;
                function Ri(e) {
                    if (T) return W(1, 0, e);
                    lr(e);
                }
                var ns = (e, r)=>{
                    var i = ((n)=>oi.apply(null, [
                            e,
                            n
                        ]))(r);
                    function t(n) {
                        or() ? $.setExitStatus(n) : ni(n);
                    }
                    t(i);
                };
                l.invokeEntryPoint = ns;
                var Hr = l.noExitRuntime || !0, as = (e)=>{
                    $.tlsInitFunctions.push(e);
                }, Ue = (e, r)=>r + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + r * 4294967296 : NaN, os = function(e, r) {
                    return e >>>= 0, ((i)=>ai.apply(null, [
                            e,
                            i
                        ]))(r);
                }, Be = [], dr = 0;
                function ss(e) {
                    e >>>= 0;
                    var r = new Ve(e);
                    return r.get_caught() || (r.set_caught(!0), dr--), r.set_rethrown(!1), Be.push(r), qt(r.excPtr), r.get_exception_ptr();
                }
                var fe = 0, ls = ()=>{
                    m(0, 0);
                    var e = Be.pop();
                    Yt(e.excPtr), fe = 0;
                };
                function Ve(e) {
                    this.excPtr = e, this.ptr = e - 24, this.set_type = function(r) {
                        j()[this.ptr + 4 >>> 2 >>> 0] = r;
                    }, this.get_type = function() {
                        return j()[this.ptr + 4 >>> 2 >>> 0];
                    }, this.set_destructor = function(r) {
                        j()[this.ptr + 8 >>> 2 >>> 0] = r;
                    }, this.get_destructor = function() {
                        return j()[this.ptr + 8 >>> 2 >>> 0];
                    }, this.set_caught = function(r) {
                        r = r ? 1 : 0, L()[this.ptr + 12 >>> 0 >>> 0] = r;
                    }, this.get_caught = function() {
                        return L()[this.ptr + 12 >>> 0 >>> 0] != 0;
                    }, this.set_rethrown = function(r) {
                        r = r ? 1 : 0, L()[this.ptr + 13 >>> 0 >>> 0] = r;
                    }, this.get_rethrown = function() {
                        return L()[this.ptr + 13 >>> 0 >>> 0] != 0;
                    }, this.init = function(r, i) {
                        this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(i);
                    }, this.set_adjusted_ptr = function(r) {
                        j()[this.ptr + 16 >>> 2 >>> 0] = r;
                    }, this.get_adjusted_ptr = function() {
                        return j()[this.ptr + 16 >>> 2 >>> 0];
                    }, this.get_exception_ptr = function() {
                        var r = Kt(this.get_type());
                        if (r) return j()[this.excPtr >>> 2 >>> 0];
                        var i = this.get_adjusted_ptr();
                        return i !== 0 ? i : this.excPtr;
                    };
                }
                function ds(e) {
                    throw e >>>= 0, fe || (fe = e), fe;
                }
                var Lr = (e)=>{
                    var r = fe;
                    if (!r) return Ze(0), 0;
                    var i = new Ve(r);
                    i.set_adjusted_ptr(r);
                    var t = i.get_type();
                    if (!t) return Ze(0), r;
                    for(var n in e){
                        var a = e[n];
                        if (a === 0 || a === t) break;
                        var o = i.ptr + 16;
                        if (Xt(a, t, o)) return Ze(a), r;
                    }
                    return Ze(t), r;
                };
                function us() {
                    return Lr([]);
                }
                function fs(e) {
                    return e >>>= 0, Lr([
                        e
                    ]);
                }
                function cs(e, r) {
                    return e >>>= 0, r >>>= 0, Lr([
                        e,
                        r
                    ]);
                }
                function vs(e) {
                    e >>>= 0;
                    var r = new Ve(e).get_exception_ptr();
                    return r;
                }
                var Oi = ()=>{
                    var e = Be.pop();
                    e || de("no exception to throw");
                    var r = e.excPtr;
                    throw e.get_rethrown() || (Be.push(e), e.set_rethrown(!0), e.set_caught(!1), dr++), fe = r, fe;
                };
                function _s(e) {
                    if (e >>>= 0, !!e) {
                        var r = new Ve(e);
                        Be.push(r), r.set_rethrown(!0), Oi();
                    }
                }
                function hs(e, r, i) {
                    e >>>= 0, r >>>= 0, i >>>= 0;
                    var t = new Ve(e);
                    throw t.init(r, i), fe = e, dr++, fe;
                }
                var ys = ()=>dr;
                function ps(e) {
                    e >>>= 0, Ut(e, !pe, 1, !jr, 2097152, !1), $.threadInitTLS();
                }
                function ms(e) {
                    e >>>= 0, T ? postMessage({
                        cmd: "cleanupThread",
                        thread: e
                    }) : Ai(e);
                }
                function Wi(e, r, i, t) {
                    return T ? W(2, 1, e, r, i, t) : Ii(e, r, i, t);
                }
                function Ii(e, r, i, t) {
                    if (e >>>= 0, r >>>= 0, i >>>= 0, t >>>= 0, typeof SharedArrayBuffer > "u") return K("Current environment does not support SharedArrayBuffer, pthreads are not available!"), 6;
                    var n = [], a = 0;
                    if (T && (n.length === 0 || a)) return Wi(e, r, i, t);
                    var o = {
                        startRoutine: i,
                        pthread_ptr: e,
                        arg: t,
                        transferList: n
                    };
                    return T ? (o.cmd = "spawnThread", postMessage(o, n), 0) : ji(o);
                }
                function xi(e, r) {
                    if (T) return W(3, 1, e, r);
                    e >>>= 0;
                    try {
                        return e = A.getStr(e), d.chmod(e, r), 0;
                    } catch (i) {
                        if (typeof d > "u" || i.name !== "ErrnoError") throw i;
                        return -i.errno;
                    }
                }
                function Hi(e, r, i, t) {
                    if (T) return W(4, 1, e, r, i, t);
                    r >>>= 0;
                    try {
                        if (r = A.getStr(r), r = A.calculateAt(e, r), i & -8) return -28;
                        var n = d.lookupPath(r, {
                            follow: !0
                        }), a = n.node;
                        if (!a) return -44;
                        var o = "";
                        return i & 4 && (o += "r"), i & 2 && (o += "w"), i & 1 && (o += "x"), o && d.nodePermissions(a, o) ? -2 : 0;
                    } catch (s) {
                        if (typeof d > "u" || s.name !== "ErrnoError") throw s;
                        return -s.errno;
                    }
                }
                function Li(e, r, i, t) {
                    return T ? W(5, 0, e, r, i, t) : 0;
                }
                function Ui(e, r) {
                    if (T) return W(6, 1, e, r);
                    try {
                        return d.fchmod(e, r), 0;
                    } catch (i) {
                        if (typeof d > "u" || i.name !== "ErrnoError") throw i;
                        return -i.errno;
                    }
                }
                var gs = (e)=>(k()[xt() >>> 2 >>> 0] = e, e);
                function Bi(e, r, i) {
                    if (T) return W(7, 1, e, r, i);
                    i >>>= 0, A.varargs = i;
                    try {
                        var t = A.getStreamFromFD(e);
                        switch(r){
                            case 0:
                                {
                                    var n = A.get();
                                    if (n < 0) return -28;
                                    for(; d.streams[n];)n++;
                                    var a;
                                    return a = d.createStream(t, n), a.fd;
                                }
                            case 1:
                            case 2:
                                return 0;
                            case 3:
                                return t.flags;
                            case 4:
                                {
                                    var n = A.get();
                                    return t.flags |= n, 0;
                                }
                            case 5:
                                {
                                    var n = A.getp(), o = 0;
                                    return re()[n + o >>> 1 >>> 0] = 2, 0;
                                }
                            case 6:
                            case 7:
                                return 0;
                            case 16:
                            case 8:
                                return -28;
                            case 9:
                                return gs(28), -1;
                            default:
                                return -28;
                        }
                    } catch (s) {
                        if (typeof d > "u" || s.name !== "ErrnoError") throw s;
                        return -s.errno;
                    }
                }
                function Vi(e, r) {
                    if (T) return W(8, 1, e, r);
                    r >>>= 0;
                    try {
                        var i = A.getStreamFromFD(e);
                        return A.doStat(d.stat, i.path, r);
                    } catch (t) {
                        if (typeof d > "u" || t.name !== "ErrnoError") throw t;
                        return -t.errno;
                    }
                }
                var ur = (e, r, i)=>Or(e, V(), r, i);
                function Ni(e, r) {
                    if (T) return W(9, 1, e, r);
                    e >>>= 0, r >>>= 0;
                    try {
                        if (r === 0) return -28;
                        var i = d.cwd(), t = Le(i) + 1;
                        return r < t ? -68 : (ur(i, e, r), t);
                    } catch (n) {
                        if (typeof d > "u" || n.name !== "ErrnoError") throw n;
                        return -n.errno;
                    }
                }
                function zi(e, r, i) {
                    if (T) return W(10, 1, e, r, i);
                    r >>>= 0, i >>>= 0;
                    try {
                        var t = A.getStreamFromFD(e);
                        t.getdents || (t.getdents = d.readdir(t.path));
                        for(var n = 280, a = 0, o = d.llseek(t, 0, 1), s = Math.floor(o / n); s < t.getdents.length && a + n <= i;){
                            var u, f, c = t.getdents[s];
                            if (c === ".") u = t.node.id, f = 4;
                            else if (c === "..") {
                                var _ = d.lookupPath(t.path, {
                                    parent: !0
                                });
                                u = _.node.id, f = 4;
                            } else {
                                var h = d.lookupNode(t.node, c);
                                u = h.id, f = d.isChrdev(h.mode) ? 2 : d.isDir(h.mode) ? 4 : d.isLink(h.mode) ? 10 : 8;
                            }
                            I = [
                                u >>> 0,
                                (P = u, +Math.abs(P) >= 1 ? P > 0 ? +Math.floor(P / 4294967296) >>> 0 : ~~+Math.ceil((P - +(~~P >>> 0)) / 4294967296) >>> 0 : 0)
                            ], k()[r + a >>> 2 >>> 0] = I[0], k()[r + a + 4 >>> 2 >>> 0] = I[1], I = [
                                (s + 1) * n >>> 0,
                                (P = (s + 1) * n, +Math.abs(P) >= 1 ? P > 0 ? +Math.floor(P / 4294967296) >>> 0 : ~~+Math.ceil((P - +(~~P >>> 0)) / 4294967296) >>> 0 : 0)
                            ], k()[r + a + 8 >>> 2 >>> 0] = I[0], k()[r + a + 12 >>> 2 >>> 0] = I[1], re()[r + a + 16 >>> 1 >>> 0] = 280, L()[r + a + 18 >>> 0 >>> 0] = f, ur(c, r + a + 19, 256), a += n, s += 1;
                        }
                        return d.llseek(t, s * n, 0), a;
                    } catch (y) {
                        if (typeof d > "u" || y.name !== "ErrnoError") throw y;
                        return -y.errno;
                    }
                }
                function Gi(e, r, i) {
                    if (T) return W(11, 1, e, r, i);
                    i >>>= 0, A.varargs = i;
                    try {
                        var t = A.getStreamFromFD(e);
                        switch(r){
                            case 21509:
                                return t.tty ? 0 : -59;
                            case 21505:
                                {
                                    if (!t.tty) return -59;
                                    if (t.tty.ops.ioctl_tcgets) {
                                        var n = t.tty.ops.ioctl_tcgets(t), a = A.getp();
                                        k()[a >>> 2 >>> 0] = n.c_iflag || 0, k()[a + 4 >>> 2 >>> 0] = n.c_oflag || 0, k()[a + 8 >>> 2 >>> 0] = n.c_cflag || 0, k()[a + 12 >>> 2 >>> 0] = n.c_lflag || 0;
                                        for(var o = 0; o < 32; o++)L()[a + o + 17 >>> 0 >>> 0] = n.c_cc[o] || 0;
                                        return 0;
                                    }
                                    return 0;
                                }
                            case 21510:
                            case 21511:
                            case 21512:
                                return t.tty ? 0 : -59;
                            case 21506:
                            case 21507:
                            case 21508:
                                {
                                    if (!t.tty) return -59;
                                    if (t.tty.ops.ioctl_tcsets) {
                                        for(var a = A.getp(), s = k()[a >>> 2 >>> 0], u = k()[a + 4 >>> 2 >>> 0], f = k()[a + 8 >>> 2 >>> 0], c = k()[a + 12 >>> 2 >>> 0], _ = [], o = 0; o < 32; o++)_.push(L()[a + o + 17 >>> 0 >>> 0]);
                                        return t.tty.ops.ioctl_tcsets(t.tty, r, {
                                            c_iflag: s,
                                            c_oflag: u,
                                            c_cflag: f,
                                            c_lflag: c,
                                            c_cc: _
                                        });
                                    }
                                    return 0;
                                }
                            case 21519:
                                {
                                    if (!t.tty) return -59;
                                    var a = A.getp();
                                    return k()[a >>> 2 >>> 0] = 0, 0;
                                }
                            case 21520:
                                return t.tty ? -28 : -59;
                            case 21531:
                                {
                                    var a = A.getp();
                                    return d.ioctl(t, r, a);
                                }
                            case 21523:
                                {
                                    if (!t.tty) return -59;
                                    if (t.tty.ops.ioctl_tiocgwinsz) {
                                        var h = t.tty.ops.ioctl_tiocgwinsz(t.tty), a = A.getp();
                                        re()[a >>> 1 >>> 0] = h[0], re()[a + 2 >>> 1 >>> 0] = h[1];
                                    }
                                    return 0;
                                }
                            case 21524:
                                return t.tty ? 0 : -59;
                            case 21515:
                                return t.tty ? 0 : -59;
                            default:
                                return -28;
                        }
                    } catch (y) {
                        if (typeof d > "u" || y.name !== "ErrnoError") throw y;
                        return -y.errno;
                    }
                }
                function Yi(e, r) {
                    if (T) return W(12, 1, e, r);
                    e >>>= 0, r >>>= 0;
                    try {
                        return e = A.getStr(e), A.doStat(d.lstat, e, r);
                    } catch (i) {
                        if (typeof d > "u" || i.name !== "ErrnoError") throw i;
                        return -i.errno;
                    }
                }
                function qi(e, r, i) {
                    if (T) return W(13, 1, e, r, i);
                    r >>>= 0;
                    try {
                        return r = A.getStr(r), r = A.calculateAt(e, r), r = x.normalize(r), r[r.length - 1] === "/" && (r = r.substr(0, r.length - 1)), d.mkdir(r, i, 0), 0;
                    } catch (t) {
                        if (typeof d > "u" || t.name !== "ErrnoError") throw t;
                        return -t.errno;
                    }
                }
                function Xi(e, r, i, t) {
                    if (T) return W(14, 1, e, r, i, t);
                    r >>>= 0, i >>>= 0;
                    try {
                        r = A.getStr(r);
                        var n = t & 256, a = t & 4096;
                        return t = t & -6401, r = A.calculateAt(e, r, a), A.doStat(n ? d.lstat : d.stat, r, i);
                    } catch (o) {
                        if (typeof d > "u" || o.name !== "ErrnoError") throw o;
                        return -o.errno;
                    }
                }
                function Ki(e, r, i, t) {
                    if (T) return W(15, 1, e, r, i, t);
                    r >>>= 0, t >>>= 0, A.varargs = t;
                    try {
                        r = A.getStr(r), r = A.calculateAt(e, r);
                        var n = t ? A.get() : 0;
                        return d.open(r, i, n).fd;
                    } catch (a) {
                        if (typeof d > "u" || a.name !== "ErrnoError") throw a;
                        return -a.errno;
                    }
                }
                function Ji(e, r, i, t) {
                    if (T) return W(16, 1, e, r, i, t);
                    r >>>= 0, i >>>= 0, t >>>= 0;
                    try {
                        if (r = A.getStr(r), r = A.calculateAt(e, r), t <= 0) return -28;
                        var n = d.readlink(r), a = Math.min(t, Le(n)), o = L()[i + a >>> 0];
                        return ur(n, i, t + 1), L()[i + a >>> 0] = o, a;
                    } catch (s) {
                        if (typeof d > "u" || s.name !== "ErrnoError") throw s;
                        return -s.errno;
                    }
                }
                function Zi(e, r, i, t) {
                    if (T) return W(17, 1, e, r, i, t);
                    r >>>= 0, t >>>= 0;
                    try {
                        return r = A.getStr(r), t = A.getStr(t), r = A.calculateAt(e, r), t = A.calculateAt(i, t), d.rename(r, t), 0;
                    } catch (n) {
                        if (typeof d > "u" || n.name !== "ErrnoError") throw n;
                        return -n.errno;
                    }
                }
                function Qi(e, r) {
                    if (T) return W(18, 1, e, r);
                    e >>>= 0, r >>>= 0;
                    try {
                        return e = A.getStr(e), A.doStat(d.stat, e, r);
                    } catch (i) {
                        if (typeof d > "u" || i.name !== "ErrnoError") throw i;
                        return -i.errno;
                    }
                }
                function et(e, r, i) {
                    if (T) return W(19, 1, e, r, i);
                    r >>>= 0;
                    try {
                        return r = A.getStr(r), r = A.calculateAt(e, r), i === 0 ? d.unlink(r) : i === 512 ? d.rmdir(r) : de("Invalid flags passed to unlinkat"), 0;
                    } catch (t) {
                        if (typeof d > "u" || t.name !== "ErrnoError") throw t;
                        return -t.errno;
                    }
                }
                function ws(e, r, i, t, n) {}
                var Cs = ()=>{
                    for(var e = new Array(256), r = 0; r < 256; ++r)e[r] = String.fromCharCode(r);
                    rt = e;
                }, rt, N = (e)=>{
                    for(var r = "", i = e; V()[i >>> 0];)r += rt[V()[i++ >>> 0]];
                    return r;
                }, Ae = {}, Ce = {}, fr = {}, je, R = (e)=>{
                    throw new je(e);
                }, it, cr = (e)=>{
                    throw new it(e);
                }, ee = (e, r, i)=>{
                    e.forEach(function(s) {
                        fr[s] = r;
                    });
                    function t(s) {
                        var u = i(s);
                        u.length !== e.length && cr("Mismatched type converter count");
                        for(var f = 0; f < e.length; ++f)se(e[f], u[f]);
                    }
                    var n = new Array(r.length), a = [], o = 0;
                    r.forEach((s, u)=>{
                        Ce.hasOwnProperty(s) ? n[u] = Ce[s] : (a.push(s), Ae.hasOwnProperty(s) || (Ae[s] = []), Ae[s].push(()=>{
                            n[u] = Ce[s], ++o, o === a.length && t(n);
                        }));
                    }), a.length === 0 && t(n);
                };
                function Es(e, r, i = {}) {
                    var t = r.name;
                    if (e || R(`type "${t}" must have a positive integer typeid pointer`), Ce.hasOwnProperty(e)) {
                        if (i.ignoreDuplicateRegistrations) return;
                        R(`Cannot register type '${t}' twice`);
                    }
                    if (Ce[e] = r, delete fr[e], Ae.hasOwnProperty(e)) {
                        var n = Ae[e];
                        delete Ae[e], n.forEach((a)=>a());
                    }
                }
                function se(e, r, i = {}) {
                    if (!("argPackAdvance" in r)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                    return Es(e, r, i);
                }
                var ce = 8;
                function ks(e, r, i, t) {
                    e >>>= 0, r >>>= 0, r = N(r), se(e, {
                        name: r,
                        fromWireType: function(n) {
                            return !!n;
                        },
                        toWireType: function(n, a) {
                            return a ? i : t;
                        },
                        argPackAdvance: ce,
                        readValueFromPointer: function(n) {
                            return this.fromWireType(V()[n >>> 0]);
                        },
                        destructorFunction: null
                    });
                }
                var bs = (e)=>({
                        count: e.count,
                        deleteScheduled: e.deleteScheduled,
                        preservePointerOnDelete: e.preservePointerOnDelete,
                        ptr: e.ptr,
                        ptrType: e.ptrType,
                        smartPtr: e.smartPtr,
                        smartPtrType: e.smartPtrType
                    }), Ur = (e)=>{
                    function r(i) {
                        return i.$$.ptrType.registeredClass.name;
                    }
                    R(r(e) + " instance already deleted");
                }, Br = !1, tt = (e)=>{}, Ss = (e)=>{
                    e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
                }, nt = (e)=>{
                    e.count.value -= 1;
                    var r = e.count.value === 0;
                    r && Ss(e);
                }, at = (e, r, i)=>{
                    if (r === i) return e;
                    if (i.baseClass === void 0) return null;
                    var t = at(e, r, i.baseClass);
                    return t === null ? null : i.downcast(t);
                }, ot = {}, Ps = ()=>Object.keys(Ge).length, Fs = ()=>{
                    var e = [];
                    for(var r in Ge)Ge.hasOwnProperty(r) && e.push(Ge[r]);
                    return e;
                }, Ne = [], Vr = ()=>{
                    for(; Ne.length;){
                        var e = Ne.pop();
                        e.$$.deleteScheduled = !1, e.delete();
                    }
                }, ze, As = (e)=>{
                    ze = e, Ne.length && ze && ze(Vr);
                }, js = ()=>{
                    l.getInheritedInstanceCount = Ps, l.getLiveInheritedInstances = Fs, l.flushPendingDeletes = Vr, l.setDelayFunction = As;
                }, Ge = {}, Ds = (e, r)=>{
                    for(r === void 0 && R("ptr should not be undefined"); e.baseClass;)r = e.upcast(r), e = e.baseClass;
                    return r;
                }, Ts = (e, r)=>(r = Ds(e, r), Ge[r]), vr = (e, r)=>{
                    (!r.ptrType || !r.ptr) && cr("makeClassHandle requires ptr and ptrType");
                    var i = !!r.smartPtrType, t = !!r.smartPtr;
                    return i !== t && cr("Both smartPtrType and smartPtr must be specified"), r.count = {
                        value: 1
                    }, Ye(Object.create(e, {
                        $$: {
                            value: r
                        }
                    }));
                };
                function $s(e) {
                    var r = this.getPointee(e);
                    if (!r) return this.destructor(e), null;
                    var i = Ts(this.registeredClass, r);
                    if (i !== void 0) {
                        if (i.$$.count.value === 0) return i.$$.ptr = r, i.$$.smartPtr = e, i.clone();
                        var t = i.clone();
                        return this.destructor(e), t;
                    }
                    function n() {
                        return this.isSmartPointer ? vr(this.registeredClass.instancePrototype, {
                            ptrType: this.pointeeType,
                            ptr: r,
                            smartPtrType: this,
                            smartPtr: e
                        }) : vr(this.registeredClass.instancePrototype, {
                            ptrType: this,
                            ptr: e
                        });
                    }
                    var a = this.registeredClass.getActualType(r), o = ot[a];
                    if (!o) return n.call(this);
                    var s;
                    this.isConst ? s = o.constPointerType : s = o.pointerType;
                    var u = at(r, this.registeredClass, s.registeredClass);
                    return u === null ? n.call(this) : this.isSmartPointer ? vr(s.registeredClass.instancePrototype, {
                        ptrType: s,
                        ptr: u,
                        smartPtrType: this,
                        smartPtr: e
                    }) : vr(s.registeredClass.instancePrototype, {
                        ptrType: s,
                        ptr: u
                    });
                }
                var Ye = (e)=>typeof FinalizationRegistry > "u" ? (Ye = (r)=>r, e) : (Br = new FinalizationRegistry((r)=>{
                        nt(r.$$);
                    }), Ye = (r)=>{
                        var i = r.$$, t = !!i.smartPtr;
                        if (t) {
                            var n = {
                                $$: i
                            };
                            Br.register(r, n, r);
                        }
                        return r;
                    }, tt = (r)=>Br.unregister(r), Ye(e)), Ms = ()=>{
                    Object.assign(_r.prototype, {
                        isAliasOf (e) {
                            if (!(this instanceof _r) || !(e instanceof _r)) return !1;
                            var r = this.$$.ptrType.registeredClass, i = this.$$.ptr;
                            e.$$ = e.$$;
                            for(var t = e.$$.ptrType.registeredClass, n = e.$$.ptr; r.baseClass;)i = r.upcast(i), r = r.baseClass;
                            for(; t.baseClass;)n = t.upcast(n), t = t.baseClass;
                            return r === t && i === n;
                        },
                        clone () {
                            if (this.$$.ptr || Ur(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
                            var e = Ye(Object.create(Object.getPrototypeOf(this), {
                                $$: {
                                    value: bs(this.$$)
                                }
                            }));
                            return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e;
                        },
                        delete () {
                            this.$$.ptr || Ur(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && R("Object already scheduled for deletion"), tt(this), nt(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
                        },
                        isDeleted () {
                            return !this.$$.ptr;
                        },
                        deleteLater () {
                            return this.$$.ptr || Ur(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && R("Object already scheduled for deletion"), Ne.push(this), Ne.length === 1 && ze && ze(Vr), this.$$.deleteScheduled = !0, this;
                        }
                    });
                };
                function _r() {}
                var Rs = 48, Os = 57, hr = (e)=>{
                    if (e === void 0) return "_unknown";
                    e = e.replace(/[^a-zA-Z0-9_]/g, "$");
                    var r = e.charCodeAt(0);
                    return r >= Rs && r <= Os ? `_${e}` : e;
                };
                function yr(e, r) {
                    return e = hr(e), {
                        [e]: function() {
                            return r.apply(this, arguments);
                        }
                    }[e];
                }
                var Nr = (e, r, i)=>{
                    if (e[r].overloadTable === void 0) {
                        var t = e[r];
                        e[r] = function() {
                            return e[r].overloadTable.hasOwnProperty(arguments.length) || R(`Function '${i}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[r].overloadTable})!`), e[r].overloadTable[arguments.length].apply(this, arguments);
                        }, e[r].overloadTable = [], e[r].overloadTable[t.argCount] = t;
                    }
                }, zr = (e, r, i)=>{
                    l.hasOwnProperty(e) ? ((i === void 0 || l[e].overloadTable !== void 0 && l[e].overloadTable[i] !== void 0) && R(`Cannot register public name '${e}' twice`), Nr(l, e, e), l.hasOwnProperty(i) && R(`Cannot register multiple overloads of a function with the same number of arguments (${i})!`), l[e].overloadTable[i] = r) : (l[e] = r, i !== void 0 && (l[e].numArguments = i));
                };
                function Ws(e, r, i, t, n, a, o, s) {
                    this.name = e, this.constructor = r, this.instancePrototype = i, this.rawDestructor = t, this.baseClass = n, this.getActualType = a, this.upcast = o, this.downcast = s, this.pureVirtualFunctions = [];
                }
                var pr = (e, r, i)=>{
                    for(; r !== i;)r.upcast || R(`Expected null or instance of ${i.name}, got an instance of ${r.name}`), e = r.upcast(e), r = r.baseClass;
                    return e;
                };
                function Is(e, r) {
                    if (r === null) return this.isReference && R(`null is not a valid ${this.name}`), 0;
                    r.$$ || R(`Cannot pass "${Xr(r)}" as a ${this.name}`), r.$$.ptr || R(`Cannot pass deleted object as a pointer of type ${this.name}`);
                    var i = r.$$.ptrType.registeredClass, t = pr(r.$$.ptr, i, this.registeredClass);
                    return t;
                }
                function xs(e, r) {
                    var i;
                    if (r === null) return this.isReference && R(`null is not a valid ${this.name}`), this.isSmartPointer ? (i = this.rawConstructor(), e !== null && e.push(this.rawDestructor, i), i) : 0;
                    r.$$ || R(`Cannot pass "${Xr(r)}" as a ${this.name}`), r.$$.ptr || R(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && r.$$.ptrType.isConst && R(`Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`);
                    var t = r.$$.ptrType.registeredClass;
                    if (i = pr(r.$$.ptr, t, this.registeredClass), this.isSmartPointer) switch(r.$$.smartPtr === void 0 && R("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy){
                        case 0:
                            r.$$.smartPtrType === this ? i = r.$$.smartPtr : R(`Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`);
                            break;
                        case 1:
                            i = r.$$.smartPtr;
                            break;
                        case 2:
                            if (r.$$.smartPtrType === this) i = r.$$.smartPtr;
                            else {
                                var n = r.clone();
                                i = this.rawShare(i, H.toHandle(()=>n.delete())), e !== null && e.push(this.rawDestructor, i);
                            }
                            break;
                        default:
                            R("Unsupporting sharing policy");
                    }
                    return i;
                }
                function Hs(e, r) {
                    if (r === null) return this.isReference && R(`null is not a valid ${this.name}`), 0;
                    r.$$ || R(`Cannot pass "${Xr(r)}" as a ${this.name}`), r.$$.ptr || R(`Cannot pass deleted object as a pointer of type ${this.name}`), r.$$.ptrType.isConst && R(`Cannot convert argument of type ${r.$$.ptrType.name} to parameter type ${this.name}`);
                    var i = r.$$.ptrType.registeredClass, t = pr(r.$$.ptr, i, this.registeredClass);
                    return t;
                }
                function st(e) {
                    return this.fromWireType(j()[e >>> 2 >>> 0]);
                }
                var Ls = ()=>{
                    Object.assign(qe.prototype, {
                        getPointee (e) {
                            return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
                        },
                        destructor (e) {
                            this.rawDestructor && this.rawDestructor(e);
                        },
                        argPackAdvance: ce,
                        readValueFromPointer: st,
                        deleteObject (e) {
                            e !== null && e.delete();
                        },
                        fromWireType: $s
                    });
                };
                function qe(e, r, i, t, n, a, o, s, u, f, c) {
                    this.name = e, this.registeredClass = r, this.isReference = i, this.isConst = t, this.isSmartPointer = n, this.pointeeType = a, this.sharingPolicy = o, this.rawGetPointee = s, this.rawConstructor = u, this.rawShare = f, this.rawDestructor = c, !n && r.baseClass === void 0 ? t ? (this.toWireType = Is, this.destructorFunction = null) : (this.toWireType = Hs, this.destructorFunction = null) : this.toWireType = xs;
                }
                var lt = (e, r, i)=>{
                    l.hasOwnProperty(e) || cr("Replacing nonexistant public symbol"), l[e].overloadTable !== void 0 && i !== void 0 ? l[e].overloadTable[i] = r : (l[e] = r, l[e].argCount = i);
                }, Us = (e, r, i)=>{
                    var t = l["dynCall_" + e];
                    return i && i.length ? t.apply(null, [
                        r
                    ].concat(i)) : t.call(null, r);
                }, Bs = (e, r, i)=>{
                    var t = Us(e, r, i);
                    return t;
                }, Vs = (e, r)=>{
                    var i = [];
                    return function() {
                        return i.length = 0, Object.assign(i, arguments), Bs(e, r, i);
                    };
                }, Y = (e, r)=>{
                    e = N(e);
                    function i() {
                        return Vs(e, r);
                    }
                    var t = i();
                    return typeof t != "function" && R(`unknown function pointer with signature ${e}: ${r}`), t;
                }, Ns = (e, r)=>{
                    var i = yr(r, function(t) {
                        this.name = r, this.message = t;
                        var n = new Error(t).stack;
                        n !== void 0 && (this.stack = this.toString() + `
` + n.replace(/^Error(:[^\n]*)?\n/, ""));
                    });
                    return i.prototype = Object.create(e.prototype), i.prototype.constructor = i, i.prototype.toString = function() {
                        return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
                    }, i;
                }, dt, ut = (e)=>{
                    var r = Lt(e), i = N(r);
                    return le(r), i;
                }, ve = (e, r)=>{
                    var i = [], t = {};
                    function n(a) {
                        if (!t[a] && !Ce[a]) {
                            if (fr[a]) {
                                fr[a].forEach(n);
                                return;
                            }
                            i.push(a), t[a] = !0;
                        }
                    }
                    throw r.forEach(n), new dt(`${e}: ` + i.map(ut).join([
                        ", "
                    ]));
                };
                function zs(e, r, i, t, n, a, o, s, u, f, c, _, h) {
                    e >>>= 0, r >>>= 0, i >>>= 0, t >>>= 0, n >>>= 0, a >>>= 0, o >>>= 0, s >>>= 0, u >>>= 0, f >>>= 0, c >>>= 0, _ >>>= 0, h >>>= 0, c = N(c), a = Y(n, a), s && (s = Y(o, s)), f && (f = Y(u, f)), h = Y(_, h);
                    var y = hr(c);
                    zr(y, function() {
                        ve(`Cannot construct ${c} due to unbound types`, [
                            t
                        ]);
                    }), ee([
                        e,
                        r,
                        i
                    ], t ? [
                        t
                    ] : [], function(C) {
                        C = C[0];
                        var b, S;
                        t ? (b = C.registeredClass, S = b.instancePrototype) : S = _r.prototype;
                        var F = yr(y, function() {
                            if (Object.getPrototypeOf(this) !== w) throw new je("Use 'new' to construct " + c);
                            if (E.constructor_body === void 0) throw new je(c + " has no accessible constructor");
                            var B = E.constructor_body[arguments.length];
                            if (B === void 0) throw new je(`Tried to invoke ctor of ${c} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(E.constructor_body).toString()}) parameters instead!`);
                            return B.apply(this, arguments);
                        }), w = Object.create(S, {
                            constructor: {
                                value: F
                            }
                        });
                        F.prototype = w;
                        var E = new Ws(c, F, w, h, b, a, s, f);
                        E.baseClass && (E.baseClass.__derivedClasses === void 0 && (E.baseClass.__derivedClasses = []), E.baseClass.__derivedClasses.push(E));
                        var U = new qe(c, E, !0, !1, !1), O = new qe(c + "*", E, !1, !1, !1), q = new qe(c + " const*", E, !1, !0, !1);
                        return ot[e] = {
                            pointerType: O,
                            constPointerType: q
                        }, lt(y, F), [
                            U,
                            O,
                            q
                        ];
                    });
                }
                var mr = (e)=>{
                    for(; e.length;){
                        var r = e.pop(), i = e.pop();
                        i(r);
                    }
                };
                function ft(e, r) {
                    if (!(e instanceof Function)) throw new TypeError(`new_ called with constructor type ${typeof e} which is not a function`);
                    var i = yr(e.name || "unknownFunctionName", function() {});
                    i.prototype = e.prototype;
                    var t = new i, n = e.apply(t, r);
                    return n instanceof Object ? n : t;
                }
                var gr = (e)=>{
                    try {
                        return e();
                    } catch (r) {
                        de(r);
                    }
                }, Gs = ()=>{
                    if (!or()) try {
                        T ? ni(me) : lr(me);
                    } catch (e) {
                        Mi(e);
                    }
                }, Gr = (e)=>{
                    if (!be) try {
                        e(), Gs();
                    } catch (r) {
                        Mi(r);
                    }
                }, ct = ()=>{
                    ar += 1;
                }, Ys = ()=>{
                    ar -= 1;
                }, D = {
                    instrumentWasmImports (e) {
                        var r = /^(invoke_.*|__asyncjs__.*)$/;
                        for(var i in e)(function(t) {
                            var n = e[t];
                            n.sig, typeof n == "function" && (n.isAsync || r.test(t));
                        })(i);
                    },
                    instrumentWasmExports (e) {
                        var r = {};
                        for(var i in e)(function(t) {
                            var n = e[t];
                            typeof n == "function" ? r[t] = function() {
                                D.exportCallStack.push(t);
                                try {
                                    return n.apply(null, arguments);
                                } finally{
                                    if (!be) {
                                        var a = D.exportCallStack.pop();
                                        Ie(a === t), D.maybeStopUnwind();
                                    }
                                }
                            } : r[t] = n;
                        })(i);
                        return r;
                    },
                    State: {
                        Normal: 0,
                        Unwinding: 1,
                        Rewinding: 2,
                        Disabled: 3
                    },
                    state: 0,
                    StackSize: 4096,
                    currData: null,
                    handleSleepReturnValue: 0,
                    exportCallStack: [],
                    callStackNameToId: {},
                    callStackIdToName: {},
                    callStackId: 0,
                    asyncPromiseHandlers: null,
                    sleepCallbacks: [],
                    getCallStackId (e) {
                        var r = D.callStackNameToId[e];
                        return r === void 0 && (r = D.callStackId++, D.callStackNameToId[e] = r, D.callStackIdToName[r] = e), r;
                    },
                    maybeStopUnwind () {
                        D.currData && D.state === D.State.Unwinding && D.exportCallStack.length === 0 && (D.state = D.State.Normal, ct(), gr(Ao), typeof Fibers < "u" && Fibers.trampoline());
                    },
                    whenDone () {
                        return new Promise((e, r)=>{
                            D.asyncPromiseHandlers = {
                                resolve: e,
                                reject: r
                            };
                        });
                    },
                    allocateData () {
                        var e = Je(12 + D.StackSize);
                        return D.setDataHeader(e, e + 12, D.StackSize), D.setDataRewindFunc(e), e;
                    },
                    setDataHeader (e, r, i) {
                        j()[e >>> 2 >>> 0] = r, j()[e + 4 >>> 2 >>> 0] = r + i;
                    },
                    setDataRewindFunc (e) {
                        var r = D.exportCallStack[0], i = D.getCallStackId(r);
                        k()[e + 8 >>> 2 >>> 0] = i;
                    },
                    getDataRewindFunc (e) {
                        var r = k()[e + 8 >>> 2 >>> 0], i = D.callStackIdToName[r], t = v[i];
                        return t;
                    },
                    doRewind (e) {
                        var r = D.getDataRewindFunc(e);
                        return Ys(), r();
                    },
                    handleSleep (e) {
                        if (!be) {
                            if (D.state === D.State.Normal) {
                                var r = !1, i = !1;
                                e((t = 0)=>{
                                    if (!be && (D.handleSleepReturnValue = t, r = !0, !!i)) {
                                        D.state = D.State.Rewinding, gr(()=>jo(D.currData)), typeof Browser < "u" && Browser.mainLoop.func && Browser.mainLoop.resume();
                                        var n, a = !1;
                                        try {
                                            n = D.doRewind(D.currData);
                                        } catch (u) {
                                            n = u, a = !0;
                                        }
                                        var o = !1;
                                        if (!D.currData) {
                                            var s = D.asyncPromiseHandlers;
                                            s && (D.asyncPromiseHandlers = null, (a ? s.reject : s.resolve)(n), o = !0);
                                        }
                                        if (a && !o) throw n;
                                    }
                                }), i = !0, r || (D.state = D.State.Unwinding, D.currData = D.allocateData(), typeof Browser < "u" && Browser.mainLoop.func && Browser.mainLoop.pause(), gr(()=>Fo(D.currData)));
                            } else D.state === D.State.Rewinding ? (D.state = D.State.Normal, gr(Do), le(D.currData), D.currData = null, D.sleepCallbacks.forEach((t)=>Gr(t))) : de(`invalid state: ${D.state}`);
                            return D.handleSleepReturnValue;
                        }
                    },
                    handleAsync (e) {
                        return D.handleSleep((r)=>{
                            e().then(r);
                        });
                    }
                };
                function wr(e, r, i, t, n, a) {
                    var o = r.length;
                    o < 2 && R("argTypes array size mismatch! Must at least get return value and 'this' types!");
                    for(var s = r[1] !== null && i !== null, u = !1, f = 1; f < r.length; ++f)if (r[f] !== null && r[f].destructorFunction === void 0) {
                        u = !0;
                        break;
                    }
                    for(var c = r[0].name !== "void", _ = "", h = "", f = 0; f < o - 2; ++f)_ += (f !== 0 ? ", " : "") + "arg" + f, h += (f !== 0 ? ", " : "") + "arg" + f + "Wired";
                    var y = `
        return function ${hr(e)}(${_}) {
        if (arguments.length !== ${o - 2}) {
          throwBindingError('function ${e} called with ' + arguments.length + ' arguments, expected ${o - 2}');
        }`;
                    u && (y += `var destructors = [];
`);
                    var C = u ? "destructors" : "null", b = [
                        "throwBindingError",
                        "invoker",
                        "fn",
                        "runDestructors",
                        "retType",
                        "classParam"
                    ], S = [
                        R,
                        t,
                        n,
                        mr,
                        r[0],
                        r[1]
                    ];
                    s && (y += "var thisWired = classParam.toWireType(" + C + `, this);
`);
                    for(var f = 0; f < o - 2; ++f)y += "var arg" + f + "Wired = argType" + f + ".toWireType(" + C + ", arg" + f + "); // " + r[f + 2].name + `
`, b.push("argType" + f), S.push(r[f + 2]);
                    if (s && (h = "thisWired" + (h.length > 0 ? ", " : "") + h), y += (c || a ? "var rv = " : "") + "invoker(fn" + (h.length > 0 ? ", " : "") + h + `);
`, b.push("Asyncify"), S.push(D), y += "function onDone(" + (c ? "rv" : "") + `) {
`, u) y += `runDestructors(destructors);
`;
                    else for(var f = s ? 1 : 2; f < r.length; ++f){
                        var F = f === 1 ? "thisWired" : "arg" + (f - 2) + "Wired";
                        r[f].destructorFunction !== null && (y += F + "_dtor(" + F + "); // " + r[f].name + `
`, b.push(F + "_dtor"), S.push(r[f].destructorFunction));
                    }
                    return c && (y += `var ret = retType.fromWireType(rv);
return ret;
`), y += `}
`, y += "return Asyncify.currData ? Asyncify.whenDone().then(onDone) : onDone(" + (c ? "rv" : "") + `);
`, y += `}
`, b.push(y), ft(Function, b).apply(null, S);
                }
                var Cr = (e, r)=>{
                    for(var i = [], t = 0; t < e; t++)i.push(j()[r + t * 4 >>> 2 >>> 0]);
                    return i;
                }, Yr = (e)=>{
                    e = e.trim();
                    const r = e.indexOf("(");
                    return r !== -1 ? (Ie(e[e.length - 1] == ")", "Parentheses for argument names should match."), e.substr(0, r)) : e;
                };
                function qs(e, r, i, t, n, a, o, s) {
                    e >>>= 0, r >>>= 0, t >>>= 0, n >>>= 0, a >>>= 0, o >>>= 0;
                    var u = Cr(i, t);
                    r = N(r), r = Yr(r), a = Y(n, a), ee([], [
                        e
                    ], function(f) {
                        f = f[0];
                        var c = `${f.name}.${r}`;
                        function _() {
                            ve(`Cannot call ${c} due to unbound types`, u);
                        }
                        r.startsWith("@@") && (r = Symbol[r.substring(2)]);
                        var h = f.registeredClass.constructor;
                        return h[r] === void 0 ? (_.argCount = i - 1, h[r] = _) : (Nr(h, r, c), h[r].overloadTable[i - 1] = _), ee([], u, function(y) {
                            var C = [
                                y[0],
                                null
                            ].concat(y.slice(1)), b = wr(c, C, null, a, o, s);
                            if (h[r].overloadTable === void 0 ? (b.argCount = i - 1, h[r] = b) : h[r].overloadTable[i - 1] = b, f.registeredClass.__derivedClasses) for (const S of f.registeredClass.__derivedClasses)S.constructor.hasOwnProperty(r) || (S.constructor[r] = b);
                            return [];
                        }), [];
                    });
                }
                var vt = (e, r, i)=>(e instanceof Object || R(`${i} with invalid "this": ${e}`), e instanceof r.registeredClass.constructor || R(`${i} incompatible with "this" of type ${e.constructor.name}`), e.$$.ptr || R(`cannot call emscripten binding method ${i} on deleted object`), pr(e.$$.ptr, e.$$.ptrType.registeredClass, r.registeredClass));
                function Xs(e, r, i, t, n, a, o, s) {
                    e >>>= 0, r >>>= 0, i >>>= 0, t >>>= 0, n >>>= 0, a >>>= 0, o >>>= 0, s >>>= 0, r = N(r), a = Y(n, a), ee([], [
                        e
                    ], function(u) {
                        u = u[0];
                        var f = `${u.name}.${r}`, c = {
                            get () {
                                ve(`Cannot access ${f} due to unbound types`, [
                                    i
                                ]);
                            },
                            enumerable: !0,
                            configurable: !0
                        };
                        return s ? c.set = ()=>{
                            ve(`Cannot access ${f} due to unbound types`, [
                                i
                            ]);
                        } : c.set = (_)=>{
                            R(`${f} is a read-only property`);
                        }, Object.defineProperty(u.registeredClass.constructor, r, c), ee([], [
                            i
                        ], function(_) {
                            _ = _[0];
                            var h = {
                                get () {
                                    return _.fromWireType(a(t));
                                },
                                enumerable: !0
                            };
                            return s && (s = Y(o, s), h.set = (y)=>{
                                var C = [];
                                s(t, _.toWireType(C, y)), mr(C);
                            }), Object.defineProperty(u.registeredClass.constructor, r, h), [];
                        }), [];
                    });
                }
                function Ks(e, r, i, t, n, a) {
                    e >>>= 0, i >>>= 0, t >>>= 0, n >>>= 0, a >>>= 0;
                    var o = Cr(r, i);
                    n = Y(t, n), ee([], [
                        e
                    ], function(s) {
                        s = s[0];
                        var u = `constructor ${s.name}`;
                        if (s.registeredClass.constructor_body === void 0 && (s.registeredClass.constructor_body = []), s.registeredClass.constructor_body[r - 1] !== void 0) throw new je(`Cannot register multiple constructors with identical number of parameters (${r - 1}) for class '${s.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                        return s.registeredClass.constructor_body[r - 1] = ()=>{
                            ve(`Cannot construct ${s.name} due to unbound types`, o);
                        }, ee([], o, (f)=>(f.splice(1, 0, null), s.registeredClass.constructor_body[r - 1] = wr(u, f, null, n, a), [])), [];
                    });
                }
                function Js(e, r, i, t, n, a, o, s, u) {
                    e >>>= 0, r >>>= 0, t >>>= 0, n >>>= 0, a >>>= 0, o >>>= 0;
                    var f = Cr(i, t);
                    r = N(r), r = Yr(r), a = Y(n, a), ee([], [
                        e
                    ], function(c) {
                        c = c[0];
                        var _ = `${c.name}.${r}`;
                        r.startsWith("@@") && (r = Symbol[r.substring(2)]), s && c.registeredClass.pureVirtualFunctions.push(r);
                        function h() {
                            ve(`Cannot call ${_} due to unbound types`, f);
                        }
                        var y = c.registeredClass.instancePrototype, C = y[r];
                        return C === void 0 || C.overloadTable === void 0 && C.className !== c.name && C.argCount === i - 2 ? (h.argCount = i - 2, h.className = c.name, y[r] = h) : (Nr(y, r, _), y[r].overloadTable[i - 2] = h), ee([], f, function(b) {
                            var S = wr(_, b, c, a, o, u);
                            return y[r].overloadTable === void 0 ? (S.argCount = i - 2, y[r] = S) : y[r].overloadTable[i - 2] = S, [];
                        }), [];
                    });
                }
                function Zs(e, r, i, t, n, a, o, s, u, f) {
                    e >>>= 0, r >>>= 0, i >>>= 0, t >>>= 0, n >>>= 0, a >>>= 0, o >>>= 0, s >>>= 0, u >>>= 0, f >>>= 0, r = N(r), n = Y(t, n), ee([], [
                        e
                    ], function(c) {
                        c = c[0];
                        var _ = `${c.name}.${r}`, h = {
                            get () {
                                ve(`Cannot access ${_} due to unbound types`, [
                                    i,
                                    o
                                ]);
                            },
                            enumerable: !0,
                            configurable: !0
                        };
                        return u ? h.set = ()=>ve(`Cannot access ${_} due to unbound types`, [
                                i,
                                o
                            ]) : h.set = (y)=>R(_ + " is a read-only property"), Object.defineProperty(c.registeredClass.instancePrototype, r, h), ee([], u ? [
                            i,
                            o
                        ] : [
                            i
                        ], function(y) {
                            var C = y[0], b = {
                                get () {
                                    var F = vt(this, c, _ + " getter");
                                    return C.fromWireType(n(a, F));
                                },
                                enumerable: !0
                            };
                            if (u) {
                                u = Y(s, u);
                                var S = y[1];
                                b.set = function(F) {
                                    var w = vt(this, c, _ + " setter"), E = [];
                                    u(f, w, S.toWireType(E, F)), mr(E);
                                };
                            }
                            return Object.defineProperty(c.registeredClass.instancePrototype, r, b), [];
                        }), [];
                    });
                }
                function Qs() {
                    Object.assign(_t.prototype, {
                        get (e) {
                            return this.allocated[e];
                        },
                        has (e) {
                            return this.allocated[e] !== void 0;
                        },
                        allocate (e) {
                            var r = this.freelist.pop() || this.allocated.length;
                            return this.allocated[r] = e, r;
                        },
                        free (e) {
                            this.allocated[e] = void 0, this.freelist.push(e);
                        }
                    });
                }
                function _t() {
                    this.allocated = [
                        void 0
                    ], this.freelist = [];
                }
                var ie = new _t;
                function qr(e) {
                    e >>>= 0, e >= ie.reserved && --ie.get(e).refcount === 0 && ie.free(e);
                }
                var el = ()=>{
                    for(var e = 0, r = ie.reserved; r < ie.allocated.length; ++r)ie.allocated[r] !== void 0 && ++e;
                    return e;
                }, rl = ()=>{
                    ie.allocated.push({
                        value: void 0
                    }, {
                        value: null
                    }, {
                        value: !0
                    }, {
                        value: !1
                    }), ie.reserved = ie.allocated.length, l.count_emval_handles = el;
                }, H = {
                    toValue: (e)=>(e || R("Cannot use deleted val. handle = " + e), ie.get(e).value),
                    toHandle: (e)=>{
                        switch(e){
                            case void 0:
                                return 1;
                            case null:
                                return 2;
                            case !0:
                                return 3;
                            case !1:
                                return 4;
                            default:
                                return ie.allocate({
                                    refcount: 1,
                                    value: e
                                });
                        }
                    }
                };
                function ht(e) {
                    return this.fromWireType(k()[e >>> 2 >>> 0]);
                }
                var il = function(e, r) {
                    e >>>= 0, r >>>= 0, r = N(r), se(e, {
                        name: r,
                        fromWireType: (i)=>{
                            var t = H.toValue(i);
                            return qr(i), t;
                        },
                        toWireType: (i, t)=>H.toHandle(t),
                        argPackAdvance: ce,
                        readValueFromPointer: ht,
                        destructorFunction: null
                    });
                }, tl = (e, r, i)=>{
                    switch(r){
                        case 1:
                            return i ? function(t) {
                                return this.fromWireType(L()[t >>> 0 >>> 0]);
                            } : function(t) {
                                return this.fromWireType(V()[t >>> 0 >>> 0]);
                            };
                        case 2:
                            return i ? function(t) {
                                return this.fromWireType(re()[t >>> 1 >>> 0]);
                            } : function(t) {
                                return this.fromWireType(ye()[t >>> 1 >>> 0]);
                            };
                        case 4:
                            return i ? function(t) {
                                return this.fromWireType(k()[t >>> 2 >>> 0]);
                            } : function(t) {
                                return this.fromWireType(j()[t >>> 2 >>> 0]);
                            };
                        default:
                            throw new TypeError(`invalid integer width (${r}): ${e}`);
                    }
                };
                function nl(e, r, i, t) {
                    e >>>= 0, r >>>= 0, i >>>= 0, r = N(r);
                    function n() {}
                    n.values = {}, se(e, {
                        name: r,
                        constructor: n,
                        fromWireType: function(a) {
                            return this.constructor.values[a];
                        },
                        toWireType: (a, o)=>o.value,
                        argPackAdvance: ce,
                        readValueFromPointer: tl(r, i, t),
                        destructorFunction: null
                    }), zr(r, n);
                }
                var De = (e, r)=>{
                    var i = Ce[e];
                    return i === void 0 && R(r + " has unknown type " + ut(e)), i;
                };
                function al(e, r, i) {
                    e >>>= 0, r >>>= 0, i >>>= 0;
                    var t = De(e, "enum");
                    r = N(r);
                    var n = t.constructor, a = Object.create(t.constructor.prototype, {
                        value: {
                            value: i
                        },
                        constructor: {
                            value: yr(`${t.name}_${r}`, function() {})
                        }
                    });
                    n.values[i] = a, n[r] = a;
                }
                var Xr = (e)=>{
                    if (e === null) return "null";
                    var r = typeof e;
                    return r === "object" || r === "array" || r === "function" ? e.toString() : "" + e;
                }, ol = (e, r)=>{
                    switch(r){
                        case 4:
                            return function(i) {
                                return this.fromWireType(J()[i >>> 2 >>> 0]);
                            };
                        case 8:
                            return function(i) {
                                return this.fromWireType(Te()[i >>> 3 >>> 0]);
                            };
                        default:
                            throw new TypeError(`invalid float width (${r}): ${e}`);
                    }
                }, sl = function(e, r, i) {
                    e >>>= 0, r >>>= 0, i >>>= 0, r = N(r), se(e, {
                        name: r,
                        fromWireType: (t)=>t,
                        toWireType: (t, n)=>n,
                        argPackAdvance: ce,
                        readValueFromPointer: ol(r, i),
                        destructorFunction: null
                    });
                };
                function ll(e, r, i, t, n, a, o) {
                    e >>>= 0, i >>>= 0, t >>>= 0, n >>>= 0, a >>>= 0;
                    var s = Cr(r, i);
                    e = N(e), e = Yr(e), n = Y(t, n), zr(e, function() {
                        ve(`Cannot call ${e} due to unbound types`, s);
                    }, r - 1), ee([], s, function(u) {
                        var f = [
                            u[0],
                            null
                        ].concat(u.slice(1));
                        return lt(e, wr(e, f, null, n, a, o), r - 1), [];
                    });
                }
                var dl = (e, r, i)=>{
                    switch(r){
                        case 1:
                            return i ? (t)=>L()[t >>> 0 >>> 0] : (t)=>V()[t >>> 0 >>> 0];
                        case 2:
                            return i ? (t)=>re()[t >>> 1 >>> 0] : (t)=>ye()[t >>> 1 >>> 0];
                        case 4:
                            return i ? (t)=>k()[t >>> 2 >>> 0] : (t)=>j()[t >>> 2 >>> 0];
                        default:
                            throw new TypeError(`invalid integer width (${r}): ${e}`);
                    }
                };
                function ul(e, r, i, t, n) {
                    e >>>= 0, r >>>= 0, i >>>= 0, r = N(r);
                    var a = (c)=>c;
                    if (t === 0) {
                        var o = 32 - 8 * i;
                        a = (c)=>c << o >>> o;
                    }
                    var s = r.includes("unsigned"), u = (c, _)=>{}, f;
                    s ? f = function(c, _) {
                        return u(_, this.name), _ >>> 0;
                    } : f = function(c, _) {
                        return u(_, this.name), _;
                    }, se(e, {
                        name: r,
                        fromWireType: a,
                        toWireType: f,
                        argPackAdvance: ce,
                        readValueFromPointer: dl(r, i, t !== 0),
                        destructorFunction: null
                    });
                }
                function fl(e, r, i) {
                    e >>>= 0, i >>>= 0;
                    var t = [
                        Int8Array,
                        Uint8Array,
                        Int16Array,
                        Uint16Array,
                        Int32Array,
                        Uint32Array,
                        Float32Array,
                        Float64Array
                    ], n = t[r];
                    function a(o) {
                        var s = j()[o >>> 2 >>> 0], u = j()[o + 4 >>> 2 >>> 0];
                        return new n(L().buffer, u, s);
                    }
                    i = N(i), se(e, {
                        name: i,
                        fromWireType: a,
                        argPackAdvance: ce,
                        readValueFromPointer: a
                    }, {
                        ignoreDuplicateRegistrations: !0
                    });
                }
                function cl(e, r, i, t, n, a, o, s, u, f, c, _) {
                    e >>>= 0, r >>>= 0, i >>>= 0, n >>>= 0, a >>>= 0, o >>>= 0, s >>>= 0, u >>>= 0, f >>>= 0, c >>>= 0, _ >>>= 0, i = N(i), a = Y(n, a), s = Y(o, s), f = Y(u, f), _ = Y(c, _), ee([
                        e
                    ], [
                        r
                    ], function(h) {
                        h = h[0];
                        var y = new qe(i, h.registeredClass, !1, !1, !0, h, t, a, s, f, _);
                        return [
                            y
                        ];
                    });
                }
                function vl(e, r) {
                    e >>>= 0, r >>>= 0, r = N(r);
                    var i = r === "std::string";
                    se(e, {
                        name: r,
                        fromWireType (t) {
                            var n = j()[t >>> 2 >>> 0], a = t + 4, o;
                            if (i) for(var s = a, u = 0; u <= n; ++u){
                                var f = a + u;
                                if (u == n || V()[f >>> 0] == 0) {
                                    var c = f - s, _ = he(s, c);
                                    o === void 0 ? o = _ : (o += "\0", o += _), s = f + 1;
                                }
                            }
                            else {
                                for(var h = new Array(n), u = 0; u < n; ++u)h[u] = String.fromCharCode(V()[a + u >>> 0]);
                                o = h.join("");
                            }
                            return le(t), o;
                        },
                        toWireType (t, n) {
                            n instanceof ArrayBuffer && (n = new Uint8Array(n));
                            var a, o = typeof n == "string";
                            o || n instanceof Uint8Array || n instanceof Uint8ClampedArray || n instanceof Int8Array || R("Cannot pass non-string to std::string"), i && o ? a = Le(n) : a = n.length;
                            var s = Je(4 + a + 1), u = s + 4;
                            if (j()[s >>> 2 >>> 0] = a, i && o) ur(n, u, a + 1);
                            else if (o) for(var f = 0; f < a; ++f){
                                var c = n.charCodeAt(f);
                                c > 255 && (le(u), R("String has UTF-16 code units that do not fit in 8 bits")), V()[u + f >>> 0] = c;
                            }
                            else for(var f = 0; f < a; ++f)V()[u + f >>> 0] = n[f];
                            return t !== null && t.push(le, s), s;
                        },
                        argPackAdvance: ce,
                        readValueFromPointer: st,
                        destructorFunction (t) {
                            le(t);
                        }
                    });
                }
                var yt = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, _l = (e, r)=>{
                    for(var i = e, t = i >> 1, n = t + r / 2; !(t >= n) && ye()[t >>> 0];)++t;
                    if (i = t << 1, i - e > 32 && yt) return yt.decode(V().slice(e, i));
                    for(var a = "", o = 0; !(o >= r / 2); ++o){
                        var s = re()[e + o * 2 >>> 1 >>> 0];
                        if (s == 0) break;
                        a += String.fromCharCode(s);
                    }
                    return a;
                }, hl = (e, r, i)=>{
                    if (i === void 0 && (i = 2147483647), i < 2) return 0;
                    i -= 2;
                    for(var t = r, n = i < e.length * 2 ? i / 2 : e.length, a = 0; a < n; ++a){
                        var o = e.charCodeAt(a);
                        re()[r >>> 1 >>> 0] = o, r += 2;
                    }
                    return re()[r >>> 1 >>> 0] = 0, r - t;
                }, yl = (e)=>e.length * 2, pl = (e, r)=>{
                    for(var i = 0, t = ""; !(i >= r / 4);){
                        var n = k()[e + i * 4 >>> 2 >>> 0];
                        if (n == 0) break;
                        if (++i, n >= 65536) {
                            var a = n - 65536;
                            t += String.fromCharCode(55296 | a >> 10, 56320 | a & 1023);
                        } else t += String.fromCharCode(n);
                    }
                    return t;
                }, ml = (e, r, i)=>{
                    if (r >>>= 0, i === void 0 && (i = 2147483647), i < 4) return 0;
                    for(var t = r, n = t + i - 4, a = 0; a < e.length; ++a){
                        var o = e.charCodeAt(a);
                        if (o >= 55296 && o <= 57343) {
                            var s = e.charCodeAt(++a);
                            o = 65536 + ((o & 1023) << 10) | s & 1023;
                        }
                        if (k()[r >>> 2 >>> 0] = o, r += 4, r + 4 > n) break;
                    }
                    return k()[r >>> 2 >>> 0] = 0, r - t;
                }, gl = (e)=>{
                    for(var r = 0, i = 0; i < e.length; ++i){
                        var t = e.charCodeAt(i);
                        t >= 55296 && t <= 57343 && ++i, r += 4;
                    }
                    return r;
                }, wl = function(e, r, i) {
                    e >>>= 0, r >>>= 0, i >>>= 0, i = N(i);
                    var t, n, a, o, s;
                    r === 2 ? (t = _l, n = hl, o = yl, a = ()=>ye(), s = 1) : r === 4 && (t = pl, n = ml, o = gl, a = ()=>j(), s = 2), se(e, {
                        name: i,
                        fromWireType: (u)=>{
                            for(var f = j()[u >>> 2 >>> 0], c = a(), _, h = u + 4, y = 0; y <= f; ++y){
                                var C = u + 4 + y * r;
                                if (y == f || c[C >>> s] == 0) {
                                    var b = C - h, S = t(h, b);
                                    _ === void 0 ? _ = S : (_ += "\0", _ += S), h = C + r;
                                }
                            }
                            return le(u), _;
                        },
                        toWireType: (u, f)=>{
                            typeof f != "string" && R(`Cannot pass non-string to C++ string type ${i}`);
                            var c = o(f), _ = Je(4 + c + r);
                            return j()[_ >>> 2] = c >> s, n(f, _ + 4, c + r), u !== null && u.push(le, _), _;
                        },
                        argPackAdvance: ce,
                        readValueFromPointer: ht,
                        destructorFunction (u) {
                            le(u);
                        }
                    });
                }, Cl = function(e, r) {
                    e >>>= 0, r >>>= 0, r = N(r), se(e, {
                        isVoid: !0,
                        name: r,
                        argPackAdvance: 0,
                        fromWireType: ()=>{},
                        toWireType: (i, t)=>{}
                    });
                }, El = !0, kl = ()=>El;
                function Kr(e) {
                    if (e >>>= 0, typeof Atomics.waitAsync == "function") {
                        var r = Atomics.waitAsync(k(), e >>> 2, e);
                        r.value.then(Er);
                        var i = e + 128;
                        Atomics.store(k(), i >>> 2, 1);
                    }
                }
                l.__emscripten_thread_mailbox_await = Kr;
                var Er = ()=>{
                    var e = Pr();
                    e && (Kr(e), Gr(()=>Nt()));
                };
                l.checkMailbox = Er;
                var bl = function(e, r, i) {
                    if (e >>>= 0, r >>>= 0, e == r) setTimeout(()=>Er());
                    else if (T) postMessage({
                        targetThread: e,
                        cmd: "checkMailbox"
                    });
                    else {
                        var t = $.pthreads[e];
                        if (!t) return;
                        t.postMessage({
                            cmd: "checkMailbox"
                        });
                    }
                }, Sl = (e)=>{
                    var r = g(), i = e();
                    return p(r), i;
                }, W = function(e, r) {
                    var i = arguments.length - 2, t = arguments;
                    return Sl(()=>{
                        for(var n = i, a = Gt(n * 8), o = a >>> 3, s = 0; s < i; s++){
                            var u = t[2 + s];
                            Te()[o + s >>> 0] = u;
                        }
                        return Bt(e, n, a, r);
                    });
                }, Jr = [];
                function Pl(e, r, i, t) {
                    r >>>= 0, t >>>= 0, Jr.length = i;
                    for(var n = t >>> 3, a = 0; a < i; a++)Jr[a] = Te()[n + a >>> 0];
                    var o = ud[e];
                    $.currentProxiedOperationCallerThread = r;
                    var s = o.apply(null, Jr);
                    return $.currentProxiedOperationCallerThread = 0, s;
                }
                function Zr() {
                    if (T) return W(20, 1);
                    Hr = !1, ar = 0;
                }
                function Fl(e) {
                    e >>>= 0, Z && $.pthreads[e].ref();
                }
                function Al(e, r, i) {
                    e >>>= 0, r >>>= 0, i >>>= 0, e = H.toValue(e), r = De(r, "emval::as");
                    var t = [], n = H.toHandle(t);
                    return j()[i >>> 2 >>> 0] = n, r.toWireType(t, e);
                }
                function jl(e, r) {
                    return e >>>= 0, r >>>= 0, e = H.toValue(e), r = De(r, "emval::as"), r.toWireType(null, e);
                }
                function Dl(e, r) {
                    return e >>>= 0, r >>>= 0, e = H.toValue(e), r = De(r, "emval::as"), r.toWireType(null, e);
                }
                var pt = (e, r)=>{
                    for(var i = new Array(e), t = 0; t < e; ++t)i[t] = De(j()[r + t * 4 >>> 2 >>> 0], "parameter " + t);
                    return i;
                };
                function Tl(e, r, i, t) {
                    e >>>= 0, i >>>= 0, t >>>= 0, e = H.toValue(e);
                    for(var n = pt(r, i), a = new Array(r), o = 0; o < r; ++o){
                        var s = n[o];
                        a[o] = s.readValueFromPointer(t), t += s.argPackAdvance;
                    }
                    var u = e.apply(void 0, a);
                    return H.toHandle(u);
                }
                var $l = {}, Qr = (e)=>{
                    var r = $l[e];
                    return r === void 0 ? N(e) : r;
                }, ei = [];
                function Ml(e, r, i, t, n) {
                    e >>>= 0, r >>>= 0, i >>>= 0, t >>>= 0, n >>>= 0, e = ei[e], r = H.toValue(r), i = Qr(i);
                    var a = [], o = e(r, i, a, n);
                    return a.length && (j()[t >>> 2 >>> 0] = H.toHandle(a)), o;
                }
                function Rl(e, r) {
                    return e >>>= 0, r >>>= 0, e = H.toValue(e), r = H.toValue(r), e == r;
                }
                var mt = ()=>typeof globalThis == "object" ? globalThis : function() {
                        return Function;
                    }()("return this")();
                function Ol(e) {
                    return e >>>= 0, e === 0 ? H.toHandle(mt()) : (e = Qr(e), H.toHandle(mt()[e]));
                }
                var Wl = (e)=>{
                    var r = ei.length;
                    return ei.push(e), r;
                };
                function Il(e, r) {
                    r >>>= 0;
                    var i = pt(e, r), t = i.shift();
                    e--;
                    for(var n = [
                        "retType"
                    ], a = [
                        t
                    ], o = "", s = 0; s < e; ++s)o += (s !== 0 ? ", " : "") + "arg" + s, n.push("argType" + s), a.push(i[s]);
                    for(var u = t.name + "_$" + i.map((y)=>y.name).join("_") + "$", f = hr("methodCaller_" + u), c = "return function " + f + `(handle, name, destructors, args) {
`, _ = 0, s = 0; s < e; ++s)c += "    var arg" + s + " = argType" + s + ".readValueFromPointer(args" + (_ ? "+" + _ : "") + `);
`, _ += i[s].argPackAdvance;
                    c += "    var rv = handle[name](" + o + `);
`;
                    for(var s = 0; s < e; ++s)i[s].deleteObject && (c += "    argType" + s + ".deleteObject(arg" + s + `);
`);
                    t.isVoid || (c += `    return retType.toWireType(destructors, rv);
`), c += `};
`, n.push(c);
                    var h = ft(Function, n).apply(null, a);
                    return Wl(h);
                }
                function xl(e, r) {
                    return e >>>= 0, r >>>= 0, e = H.toValue(e), r = H.toValue(r), H.toHandle(e[r]);
                }
                function Hl(e) {
                    e >>>= 0, e > 4 && (ie.get(e).refcount += 1);
                }
                function Ll(e, r) {
                    return e >>>= 0, r >>>= 0, e = H.toValue(e), r = H.toValue(r), e instanceof r;
                }
                function Ul() {
                    return H.toHandle([]);
                }
                function Bl(e) {
                    return e >>>= 0, H.toHandle(Qr(e));
                }
                function Vl() {
                    return H.toHandle({});
                }
                function Nl(e) {
                    e >>>= 0;
                    var r = H.toValue(e);
                    mr(r), qr(e);
                }
                function zl(e, r, i) {
                    e >>>= 0, r >>>= 0, i >>>= 0, e = H.toValue(e), r = H.toValue(r), i = H.toValue(i), e[r] = i;
                }
                function Gl(e, r) {
                    e >>>= 0, r >>>= 0, e = De(e, "_emval_take_value");
                    var i = e.readValueFromPointer(r);
                    return H.toHandle(i);
                }
                function Yl(e) {
                    return e >>>= 0, e = H.toValue(e), H.toHandle(typeof e);
                }
                function gt(e, r, i, t, n, a, o, s) {
                    if (T) return W(21, 1, e, r, i, t, n, a, o, s);
                    e >>>= 0;
                    var u = Ue(n, a);
                    o >>>= 0, s >>>= 0;
                    try {
                        if (isNaN(u)) return 61;
                        var f = A.getStreamFromFD(t), c = d.mmap(f, e, u, r, i), _ = c.ptr;
                        return k()[o >>> 2 >>> 0] = c.allocated, j()[s >>> 2 >>> 0] = _, 0;
                    } catch (h) {
                        if (typeof d > "u" || h.name !== "ErrnoError") throw h;
                        return -h.errno;
                    }
                }
                function wt(e, r, i, t, n, a, o) {
                    if (T) return W(22, 1, e, r, i, t, n, a, o);
                    e >>>= 0, r >>>= 0;
                    var s = Ue(a, o);
                    try {
                        if (isNaN(s)) return 61;
                        var u = A.getStreamFromFD(n);
                        i & 2 && A.doMsync(e, u, r, t, s), d.munmap(u);
                    } catch (f) {
                        if (typeof d > "u" || f.name !== "ErrnoError") throw f;
                        return -f.errno;
                    }
                }
                var Xe = {}, ri;
                ri = ()=>performance.timeOrigin + performance.now();
                function Ct(e, r) {
                    if (T) return W(23, 1, e, r);
                    if (Xe[e] && (clearTimeout(Xe[e].id), delete Xe[e]), !r) return 0;
                    var i = setTimeout(()=>{
                        delete Xe[e], Gr(()=>Vt(e, ri()));
                    }, r);
                    return Xe[e] = {
                        id: i,
                        timeout_ms: r
                    }, 0;
                }
                var ql = ()=>{
                    de("");
                }, Xl = ()=>{}, Kl = ()=>Date.now(), Jl = ()=>{
                    throw ct(), "unwind";
                };
                function Et(e) {
                    if (T) return W(24, 1, e);
                    Zr(), lr(e);
                }
                var kt = ()=>4294901760;
                function Zl() {
                    return kt();
                }
                var Ql = ()=>Z ? Ee.cpus().length : navigator.hardwareConcurrency, ed = (e)=>{
                    var r = z.buffer, i = (e - r.byteLength + 65535) / 65536;
                    try {
                        return z.grow(i), oe(), 1;
                    } catch  {}
                };
                function rd(e) {
                    e >>>= 0;
                    var r = V().length;
                    if (e <= r) return !1;
                    var i = kt();
                    if (e > i) return !1;
                    for(var t = (u, f)=>u + (f - u % f) % f, n = 1; n <= 4; n *= 2){
                        var a = r * (1 + .2 / n);
                        a = Math.min(a, e + 100663296);
                        var o = Math.min(i, t(Math.max(e, a), 65536)), s = ed(o);
                        if (s) return !0;
                    }
                    return !1;
                }
                var ii = {}, id = ()=>Ar || "./this.program", Ke = ()=>{
                    if (!Ke.strings) {
                        var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", r = {
                            USER: "web_user",
                            LOGNAME: "web_user",
                            PATH: "/",
                            PWD: "/",
                            HOME: "/home/web_user",
                            LANG: e,
                            _: id()
                        };
                        for(var i in ii)ii[i] === void 0 ? delete r[i] : r[i] = ii[i];
                        var t = [];
                        for(var i in r)t.push(`${i}=${r[i]}`);
                        Ke.strings = t;
                    }
                    return Ke.strings;
                }, td = (e, r)=>{
                    for(var i = 0; i < e.length; ++i)L()[r++ >>> 0 >>> 0] = e.charCodeAt(i);
                    L()[r >>> 0 >>> 0] = 0;
                }, bt = function(e, r) {
                    if (T) return W(25, 1, e, r);
                    e >>>= 0, r >>>= 0;
                    var i = 0;
                    return Ke().forEach((t, n)=>{
                        var a = r + i;
                        j()[e + n * 4 >>> 2 >>> 0] = a, td(t, a), i += t.length + 1;
                    }), 0;
                }, St = function(e, r) {
                    if (T) return W(26, 1, e, r);
                    e >>>= 0, r >>>= 0;
                    var i = Ke();
                    j()[e >>> 2 >>> 0] = i.length;
                    var t = 0;
                    return i.forEach((n)=>t += n.length + 1), j()[r >>> 2 >>> 0] = t, 0;
                };
                function Pt(e) {
                    if (T) return W(27, 1, e);
                    try {
                        var r = A.getStreamFromFD(e);
                        return d.close(r), 0;
                    } catch (i) {
                        if (typeof d > "u" || i.name !== "ErrnoError") throw i;
                        return i.errno;
                    }
                }
                function Ft(e, r) {
                    if (T) return W(28, 1, e, r);
                    r >>>= 0;
                    try {
                        var i = 0, t = 0, n = 0, a = A.getStreamFromFD(e), o = a.tty ? 2 : d.isDir(a.mode) ? 3 : d.isLink(a.mode) ? 7 : 4;
                        return L()[r >>> 0 >>> 0] = o, re()[r + 2 >>> 1 >>> 0] = n, I = [
                            i >>> 0,
                            (P = i, +Math.abs(P) >= 1 ? P > 0 ? +Math.floor(P / 4294967296) >>> 0 : ~~+Math.ceil((P - +(~~P >>> 0)) / 4294967296) >>> 0 : 0)
                        ], k()[r + 8 >>> 2 >>> 0] = I[0], k()[r + 12 >>> 2 >>> 0] = I[1], I = [
                            t >>> 0,
                            (P = t, +Math.abs(P) >= 1 ? P > 0 ? +Math.floor(P / 4294967296) >>> 0 : ~~+Math.ceil((P - +(~~P >>> 0)) / 4294967296) >>> 0 : 0)
                        ], k()[r + 16 >>> 2 >>> 0] = I[0], k()[r + 20 >>> 2 >>> 0] = I[1], 0;
                    } catch (s) {
                        if (typeof d > "u" || s.name !== "ErrnoError") throw s;
                        return s.errno;
                    }
                }
                var At = (e, r, i, t)=>{
                    for(var n = 0, a = 0; a < i; a++){
                        var o = j()[r >>> 2 >>> 0], s = j()[r + 4 >>> 2 >>> 0];
                        r += 8;
                        var u = d.read(e, L(), o, s, t);
                        if (u < 0) return -1;
                        if (n += u, u < s) break;
                        typeof t < "u" && (t += u);
                    }
                    return n;
                };
                function jt(e, r, i, t, n, a) {
                    if (T) return W(29, 1, e, r, i, t, n, a);
                    r >>>= 0, i >>>= 0;
                    var o = Ue(t, n);
                    a >>>= 0;
                    try {
                        if (isNaN(o)) return 61;
                        var s = A.getStreamFromFD(e), u = At(s, r, i, o);
                        return j()[a >>> 2 >>> 0] = u, 0;
                    } catch (f) {
                        if (typeof d > "u" || f.name !== "ErrnoError") throw f;
                        return f.errno;
                    }
                }
                var Dt = (e, r, i, t)=>{
                    for(var n = 0, a = 0; a < i; a++){
                        var o = j()[r >>> 2 >>> 0], s = j()[r + 4 >>> 2 >>> 0];
                        r += 8;
                        var u = d.write(e, L(), o, s, t);
                        if (u < 0) return -1;
                        n += u, typeof t < "u" && (t += u);
                    }
                    return n;
                };
                function Tt(e, r, i, t, n, a) {
                    if (T) return W(30, 1, e, r, i, t, n, a);
                    r >>>= 0, i >>>= 0;
                    var o = Ue(t, n);
                    a >>>= 0;
                    try {
                        if (isNaN(o)) return 61;
                        var s = A.getStreamFromFD(e), u = Dt(s, r, i, o);
                        return j()[a >>> 2 >>> 0] = u, 0;
                    } catch (f) {
                        if (typeof d > "u" || f.name !== "ErrnoError") throw f;
                        return f.errno;
                    }
                }
                function $t(e, r, i, t) {
                    if (T) return W(31, 1, e, r, i, t);
                    r >>>= 0, i >>>= 0, t >>>= 0;
                    try {
                        var n = A.getStreamFromFD(e), a = At(n, r, i);
                        return j()[t >>> 2 >>> 0] = a, 0;
                    } catch (o) {
                        if (typeof d > "u" || o.name !== "ErrnoError") throw o;
                        return o.errno;
                    }
                }
                function Mt(e, r, i, t, n) {
                    if (T) return W(32, 1, e, r, i, t, n);
                    var a = Ue(r, i);
                    n >>>= 0;
                    try {
                        if (isNaN(a)) return 61;
                        var o = A.getStreamFromFD(e);
                        return d.llseek(o, a, t), I = [
                            o.position >>> 0,
                            (P = o.position, +Math.abs(P) >= 1 ? P > 0 ? +Math.floor(P / 4294967296) >>> 0 : ~~+Math.ceil((P - +(~~P >>> 0)) / 4294967296) >>> 0 : 0)
                        ], k()[n >>> 2 >>> 0] = I[0], k()[n + 4 >>> 2 >>> 0] = I[1], o.getdents && a === 0 && t === 0 && (o.getdents = null), 0;
                    } catch (s) {
                        if (typeof d > "u" || s.name !== "ErrnoError") throw s;
                        return s.errno;
                    }
                }
                function Rt(e, r, i, t) {
                    if (T) return W(33, 1, e, r, i, t);
                    r >>>= 0, i >>>= 0, t >>>= 0;
                    try {
                        var n = A.getStreamFromFD(e), a = Dt(n, r, i);
                        return j()[t >>> 2 >>> 0] = a, 0;
                    } catch (o) {
                        if (typeof d > "u" || o.name !== "ErrnoError") throw o;
                        return o.errno;
                    }
                }
                function nd(e) {
                    return e >>>= 0, e;
                }
                var kr = (e)=>e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), ad = (e, r)=>{
                    for(var i = 0, t = 0; t <= r; i += e[t++]);
                    return i;
                }, Ot = [
                    31,
                    29,
                    31,
                    30,
                    31,
                    30,
                    31,
                    31,
                    30,
                    31,
                    30,
                    31
                ], Wt = [
                    31,
                    28,
                    31,
                    30,
                    31,
                    30,
                    31,
                    31,
                    30,
                    31,
                    30,
                    31
                ], od = (e, r)=>{
                    for(var i = new Date(e.getTime()); r > 0;){
                        var t = kr(i.getFullYear()), n = i.getMonth(), a = (t ? Ot : Wt)[n];
                        if (r > a - i.getDate()) r -= a - i.getDate() + 1, i.setDate(1), n < 11 ? i.setMonth(n + 1) : (i.setMonth(0), i.setFullYear(i.getFullYear() + 1));
                        else return i.setDate(i.getDate() + r), i;
                    }
                    return i;
                }, sd = (e, r)=>{
                    L().set(e, r >>> 0);
                };
                function ld(e, r, i, t) {
                    e >>>= 0, r >>>= 0, i >>>= 0, t >>>= 0;
                    var n = j()[t + 40 >>> 2 >>> 0], a = {
                        tm_sec: k()[t >>> 2 >>> 0],
                        tm_min: k()[t + 4 >>> 2 >>> 0],
                        tm_hour: k()[t + 8 >>> 2 >>> 0],
                        tm_mday: k()[t + 12 >>> 2 >>> 0],
                        tm_mon: k()[t + 16 >>> 2 >>> 0],
                        tm_year: k()[t + 20 >>> 2 >>> 0],
                        tm_wday: k()[t + 24 >>> 2 >>> 0],
                        tm_yday: k()[t + 28 >>> 2 >>> 0],
                        tm_isdst: k()[t + 32 >>> 2 >>> 0],
                        tm_gmtoff: k()[t + 36 >>> 2 >>> 0],
                        tm_zone: n ? he(n) : ""
                    }, o = he(i), s = {
                        "%c": "%a %b %d %H:%M:%S %Y",
                        "%D": "%m/%d/%y",
                        "%F": "%Y-%m-%d",
                        "%h": "%b",
                        "%r": "%I:%M:%S %p",
                        "%R": "%H:%M",
                        "%T": "%H:%M:%S",
                        "%x": "%m/%d/%y",
                        "%X": "%H:%M:%S",
                        "%Ec": "%c",
                        "%EC": "%C",
                        "%Ex": "%m/%d/%y",
                        "%EX": "%H:%M:%S",
                        "%Ey": "%y",
                        "%EY": "%Y",
                        "%Od": "%d",
                        "%Oe": "%e",
                        "%OH": "%H",
                        "%OI": "%I",
                        "%Om": "%m",
                        "%OM": "%M",
                        "%OS": "%S",
                        "%Ou": "%u",
                        "%OU": "%U",
                        "%OV": "%V",
                        "%Ow": "%w",
                        "%OW": "%W",
                        "%Oy": "%y"
                    };
                    for(var u in s)o = o.replace(new RegExp(u, "g"), s[u]);
                    var f = [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ], c = [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ];
                    function _(w, E, U) {
                        for(var O = typeof w == "number" ? w.toString() : w || ""; O.length < E;)O = U[0] + O;
                        return O;
                    }
                    function h(w, E) {
                        return _(w, E, "0");
                    }
                    function y(w, E) {
                        function U(q) {
                            return q < 0 ? -1 : q > 0 ? 1 : 0;
                        }
                        var O;
                        return (O = U(w.getFullYear() - E.getFullYear())) === 0 && (O = U(w.getMonth() - E.getMonth())) === 0 && (O = U(w.getDate() - E.getDate())), O;
                    }
                    function C(w) {
                        switch(w.getDay()){
                            case 0:
                                return new Date(w.getFullYear() - 1, 11, 29);
                            case 1:
                                return w;
                            case 2:
                                return new Date(w.getFullYear(), 0, 3);
                            case 3:
                                return new Date(w.getFullYear(), 0, 2);
                            case 4:
                                return new Date(w.getFullYear(), 0, 1);
                            case 5:
                                return new Date(w.getFullYear() - 1, 11, 31);
                            case 6:
                                return new Date(w.getFullYear() - 1, 11, 30);
                        }
                    }
                    function b(w) {
                        var E = od(new Date(w.tm_year + 1900, 0, 1), w.tm_yday), U = new Date(E.getFullYear(), 0, 4), O = new Date(E.getFullYear() + 1, 0, 4), q = C(U), B = C(O);
                        return y(q, E) <= 0 ? y(B, E) <= 0 ? E.getFullYear() + 1 : E.getFullYear() : E.getFullYear() - 1;
                    }
                    var S = {
                        "%a": (w)=>f[w.tm_wday].substring(0, 3),
                        "%A": (w)=>f[w.tm_wday],
                        "%b": (w)=>c[w.tm_mon].substring(0, 3),
                        "%B": (w)=>c[w.tm_mon],
                        "%C": (w)=>{
                            var E = w.tm_year + 1900;
                            return h(E / 100 | 0, 2);
                        },
                        "%d": (w)=>h(w.tm_mday, 2),
                        "%e": (w)=>_(w.tm_mday, 2, " "),
                        "%g": (w)=>b(w).toString().substring(2),
                        "%G": (w)=>b(w),
                        "%H": (w)=>h(w.tm_hour, 2),
                        "%I": (w)=>{
                            var E = w.tm_hour;
                            return E == 0 ? E = 12 : E > 12 && (E -= 12), h(E, 2);
                        },
                        "%j": (w)=>h(w.tm_mday + ad(kr(w.tm_year + 1900) ? Ot : Wt, w.tm_mon - 1), 3),
                        "%m": (w)=>h(w.tm_mon + 1, 2),
                        "%M": (w)=>h(w.tm_min, 2),
                        "%n": ()=>`
`,
                        "%p": (w)=>w.tm_hour >= 0 && w.tm_hour < 12 ? "AM" : "PM",
                        "%S": (w)=>h(w.tm_sec, 2),
                        "%t": ()=>"	",
                        "%u": (w)=>w.tm_wday || 7,
                        "%U": (w)=>{
                            var E = w.tm_yday + 7 - w.tm_wday;
                            return h(Math.floor(E / 7), 2);
                        },
                        "%V": (w)=>{
                            var E = Math.floor((w.tm_yday + 7 - (w.tm_wday + 6) % 7) / 7);
                            if ((w.tm_wday + 371 - w.tm_yday - 2) % 7 <= 2 && E++, E) {
                                if (E == 53) {
                                    var O = (w.tm_wday + 371 - w.tm_yday) % 7;
                                    O != 4 && (O != 3 || !kr(w.tm_year)) && (E = 1);
                                }
                            } else {
                                E = 52;
                                var U = (w.tm_wday + 7 - w.tm_yday - 1) % 7;
                                (U == 4 || U == 5 && kr(w.tm_year % 400 - 1)) && E++;
                            }
                            return h(E, 2);
                        },
                        "%w": (w)=>w.tm_wday,
                        "%W": (w)=>{
                            var E = w.tm_yday + 7 - (w.tm_wday + 6) % 7;
                            return h(Math.floor(E / 7), 2);
                        },
                        "%y": (w)=>(w.tm_year + 1900).toString().substring(2),
                        "%Y": (w)=>w.tm_year + 1900,
                        "%z": (w)=>{
                            var E = w.tm_gmtoff, U = E >= 0;
                            return E = Math.abs(E) / 60, E = E / 60 * 100 + E % 60, (U ? "+" : "-") + ("0000" + E).slice(-4);
                        },
                        "%Z": (w)=>w.tm_zone,
                        "%%": ()=>"%"
                    };
                    o = o.replace(/%%/g, "\0\0");
                    for(var u in S)o.includes(u) && (o = o.replace(new RegExp(u, "g"), S[u](a)));
                    o = o.replace(/\0\0/g, "%");
                    var F = sr(o, !1);
                    return F.length > r ? 0 : (sd(F, e), F.length - 1);
                }
                function dd(e, r, i, t, n) {
                    return e >>>= 0, r >>>= 0, i >>>= 0, t >>>= 0, ld(e, r, i, t);
                }
                $.init();
                var It = function(e, r, i, t) {
                    e || (e = this), this.parent = e, this.mount = e.mount, this.mounted = null, this.id = d.nextInode++, this.name = r, this.mode = i, this.node_ops = {}, this.stream_ops = {}, this.rdev = t;
                }, br = 365, Sr = 146;
                Object.defineProperties(It.prototype, {
                    read: {
                        get: function() {
                            return (this.mode & br) === br;
                        },
                        set: function(e) {
                            e ? this.mode |= br : this.mode &= ~br;
                        }
                    },
                    write: {
                        get: function() {
                            return (this.mode & Sr) === Sr;
                        },
                        set: function(e) {
                            e ? this.mode |= Sr : this.mode &= ~Sr;
                        }
                    },
                    isFolder: {
                        get: function() {
                            return d.isDir(this.mode);
                        }
                    },
                    isDevice: {
                        get: function() {
                            return d.isChrdev(this.mode);
                        }
                    }
                }), d.FSNode = It, d.createPreloadedFile = es, d.staticInit(), l.FS_createPath = d.createPath, l.FS_createDataFile = d.createDataFile, l.FS_createPreloadedFile = d.createPreloadedFile, l.FS_unlink = d.unlink, l.FS_readdir = d.readdir, l.FS_rmdir = d.rmdir, l.FS_analyzePath = d.analyzePath, l.FS_createLazyFile = d.createLazyFile, l.FS_createDevice = d.createDevice, Cs(), je = l.BindingError = class extends Error {
                    constructor(r){
                        super(r), this.name = "BindingError";
                    }
                }, it = l.InternalError = class extends Error {
                    constructor(r){
                        super(r), this.name = "InternalError";
                    }
                }, Ms(), js(), Ls(), dt = l.UnboundTypeError = Ns(Error, "UnboundTypeError"), Qs(), rl();
                var ud = [
                    Ir,
                    Ri,
                    Wi,
                    xi,
                    Hi,
                    Li,
                    Ui,
                    Bi,
                    Vi,
                    Ni,
                    zi,
                    Gi,
                    Yi,
                    qi,
                    Xi,
                    Ki,
                    Ji,
                    Zi,
                    Qi,
                    et,
                    Zr,
                    gt,
                    wt,
                    Ct,
                    Et,
                    bt,
                    St,
                    Pt,
                    Ft,
                    jt,
                    Tt,
                    $t,
                    Mt,
                    Rt
                ], fd = {
                    Qb: Uo,
                    Lc: os,
                    r: ss,
                    D: ls,
                    b: us,
                    l: fs,
                    Na: cs,
                    nb: vs,
                    Ua: Oi,
                    Bc: _s,
                    y: hs,
                    Cc: ys,
                    Rc: ps,
                    bb: ms,
                    Nc: Ii,
                    f: ds,
                    gb: xi,
                    $c: Hi,
                    _b: Li,
                    Xc: Ui,
                    hb: Bi,
                    Wc: Vi,
                    Sc: Ni,
                    Kc: zi,
                    cd: Gi,
                    Tc: Yi,
                    Pc: qi,
                    Uc: Xi,
                    eb: Ki,
                    Jc: Ji,
                    Ic: Zi,
                    Vc: Qi,
                    Ec: et,
                    cc: ws,
                    gd: ks,
                    H: zs,
                    da: qs,
                    wa: Xs,
                    N: Ks,
                    z: Js,
                    x: Zs,
                    fd: il,
                    sb: nl,
                    Ea: al,
                    jb: sl,
                    ld: ll,
                    oa: ul,
                    T: fl,
                    qa: cl,
                    ib: vl,
                    Wa: wl,
                    hd: Cl,
                    _c: kl,
                    Fc: bl,
                    Oc: Pl,
                    Mc: Zr,
                    Qc: Kr,
                    Zc: Fl,
                    ra: Al,
                    lc: jl,
                    kc: Dl,
                    Ha: Tl,
                    la: Ml,
                    yd: qr,
                    kd: Rl,
                    od: Ol,
                    ka: Il,
                    Ad: xl,
                    $a: Hl,
                    pd: Ll,
                    Ub: Ul,
                    Rb: Bl,
                    Tb: Vl,
                    Vb: Nl,
                    Sb: zl,
                    F: Gl,
                    qd: Yl,
                    $b: gt,
                    ac: wt,
                    ab: Ct,
                    fa: ql,
                    Pb: Bo,
                    rd: Vo,
                    cb: Xl,
                    fb: Kl,
                    Yc: Jl,
                    tb: Et,
                    Gc: Zl,
                    ba: ri,
                    Hc: Ql,
                    Dc: rd,
                    dd: bt,
                    ed: St,
                    xa: lr,
                    Ia: Pt,
                    db: Ft,
                    Zb: jt,
                    Yb: Tt,
                    bd: $t,
                    bc: Mt,
                    Va: Rt,
                    ub: Gu,
                    jd: mf,
                    s: Od,
                    P: Ju,
                    nd: ef,
                    pa: Qd,
                    Ta: Id,
                    sa: Kd,
                    mc: Mf,
                    Aa: Fu,
                    Kb: vu,
                    Gb: gu,
                    mb: _f,
                    Sa: Gd,
                    xd: Lu,
                    k: md,
                    Ab: Iu,
                    Bb: Wu,
                    La: Ou,
                    Ma: Ru,
                    zb: Hu,
                    Fa: xu,
                    ob: uf,
                    Ja: ff,
                    Eb: Eu,
                    c: hd,
                    Q: Wd,
                    J: tf,
                    _a: Tu,
                    xb: Bu,
                    na: Zd,
                    aa: Bd,
                    vd: Yu,
                    Za: $u,
                    M: Ud,
                    ta: qd,
                    id: gf,
                    e: cd,
                    q: Md,
                    sd: Ku,
                    ma: Qu,
                    td: Xu,
                    zd: Mu,
                    ca: jd,
                    w: Zu,
                    vb: zu,
                    wb: Nu,
                    ya: vf,
                    Ra: Yd,
                    h: vd,
                    R: Nd,
                    I: nf,
                    wd: Vu,
                    ua: iu,
                    md: df,
                    yb: Uu,
                    Hb: mu,
                    m: wd,
                    L: xd,
                    Ca: nu,
                    o: yd,
                    Pa: _u,
                    B: Fd,
                    rb: rf,
                    C: Sd,
                    ud: qu,
                    A: Rd,
                    va: zd,
                    kb: yf,
                    Da: Hd,
                    za: ju,
                    Oa: Du,
                    Cb: Au,
                    Xb: Uf,
                    dc: Lf,
                    ec: Hf,
                    gc: If,
                    sc: Ff,
                    rc: Af,
                    jc: Rf,
                    zc: wf,
                    wc: kf,
                    pc: Df,
                    yc: Cf,
                    Wb: Bf,
                    xc: Ef,
                    p: kd,
                    Z: Ld,
                    pb: lf,
                    Fb: Cu,
                    j: _d,
                    _: bd,
                    Mb: fu,
                    Jb: yu,
                    Qa: lu,
                    ea: af,
                    Ka: sf,
                    qb: of,
                    U: hu,
                    V: wu,
                    d: pd,
                    W: Td,
                    Lb: cu,
                    Nb: uu,
                    ja: $d,
                    Xa: pf,
                    t: Xd,
                    g: Cd,
                    Y: Vd,
                    Ob: du,
                    O: Dd,
                    ha: au,
                    Ba: su,
                    Db: Pu,
                    i: Ed,
                    E: eu,
                    ia: ru,
                    Ya: cf,
                    n: gd,
                    S: ou,
                    X: tu,
                    v: Pd,
                    G: Ad,
                    Ib: pu,
                    K: Jd,
                    $: Su,
                    ga: bu,
                    lb: hf,
                    Ga: ku,
                    ic: Of,
                    fc: xf,
                    hc: Wf,
                    vc: bf,
                    nc: $f,
                    qc: jf,
                    uc: Sf,
                    tc: Pf,
                    oc: Tf,
                    u: nd,
                    a: z || l.wasmMemory,
                    ad: Ir,
                    Ac: dd
                }, v = Lo(), Pr = l._pthread_self = ()=>(Pr = l._pthread_self = v.Cd)(), le = (e)=>(le = v.Ed)(e), Je = (e)=>(Je = v.Fd)(e), xt = ()=>(xt = v.Gd)();
                l.__emscripten_tls_init = ()=>(l.__emscripten_tls_init = v.Hd)();
                var Ht = (e, r)=>(Ht = v.Id)(e, r), Lt = (e)=>(Lt = v.Jd)(e);
                l.__embind_initialize_bindings = ()=>(l.__embind_initialize_bindings = v.Kd)();
                var Ut = l.__emscripten_thread_init = (e, r, i, t, n, a)=>(Ut = l.__emscripten_thread_init = v.Ld)(e, r, i, t, n, a);
                l.__emscripten_thread_crashed = ()=>(l.__emscripten_thread_crashed = v.Md)();
                var Bt = (e, r, i, t)=>(Bt = v.Nd)(e, r, i, t), ti = (e)=>(ti = v.Od)(e), ni = l.__emscripten_thread_exit = (e)=>(ni = l.__emscripten_thread_exit = v.Pd)(e), Vt = (e, r)=>(Vt = v.Qd)(e, r), Nt = l.__emscripten_check_mailbox = ()=>(Nt = l.__emscripten_check_mailbox = v.Rd)(), m = (e, r)=>(m = v.Sd)(e, r), Ze = (e)=>(Ze = v.Td)(e), zt = (e, r)=>(zt = v.Ud)(e, r), g = ()=>(g = v.Vd)(), p = (e)=>(p = v.Wd)(e), Gt = (e)=>(Gt = v.Xd)(e), Yt = (e)=>(Yt = v.Yd)(e), qt = (e)=>(qt = v.Zd)(e), Xt = (e, r, i)=>(Xt = v._d)(e, r, i), Kt = (e)=>(Kt = v.$d)(e), Jt = l.dynCall_iii = (e, r, i)=>(Jt = l.dynCall_iii = v.ae)(e, r, i), Zt = l.dynCall_iiii = (e, r, i, t)=>(Zt = l.dynCall_iiii = v.be)(e, r, i, t), ai = l.dynCall_vi = (e, r)=>(ai = l.dynCall_vi = v.ce)(e, r), oi = l.dynCall_ii = (e, r)=>(oi = l.dynCall_ii = v.de)(e, r), Qt = l.dynCall_iiiiii = (e, r, i, t, n, a)=>(Qt = l.dynCall_iiiiii = v.ee)(e, r, i, t, n, a), en = l.dynCall_vii = (e, r, i)=>(en = l.dynCall_vii = v.fe)(e, r, i), rn = l.dynCall_i = (e)=>(rn = l.dynCall_i = v.ge)(e), tn = l.dynCall_viiiii = (e, r, i, t, n, a)=>(tn = l.dynCall_viiiii = v.he)(e, r, i, t, n, a), nn = l.dynCall_v = (e)=>(nn = l.dynCall_v = v.ie)(e), an = l.dynCall_viii = (e, r, i, t)=>(an = l.dynCall_viii = v.je)(e, r, i, t), on = l.dynCall_vid = (e, r, i)=>(on = l.dynCall_vid = v.ke)(e, r, i), sn = l.dynCall_di = (e, r)=>(sn = l.dynCall_di = v.le)(e, r), ln = l.dynCall_iiiii = (e, r, i, t, n)=>(ln = l.dynCall_iiiii = v.me)(e, r, i, t, n), dn = l.dynCall_viiii = (e, r, i, t, n)=>(dn = l.dynCall_viiii = v.ne)(e, r, i, t, n), un = l.dynCall_viid = (e, r, i, t)=>(un = l.dynCall_viid = v.oe)(e, r, i, t), fn = l.dynCall_dii = (e, r, i)=>(fn = l.dynCall_dii = v.pe)(e, r, i), cn = l.dynCall_viiid = (e, r, i, t, n)=>(cn = l.dynCall_viiid = v.qe)(e, r, i, t, n), vn = l.dynCall_iiiid = (e, r, i, t, n)=>(vn = l.dynCall_iiiid = v.re)(e, r, i, t, n), _n = l.dynCall_iiiiiiii = (e, r, i, t, n, a, o, s)=>(_n = l.dynCall_iiiiiiii = v.se)(e, r, i, t, n, a, o, s), hn = l.dynCall_viiiiii = (e, r, i, t, n, a, o)=>(hn = l.dynCall_viiiiii = v.te)(e, r, i, t, n, a, o), yn = l.dynCall_iiiiiii = (e, r, i, t, n, a, o)=>(yn = l.dynCall_iiiiiii = v.ue)(e, r, i, t, n, a, o), pn = l.dynCall_diii = (e, r, i, t)=>(pn = l.dynCall_diii = v.ve)(e, r, i, t), mn = l.dynCall_j = (e)=>(mn = l.dynCall_j = v.we)(e), gn = l.dynCall_iiid = (e, r, i, t)=>(gn = l.dynCall_iiid = v.xe)(e, r, i, t), wn = l.dynCall_iiiiid = (e, r, i, t, n, a)=>(wn = l.dynCall_iiiiid = v.ye)(e, r, i, t, n, a), Cn = l.dynCall_vd = (e, r)=>(Cn = l.dynCall_vd = v.ze)(e, r), En = l.dynCall_iiiiiiiiiiii = (e, r, i, t, n, a, o, s, u, f, c, _)=>(En = l.dynCall_iiiiiiiiiiii = v.Ae)(e, r, i, t, n, a, o, s, u, f, c, _), kn = l.dynCall_iid = (e, r, i)=>(kn = l.dynCall_iid = v.Be)(e, r, i), bn = l.dynCall_viidi = (e, r, i, t, n)=>(bn = l.dynCall_viidi = v.Ce)(e, r, i, t, n), Sn = l.dynCall_iidiii = (e, r, i, t, n, a)=>(Sn = l.dynCall_iidiii = v.De)(e, r, i, t, n, a), Pn = l.dynCall_iiiiiiiii = (e, r, i, t, n, a, o, s, u)=>(Pn = l.dynCall_iiiiiiiii = v.Ee)(e, r, i, t, n, a, o, s, u), Fn = l.dynCall_iiiiiiiiii = (e, r, i, t, n, a, o, s, u, f)=>(Fn = l.dynCall_iiiiiiiiii = v.Fe)(e, r, i, t, n, a, o, s, u, f), An = l.dynCall_iiidi = (e, r, i, t, n)=>(An = l.dynCall_iiidi = v.Ge)(e, r, i, t, n), jn = l.dynCall_fiii = (e, r, i, t)=>(jn = l.dynCall_fiii = v.He)(e, r, i, t), Dn = l.dynCall_iiifi = (e, r, i, t, n)=>(Dn = l.dynCall_iiifi = v.Ie)(e, r, i, t, n), Tn = l.dynCall_viif = (e, r, i, t)=>(Tn = l.dynCall_viif = v.Je)(e, r, i, t), $n = l.dynCall_iiffi = (e, r, i, t, n)=>($n = l.dynCall_iiffi = v.Ke)(e, r, i, t, n), Mn = l.dynCall_fif = (e, r, i)=>(Mn = l.dynCall_fif = v.Le)(e, r, i), Rn = l.dynCall_iif = (e, r, i)=>(Rn = l.dynCall_iif = v.Me)(e, r, i), On = l.dynCall_dif = (e, r, i)=>(On = l.dynCall_dif = v.Ne)(e, r, i), Wn = l.dynCall_viiiiiii = (e, r, i, t, n, a, o, s)=>(Wn = l.dynCall_viiiiiii = v.Oe)(e, r, i, t, n, a, o, s), In = l.dynCall_viiiiiiii = (e, r, i, t, n, a, o, s, u)=>(In = l.dynCall_viiiiiiii = v.Pe)(e, r, i, t, n, a, o, s, u), xn = l.dynCall_iidii = (e, r, i, t, n)=>(xn = l.dynCall_iidii = v.Qe)(e, r, i, t, n), Hn = l.dynCall_viiidiiiii = (e, r, i, t, n, a, o, s, u, f)=>(Hn = l.dynCall_viiidiiiii = v.Re)(e, r, i, t, n, a, o, s, u, f), Ln = l.dynCall_viiiidi = (e, r, i, t, n, a, o)=>(Ln = l.dynCall_viiiidi = v.Se)(e, r, i, t, n, a, o), Un = l.dynCall_viiidii = (e, r, i, t, n, a, o)=>(Un = l.dynCall_viiidii = v.Te)(e, r, i, t, n, a, o), Bn = l.dynCall_viiiid = (e, r, i, t, n, a)=>(Bn = l.dynCall_viiiid = v.Ue)(e, r, i, t, n, a), Vn = l.dynCall_iiiidiii = (e, r, i, t, n, a, o, s)=>(Vn = l.dynCall_iiiidiii = v.Ve)(e, r, i, t, n, a, o, s), Nn = l.dynCall_iiiiidiiii = (e, r, i, t, n, a, o, s, u, f)=>(Nn = l.dynCall_iiiiidiiii = v.We)(e, r, i, t, n, a, o, s, u, f), zn = l.dynCall_viiiiid = (e, r, i, t, n, a, o)=>(zn = l.dynCall_viiiiid = v.Xe)(e, r, i, t, n, a, o), Gn = l.dynCall_viiiiidi = (e, r, i, t, n, a, o, s)=>(Gn = l.dynCall_viiiiidi = v.Ye)(e, r, i, t, n, a, o, s), Yn = l.dynCall_viiiddddi = (e, r, i, t, n, a, o, s, u)=>(Yn = l.dynCall_viiiddddi = v.Ze)(e, r, i, t, n, a, o, s, u), qn = l.dynCall_viiddi = (e, r, i, t, n, a)=>(qn = l.dynCall_viiddi = v._e)(e, r, i, t, n, a), Xn = l.dynCall_vidddi = (e, r, i, t, n, a)=>(Xn = l.dynCall_vidddi = v.$e)(e, r, i, t, n, a), Kn = l.dynCall_viiddddi = (e, r, i, t, n, a, o, s)=>(Kn = l.dynCall_viiddddi = v.af)(e, r, i, t, n, a, o, s), Jn = l.dynCall_fid = (e, r, i)=>(Jn = l.dynCall_fid = v.bf)(e, r, i), Zn = l.dynCall_iiiiiid = (e, r, i, t, n, a, o)=>(Zn = l.dynCall_iiiiiid = v.cf)(e, r, i, t, n, a, o), Qn = l.dynCall_vif = (e, r, i)=>(Qn = l.dynCall_vif = v.df)(e, r, i), ea = l.dynCall_viiidi = (e, r, i, t, n, a)=>(ea = l.dynCall_viiidi = v.ef)(e, r, i, t, n, a), ra = l.dynCall_viddi = (e, r, i, t, n)=>(ra = l.dynCall_viddi = v.ff)(e, r, i, t, n), ia = l.dynCall_viiiiiiid = (e, r, i, t, n, a, o, s, u)=>(ia = l.dynCall_viiiiiiid = v.gf)(e, r, i, t, n, a, o, s, u), ta = l.dynCall_jiij = (e, r, i, t, n)=>(ta = l.dynCall_jiij = v.hf)(e, r, i, t, n), na = l.dynCall_ji = (e, r)=>(na = l.dynCall_ji = v.jf)(e, r), aa = l.dynCall_iiiifffffiiff = (e, r, i, t, n, a, o, s, u, f, c, _, h)=>(aa = l.dynCall_iiiifffffiiff = v.kf)(e, r, i, t, n, a, o, s, u, f, c, _, h);
                l.dynCall_jif = (e, r, i)=>(l.dynCall_jif = v.lf)(e, r, i);
                var oa = l.dynCall_vifii = (e, r, i, t, n)=>(oa = l.dynCall_vifii = v.mf)(e, r, i, t, n), sa = l.dynCall_vfiiii = (e, r, i, t, n, a)=>(sa = l.dynCall_vfiiii = v.nf)(e, r, i, t, n, a), la = l.dynCall_ifii = (e, r, i, t)=>(la = l.dynCall_ifii = v.of)(e, r, i, t);
                l.dynCall_jiiijji = (e, r, i, t, n, a, o, s, u)=>(l.dynCall_jiiijji = v.pf)(e, r, i, t, n, a, o, s, u);
                var da = l.dynCall_viiif = (e, r, i, t, n)=>(da = l.dynCall_viiif = v.qf)(e, r, i, t, n), ua = l.dynCall_iiiiiiiiiiiiiiiiiiii = (e, r, i, t, n, a, o, s, u, f, c, _, h, y, C, b, S, F, w, E)=>(ua = l.dynCall_iiiiiiiiiiiiiiiiiiii = v.rf)(e, r, i, t, n, a, o, s, u, f, c, _, h, y, C, b, S, F, w, E), fa = l.dynCall_viiiiiiiiii = (e, r, i, t, n, a, o, s, u, f, c)=>(fa = l.dynCall_viiiiiiiiii = v.sf)(e, r, i, t, n, a, o, s, u, f, c), ca = l.dynCall_viiiiiiiii = (e, r, i, t, n, a, o, s, u, f)=>(ca = l.dynCall_viiiiiiiii = v.tf)(e, r, i, t, n, a, o, s, u, f), va = l.dynCall_iiiiiiiiiiiii = (e, r, i, t, n, a, o, s, u, f, c, _, h)=>(va = l.dynCall_iiiiiiiiiiiii = v.uf)(e, r, i, t, n, a, o, s, u, f, c, _, h);
                l.dynCall_ff = (e, r)=>(l.dynCall_ff = v.vf)(e, r), l.dynCall_fff = (e, r, i)=>(l.dynCall_fff = v.wf)(e, r, i), l.dynCall_iiijiii = (e, r, i, t, n, a, o, s)=>(l.dynCall_iiijiii = v.xf)(e, r, i, t, n, a, o, s);
                var _a = l.dynCall_jii = (e, r, i)=>(_a = l.dynCall_jii = v.yf)(e, r, i);
                l.dynCall_iiij = (e, r, i, t, n)=>(l.dynCall_iiij = v.zf)(e, r, i, t, n), l.dynCall_iiiji = (e, r, i, t, n, a)=>(l.dynCall_iiiji = v.Af)(e, r, i, t, n, a);
                var ha = l.dynCall_iiiiiiiiiiiiii = (e, r, i, t, n, a, o, s, u, f, c, _, h, y)=>(ha = l.dynCall_iiiiiiiiiiiiii = v.Bf)(e, r, i, t, n, a, o, s, u, f, c, _, h, y), ya = l.dynCall_iiddddddiiii = (e, r, i, t, n, a, o, s, u, f, c, _)=>(ya = l.dynCall_iiddddddiiii = v.Cf)(e, r, i, t, n, a, o, s, u, f, c, _), pa = l.dynCall_iidiiiii = (e, r, i, t, n, a, o, s)=>(pa = l.dynCall_iidiiiii = v.Df)(e, r, i, t, n, a, o, s), ma = l.dynCall_iddiii = (e, r, i, t, n, a)=>(ma = l.dynCall_iddiii = v.Ef)(e, r, i, t, n, a), ga = l.dynCall_iddii = (e, r, i, t, n)=>(ga = l.dynCall_iddii = v.Ff)(e, r, i, t, n), wa = l.dynCall_idddiii = (e, r, i, t, n, a, o)=>(wa = l.dynCall_idddiii = v.Gf)(e, r, i, t, n, a, o), Ca = l.dynCall_idddii = (e, r, i, t, n, a)=>(Ca = l.dynCall_idddii = v.Hf)(e, r, i, t, n, a), Ea = l.dynCall_idii = (e, r, i, t)=>(Ea = l.dynCall_idii = v.If)(e, r, i, t), ka = l.dynCall_idi = (e, r, i)=>(ka = l.dynCall_idi = v.Jf)(e, r, i), ba = l.dynCall_fiiid = (e, r, i, t, n)=>(ba = l.dynCall_fiiid = v.Kf)(e, r, i, t, n), Sa = l.dynCall_iidi = (e, r, i, t)=>(Sa = l.dynCall_iidi = v.Lf)(e, r, i, t), Pa = l.dynCall_iiiidii = (e, r, i, t, n, a, o)=>(Pa = l.dynCall_iiiidii = v.Mf)(e, r, i, t, n, a, o), Fa = l.dynCall_iiiidiiiiii = (e, r, i, t, n, a, o, s, u, f, c)=>(Fa = l.dynCall_iiiidiiiiii = v.Nf)(e, r, i, t, n, a, o, s, u, f, c), Aa = l.dynCall_iiidiiiii = (e, r, i, t, n, a, o, s, u)=>(Aa = l.dynCall_iiidiiiii = v.Of)(e, r, i, t, n, a, o, s, u), ja = l.dynCall_iiidiiidiiiidiif = (e, r, i, t, n, a, o, s, u, f, c, _, h, y, C, b)=>(ja = l.dynCall_iiidiiidiiiidiif = v.Pf)(e, r, i, t, n, a, o, s, u, f, c, _, h, y, C, b), Da = l.dynCall_dddd = (e, r, i, t)=>(Da = l.dynCall_dddd = v.Qf)(e, r, i, t), Ta = l.dynCall_iidiiii = (e, r, i, t, n, a, o)=>(Ta = l.dynCall_iidiiii = v.Rf)(e, r, i, t, n, a, o), $a = l.dynCall_iiiddii = (e, r, i, t, n, a, o)=>($a = l.dynCall_iiiddii = v.Sf)(e, r, i, t, n, a, o), Ma = l.dynCall_iiiiiiiidi = (e, r, i, t, n, a, o, s, u, f)=>(Ma = l.dynCall_iiiiiiiidi = v.Tf)(e, r, i, t, n, a, o, s, u, f), Ra = l.dynCall_iiiddi = (e, r, i, t, n, a)=>(Ra = l.dynCall_iiiddi = v.Uf)(e, r, i, t, n, a), Oa = l.dynCall_iiidd = (e, r, i, t, n)=>(Oa = l.dynCall_iiidd = v.Vf)(e, r, i, t, n);
                l.dynCall_iiiif = (e, r, i, t, n)=>(l.dynCall_iiiif = v.Wf)(e, r, i, t, n);
                var Wa = l.dynCall_fi = (e, r)=>(Wa = l.dynCall_fi = v.Xf)(e, r), Ia = l.dynCall_did = (e, r, i)=>(Ia = l.dynCall_did = v.Yf)(e, r, i), xa = l.dynCall_iiidii = (e, r, i, t, n, a)=>(xa = l.dynCall_iiidii = v.Zf)(e, r, i, t, n, a), Ha = l.dynCall_iiidddii = (e, r, i, t, n, a, o, s)=>(Ha = l.dynCall_iiidddii = v._f)(e, r, i, t, n, a, o, s), La = l.dynCall_didii = (e, r, i, t, n)=>(La = l.dynCall_didii = v.$f)(e, r, i, t, n), Ua = l.dynCall_iiiiiiidddi = (e, r, i, t, n, a, o, s, u, f, c)=>(Ua = l.dynCall_iiiiiiidddi = v.ag)(e, r, i, t, n, a, o, s, u, f, c), Ba = l.dynCall_iidd = (e, r, i, t)=>(Ba = l.dynCall_iidd = v.bg)(e, r, i, t), Va = l.dynCall_viij = (e, r, i, t, n)=>(Va = l.dynCall_viij = v.cg)(e, r, i, t, n), Na = l.dynCall_viji = (e, r, i, t, n)=>(Na = l.dynCall_viji = v.dg)(e, r, i, t, n), za = l.dynCall_vijii = (e, r, i, t, n, a)=>(za = l.dynCall_vijii = v.eg)(e, r, i, t, n, a), Ga = l.dynCall_iiijj = (e, r, i, t, n, a, o)=>(Ga = l.dynCall_iiijj = v.fg)(e, r, i, t, n, a, o), Ya = l.dynCall_iiijji = (e, r, i, t, n, a, o, s)=>(Ya = l.dynCall_iiijji = v.gg)(e, r, i, t, n, a, o, s), qa = l.dynCall_vij = (e, r, i, t)=>(qa = l.dynCall_vij = v.hg)(e, r, i, t), Xa = l.dynCall_vijji = (e, r, i, t, n, a, o)=>(Xa = l.dynCall_vijji = v.ig)(e, r, i, t, n, a, o), Ka = l.dynCall_viiji = (e, r, i, t, n, a)=>(Ka = l.dynCall_viiji = v.jg)(e, r, i, t, n, a), Ja = l.dynCall_jiii = (e, r, i, t)=>(Ja = l.dynCall_jiii = v.kg)(e, r, i, t), Za = l.dynCall_iiiiddd = (e, r, i, t, n, a, o)=>(Za = l.dynCall_iiiiddd = v.lg)(e, r, i, t, n, a, o), Qa = l.dynCall_vidii = (e, r, i, t, n)=>(Qa = l.dynCall_vidii = v.mg)(e, r, i, t, n), eo = l.dynCall_vidiiii = (e, r, i, t, n, a, o)=>(eo = l.dynCall_vidiiii = v.ng)(e, r, i, t, n, a, o), ro = l.dynCall_vidiii = (e, r, i, t, n, a)=>(ro = l.dynCall_vidiii = v.og)(e, r, i, t, n, a), io = l.dynCall_dj = (e, r, i)=>(io = l.dynCall_dj = v.pg)(e, r, i), to = l.dynCall_vdiii = (e, r, i, t, n)=>(to = l.dynCall_vdiii = v.qg)(e, r, i, t, n), no = l.dynCall_idiiiiii = (e, r, i, t, n, a, o, s)=>(no = l.dynCall_idiiiiii = v.rg)(e, r, i, t, n, a, o, s), ao = l.dynCall_idiiiiiii = (e, r, i, t, n, a, o, s, u)=>(ao = l.dynCall_idiiiiiii = v.sg)(e, r, i, t, n, a, o, s, u), oo = l.dynCall_iiiidiiii = (e, r, i, t, n, a, o, s, u)=>(oo = l.dynCall_iiiidiiii = v.tg)(e, r, i, t, n, a, o, s, u), so = l.dynCall_viiiidiiiiii = (e, r, i, t, n, a, o, s, u, f, c, _)=>(so = l.dynCall_viiiidiiiiii = v.ug)(e, r, i, t, n, a, o, s, u, f, c, _), lo = l.dynCall_iiiff = (e, r, i, t, n)=>(lo = l.dynCall_iiiff = v.vg)(e, r, i, t, n);
                l.dynCall_viiiiiiiiiii = (e, r, i, t, n, a, o, s, u, f, c, _)=>(l.dynCall_viiiiiiiiiii = v.wg)(e, r, i, t, n, a, o, s, u, f, c, _);
                var uo = l.dynCall_iij = (e, r, i, t)=>(uo = l.dynCall_iij = v.xg)(e, r, i, t), fo = l.dynCall_vidi = (e, r, i, t)=>(fo = l.dynCall_vidi = v.yg)(e, r, i, t), co = l.dynCall_fii = (e, r, i)=>(co = l.dynCall_fii = v.zg)(e, r, i), vo = l.dynCall_viiiiiiiiiiiii = (e, r, i, t, n, a, o, s, u, f, c, _, h, y)=>(vo = l.dynCall_viiiiiiiiiiiii = v.Ag)(e, r, i, t, n, a, o, s, u, f, c, _, h, y), _o = l.dynCall_iiiiiiiiiii = (e, r, i, t, n, a, o, s, u, f, c)=>(_o = l.dynCall_iiiiiiiiiii = v.Bg)(e, r, i, t, n, a, o, s, u, f, c), ho = l.dynCall_viidii = (e, r, i, t, n, a)=>(ho = l.dynCall_viidii = v.Cg)(e, r, i, t, n, a), yo = l.dynCall_viiiijii = (e, r, i, t, n, a, o, s, u)=>(yo = l.dynCall_viiiijii = v.Dg)(e, r, i, t, n, a, o, s, u), po = l.dynCall_viiijjii = (e, r, i, t, n, a, o, s, u, f)=>(po = l.dynCall_viiijjii = v.Eg)(e, r, i, t, n, a, o, s, u, f), mo = l.dynCall_iiiijjii = (e, r, i, t, n, a, o, s, u, f)=>(mo = l.dynCall_iiiijjii = v.Fg)(e, r, i, t, n, a, o, s, u, f), go = l.dynCall_viiijii = (e, r, i, t, n, a, o, s)=>(go = l.dynCall_viiijii = v.Gg)(e, r, i, t, n, a, o, s), wo = l.dynCall_iiiijii = (e, r, i, t, n, a, o, s)=>(wo = l.dynCall_iiiijii = v.Hg)(e, r, i, t, n, a, o, s), Co = l.dynCall_ddiiiii = (e, r, i, t, n, a, o)=>(Co = l.dynCall_ddiiiii = v.Ig)(e, r, i, t, n, a, o), Eo = l.dynCall_iifi = (e, r, i, t)=>(Eo = l.dynCall_iifi = v.Jg)(e, r, i, t), ko = l.dynCall_iiiij = (e, r, i, t, n, a)=>(ko = l.dynCall_iiiij = v.Kg)(e, r, i, t, n, a);
                l.dynCall_jiji = (e, r, i, t, n)=>(l.dynCall_jiji = v.Lg)(e, r, i, t, n);
                var bo = l.dynCall_iiiiij = (e, r, i, t, n, a, o)=>(bo = l.dynCall_iiiiij = v.Mg)(e, r, i, t, n, a, o);
                l.dynCall_viijii = (e, r, i, t, n, a, o)=>(l.dynCall_viijii = v.Ng)(e, r, i, t, n, a, o);
                var So = l.dynCall_jiiii = (e, r, i, t, n)=>(So = l.dynCall_jiiii = v.Og)(e, r, i, t, n), Po = l.dynCall_viiiiiiiiiiiiiii = (e, r, i, t, n, a, o, s, u, f, c, _, h, y, C, b)=>(Po = l.dynCall_viiiiiiiiiiiiiii = v.Pg)(e, r, i, t, n, a, o, s, u, f, c, _, h, y, C, b);
                l.dynCall_iiiiijj = (e, r, i, t, n, a, o, s, u)=>(l.dynCall_iiiiijj = v.Qg)(e, r, i, t, n, a, o, s, u), l.dynCall_iiiiiijj = (e, r, i, t, n, a, o, s, u, f)=>(l.dynCall_iiiiiijj = v.Rg)(e, r, i, t, n, a, o, s, u, f);
                var Fo = (e)=>(Fo = v.Sg)(e), Ao = ()=>(Ao = v.Tg)(), jo = (e)=>(jo = v.Ug)(e), Do = ()=>(Do = v.Vg)();
                l.___start_em_js = 3888140, l.___stop_em_js = 3892185;
                function cd(e, r, i) {
                    var t = g();
                    try {
                        return Jt(e, r, i);
                    } catch (n) {
                        if (p(t), n !== n + 0) throw n;
                        m(1, 0);
                    }
                }
                function vd(e, r, i, t) {
                    var n = g();
                    try {
                        return Zt(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function _d(e, r) {
                    var i = g();
                    try {
                        ai(e, r);
                    } catch (t) {
                        if (p(i), t !== t + 0) throw t;
                        m(1, 0);
                    }
                }
                function hd(e, r) {
                    var i = g();
                    try {
                        return oi(e, r);
                    } catch (t) {
                        if (p(i), t !== t + 0) throw t;
                        m(1, 0);
                    }
                }
                function yd(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        return Qt(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function pd(e, r, i) {
                    var t = g();
                    try {
                        en(e, r, i);
                    } catch (n) {
                        if (p(t), n !== n + 0) throw n;
                        m(1, 0);
                    }
                }
                function md(e) {
                    var r = g();
                    try {
                        return rn(e);
                    } catch (i) {
                        if (p(r), i !== i + 0) throw i;
                        m(1, 0);
                    }
                }
                function gd(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        tn(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function wd(e, r, i, t, n) {
                    var a = g();
                    try {
                        return ln(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function Cd(e, r, i, t) {
                    var n = g();
                    try {
                        an(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function Ed(e, r, i, t, n) {
                    var a = g();
                    try {
                        dn(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function kd(e) {
                    var r = g();
                    try {
                        nn(e);
                    } catch (i) {
                        if (p(r), i !== i + 0) throw i;
                        m(1, 0);
                    }
                }
                function bd(e, r, i) {
                    var t = g();
                    try {
                        on(e, r, i);
                    } catch (n) {
                        if (p(t), n !== n + 0) throw n;
                        m(1, 0);
                    }
                }
                function Sd(e, r, i, t, n, a, o, s) {
                    var u = g();
                    try {
                        return _n(e, r, i, t, n, a, o, s);
                    } catch (f) {
                        if (p(u), f !== f + 0) throw f;
                        m(1, 0);
                    }
                }
                function Pd(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        hn(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function Fd(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        return yn(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function Ad(e, r, i, t, n, a, o, s) {
                    var u = g();
                    try {
                        Wn(e, r, i, t, n, a, o, s);
                    } catch (f) {
                        if (p(u), f !== f + 0) throw f;
                        m(1, 0);
                    }
                }
                function jd(e, r, i, t, n) {
                    var a = g();
                    try {
                        return An(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function Dd(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        ea(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function Td(e, r, i, t) {
                    var n = g();
                    try {
                        un(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function $d(e, r, i, t, n) {
                    var a = g();
                    try {
                        bn(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function Md(e, r, i, t) {
                    var n = g();
                    try {
                        return gn(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function Rd(e, r, i, t, n, a, o, s, u) {
                    var f = g();
                    try {
                        return Pn(e, r, i, t, n, a, o, s, u);
                    } catch (c) {
                        if (p(f), c !== c + 0) throw c;
                        m(1, 0);
                    }
                }
                function Od(e, r) {
                    var i = g();
                    try {
                        return sn(e, r);
                    } catch (t) {
                        if (p(i), t !== t + 0) throw t;
                        m(1, 0);
                    }
                }
                function Wd(e, r, i) {
                    var t = g();
                    try {
                        return kn(e, r, i);
                    } catch (n) {
                        if (p(t), n !== n + 0) throw n;
                        m(1, 0);
                    }
                }
                function Id(e, r, i) {
                    var t = g();
                    try {
                        return fn(e, r, i);
                    } catch (n) {
                        if (p(t), n !== n + 0) throw n;
                        m(1, 0);
                    }
                }
                function xd(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        return wn(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function Hd(e, r, i, t, n, a, o, s, u, f, c, _) {
                    var h = g();
                    try {
                        return En(e, r, i, t, n, a, o, s, u, f, c, _);
                    } catch (y) {
                        if (p(h), y !== y + 0) throw y;
                        m(1, 0);
                    }
                }
                function Ld(e, r) {
                    var i = g();
                    try {
                        Cn(e, r);
                    } catch (t) {
                        if (p(i), t !== t + 0) throw t;
                        m(1, 0);
                    }
                }
                function Ud(e, r, i) {
                    var t = g();
                    try {
                        return Rn(e, r, i);
                    } catch (n) {
                        if (p(t), n !== n + 0) throw n;
                        m(1, 0);
                    }
                }
                function Bd(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        return Sn(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function Vd(e, r, i, t, n) {
                    var a = g();
                    try {
                        cn(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function Nd(e, r, i, t, n) {
                    var a = g();
                    try {
                        return vn(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function zd(e, r, i, t, n, a, o, s, u, f) {
                    var c = g();
                    try {
                        return Fn(e, r, i, t, n, a, o, s, u, f);
                    } catch (_) {
                        if (p(c), _ !== _ + 0) throw _;
                        m(1, 0);
                    }
                }
                function Gd(e, r, i, t) {
                    var n = g();
                    try {
                        return jn(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function Yd(e, r, i, t, n) {
                    var a = g();
                    try {
                        return Dn(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function qd(e, r, i, t, n) {
                    var a = g();
                    try {
                        return $n(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function Xd(e, r, i, t) {
                    var n = g();
                    try {
                        Tn(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function Kd(e, r, i, t) {
                    var n = g();
                    try {
                        return pn(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function Jd(e, r, i, t, n, a, o, s, u) {
                    var f = g();
                    try {
                        In(e, r, i, t, n, a, o, s, u);
                    } catch (c) {
                        if (p(f), c !== c + 0) throw c;
                        m(1, 0);
                    }
                }
                function Zd(e, r, i, t, n) {
                    var a = g();
                    try {
                        return xn(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function Qd(e, r, i) {
                    var t = g();
                    try {
                        return On(e, r, i);
                    } catch (n) {
                        if (p(t), n !== n + 0) throw n;
                        m(1, 0);
                    }
                }
                function eu(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        Bn(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function ru(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        Ln(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function iu(e, r, i, t, n, a, o, s) {
                    var u = g();
                    try {
                        return Vn(e, r, i, t, n, a, o, s);
                    } catch (f) {
                        if (p(u), f !== f + 0) throw f;
                        m(1, 0);
                    }
                }
                function tu(e, r, i, t, n, a, o, s) {
                    var u = g();
                    try {
                        Gn(e, r, i, t, n, a, o, s);
                    } catch (f) {
                        if (p(u), f !== f + 0) throw f;
                        m(1, 0);
                    }
                }
                function nu(e, r, i, t, n, a, o, s, u, f) {
                    var c = g();
                    try {
                        return Nn(e, r, i, t, n, a, o, s, u, f);
                    } catch (_) {
                        if (p(c), _ !== _ + 0) throw _;
                        m(1, 0);
                    }
                }
                function au(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        Un(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function ou(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        zn(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function su(e, r, i, t, n, a, o, s, u, f) {
                    var c = g();
                    try {
                        Hn(e, r, i, t, n, a, o, s, u, f);
                    } catch (_) {
                        if (p(c), _ !== _ + 0) throw _;
                        m(1, 0);
                    }
                }
                function lu(e, r, i, t) {
                    var n = g();
                    try {
                        fo(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function du(e, r, i, t, n, a, o, s, u) {
                    var f = g();
                    try {
                        Yn(e, r, i, t, n, a, o, s, u);
                    } catch (c) {
                        if (p(f), c !== c + 0) throw c;
                        m(1, 0);
                    }
                }
                function uu(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        qn(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function fu(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        Xn(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function cu(e, r, i, t, n, a, o, s) {
                    var u = g();
                    try {
                        Kn(e, r, i, t, n, a, o, s);
                    } catch (f) {
                        if (p(u), f !== f + 0) throw f;
                        m(1, 0);
                    }
                }
                function vu(e, r, i) {
                    var t = g();
                    try {
                        return Jn(e, r, i);
                    } catch (n) {
                        if (p(t), n !== n + 0) throw n;
                        m(1, 0);
                    }
                }
                function _u(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        return Zn(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function hu(e, r, i) {
                    var t = g();
                    try {
                        Qn(e, r, i);
                    } catch (n) {
                        if (p(t), n !== n + 0) throw n;
                        m(1, 0);
                    }
                }
                function yu(e, r, i, t, n) {
                    var a = g();
                    try {
                        ra(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function pu(e, r, i, t, n, a, o, s, u) {
                    var f = g();
                    try {
                        ia(e, r, i, t, n, a, o, s, u);
                    } catch (c) {
                        if (p(f), c !== c + 0) throw c;
                        m(1, 0);
                    }
                }
                function mu(e, r, i, t, n, a, o, s, u, f, c, _, h) {
                    var y = g();
                    try {
                        return aa(e, r, i, t, n, a, o, s, u, f, c, _, h);
                    } catch (C) {
                        if (p(y), C !== C + 0) throw C;
                        m(1, 0);
                    }
                }
                function gu(e, r, i) {
                    var t = g();
                    try {
                        return Mn(e, r, i);
                    } catch (n) {
                        if (p(t), n !== n + 0) throw n;
                        m(1, 0);
                    }
                }
                function wu(e, r, i, t, n) {
                    var a = g();
                    try {
                        oa(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function Cu(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        sa(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function Eu(e, r, i, t) {
                    var n = g();
                    try {
                        return la(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function ku(e, r, i, t, n, a, o, s, u, f, c, _, h, y, C, b) {
                    var S = g();
                    try {
                        Po(e, r, i, t, n, a, o, s, u, f, c, _, h, y, C, b);
                    } catch (F) {
                        if (p(S), F !== F + 0) throw F;
                        m(1, 0);
                    }
                }
                function bu(e, r, i, t, n, a, o, s, u, f, c) {
                    var _ = g();
                    try {
                        fa(e, r, i, t, n, a, o, s, u, f, c);
                    } catch (h) {
                        if (p(_), h !== h + 0) throw h;
                        m(1, 0);
                    }
                }
                function Su(e, r, i, t, n, a, o, s, u, f) {
                    var c = g();
                    try {
                        ca(e, r, i, t, n, a, o, s, u, f);
                    } catch (_) {
                        if (p(c), _ !== _ + 0) throw _;
                        m(1, 0);
                    }
                }
                function Pu(e, r, i, t, n) {
                    var a = g();
                    try {
                        da(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function Fu(e, r) {
                    var i = g();
                    try {
                        return Wa(e, r);
                    } catch (t) {
                        if (p(i), t !== t + 0) throw t;
                        m(1, 0);
                    }
                }
                function Au(e, r, i, t, n, a, o, s, u, f, c, _, h, y, C, b, S, F, w, E) {
                    var U = g();
                    try {
                        return ua(e, r, i, t, n, a, o, s, u, f, c, _, h, y, C, b, S, F, w, E);
                    } catch (O) {
                        if (p(U), O !== O + 0) throw O;
                        m(1, 0);
                    }
                }
                function ju(e, r, i, t, n, a, o, s, u, f, c, _, h) {
                    var y = g();
                    try {
                        return va(e, r, i, t, n, a, o, s, u, f, c, _, h);
                    } catch (C) {
                        if (p(y), C !== C + 0) throw C;
                        m(1, 0);
                    }
                }
                function Du(e, r, i, t, n, a, o, s, u, f, c, _, h, y) {
                    var C = g();
                    try {
                        return ha(e, r, i, t, n, a, o, s, u, f, c, _, h, y);
                    } catch (b) {
                        if (p(C), b !== b + 0) throw b;
                        m(1, 0);
                    }
                }
                function Tu(e, r, i, t, n, a, o, s, u, f, c, _) {
                    var h = g();
                    try {
                        return ya(e, r, i, t, n, a, o, s, u, f, c, _);
                    } catch (y) {
                        if (p(h), y !== y + 0) throw y;
                        m(1, 0);
                    }
                }
                function $u(e, r, i, t, n, a, o, s) {
                    var u = g();
                    try {
                        return pa(e, r, i, t, n, a, o, s);
                    } catch (f) {
                        if (p(u), f !== f + 0) throw f;
                        m(1, 0);
                    }
                }
                function Mu(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        return $a(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function Ru(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        return ma(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function Ou(e, r, i, t, n) {
                    var a = g();
                    try {
                        return ga(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function Wu(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        return wa(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function Iu(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        return Ca(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function xu(e, r, i, t) {
                    var n = g();
                    try {
                        return Ea(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function Hu(e, r, i) {
                    var t = g();
                    try {
                        return ka(e, r, i);
                    } catch (n) {
                        if (p(t), n !== n + 0) throw n;
                        m(1, 0);
                    }
                }
                function Lu(e, r, i, t, n) {
                    var a = g();
                    try {
                        return ba(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function Uu(e, r, i, t, n, a, o, s, u, f, c) {
                    var _ = g();
                    try {
                        return Fa(e, r, i, t, n, a, o, s, u, f, c);
                    } catch (h) {
                        if (p(_), h !== h + 0) throw h;
                        m(1, 0);
                    }
                }
                function Bu(e, r, i, t) {
                    var n = g();
                    try {
                        return Sa(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function Vu(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        return Pa(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function Nu(e, r, i, t, n, a, o, s, u) {
                    var f = g();
                    try {
                        return Aa(e, r, i, t, n, a, o, s, u);
                    } catch (c) {
                        if (p(f), c !== c + 0) throw c;
                        m(1, 0);
                    }
                }
                function zu(e, r, i, t, n, a, o, s, u, f, c, _, h, y, C, b) {
                    var S = g();
                    try {
                        return ja(e, r, i, t, n, a, o, s, u, f, c, _, h, y, C, b);
                    } catch (F) {
                        if (p(S), F !== F + 0) throw F;
                        m(1, 0);
                    }
                }
                function Gu(e, r, i, t) {
                    var n = g();
                    try {
                        return Da(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function Yu(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        return Ta(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function qu(e, r, i, t, n, a, o, s, u, f) {
                    var c = g();
                    try {
                        return Ma(e, r, i, t, n, a, o, s, u, f);
                    } catch (_) {
                        if (p(c), _ !== _ + 0) throw _;
                        m(1, 0);
                    }
                }
                function Xu(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        return Ra(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function Ku(e, r, i, t, n) {
                    var a = g();
                    try {
                        return Oa(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function Ju(e, r, i) {
                    var t = g();
                    try {
                        return Ia(e, r, i);
                    } catch (n) {
                        if (p(t), n !== n + 0) throw n;
                        m(1, 0);
                    }
                }
                function Zu(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        return xa(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function Qu(e, r, i, t, n, a, o, s) {
                    var u = g();
                    try {
                        return Ha(e, r, i, t, n, a, o, s);
                    } catch (f) {
                        if (p(u), f !== f + 0) throw f;
                        m(1, 0);
                    }
                }
                function ef(e, r, i, t, n) {
                    var a = g();
                    try {
                        return La(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function rf(e, r, i, t, n, a, o, s, u, f, c) {
                    var _ = g();
                    try {
                        return Ua(e, r, i, t, n, a, o, s, u, f, c);
                    } catch (h) {
                        if (p(_), h !== h + 0) throw h;
                        m(1, 0);
                    }
                }
                function tf(e, r, i, t) {
                    var n = g();
                    try {
                        return Ba(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function nf(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        return Za(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function af(e, r, i, t, n) {
                    var a = g();
                    try {
                        Qa(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function of(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        eo(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function sf(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        ro(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function lf(e, r, i, t, n) {
                    var a = g();
                    try {
                        to(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function df(e, r, i, t, n, a, o, s, u) {
                    var f = g();
                    try {
                        return oo(e, r, i, t, n, a, o, s, u);
                    } catch (c) {
                        if (p(f), c !== c + 0) throw c;
                        m(1, 0);
                    }
                }
                function uf(e, r, i, t, n, a, o, s) {
                    var u = g();
                    try {
                        return no(e, r, i, t, n, a, o, s);
                    } catch (f) {
                        if (p(u), f !== f + 0) throw f;
                        m(1, 0);
                    }
                }
                function ff(e, r, i, t, n, a, o, s, u) {
                    var f = g();
                    try {
                        return ao(e, r, i, t, n, a, o, s, u);
                    } catch (c) {
                        if (p(f), c !== c + 0) throw c;
                        m(1, 0);
                    }
                }
                function cf(e, r, i, t, n, a, o, s, u, f, c, _) {
                    var h = g();
                    try {
                        so(e, r, i, t, n, a, o, s, u, f, c, _);
                    } catch (y) {
                        if (p(h), y !== y + 0) throw y;
                        m(1, 0);
                    }
                }
                function vf(e, r, i, t, n) {
                    var a = g();
                    try {
                        return lo(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function _f(e, r, i) {
                    var t = g();
                    try {
                        return co(e, r, i);
                    } catch (n) {
                        if (p(t), n !== n + 0) throw n;
                        m(1, 0);
                    }
                }
                function hf(e, r, i, t, n, a, o, s, u, f, c, _, h, y) {
                    var C = g();
                    try {
                        vo(e, r, i, t, n, a, o, s, u, f, c, _, h, y);
                    } catch (b) {
                        if (p(C), b !== b + 0) throw b;
                        m(1, 0);
                    }
                }
                function yf(e, r, i, t, n, a, o, s, u, f, c) {
                    var _ = g();
                    try {
                        return _o(e, r, i, t, n, a, o, s, u, f, c);
                    } catch (h) {
                        if (p(_), h !== h + 0) throw h;
                        m(1, 0);
                    }
                }
                function pf(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        ho(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function mf(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        return Co(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function gf(e, r, i, t) {
                    var n = g();
                    try {
                        return Eo(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function wf(e) {
                    var r = g();
                    try {
                        return mn(e);
                    } catch (i) {
                        if (p(r), i !== i + 0) throw i;
                        m(1, 0);
                    }
                }
                function Cf(e, r, i, t) {
                    var n = g();
                    try {
                        return Ja(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function Ef(e, r, i, t, n) {
                    var a = g();
                    try {
                        return ta(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function kf(e, r) {
                    var i = g();
                    try {
                        return na(e, r);
                    } catch (t) {
                        if (p(i), t !== t + 0) throw t;
                        m(1, 0);
                    }
                }
                function bf(e, r, i, t, n) {
                    var a = g();
                    try {
                        Va(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function Sf(e, r, i, t, n) {
                    var a = g();
                    try {
                        Na(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function Pf(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        za(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function Ff(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        return Ga(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function Af(e, r, i, t, n, a, o, s) {
                    var u = g();
                    try {
                        return Ya(e, r, i, t, n, a, o, s);
                    } catch (f) {
                        if (p(u), f !== f + 0) throw f;
                        m(1, 0);
                    }
                }
                function jf(e, r, i, t) {
                    var n = g();
                    try {
                        qa(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function Df(e, r, i) {
                    var t = g();
                    try {
                        return _a(e, r, i);
                    } catch (n) {
                        if (p(t), n !== n + 0) throw n;
                        m(1, 0);
                    }
                }
                function Tf(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        Xa(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function $f(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        Ka(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function Mf(e, r, i) {
                    var t = g();
                    try {
                        return io(e, r, i);
                    } catch (n) {
                        if (p(t), n !== n + 0) throw n;
                        m(1, 0);
                    }
                }
                function Rf(e, r, i, t) {
                    var n = g();
                    try {
                        return uo(e, r, i, t);
                    } catch (a) {
                        if (p(n), a !== a + 0) throw a;
                        m(1, 0);
                    }
                }
                function Of(e, r, i, t, n, a, o, s, u) {
                    var f = g();
                    try {
                        yo(e, r, i, t, n, a, o, s, u);
                    } catch (c) {
                        if (p(f), c !== c + 0) throw c;
                        m(1, 0);
                    }
                }
                function Wf(e, r, i, t, n, a, o, s, u, f) {
                    var c = g();
                    try {
                        po(e, r, i, t, n, a, o, s, u, f);
                    } catch (_) {
                        if (p(c), _ !== _ + 0) throw _;
                        m(1, 0);
                    }
                }
                function If(e, r, i, t, n, a, o, s, u, f) {
                    var c = g();
                    try {
                        return mo(e, r, i, t, n, a, o, s, u, f);
                    } catch (_) {
                        if (p(c), _ !== _ + 0) throw _;
                        m(1, 0);
                    }
                }
                function xf(e, r, i, t, n, a, o, s) {
                    var u = g();
                    try {
                        go(e, r, i, t, n, a, o, s);
                    } catch (f) {
                        if (p(u), f !== f + 0) throw f;
                        m(1, 0);
                    }
                }
                function Hf(e, r, i, t, n, a, o, s) {
                    var u = g();
                    try {
                        return wo(e, r, i, t, n, a, o, s);
                    } catch (f) {
                        if (p(u), f !== f + 0) throw f;
                        m(1, 0);
                    }
                }
                function Lf(e, r, i, t, n, a) {
                    var o = g();
                    try {
                        return ko(e, r, i, t, n, a);
                    } catch (s) {
                        if (p(o), s !== s + 0) throw s;
                        m(1, 0);
                    }
                }
                function Uf(e, r, i, t, n, a, o) {
                    var s = g();
                    try {
                        return bo(e, r, i, t, n, a, o);
                    } catch (u) {
                        if (p(s), u !== u + 0) throw u;
                        m(1, 0);
                    }
                }
                function Bf(e, r, i, t, n) {
                    var a = g();
                    try {
                        return So(e, r, i, t, n);
                    } catch (o) {
                        if (p(a), o !== o + 0) throw o;
                        m(1, 0);
                    }
                }
                function Vf(e) {
                    e = Object.assign({}, e);
                    var r = (n)=>()=>n() >>> 0, i = (n)=>(a)=>n(a) >>> 0, t = (n)=>(a, o)=>n(a, o) >>> 0;
                    return e.Cd = r(e.Cd), e.Fd = i(e.Fd), e.Gd = r(e.Gd), e.Id = t(e.Id), e.Jd = i(e.Jd), e.Vd = r(e.Vd), e.Xd = i(e.Xd), e;
                }
                l.addRunDependency = He, l.removeRunDependency = Se, l.FS_createPath = d.createPath, l.FS_createLazyFile = d.createLazyFile, l.FS_createDevice = d.createDevice, l.wasmMemory = z, l.keepRuntimeAlive = or, l.ExitStatus = $r, l.FS_createPreloadedFile = d.createPreloadedFile, l.FS_createDataFile = d.createDataFile, l.FS_unlink = d.unlink, l.PThread = $, l.FS_readdir = d.readdir, l.FS_analyzePath = d.analyzePath;
                var Fr;
                xe = function e() {
                    Fr || To(), Fr || (xe = e);
                };
                function To() {
                    if (ge > 0) return;
                    if (T) {
                        $e(l), ki(), startWorker(l);
                        return;
                    }
                    if (Mo(), ge > 0) return;
                    function e() {
                        Fr || (Fr = !0, l.calledRun = !0, !be && (ki(), $e(l), l.onRuntimeInitialized && l.onRuntimeInitialized(), Ro()));
                    }
                    l.setStatus ? (l.setStatus("Running..."), setTimeout(function() {
                        setTimeout(function() {
                            l.setStatus("");
                        }, 1), e();
                    }, 1)) : e();
                }
                if (l.preInit) for(typeof l.preInit == "function" && (l.preInit = [
                    l.preInit
                ]); l.preInit.length > 0;)l.preInit.pop()();
                return To(), er.ready;
            };
        })();
        G.exports = te, globalThis["NEEDLE:USD:GET"] = te;
    })(zf);
    let si = null;
    Zf = async function(G) {
        if (si) return si;
        const _e = globalThis["NEEDLE:USD:GET"];
        if (!_e) throw new Error('"NEEDLE:USD:GET" not found in globalThis - please modify "emHdBindings.js" and add: globalThis["NEEDLE:USD:GET"] = getUsdModule;');
        const te = await Promise.all([
            Qe(()=>import("./emHdBindings-CsKgK7OO.js"), []),
            Qe(()=>import("./emHdBindings-BK17v6tv.js"), []),
            Qe(()=>import("./emHdBindings.worker-WxjaQFgg.js"), []),
            Qe(()=>import("./emHdBindings.worker-BTwaKNBk.js"), []),
            Qe(()=>import("./emHdBindings-CZLeaH3e.js"), [])
        ]), [ne, X, er, L, V] = te, re = er, ye = await fetch(X.default).then((k)=>k.arrayBuffer());
        return si = _e({
            mainScriptUrlOrBlob: ne.default,
            ...G,
            setStatus: (k)=>{
                if (G?.onDownloadProgress && k.includes("Downloading data...")) {
                    const j = k.indexOf("("), J = k.indexOf("/"), Te = k.indexOf("/", J), l = k.indexOf(")", Te), $e = parseInt(k.substring(j + 1, J)), ke = parseInt(k.substring(J + 1, l));
                    G.onDownloadProgress($e, ke);
                }
                G?.setStatus ? G.setStatus(k) : console.debug("🧊 USD STATUS", k);
            },
            locateFile: (k)=>{
                const j = G?.locateFile?.(k);
                if (j) return j;
                let J = null;
                return k.includes("emHdBindings.data") ? J = X.default : k.includes("emHdBindings.wasm") ? J = V.default : k.includes("emHdBindings.worker.js") && (J = re.default), J ?? k;
            },
            getPreloadedPackage (k, j) {
                const J = G?.getPreloadedPackage?.(k, j);
                if (J) return J;
                if (k.includes("emHdBindings.data") && ye.byteLength !== j) throw new Error(`emHdBindings.data size mismatch: expected ${j} but got ${ye.byteLength}
${X.default}`);
                return null;
            }
        });
    };
});
export { Zf as getUsdModule, __tla };
