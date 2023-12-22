const useServiceWorker = async () => {
  if ("serviceWorker" in navigator) { 
    try {
        //* Register a service worker hosted at the root of the
        // site using the default scope.
        const registration = await navigator.serviceWorker.register("../public/serviceWorker.js", {scope: "../public/"});
        if (registration.installing) {
          alert("Service worker installing");
        } else if (registration.waiting) {
          alert("Service worker installed");
        } else if (registration.active) {
          alert("Service worker active");
        }
    }
    catch (error) {
      alert(`Registration failed with ${error}`);
    }
    //* Ready serviceWorker
    navigator.serviceWorker.ready("../public/serviceWorker.js", {scope: "../public/"}).then(
    (registration) => {
      alert("Service worker ready:", registration);
    },
    (error) => {
      alert(`Service worker not ready: ${error}`);
    },
  );
  } else {
      alert("Service workers are not supported.");
  }
}
export default useServiceWorker;