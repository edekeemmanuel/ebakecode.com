//setting up cache series
const CACHE_VERSION = 1;
const EBakeCode_CACHES = {
  font: `font-cache-v${CACHE_VERSION}`,
};
const url = "/Offline.jsx";
/* likely CRUD operation in cache*/
//move resources into cache
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("EBakeCode_CACHES");
  /* Setting {cache: 'reload'} in the new request, so that the response isn't done from the HTTP cache; (meanwhile it will be from the network). */
  await cache.add(new Request(url, { cache: "reload" }));
  await cache.addAll(resources);
  alert("my resources", resources)
}; 
self.addEventListener("install", (event) => {
  alert("installing service worker!!!")
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/src/",
      "/src/App.jsx",
      "/src/main.jsx",
      "/src/styles/scss/main.scss",
      "/src/components/cache.js",
      "/src/images",
      "/src/images/ebakecode.jpg",
      "/src/images/ebakecode-1.jpg",
    ])
    // Force the waiting service worker to become active
    .then (()=>{
      self.SkipWaiting()
    })
  );
});
//updating resources into cache
const putInCache = async (request, response) => {
  const cache = await caches.open("EBakeCode_CACHES");
  await cache.put(request, response);
  alert(request, response)
};
//get resources into cache
const getCache = async ({ request, url, preloadResponsePromise }) => {
  alert("Handling fetch event for", request);
  /**
   * @param {*} request - event.request.url
   * @param {String} url - Offline.jsx
   * @param {*} preloadResponsePromise - event.preloadResponse
   * @summary responseFromCache => send back response of the requested resources save in the cache
   */
  // requesting the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    /*
      Once resources enter the cache for event.request = request, so the response is defined and can be return.
    */
    alert("Found response in cache", responseFromCache);       
    return responseFromCache;
  }
  /*
    if resources not found in the cache, response will be undefined and then go ahead to fetch() for it.
  */
  alert(" Resource not found in the cache. Fetching " + "from network…",
    request,
  );
  /** 
   *  @summary using .clone() from cache.put(), since both fetch() and cache.put() consume the request, so it can make a copy of it.
   * @function putInCache 
   * @return updated/copied resources in the cache
  */
  // preloaded response once cache is found
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    alert("using preload response", preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }
  // getting the resource from the network
  try {
    const responseFromNetwork = await fetch(request);
    alert(" Response for the resources from network is loading %O",request, responseFromNetwork);
    // setting up one clone copies of the resources into the cache and return the second one 
    putInCache(request, responseFromNetwork.clone())
    .then((responseFromNetwork) => {
      if (
          responseFromNetwork.status < 400 &&
          responseFromNetwork.headers.has("content-type") &&
          responseFromNetwork.headers.get("content-type").match(/^font\//i)
        ) { 
          /**
           * @summary this avoids caching error https response but instead cache Content-Type response header for FONT 
           * @default some other resources from cross-origin can be cache export does that support CORS
          */
          alert("  Caching the response to", request);
          /*
          keeping a copy of the clone Response into the cache and the return it back to the user
          */
          putInCache(request, responseFromNetwork.clone());
          } else {
              alert("  Not caching the response to", request);
          }
    })
    return responseFromNetwork;
  } 
  catch (error) {
    const fallbackResponse = await caches.match(url);
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
  }
};
self.addEventListener("fetch", (event) => {
  event.respondWith(
    getCache({
      request: event.request,
      url: "/Offline.jsx",
      preloadResponsePromise: event.preloadResponse
    }),
  );
});
self.addEventListener("activate", (event) => {
  // Delete all caches that aren't named in EBakeCode_CACHES
  const deleteCache = async (key) => {
  await caches.delete(key);
  };
  const deleteOldCaches = async () => {
  const cacheKeepList = ["v2"];
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
  await Promise.all(cachesToDelete.map(deleteCache));
  };
  const expectedCacheNamesSet = new Set(Object.values(EBakeCode_CACHES));
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!expectedCacheNamesSet.has(cacheName)) {
            // delete cache not found in EBakeCode_CACHES
            console.log("Deleting out of date cache:", cacheName);
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
    //enable navigation preload
    (async () =>{
      if ("navigationPreload" in self.registration) {
      await self.registration.navigationPreload.enable();
      }
    })()
  );
  // send response to the active service wotker to get the package
  self.clients.claim();
});