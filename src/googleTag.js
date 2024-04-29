import {CLS, FID, LCP} from "web-vitals/attribution";
//import {name, delta, value, id, attribution} from "https://unpkg.com/web-vitals@3/dist/web-vitals.attribution.iife.js";
export const gootag =  ({name, delta, value, id, attribution}) => {
  var script = document.createElement('script');
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-E51RM2MRD0";
  script.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag(){
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-E51RM2MRD0');
    console.log(gtag('js', new Date()), gtag('config', 'G-E51RM2MRD0'));
    const eventParams = {
    // Built-in params:
    value: delta, // Use `delta` so the value can be summed.
    // Custom params:
    metric_id: id, // Needed to aggregate events.
    metric_value: value, // Optional.
    metric_delta: delta, // Optional.
  };
  switch (name) {
    case 'CLS':
      eventParams.debug_target = attribution.largestShiftTarget;
      break;
    case 'FID':
      eventParams.debug_target = attribution.eventTarget;
      break;
    case 'LCP':
      eventParams.debug_target = attribution.element;
      break;
  }
  // Assumes the global `gtag()` function exists, see:
  // https://developers.google.com/analytics/devguides/collection/ga4
  gtag('event', name, eventParams);
  let analysis = {name, delta, value, id, attribution}
  console.log("gaa",analysis);
  console.log(gtag('event', name, eventParams));
  console.log("gaa", eventParams);
  console.log("goo", script);
  alert("goo")
  }
  document.head.appendChild(script);
  console.log("google",script)
  alert("google")
}
/*
    <!-- Google Tag Manager -->
    <script>
      (
        function(w,d,s,l,i){
          w[l]=w[l]||[];w[l].push({
            'gtm.start': 
            new Date().getTime(),
            event:'gtm.js'
          });
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),
          dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NVTPPXWM');
    </script>
    <!-- End Google Tag Manager -->
    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe 
        src="https://www.googletagmanager.com/ns.html?id=GTM-NVTPPXWM"
        height="0" width="0" style="display:none;visibility:hidden">
      </iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-E51RM2MRD0"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-E51RM2MRD0');
    </script>
*/