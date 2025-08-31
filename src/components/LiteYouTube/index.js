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
var react_lite_youtube_embed_1 = require("react-lite-youtube-embed");
require("react-lite-youtube-embed/dist/LiteYouTubeEmbed.css");
var styles_module_css_1 = require("./styles.module.css");
function LiteYouTube(_a) {
    var id = _a.id, title = _a.title, thumbnail = _a.thumbnail;
    return (<div className={styles_module_css_1.default.videoContainer}>
      <react_lite_youtube_embed_1.default thumbnail={thumbnail} id={id} params="autoplay=1&autohide=1&showinfo=0&rel=0" title={title} poster="hqdefault" webp/>
    </div>);
}
exports.default = LiteYouTube;
