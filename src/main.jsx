import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import useServiceWorker from "./controller/useServiceWorker.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
useServiceWorker();