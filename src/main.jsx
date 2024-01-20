import React from 'react';
import ReactDOM from 'react-dom/client';
import EBakeCode from './EBakeCode.jsx';
import {serviceWorkers, useEruda, reportWebVitals, sendToAnalytics} from "./index.js"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EBakeCode />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
//mobile console using eruda
useEruda();
//offline set up
serviceWorkers();
//check for performance
reportWebVitals(sendToAnalytics);
//gootag()