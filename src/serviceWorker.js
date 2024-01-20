export const serviceWorkers =  () => {
  if ("serviceWorker" in navigator) { 
    try {
        //* Register a service worker hosted at the root of the
        // site using the default scope.
        const registration = navigator.serviceWorker.register("/serviceWorker.js", {scope: "/"});
        alert("reg", registration)
        if (registration.installing) {
           console.log("Service worker installing", registration.installing);
           alert("reg")
        } else if (registration.waiting) {
           console.log("Service worker installed", registration.waiting);
        } else if (registration.active) {
           console.log("Service worker active", registration.active);
        }
    }
    catch (error) {
      console.error(`Registration failed with ${error}`);
    }
    //* Ready serviceWorker
    if ("serviceWorker" in navigator) { 
      try {
         navigator.serviceWorker.getRegistrations("/serviceWorker.js", {scope: "/"})
        .then( (registration) => {
           alert("ready")
           console.log("Service worker ready:", registration);
        });
      }
      catch (error) {
        console.error(`Service worker not ready: ${error}`);
        }
    } 
    else {
      console.info("Service workers are not supported.");
    }
  }
  alert("me")
};