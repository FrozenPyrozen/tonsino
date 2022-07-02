// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _roulette = require("./js/roulette");
(0, _roulette.roulette)();

},{"./js/roulette":"9Jsv4"}],"9Jsv4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "roulette", ()=>roulette);
const roulette = ()=>{
    let bankValue = 1000;
    let currentBet = 0;
    let wager = 5;
    let lastWager = 0;
    let bet1 = [];
    let numbersBet = [];
    let previousNumbers = [];
    let numRed = [
        1,
        3,
        5,
        7,
        9,
        12,
        14,
        16,
        18,
        19,
        21,
        23,
        25,
        27,
        30,
        32,
        34,
        36
    ];
    let wheelnumbersAC = [
        0,
        26,
        3,
        35,
        12,
        28,
        7,
        29,
        18,
        22,
        9,
        31,
        14,
        20,
        1,
        33,
        16,
        24,
        5,
        10,
        23,
        8,
        30,
        11,
        36,
        13,
        27,
        6,
        34,
        17,
        25,
        2,
        21,
        4,
        19,
        15,
        32
    ];
    let container = document.createElement("div");
    container.setAttribute("id", "container");
    document.body.append(container);
    startGame();
    let wheel1 = document.getElementsByClassName("wheel")[0];
    let ballTrack1 = document.getElementsByClassName("ballTrack")[0];
    function resetGame() {
        bankValue = 1000;
        currentBet = 0;
        wager = 5;
        bet1 = [];
        numbersBet = [];
        previousNumbers = [];
        document.getElementById("betting_board").remove();
        document.getElementById("notification").remove();
        buildBettingBoard();
    }
    function startGame() {
        buildWheel();
        buildBettingBoard();
    }
    function gameOver() {
        let notification = document.createElement("div");
        notification.setAttribute("id", "notification");
        let nSpan = document.createElement("span");
        nSpan.setAttribute("class", "nSpan");
        nSpan.innerText = "Bankrupt";
        notification.append(nSpan);
        let nBtn = document.createElement("div");
        nBtn.setAttribute("class", "nBtn");
        nBtn.innerText = "Play again";
        nBtn.onclick = function() {
            resetGame();
        };
        notification.append(nBtn);
        container.prepend(notification);
    }
    function buildWheel() {
        let wheel = document.createElement("div");
        wheel.setAttribute("class", "wheel");
        let outerRim = document.createElement("div");
        outerRim.setAttribute("class", "outerRim");
        wheel.append(outerRim);
        let numbers = [
            0,
            32,
            15,
            19,
            4,
            21,
            2,
            25,
            17,
            34,
            6,
            27,
            13,
            36,
            11,
            30,
            8,
            23,
            10,
            5,
            24,
            16,
            33,
            1,
            20,
            14,
            31,
            9,
            22,
            18,
            29,
            7,
            28,
            12,
            35,
            3,
            26
        ];
        for(i = 0; i < numbers.length; i++){
            let a = i + 1;
            let spanClass = numbers[i] < 10 ? "single" : "double";
            let sect = document.createElement("div");
            sect.setAttribute("id", "sect" + a);
            sect.setAttribute("class", "sect");
            let span = document.createElement("span");
            span.setAttribute("class", spanClass);
            span.innerText = numbers[i];
            sect.append(span);
            let block = document.createElement("div");
            block.setAttribute("class", "block");
            sect.append(block);
            wheel.append(sect);
        }
        let pocketsRim = document.createElement("div");
        pocketsRim.setAttribute("class", "pocketsRim");
        wheel.append(pocketsRim);
        let ballTrack = document.createElement("div");
        ballTrack.setAttribute("class", "ballTrack");
        let ball = document.createElement("div");
        ball.setAttribute("class", "ball");
        ballTrack.append(ball);
        wheel.append(ballTrack);
        let pockets = document.createElement("div");
        pockets.setAttribute("class", "pockets");
        wheel.append(pockets);
        let cone = document.createElement("div");
        cone.setAttribute("class", "cone");
        wheel.append(cone);
        let turret = document.createElement("div");
        turret.setAttribute("class", "turret");
        wheel.append(turret);
        let turretHandle = document.createElement("div");
        turretHandle.setAttribute("class", "turretHandle");
        let thendOne = document.createElement("div");
        thendOne.setAttribute("class", "thendOne");
        turretHandle.append(thendOne);
        let thendTwo = document.createElement("div");
        thendTwo.setAttribute("class", "thendTwo");
        turretHandle.append(thendTwo);
        wheel.append(turretHandle);
        container.append(wheel);
    }
    function buildBettingBoard() {
        let bettingBoard = document.createElement("div");
        bettingBoard.setAttribute("id", "betting_board");
        let wl = document.createElement("div");
        wl.setAttribute("class", "winning_lines");
        var wlttb = document.createElement("div");
        wlttb.setAttribute("id", "wlttb_top");
        wlttb.setAttribute("class", "wlttb");
        for(i = 0; i < 11; i++){
            let j = i;
            var ttbbetblock = document.createElement("div");
            ttbbetblock.setAttribute("class", "ttbbetblock");
            var numA = 1 + 3 * j;
            var numB = 2 + 3 * j;
            var numC = 3 + 3 * j;
            var numD = 4 + 3 * j;
            var numE = 5 + 3 * j;
            var numF = 6 + 3 * j;
            let num = numA + ", " + numB + ", " + numC + ", " + numD + ", " + numE + ", " + numF;
            var objType = "double_street";
            ttbbetblock.onclick = function() {
                setBet(this, num, objType, 5);
            };
            ttbbetblock.oncontextmenu = function(e) {
                e.preventDefault();
                removeBet(this, num, objType, 5);
            };
            wlttb.append(ttbbetblock);
        }
        wl.append(wlttb);
        for(c = 1; c < 4; c++){
            let d = c;
            var wlttb = document.createElement("div");
            wlttb.setAttribute("id", "wlttb_" + c);
            wlttb.setAttribute("class", "wlttb");
            for(i = 0; i < 12; i++){
                let j = i;
                var ttbbetblock = document.createElement("div");
                ttbbetblock.setAttribute("class", "ttbbetblock");
                ttbbetblock.onclick = function() {
                    if (d == 1 || d == 2) {
                        var numA = 2 - (d - 1) + 3 * j;
                        var numB = 3 - (d - 1) + 3 * j;
                        var num = numA + ", " + numB;
                    } else {
                        var numA = 1 + 3 * j;
                        var numB = 2 + 3 * j;
                        var numC = 3 + 3 * j;
                        var num = numA + ", " + numB + ", " + numC;
                    }
                    var objType = d == 3 ? "street" : "split";
                    var odd = d == 3 ? 11 : 17;
                    setBet(this, num, objType, odd);
                };
                ttbbetblock.oncontextmenu = function(e) {
                    e.preventDefault();
                    if (d == 1 || d == 2) {
                        var numA = 2 - (d - 1) + 3 * j;
                        var numB = 3 - (d - 1) + 3 * j;
                        var num = numA + ", " + numB;
                    } else {
                        var numA = 1 + 3 * j;
                        var numB = 2 + 3 * j;
                        var numC = 3 + 3 * j;
                        var num = numA + ", " + numB + ", " + numC;
                    }
                    var objType = d == 3 ? "street" : "split";
                    var odd = d == 3 ? 11 : 17;
                    removeBet(this, num, objType, odd);
                };
                wlttb.append(ttbbetblock);
            }
            wl.append(wlttb);
        }
        for(c = 1; c < 12; c++){
            let d = c;
            var wlrtl = document.createElement("div");
            wlrtl.setAttribute("id", "wlrtl_" + c);
            wlrtl.setAttribute("class", "wlrtl");
            for(i = 1; i < 4; i++){
                let j = i;
                var rtlbb = document.createElement("div");
                rtlbb.setAttribute("class", "rtlbb" + i);
                var numA = 3 + 3 * (d - 1) - (j - 1);
                var numB = 6 + 3 * (d - 1) - (j - 1);
                let num = numA + ", " + numB;
                rtlbb.onclick = function() {
                    setBet(this, num, "split", 17);
                };
                rtlbb.oncontextmenu = function(e) {
                    e.preventDefault();
                    removeBet(this, num, "split", 17);
                };
                wlrtl.append(rtlbb);
            }
            wl.append(wlrtl);
        }
        for(c = 1; c < 3; c++){
            var wlcb = document.createElement("div");
            wlcb.setAttribute("id", "wlcb_" + c);
            wlcb.setAttribute("class", "wlcb");
            for(i = 1; i < 12; i++){
                let count = c == 1 ? i : i + 11;
                var cbbb = document.createElement("div");
                cbbb.setAttribute("id", "cbbb_" + count);
                cbbb.setAttribute("class", "cbbb");
                var numA = "2";
                var numB = "3";
                var numC = "5";
                var numD = "6";
                let num = count >= 1 && count < 12 ? parseInt(numA) + (count - 1) * 3 + ", " + (parseInt(numB) + (count - 1) * 3) + ", " + (parseInt(numC) + (count - 1) * 3) + ", " + (parseInt(numD) + (count - 1) * 3) : parseInt(numA) - 1 + (count - 12) * 3 + ", " + (parseInt(numB) - 1 + (count - 12) * 3) + ", " + (parseInt(numC) - 1 + (count - 12) * 3) + ", " + (parseInt(numD) - 1 + (count - 12) * 3);
                var objType = "corner_bet";
                cbbb.onclick = function() {
                    setBet(this, num, objType, 8);
                };
                cbbb.oncontextmenu = function(e) {
                    e.preventDefault();
                    removeBet(this, num, objType, 8);
                };
                wlcb.append(cbbb);
            }
            wl.append(wlcb);
        }
        bettingBoard.append(wl);
        let bbtop = document.createElement("div");
        bbtop.setAttribute("class", "bbtop");
        let bbtopBlocks = [
            "1 to 18",
            "19 to 36"
        ];
        for(i = 0; i < bbtopBlocks.length; i++){
            let f = i;
            var bbtoptwo = document.createElement("div");
            bbtoptwo.setAttribute("class", "bbtoptwo");
            let num = f == 0 ? "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18" : "19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36";
            var objType = f == 0 ? "outside_low" : "outside_high";
            bbtoptwo.onclick = function() {
                setBet(this, num, objType, 1);
            };
            bbtoptwo.oncontextmenu = function(e) {
                e.preventDefault();
                removeBet(this, num, objType, 1);
            };
            bbtoptwo.innerText = bbtopBlocks[i];
            bbtop.append(bbtoptwo);
        }
        bettingBoard.append(bbtop);
        let numberBoard = document.createElement("div");
        numberBoard.setAttribute("class", "number_board");
        let zero = document.createElement("div");
        zero.setAttribute("class", "number_0");
        var objType = "zero";
        var odds = 35;
        zero.onclick = function() {
            setBet(this, "0", objType, odds);
        };
        zero.oncontextmenu = function(e) {
            e.preventDefault();
            removeBet(this, "0", objType, odds);
        };
        let nbnz = document.createElement("div");
        nbnz.setAttribute("class", "nbn");
        nbnz.innerText = "0";
        zero.append(nbnz);
        numberBoard.append(zero);
        var numberBlocks = [
            3,
            6,
            9,
            12,
            15,
            18,
            21,
            24,
            27,
            30,
            33,
            36,
            "2 to 1",
            2,
            5,
            8,
            11,
            14,
            17,
            20,
            23,
            26,
            29,
            32,
            35,
            "2 to 1",
            1,
            4,
            7,
            10,
            13,
            16,
            19,
            22,
            25,
            28,
            31,
            34,
            "2 to 1"
        ];
        var redBlocks = [
            1,
            3,
            5,
            7,
            9,
            12,
            14,
            16,
            18,
            19,
            21,
            23,
            25,
            27,
            30,
            32,
            34,
            36
        ];
        for(i = 0; i < numberBlocks.length; i++){
            let a = i;
            var nbClass = numberBlocks[i] == "2 to 1" ? "tt1_block" : "number_block";
            var colourClass = redBlocks.includes(numberBlocks[i]) ? " redNum" : nbClass == "number_block" ? " blackNum" : "";
            var numberBlock = document.createElement("div");
            numberBlock.setAttribute("class", nbClass + colourClass);
            numberBlock.onclick = function() {
                if (numberBlocks[a] != "2 to 1") setBet(this, "" + numberBlocks[a] + "", "inside_whole", 35);
                else {
                    num = a == 12 ? "3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36" : a == 25 ? "2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35" : "1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34";
                    setBet(this, num, "outside_column", 2);
                }
            };
            numberBlock.oncontextmenu = function(e) {
                e.preventDefault();
                if (numberBlocks[a] != "2 to 1") removeBet(this, "" + numberBlocks[a] + "", "inside_whole", 35);
                else {
                    num = a == 12 ? "3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36" : a == 25 ? "2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35" : "1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34";
                    removeBet(this, num, "outside_column", 2);
                }
            };
            var nbn = document.createElement("div");
            nbn.setAttribute("class", "nbn");
            nbn.innerText = numberBlocks[i];
            numberBlock.append(nbn);
            numberBoard.append(numberBlock);
        }
        bettingBoard.append(numberBoard);
        let bo3Board = document.createElement("div");
        bo3Board.setAttribute("class", "bo3_board");
        let bo3Blocks = [
            "1 to 12",
            "13 to 24",
            "25 to 36"
        ];
        for(i = 0; i < bo3Blocks.length; i++){
            let b = i;
            var bo3Block = document.createElement("div");
            bo3Block.setAttribute("class", "bo3_block");
            bo3Block.onclick = function() {
                num = b == 0 ? "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12" : b == 1 ? "13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24" : "25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36";
                setBet(this, num, "outside_dozen", 2);
            };
            bo3Block.oncontextmenu = function(e) {
                e.preventDefault();
                num = b == 0 ? "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12" : b == 1 ? "13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24" : "25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36";
                removeBet(this, num, "outside_dozen", 2);
            };
            bo3Block.innerText = bo3Blocks[i];
            bo3Board.append(bo3Block);
        }
        bettingBoard.append(bo3Board);
        let otoBoard = document.createElement("div");
        otoBoard.setAttribute("class", "oto_board");
        let otoBlocks = [
            "EVEN",
            "RED",
            "BLACK",
            "ODD"
        ];
        for(i = 0; i < otoBlocks.length; i++){
            let d = i;
            var colourClass = otoBlocks[i] == "RED" ? " redNum" : otoBlocks[i] == "BLACK" ? " blackNum" : "";
            var otoBlock = document.createElement("div");
            otoBlock.setAttribute("class", "oto_block" + colourClass);
            otoBlock.onclick = function() {
                num = d == 0 ? "2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36" : d == 1 ? "1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36" : d == 2 ? "2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35" : "1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35";
                setBet(this, num, "outside_oerb", 1);
            };
            otoBlock.oncontextmenu = function(e) {
                num = d == 0 ? "2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36" : d == 1 ? "1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36" : d == 2 ? "2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35" : "1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35";
                e.preventDefault();
                removeBet(this, num, "outside_oerb", 1);
            };
            otoBlock.innerText = otoBlocks[i];
            otoBoard.append(otoBlock);
        }
        bettingBoard.append(otoBoard);
        let chipDeck = document.createElement("div");
        chipDeck.setAttribute("class", "chipDeck");
        let chipValues = [
            1,
            5,
            10,
            100,
            "clear"
        ];
        for(i = 0; i < chipValues.length; i++){
            let cvi = i;
            let chipColour = i == 0 ? "red" : i == 1 ? "blue cdChipActive" : i == 2 ? "orange" : i == 3 ? "gold" : "clearBet";
            let chip = document.createElement("div");
            chip.setAttribute("class", "cdChip " + chipColour);
            chip.onclick = function() {
                if (cvi !== 4) {
                    let cdChipActive = document.getElementsByClassName("cdChipActive");
                    for(i = 0; i < cdChipActive.length; i++)cdChipActive[i].classList.remove("cdChipActive");
                    let curClass = this.getAttribute("class");
                    if (!curClass.includes("cdChipActive")) this.setAttribute("class", curClass + " cdChipActive");
                    wager = parseInt(chip.childNodes[0].innerText);
                } else {
                    bankValue = bankValue + currentBet;
                    currentBet = 0;
                    document.getElementById("bankSpan").innerText = "" + bankValue.toLocaleString("en-GB") + "";
                    document.getElementById("betSpan").innerText = "" + currentBet.toLocaleString("en-GB") + "";
                    clearBet();
                    removeChips();
                }
            };
            let chipSpan = document.createElement("span");
            chipSpan.setAttribute("class", "cdChipSpan");
            chipSpan.innerText = chipValues[i];
            chip.append(chipSpan);
            chipDeck.append(chip);
        }
        bettingBoard.append(chipDeck);
        let bankContainer = document.createElement("div");
        bankContainer.setAttribute("class", "bankContainer");
        let bank = document.createElement("div");
        bank.setAttribute("class", "bank");
        let bankSpan = document.createElement("span");
        bankSpan.setAttribute("id", "bankSpan");
        bankSpan.innerText = "" + bankValue.toLocaleString("en-GB") + "";
        bank.append(bankSpan);
        bankContainer.append(bank);
        let bet = document.createElement("div");
        bet.setAttribute("class", "bet");
        let betSpan = document.createElement("span");
        betSpan.setAttribute("id", "betSpan");
        betSpan.innerText = "" + currentBet.toLocaleString("en-GB") + "";
        bet.append(betSpan);
        bankContainer.append(bet);
        bettingBoard.append(bankContainer);
        let pnBlock = document.createElement("div");
        pnBlock.setAttribute("class", "pnBlock");
        let pnContent = document.createElement("div");
        pnContent.setAttribute("id", "pnContent");
        pnContent.onwheel = function(e) {
            e.preventDefault();
            pnContent.scrollLeft += e.deltaY;
        };
        pnBlock.append(pnContent);
        bettingBoard.append(pnBlock);
        container.append(bettingBoard);
    }
    function clearBet() {
        bet1 = [];
        numbersBet = [];
    }
    function setBet(e, n, t, o) {
        lastWager = wager;
        wager = bankValue < wager ? bankValue : wager;
        if (wager > 0) {
            if (!container.querySelector(".spinBtn")) {
                let spinBtn = document.createElement("div");
                spinBtn.setAttribute("class", "spinBtn");
                spinBtn.innerText = "spin";
                spinBtn.onclick = function() {
                    this.remove();
                    spin();
                };
                container.append(spinBtn);
            }
            bankValue = bankValue - wager;
            currentBet = currentBet + wager;
            document.getElementById("bankSpan").innerText = "" + bankValue.toLocaleString("en-GB") + "";
            document.getElementById("betSpan").innerText = "" + currentBet.toLocaleString("en-GB") + "";
            for(i = 0; i < bet1.length; i++)if (bet1[i].numbers == n && bet1[i].type == t) {
                bet1[i].amt = bet1[i].amt + wager;
                let chipColour = bet1[i].amt < 5 ? "red" : bet1[i].amt < 10 ? "blue" : bet1[i].amt < 100 ? "orange" : "gold";
                e.querySelector(".chip").style.cssText = "";
                e.querySelector(".chip").setAttribute("class", "chip " + chipColour);
                let chipSpan = e.querySelector(".chipSpan");
                chipSpan.innerText = bet1[i].amt;
                return;
            }
            var obj = {
                amt: wager,
                type: t,
                odds: o,
                numbers: n
            };
            bet1.push(obj);
            let numArray = n.split(",").map(Number);
            for(i = 0; i < numArray.length; i++)if (!numbersBet.includes(numArray[i])) numbersBet.push(numArray[i]);
            if (!e.querySelector(".chip")) {
                let chipColour = wager < 5 ? "red" : wager < 10 ? "blue" : wager < 100 ? "orange" : "gold";
                let chip = document.createElement("div");
                chip.setAttribute("class", "chip " + chipColour);
                let chipSpan = document.createElement("span");
                chipSpan.setAttribute("class", "chipSpan");
                chipSpan.innerText = wager;
                chip.append(chipSpan);
                e.append(chip);
            }
        }
    }
    function spin() {
        var winningSpin = Math.floor(Math.random() * 36);
        spinWheel(winningSpin);
        setTimeout(function() {
            if (numbersBet.includes(winningSpin)) {
                let winValue = 0;
                let betTotal = 0;
                for(i = 0; i < bet1.length; i++){
                    var numArray = bet1[i].numbers.split(",").map(Number);
                    if (numArray.includes(winningSpin)) {
                        bankValue = bankValue + bet1[i].odds * bet1[i].amt + bet1[i].amt;
                        winValue = winValue + bet1[i].odds * bet1[i].amt;
                        betTotal = betTotal + bet1[i].amt;
                    }
                }
                win(winningSpin, winValue, betTotal);
            }
            currentBet = 0;
            document.getElementById("bankSpan").innerText = "" + bankValue.toLocaleString("en-GB") + "";
            document.getElementById("betSpan").innerText = "" + currentBet.toLocaleString("en-GB") + "";
            let pnClass = numRed.includes(winningSpin) ? "pnRed" : winningSpin == 0 ? "pnGreen" : "pnBlack";
            let pnContent = document.getElementById("pnContent");
            let pnSpan = document.createElement("span");
            pnSpan.setAttribute("class", pnClass);
            pnSpan.innerText = winningSpin;
            pnContent.append(pnSpan);
            pnContent.scrollLeft = pnContent.scrollWidth;
            bet1 = [];
            numbersBet = [];
            removeChips();
            wager = lastWager;
            if (bankValue == 0 && currentBet == 0) gameOver();
        }, 10000);
    }
    function win(winningSpin, winValue, betTotal) {
        if (winValue > 0) {
            let notification = document.createElement("div");
            notification.setAttribute("id", "notification");
            let nSpan = document.createElement("div");
            nSpan.setAttribute("class", "nSpan");
            let nsnumber = document.createElement("span");
            nsnumber.setAttribute("class", "nsnumber");
            nsnumber.style.cssText = numRed.includes(winningSpin) ? "color:red" : "color:black";
            nsnumber.innerText = winningSpin;
            nSpan.append(nsnumber);
            let nsTxt = document.createElement("span");
            nsTxt.innerText = " Win";
            nSpan.append(nsTxt);
            let nsWin = document.createElement("div");
            nsWin.setAttribute("class", "nsWin");
            let nsWinBlock = document.createElement("div");
            nsWinBlock.setAttribute("class", "nsWinBlock");
            nsWinBlock.innerText = "Bet: " + betTotal;
            nSpan.append(nsWinBlock);
            nsWin.append(nsWinBlock);
            nsWinBlock = document.createElement("div");
            nsWinBlock.setAttribute("class", "nsWinBlock");
            nsWinBlock.innerText = "Win: " + winValue;
            nSpan.append(nsWinBlock);
            nsWin.append(nsWinBlock);
            nsWinBlock = document.createElement("div");
            nsWinBlock.setAttribute("class", "nsWinBlock");
            nsWinBlock.innerText = "Payout: " + (winValue + betTotal);
            nsWin.append(nsWinBlock);
            nSpan.append(nsWin);
            notification.append(nSpan);
            container.prepend(notification);
            setTimeout(function() {
                notification.style.cssText = "opacity:0";
            }, 3000);
            setTimeout(function() {
                notification.remove();
            }, 4000);
        }
    }
    function removeBet(e, n, t, o) {
        wager = wager == 0 ? 100 : wager;
        for(i = 0; i < bet1.length; i++){
            if (bet1[i].numbers == n && bet1[i].type == t) {
                if (bet1[i].amt != 0) {
                    wager = bet1[i].amt > wager ? wager : bet1[i].amt;
                    bet1[i].amt = bet1[i].amt - wager;
                    bankValue = bankValue + wager;
                    currentBet = currentBet - wager;
                    document.getElementById("bankSpan").innerText = "" + bankValue.toLocaleString("en-GB") + "";
                    document.getElementById("betSpan").innerText = "" + currentBet.toLocaleString("en-GB") + "";
                    if (bet1[i].amt == 0) e.querySelector(".chip").style.cssText = "display:none";
                    else {
                        let chipColour = bet1[i].amt < 5 ? "red" : bet1[i].amt < 10 ? "blue" : bet1[i].amt < 100 ? "orange" : "gold";
                        e.querySelector(".chip").setAttribute("class", "chip " + chipColour);
                        let chipSpan = e.querySelector(".chipSpan");
                        chipSpan.innerText = bet1[i].amt;
                    }
                }
            }
        }
        if (currentBet == 0 && container.querySelector(".spinBtn")) document.getElementsByClassName("spinBtn")[0].remove();
    }
    function spinWheel(winningSpin) {
        for(i = 0; i < wheelnumbersAC.length; i++)if (wheelnumbersAC[i] == winningSpin) var degree = i * 9.73 + 362;
        wheel1.style.cssText = "animation: wheelRotate 5s linear infinite;";
        ballTrack1.style.cssText = "animation: ballRotate 1s linear infinite;";
        setTimeout(function() {
            ballTrack1.style.cssText = "animation: ballRotate 2s linear infinite;";
            style = document.createElement("style");
            style.type = "text/css";
            style.innerText = "@keyframes ballStop {from {transform: rotate(0deg);}to{transform: rotate(-" + degree + "deg);}}";
            document.head.appendChild(style);
        }, 2000);
        setTimeout(function() {
            ballTrack1.style.cssText = "animation: ballStop 3s linear;";
        }, 6000);
        setTimeout(function() {
            ballTrack1.style.cssText = "transform: rotate(-" + degree + "deg);";
        }, 9000);
        setTimeout(function() {
            wheel1.style.cssText = "";
            style.remove();
        }, 10000);
    }
    function removeChips() {
        var chips = document.getElementsByClassName("chip");
        if (chips.length > 0) {
            for(i = 0; i < chips.length; i++)chips[i].remove();
            removeChips();
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["ShInH","8lqZg"], "8lqZg", "parcelRequired7c6")

//# sourceMappingURL=index.975ef6c8.js.map
