var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//setting up cache series
var cacheName = "EBakeCode-cache-v1";
var ebakecodeCaches = {
    font: "font-cache-v1"
};
var cacheAssets = [
    "./Offline.tsx",
    "./offline.module.css"
];
var url = "./Offline.tsx";
// Call install Event : move resources into cache
self.addEventListener('install', function (e) {
    // Wait until promise is finished  
    e.waitUntil(caches.open(cacheName)
        .then(function (cache) {
        console.log("Service Worker: Caching Files: ".concat(cache));
        /* Setting {cache: 'reload'} in the new request, so that the response isn't done from the HTTP cache; (meanwhile it will be from the network). */
        cache.add(new Request(url, { cache: "reload" }));
        cache.addAll(cacheAssets)
            // When everything is set 
            // Force the waiting service worker to become active  
            .then(function () { return self.skipWaiting(); });
    }));
});
// Call Activate Event 
self.addEventListener("activate", function (event) {
    // Delete all caches that aren't named in EBakeCode_CACHES
    var deleteCache = function (key) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, caches.delete(key)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var expectedCacheNamesSet = new Set(Object.values(cacheName));
    event.waitUntil(caches.keys().then(function (cacheNames) {
        return Promise.all(cacheNames.map(function (cacheName) {
            if (!expectedCacheNamesSet.has(cacheName)) {
                // delete cache not found in EBakeCode_CACHES
                console.log("Deleting out of date cache:", cacheName);
                return caches.delete(cacheName);
            }
        }));
    }), 
    //enable navigation preload
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!("navigationPreload" in self.registration)) return [3 /*break*/, 2];
                    return [4 /*yield*/, self.registration.navigationPreload.enable()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); })(), (function () { return __awaiter(void 0, void 0, void 0, function () {
        var cacheKeepList, keyList, cachesToDelete;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cacheKeepList = ["v2"];
                    return [4 /*yield*/, caches.keys()];
                case 1:
                    keyList = _a.sent();
                    cachesToDelete = keyList.filter(function (key) { return !cacheKeepList.includes(key); });
                    return [4 /*yield*/, Promise.all(cachesToDelete.map(deleteCache))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); })());
    // send response to the active service wotker to get the package
    self.clients.claim();
});
/*get resources into cache
const getCaches = ({ request, urls, preloadResponsePromise }) => {
  console.log("Handling fetch event for", request);

};*/
// Call Fetch Event  
self.addEventListener('fetch', function (e) {
    console.log('Service Worker: Fetching');
    e.respondWith(fetch(e.request)
        .then(function (res) {
        // The response is a stream and in order the browser  
        // to consume the response and in the same time the  
        // cache consuming the response it needs to be  
        // cloned in order to have two streams. 
        /*const resClone = res.clone();
        // Open cache
        caches.open(cacheName)
            .then(cache => {
                // Add response to cache
                cache.put(e.request, resClone);
            });
        return res; */
        //updating resources into cache
        var putInCaches = function (request, response) {
            var cache = caches.open("cacheName").then(function (cached) {
                return cached.put(request, response);
            });
            return cache !== null && cache !== void 0 ? cache : { request: request, response: response };
            console.log(request, response);
        };
        /**
         * @param {*} request - event.request.url
         * @param {String} url - Offline.jsx
         * @param {*} preloadResponsePromise - event.preloadResponse
         * @summary responseFromCache => send back response of the requested resources save in the cache
         */
        // requesting the resource from the cache
        var responseFromCache = caches.match(e.request);
        if (responseFromCache) {
            /*
              Once resources enter the cache for event.request = request, so the response is defined and can be return.
            */
            console.log("Found response in cache", responseFromCache);
            return responseFromCache;
        }
        /*
          if resources not found in the cache, response will be undefined and then go ahead to fetch() for it.
        */
        console.log(" Resource not found in the cache. Fetching " + "from network…", e.request);
        /**
         *  @summary using .clone() from cache.put(), since both fetch() and cache.put() consume the request, so it can make a copy of it.
         * @function putInCache
         * @return updated/copied resources in the cache
        */
        // preloaded response once cache is found
        var preloadResponse = res;
        if (preloadResponse) {
            console.log("using preload response", preloadResponse);
            putInCaches(e.request, preloadResponse.clone());
            return preloadResponse;
        }
        // getting the resource from the network
        try {
            var responseFromNetwork = fetch(e.request);
            console.log(" Response for the resources from network is loading %O", e.request, responseFromNetwork);
            // setting up one clone copies of the resources into the cache and return the second one 
            putInCaches(!e.request, responseFromNetwork.clone())
                .then(function (responseFromNetwork) {
                /*  if (
                      responseFromNetwork.status == 400
                    ) {
                      /**
                       * @summary this avoids caching error https response but instead cache Content-Type response header for FONT
                       * @default some other resources from cross-origin can be cache export does that support CORS
                      
                      console.log("  Caching the response to", e.request);
                      /*
                      keeping a copy of the clone Response into the cache and the return it back to the user
                      
                      putInCaches(e.request, responseFromNetwork.clone());
                      } else {
                          console.log("  Not caching the response to", e.request);
                      }*/
                console.log("  Caching the response to", e.request, responseFromNetwork);
            });
            return responseFromNetwork;
        }
        catch (error) {
            var fallbackResponse = caches.match(url);
            if (fallbackResponse) {
                return fallbackResponse;
            }
            /*
            when even the fallback response is not available, we return a Response object
            */
            return new Response("Network error happened", {
                status: 408,
                headers: { "Content-Type": "text/plain" },
            });
            return res;
        }
    }).catch(function (err) {
        console.error("Service worker not ready: ".concat(err));
        caches.match(e.request)
            .then(function (res) { return res; });
    }));
});
