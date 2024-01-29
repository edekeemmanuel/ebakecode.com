"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEruda = void 0;
var eruda_1 = require("eruda");
var useEruda = function () {
    var script = document.createElement('script');
    script.src = "node_modules/eruda/eruda.js";
    document.body.append(script);
    script.onload = function () {
        eruda_1.default.init({
            container: script,
            tool: ['console', 'elements']
        });
    };
};
exports.useEruda = useEruda;
