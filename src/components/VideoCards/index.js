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
var clsx_1 = require("clsx");
var Link_1 = require("@docusaurus/Link");
var LiteYouTube_1 = require("@site/src/components/LiteYouTube");
var styles_module_css_1 = require("./styles.module.css");
function VideoCards(_a) {
    var videos = _a.videos;
    return (<section className="margin-top--lg margin-bottom--xl">
      <div className="container">
        <ul className={(0, clsx_1.default)('clean-list', styles_module_css_1.default.videoList)}>
          {videos.map(function (video, i) { return (<VideoCard key={i} video={video}/>); })}
        </ul>
      </div>
    </section>);
}
function videoToReleasePageAnchor(video) {
    var versions = video.version.split(' & ');
    return "version-".concat(versions[versions.length - 1].replace('.', ''));
}
function VideoCard(_a) {
    var video = _a.video;
    return (<li key={video.title} className="card shadow--md">
      <div className={styles_module_css_1.default.videoCardVideo}>
        {video.id ? (<LiteYouTube_1.default id={video.id} title={video.title} thumbnail={video.thumbnail}/>) : (<a href={video.url} target="_blank" rel="noopener noreferrer">
            <img src={video.src} alt={video.title}/>
          </a>)}
      </div>
      <div className="card__body">
        {video.conference || video.host ? (<div className={styles_module_css_1.default.videoCardHeader}>
            <h4 className={styles_module_css_1.default.videoCardTitle}>
              {video.conference || video.host}
            </h4>
            {video.year ? <span>{video.year}</span> : null}
          </div>) : null}

        {video.version ? (<div className={styles_module_css_1.default.videoCardHeader}>
            <Link_1.default href={"/docs/release-notes#".concat(videoToReleasePageAnchor(video))}>
              <h4 className={styles_module_css_1.default.videoCardTitle}>
                Playwright v{video.version}
              </h4>
            </Link_1.default>
          </div>) : null}

        {video.title ? (<p className={styles_module_css_1.default.videoCardTitle}>{video.title}</p>) : null}
      </div>
      <div className="card__footer">
        {video.speakers ? <Speakers video={video}/> : null}
        {video.highlights ? (<div className={styles_module_css_1.default.videoCardHighlights}>
            {<VideoHighlights video={video}/>}
          </div>) : null}
      </div>
    </li>);
}
function Speakers(_a) {
    var video = _a.video;
    return (<div className={styles_module_css_1.default.videoCardTags}>
      <div>
        {video.speakers
            ? video.speakers.map(function (speaker) { return (<span className={styles_module_css_1.default.speaker}>{speaker} &nbsp;</span>); })
            : null}
      </div>
      {video.language ? (<span className={styles_module_css_1.default.language}>{video.language}</span>) : null}
    </div>);
}
function VideoHighlights(_a) {
    var video = _a.video;
    return (<div className={styles_module_css_1.default.videoCardHighlights}>
      {video.highlights
            ? video.highlights.map(function (highlight) { return (<span key={highlight} className={styles_module_css_1.default.tag}>
              {highlight} &nbsp;
            </span>); })
            : null}
    </div>);
}
exports.default = VideoCards;
