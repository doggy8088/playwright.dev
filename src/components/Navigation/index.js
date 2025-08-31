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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
var styles_module_css_1 = require("./styles.module.css");
function Navigation(_a) {
    var links = _a.links;
    return (<nav className="container">
      <ul className={styles_module_css_1.default.nav}>
        {links.map(function (link, i) { return (<li key={i} className={styles_module_css_1.default.links}>
            <Link_1.default href={link.href}>{link.label}</Link_1.default>
          </li>); })}
      </ul>
    </nav>);
}
exports.default = Navigation;
