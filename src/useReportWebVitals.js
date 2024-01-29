"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportWebVitals = void 0;
var attribution_1 = require("web-vitals/attribution");
var reportWebVitals = function (reportHandler) {
    var script = document.createElement('script');
    script.src = "https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js";
    +document.head.appendChild(script);
    script.onload = function () {
        // When loading `web-vitals` using a classic script, all the public
        // methods can be found on the `webVitals` global namespace.
        (0, attribution_1.onCLS)(reportHandler);
        (0, attribution_1.onFID)(reportHandler);
        (0, attribution_1.onLCP)(reportHandler);
        console.log("webVitals starting...");
    };
    alert("web");
    console.log("webvitals: ", script);
};
exports.reportWebVitals = reportWebVitals;
