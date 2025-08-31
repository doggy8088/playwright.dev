"use strict";
/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProgressiveImage;
var react_1 = require("react");
var IdealImageLegacy_1 = require("@theme-original/IdealImageLegacy");
function shouldAutoDownload() {
    return true;
}
// This is duplicated from plugin-ideal-image in order to always enable automatic download
// image prop is injected by the plugin-ideal-image Webpack plugin
function ProgressiveImage(_a) {
    var _b = _a.image, preSrc = _b.preSrc, src = _b.src, alt = _a.alt;
    return (<IdealImageLegacy_1.default placeholder={{ lqip: preSrc }} alt={alt} src={src.src} srcSet={src.images.map(function (image) { return (__assign(__assign({}, image), { src: image.path })); })} shouldAutoDownload={shouldAutoDownload}/>);
}
