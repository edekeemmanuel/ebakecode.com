export const reportWebVitals = (reportHandler) => {
  var script = document.createElement('script');
  //"https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js"
  script.src = 'https://unpkg.com/web-vitals@3/dist/web-vitals.attribution.iife.js';
  document.head.appendChild(script);
  script.onload = function () {
    // When loading `web-vitals` using a classic script, all the public
    // methods can be found on the `webVitals` global namespace.
     webVitals.onCLS(reportHandler);
     webVitals.onFID(reportHandler);
     webVitals.onLCP(reportHandler);
     let wev = new webVitals.onFID();
     console.log("webVitals", wev);
    console.log("webVitals starting...");
  };
  alert("web")
  console.log("webvitals: ", script);
};
