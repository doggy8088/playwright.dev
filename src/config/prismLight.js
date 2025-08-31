"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
// https://github.com/facebook/docusaurus/blob/main/website/src/utils/prismLight.mjs
var prism_react_renderer_1 = require("prism-react-renderer");
var lightTheme = prism_react_renderer_1.themes.github;
exports.default = __assign(__assign({}, lightTheme), { plain: {
        color: "#2e2e2c",
        backgroundColor: "#f6f8fa"
    }, styles: __spreadArray(__spreadArray([], __read(lightTheme.styles), false), [
        {
            types: ['title'],
            style: {
                color: '#0550AE',
                fontWeight: 'bold',
            },
        },
        {
            types: ["namespace"],
            style: {
                opacity: 0.9
            }
        },
        {
            types: ['parameter'],
            style: {
                color: '#953800',
            },
        },
        {
            types: ['boolean', 'rule', 'color', 'number', 'constant', 'property'],
            style: {
                color: '#005CC5',
            },
        },
        {
            types: ['atrule', 'tag'],
            style: {
                color: '#207f37',
            },
        },
        {
            types: ['script'],
            style: {
                color: '#24292E',
            },
        },
        {
            types: ['operator', 'unit', 'rule'],
            style: {
                color: '#D73A49',
            },
        },
        {
            types: ['font-matter', 'string', 'attr-value'],
            style: {
                color: '#C6105F',
            },
        },
        {
            types: ['class-name'],
            style: {
                color: '#116329',
            },
        },
        {
            types: ['attr-name'],
            style: {
                color: '#0550AE',
            },
        },
        {
            types: ['keyword'],
            style: {
                color: '#CF222E',
            },
        },
        {
            types: ['function'],
            style: {
                color: '#8250DF',
            },
        },
        {
            types: ['selector'],
            style: {
                color: '#6F42C1',
            },
        },
        {
            types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
            style: {
                color: "#257c7a"
            }
        },
        {
            types: ['variable'],
            style: {
                color: '#b74e05',
            },
        },
        {
            types: ['comment'],
            style: {
                color: '#6B6B6B',
            },
        },
    ], false) });
