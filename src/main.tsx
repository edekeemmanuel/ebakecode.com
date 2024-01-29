import React from 'react';
import ReactDOM from 'react-dom/client';
import EBakeCode from './EBakeCode.tsx';
//import {registerServiceWorker, useEruda, reportWebVitals, sendToAnalytics} from "./index.ts"
import  {serviceWorkers} from "./serviceWorker.ts";
import  {useEruda} from "./useEruda.ts";
import {reportWebVitals} from "./useReportWebVitals.ts";
// //export {gootag} from "./googleTag";
import {sendToAnalytics} from "./reportHandler.ts";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./component/Home.tsx"

const router = createBrowserRouter([
  {
    path: "/EBakeCode",
    element: <EBakeCode />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/EBakeCode",
        element: <Home />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//mobile console using eruda
useEruda();
//offline set up
registerServiceWorker();
//check for performance
reportWebVitals(sendToAnalytics);
//gootag()
/*import React from 'react';
import ReactDOM from 'react-dom/client';
import EBakeCode from './EBakeCode.tsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EBakeCode />
  </React.StrictMode>
);*/