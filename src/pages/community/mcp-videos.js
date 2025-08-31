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
exports.default = Video;
var react_1 = require("react");
var Layout_1 = require("@theme/Layout");
var VideoCards_1 = require("@site/src/components/VideoCards");
var PageHeader_1 = require("@site/src/components/PageHeader");
var Navigation_1 = require("@site/src/components/Navigation");
var video_nav_1 = require("@site/src/data/video-nav");
var mcp_videos_1 = require("@site/src/data/mcp-videos");
var TITLE = 'MCP Videos';
var DESCRIPTION = 'Learn about Model Context Protocol (MCP) integration with Playwright';
function Video() {
    return (<Layout_1.default title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <PageHeader_1.default title={TITLE} description={DESCRIPTION}/>
        <Navigation_1.default links={video_nav_1.default}/>
        <VideoCards_1.default videos={mcp_videos_1.default}/>
      </main>
    </Layout_1.default>);
}
