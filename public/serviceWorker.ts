//setting up cache series
var cacheName = "EBakeCode-cache-v1";
var ebakecodeCaches = {
  font: "font-cache-v1"
};
var cacheAssets = [
  "./Offline.tsx",
  "./offline.module.css"
  ]
  var url = "./Offline.tsx";
  
// Call install Event : move resources into cache
self.addEventListener('install', e => { 
    // Wait until promise is finished  
    e.waitUntil( 
        caches.open(cacheName) 
        .then(cache => { 
            console.log(`Service Worker: Caching Files: ${cache}`); 
            /* Setting {cache: 'reload'} in the new request, so that the response isn't done from the HTTP cache; (meanwhile it will be from the network). */
              cache.add(new Request(url, { cache: "reload" }));
              cache.addAll(cacheAssets)
              // When everything is set 
              // Force the waiting service worker to become active  
                .then(() => self.skipWaiting()) 
        }) 
    )!; 
}) 

// Call Activate Event 
self.addEventListener("activate", (event) => {
  // Delete all caches that aren't named in EBakeCode_CACHES
  const deleteCache = async (key) => {
  await caches.delete(key);
  };
  const expectedCacheNamesSet = new Set(Object.values(cacheName));
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
    })(),
    (async () => {
  const cacheKeepList = ["v2"];
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
  await Promise.all(cachesToDelete.map(deleteCache));
  })()
  );
  // send response to the active service wotker to get the package
  self.clients.claim();
});


/*get resources into cache
const getCaches = ({ request, urls, preloadResponsePromise }) => {
  console.log("Handling fetch event for", request);

};*/

// Call Fetch Event  
self.addEventListener('fetch', e => { 
    console.log('Service Worker: Fetching'); 
    e.respondWith( 
        fetch(e.request) 
        .then(res => { 
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
let putInCaches = (request, response) => {
  const cache =  caches.open("cacheName");
  const cached = cache.put(request, response);
  return cached
  console.log(request, response)
};
  /**
   * @param {*} request - event.request.url
   * @param {String} url - Offline.jsx
   * @param {*} preloadResponsePromise - event.preloadResponse
   * @summary responseFromCache => send back response of the requested resources save in the cache
   */
  // requesting the resource from the cache
  const responseFromCache = caches.match(e.request);
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
  console.log(" Resource not found in the cache. Fetching " + "from network…",
    e.request,
  );
  /** 
   *  @summary using .clone() from cache.put(), since both fetch() and cache.put() consume the request, so it can make a copy of it.
   * @function putInCache 
   * @return updated/copied resources in the cache
  */
  // preloaded response once cache is found
  const preloadResponse =  res;
  if (preloadResponse) {
    console.log("using preload response", preloadResponse);
    putInCaches(e.request, preloadResponse.clone());
    return preloadResponse;
  }
  // getting the resource from the network
  try {
    const responseFromNetwork =  fetch(e.request);
    console.log(" Response for the resources from network is loading %O",e.request, responseFromNetwork);
    // setting up one clone copies of the resources into the cache and return the second one 
    putInCaches(e.request, responseFromNetwork.clone())
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
          console.log("  Caching the response to", e.request);
          /*
          keeping a copy of the clone Response into the cache and the return it back to the user
          */
          putInCaches(e.request, responseFromNetwork.clone());
          } else {
              console.log("  Not caching the response to", e.request);
          }
    })
    return responseFromNetwork;
  } 
  catch (error) {
    const fallbackResponse = caches.match(urls);
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
        }).catch( 
            (err) => {
            console.error(`Service worker not ready: ${err}`);
            caches.match(e.request) 
            .then(res => res) 
        }) 
    ); 
}); 