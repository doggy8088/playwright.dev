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
exports.ProfileCards = ProfileCards;
var react_1 = require("react");
var styles_module_css_1 = require("./styles.module.css");
function ProfileCard(_a) {
    var person = _a.person;
    return (<li>
      <div className={styles_module_css_1.default.card}>
        <div className={styles_module_css_1.default.cardBody}>
          <div className="avatar avatar--vertical">
            <img className="avatar__photo avatar__photo--xl" src={"../img/ambassadors/".concat(person.imageUrl)} alt={"".concat(person.name, "'s avatar")}/>
          </div>
          <div className={styles_module_css_1.default.intro}>
            <span className={styles_module_css_1.default.name}>{person.name}</span>
            <p className={styles_module_css_1.default.city}>{person.city}</p>
            <p className={styles_module_css_1.default.country}>{person.country}</p>
            <p className={styles_module_css_1.default.languages}>{person.languages}</p>
          </div>
        </div>
        <div className={styles_module_css_1.default.socialLinks}>
          {person.githubUrl && (<a className="header-github-link" href={person.githubUrl} aria-label='GitHub'></a>)}
          {person.twitterUrl && (<a className={styles_module_css_1.default.twitterLink} href={person.twitterUrl} aria-label='Twitter'></a>)}
          {person.websiteUrl && (<a className={styles_module_css_1.default.websiteLink} href={person.websiteUrl} aria-label="Website"></a>)}
          {person.linkedInUrl && (<a className={styles_module_css_1.default.linkedInLink} href={person.linkedInUrl} aria-label="LinkedIn"></a>)}
        </div>
      </div>
    </li>);
}
function ProfileCards(_a) {
    var people = _a.people;
    return (<section className="margin-top--lg margin-bottom--xl">
      <div className="container">
        <ul className={styles_module_css_1.default.cards}>
          {people.map(function (person) { return (<ProfileCard key={person.name} person={person}/>); })}
        </ul>
      </div>
    </section>);
}
