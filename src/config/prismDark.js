"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// https://github.com/facebook/docusaurus/blob/main/website/src/utils/prismDark.ts
var prism_react_renderer_1 = require("prism-react-renderer");
var darkTheme = prism_react_renderer_1.themes.vsDark;
exports.default = {
    plain: {
        color: '#D4D4D4',
        backgroundColor: '#212121',
    },
    styles: __spreadArray(__spreadArray([], __read(darkTheme.styles), false), [
        {
            types: ['title'],
            style: {
                color: '#569CD6',
                fontWeight: 'bold',
            },
        },
        {
            types: ['property', 'parameter'],
            style: {
                color: '#9CDCFE',
            },
        },
        {
            types: ['script'],
            style: {
                color: '#D4D4D4',
            },
        },
        {
            types: ['boolean', 'arrow', 'atrule', 'tag'],
            style: {
                color: '#569CD6',
            },
        },
        {
            types: ['number', 'color', 'unit'],
            style: {
                color: '#B5CEA8',
            },
        },
        {
            types: ['font-matter'],
            style: {
                color: '#CE9178',
            },
        },
        {
            types: ['keyword', 'rule'],
            style: {
                color: '#C586C0',
            },
        },
        {
            types: ['regex'],
            style: {
                color: '#D16969',
            },
        },
        {
            types: ['maybe-class-name'],
            style: {
                color: '#4EC9B0',
            },
        },
        {
            types: ['constant'],
            style: {
                color: '#4FC1FF',
            },
        },
    ], false),
};
