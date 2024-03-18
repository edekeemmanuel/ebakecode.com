import {onCLS, onFID, onLCP,} from 'web-vitals/attribution';

export const reportWebVitals = (reportHandler: any) => {
  var script = document.createElement('script');
  script.src= "https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js";+
  document.head.appendChild(script);
  script.onload = function () {
    // When loading `web-vitals` using a classic script, all the public
    // methods can be found on the `webVitals` global namespace.
     onCLS(reportHandler);
     onFID(reportHandler);
     onLCP(reportHandler);
  };
};