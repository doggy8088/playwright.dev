"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var clsx_1 = require("clsx");
var Layout_1 = require("@theme/Layout");
var Link_1 = require("@docusaurus/Link");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var useBaseUrl_1 = require("@docusaurus/useBaseUrl");
var GitHubStarButton_1 = require("../components/GitHubStarButton");
var styles_module_css_1 = require("./styles.module.css");
var features = [
    {
        title: "Any browser \u2022 Any platform \u2022 One API",
        description: <>
      <p>
        <b>Cross-browser.</b> Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox.
      </p>
      <p>
        <b>Cross-platform.</b> Test on Windows, Linux, and macOS, locally or on CI, headless or headed.
      </p>
      <p>
        <b>Cross-language.</b> Use the Playwright API in <a href="https://playwright.dev/docs/intro">TypeScript</a>, <a href="https://playwright.dev/docs/intro">JavaScript</a>, <a href="https://playwright.dev/python/docs/intro">Python</a>, <a href="https://playwright.dev/dotnet/docs/intro">.NET</a>, <a href="https://playwright.dev/java/docs/intro">Java</a>.
      </p>
      <p>
        <b>Test Mobile Web.</b> Native mobile emulation of Google Chrome for Android and Mobile Safari. The same rendering engine works on your Desktop and in the Cloud.
      </p>
    </>,
    },
    {},
    {},
    {
        title: "Resilient \u2022 No flaky tests",
        description: (<>
        <p>
          <b>Auto-wait.</b> Playwright waits for elements to be actionable prior to performing
          actions. It also has a rich set of introspection events. The combination of the two
          eliminates the need for artificial timeouts - the primary cause of flaky tests.
        </p>
        <p>
          <b>Web-first assertions.</b> Playwright assertions are created specifically for the
          dynamic web. Checks are automatically retried until the necessary conditions are met.
        </p>
        <p>
          <b>Tracing.</b> Configure test retry strategy, capture execution trace, videos, screenshots
          to eliminate flakes.
        </p>
      </>),
    },
    {
        title: "No trade-offs \u2022 No limits",
        description: (<>
        <p>
          Browsers run web content belonging to different origins in different processes.
          Playwright is aligned with the modern browsers architecture and runs tests out-of-process.
          This makes Playwright free of the typical in-process test runner limitations.
        </p>
        <p>
          <b>Multiple everything.</b> Test scenarios that span multiple <b>tabs</b>, multiple <b>origins</b> and multiple <b>users</b>.
          Create scenarios with different contexts for different users and run them against your server, all in one test.
        </p>
        <p>
          <b>Trusted events.</b> Hover elements, interact with dynamic controls, produce trusted events.
          Playwright uses real browser input pipeline indistinguishable from the real user.
        </p>
        <p>
          <b>Test frames, pierce Shadow DOM.</b> Playwright selectors pierce shadow DOM and
          allow entering frames seamlessly.
        </p>
      </>),
    },
    {},
    {},
    {
        title: "Full isolation \u2022 Fast execution",
        description: (<>
        <p>
          <b>Browser contexts.</b> Playwright creates a browser context for each test. Browser
          context is equivalent to a brand new browser profile. This delivers full test isolation
          with zero overhead. Creating a new browser context only takes a handful of milliseconds.
        </p>
        <p>
          <b>Log in once.</b> Save the authentication state of the context and reuse it in all the tests.
          This bypasses repetitive log-in operations in each test, yet delivers full isolation of independent tests.
        </p>
      </>),
    },
    {
        title: "Powerful Tooling",
        description: (<>
        <p>
          <b><a href="docs/codegen">Codegen.</a></b> Generate tests by recording your actions. Save them into any language.
        </p>
        <p>
          <b><a href="docs/debug#playwright-inspector">Playwright inspector.</a></b> Inspect page, generate selectors, step through the test execution, see click points, explore execution logs.
        </p>
        <p>
          <b><a href="docs/trace-viewer-intro">Trace Viewer.</a></b> Capture all the information to investigate the test failure. Playwright trace
          contains test execution screencast, live DOM snapshots, action explorer, test source, and many more.
        </p>
      </>),
    },
];
var Feature = function (_a) {
    var imageUrl = _a.imageUrl, title = _a.title, description = _a.description;
    var imgUrl = (0, useBaseUrl_1.default)(imageUrl);
    return (<div className={(0, clsx_1.default)("col col--6", styles_module_css_1.default.feature)} style={{ marginTop: 40 }}>
      {imgUrl && (<div className="text--center">
          <img className={styles_module_css_1.default.featureImage} src={imgUrl} alt={title}/>
        </div>)}
      <h3>{title}</h3>
      <div>{description}</div>
    </div>);
};
var FeatureRow = function (_a) {
    var title = _a.title, description = _a.description, videoUrl = _a.videoUrl, isImageLeft = _a.isImageLeft;
    var textColumn = (<div className={"col col--5"}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>);
    var imageColumn = (<div className={"col col--7"}>
      <video muted controls loop>
        <source src={videoUrl} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>);
    return (<section className={(0, clsx_1.default)(!isImageLeft ? styles_module_css_1.default.featureContainerAlt : undefined)}>
      <div className={"container"}>
        <div className={(0, clsx_1.default)("row", styles_module_css_1.default.featureRow, !isImageLeft ? styles_module_css_1.default.featureRowAlt : undefined)}>
          {imageColumn}
          {textColumn}
        </div>
      </div>
    </section>);
};
var logos = [
    { imageUrl: "img/logos/VSCode.png", href: "https://code.visualstudio.com", alt: "VS Code" },
    { imageUrl: "img/logos/Bing.png", href: "https://bing.com", alt: "Bing" },
    { imageUrl: "img/logos/Outlook.png", href: "https://outlook.com", alt: "Outlook" },
    { imageUrl: "img/logos/DHotstar.jpg", href: "https://www.hotstar.com/", alt: "Disney+ Hotstar" },
    {
        imageUrl: "img/logos/MUI.png",
        href: "https://github.com/mui-org/material-ui",
        alt: "Material UI",
    },
    { imageUrl: "img/logos/ING.png", href: "https://github.com/ing-bank/lion", alt: "ING" },
    {
        imageUrl: "img/logos/Adobe2.png",
        href: "https://github.com/adobe/spectrum-web-components",
        alt: "Adobe",
    },
    {
        imageUrl: "img/logos/ReactNavigation.png",
        href: "https://github.com/react-navigation/react-navigation",
        alt: "React Navigation",
    },
    {
        imageUrl: "img/logos/accessibilityinsights.png",
        href: "https://accessibilityinsights.io/",
        alt: "Accessibility Insights",
    },
];
var Home = function () {
    var context = (0, useDocusaurusContext_1.default)();
    var siteConfig = context.siteConfig;
    return (<Layout_1.default title={siteConfig.tagline} description="Cross-browser end-to-end testing for modern web apps">
      <header className={(0, clsx_1.default)("hero hero--primary", styles_module_css_1.default.heroBanner)}>
        <div className="container">
          <h1 className={(0, clsx_1.default)("hero__title", styles_module_css_1.default.heroTitle)}>
            <span className={styles_module_css_1.default.highlight}>Playwright</span> enables
            reliable end-to-end testing for modern web apps.
          </h1>
          <div className={styles_module_css_1.default.buttons}>
            <Link_1.default className={styles_module_css_1.default.getStarted} to={(0, useBaseUrl_1.default)("docs/intro")}>
              Get started
            </Link_1.default>
            <GitHubStarButton_1.default owner="microsoft" repo={siteConfig.customFields.repositoryName}/>
          </div>
        </div>
      </header>
      <br></br>
      <main>
        <br></br>
        <br></br>
        <div style={{ textAlign: 'center' }}>
          <img src="img/logos/Browsers.png" width="40%" alt="Browsers (Chromium, Firefox, WebKit)"/>
        </div>
        <section className={styles_module_css_1.default.features}>
          <div className="container">
            <div className="row">
              {features.map(function (props, idx) { return (<Feature key={idx} {...props}/>); })}
            </div>
          </div>
        </section>

        <section className={styles_module_css_1.default.logosSection}>
          <div className="container">
            <div className="row">
              <div className={(0, clsx_1.default)("col col--12", styles_module_css_1.default.logosColumn)}>
                <h2>Chosen by companies and open source projects</h2>
                <ul className={styles_module_css_1.default.logosList}>
                  {logos.map(function (_a, idx) {
            var imageUrl = _a.imageUrl, href = _a.href, alt = _a.alt;
            return (<li key={idx}>
                      <a href={href} target="_blank" rel="noreferrer noopener">
                        <img src={imageUrl} alt={alt}/>
                      </a>
                    </li>);
        })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout_1.default>);
};
exports.default = Home;
