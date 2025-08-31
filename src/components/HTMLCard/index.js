"use strict";
/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License");
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
var webView_module_css_1 = require("./webView.module.css");
var styles_module_css_1 = require("./styles.module.css");
var HTMLCard = function (_a) {
    var children = _a.children;
    return <div className={styles_module_css_1.default.card}>
    <div className={styles_module_css_1.default.header}>
      <div style={{ whiteSpace: 'nowrap' }}>
        <span className={styles_module_css_1.default.dot} style={{ backgroundColor: 'rgb(242, 95, 88)' }}></span>
        <span className={styles_module_css_1.default.dot} style={{ backgroundColor: 'rgb(251, 190, 60)' }}></span>
        <span className={styles_module_css_1.default.dot} style={{ backgroundColor: 'rgb(88, 203, 66)' }}></span>
      </div>
      <div className={styles_module_css_1.default.addressBar}>http://localhost:3000</div>
      <div style={{ marginLeft: 'auto' }}>
        <div>
          <span className={styles_module_css_1.default.menuBar}></span>
          <span className={styles_module_css_1.default.menuBar}></span>
          <span className={styles_module_css_1.default.menuBar}></span>
        </div>
      </div>
    </div>
    <div className={styles_module_css_1.default.body}>
      <div className={"html-card-page ".concat(styles_module_css_1.default.pageSide, " ").concat(webView_module_css_1.default.webView)}>{children[0]}</div>
      <div className={"html-card-code ".concat(styles_module_css_1.default.codeSide)}>{children[1]}</div>
    </div>
  </div>;
};
exports.default = HTMLCard;
