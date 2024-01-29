export const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/serviceWorker.ts", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
      alert("serviceWorker registered")
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
  //* Ready serviceWorker
  if ("serviceWorker" in navigator) { 
      try {
         navigator.serviceWorker.getRegistration("/serviceWorker.ts").then((registration) => {
              if (registration) {
              alert("ready")
              console.log("Service worker ready:", registration);
              }
          });
          alert("serviceWorker ready")
      }
      catch (error) {
        console.error(`Service worker not ready: ${error}`);
        }
    } 
  else {
      console.info("Service workers are not supported.");
    }
}

registerServiceWorker();