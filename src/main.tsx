import React from 'react';
import ReactDOM from 'react-dom/client';
import EBakeCode from './EBakeCode.tsx';
//import {registerServiceWorker, useEruda, reportWebVitals, sendToAnalytics} from "./index.ts"
import  {registerServiceWorker} from "./serviceWorker.ts";
//import  {useEruda} from "./useEruda.ts";
import {reportWebVitals} from "./useReportWebVitals.ts";
// //export {gootag} from "./googleTag";
import {sendToAnalytics} from "./reportHandler.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EBakeCode />
  </React.StrictMode>
);

//mobile console using eruda
//useEruda();
//offline set up
registerServiceWorker();
//check for performance
reportWebVitals(sendToAnalytics);
//gootag()