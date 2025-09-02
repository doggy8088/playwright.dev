import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import GitHubStarButton from '../components/GitHubStarButton';
import styles from "./styles.module.css";

const features = [
  {
    title: "任何瀏覽器 \u2022 任何平台 \u2022 同一個 API",
    description: <>
      <p>
        <b>跨瀏覽器。</b> Playwright 支援所有現代的渲染引擎，包括 Chromium、WebKit 與 Firefox。
      </p>
      <p>
        <b>跨平台。</b> 可在 Windows、Linux 與 macOS 上進行測試，無論本機或 CI，支援無頭或有頭模式。
      </p>
      <p>
        <b>跨語言。</b> 在 <a
        href="https://playwright.dev/docs/intro">TypeScript</a>、<a
        href="https://playwright.dev/docs/intro">JavaScript</a>、<a
        href="https://playwright.dev/python/docs/intro">Python</a>、<a
        href="https://playwright.dev/dotnet/docs/intro">.NET</a>、<a
        href="https://playwright.dev/java/docs/intro">Java</a> 中使用 Playwright API。
      </p>
      <p>
        <b>測試行動版網站。</b> 具備 Google Chrome for Android 與 Mobile Safari 的原生行動模擬。相同的渲染引擎在您的桌面與雲端環境中一致運作。
      </p>
    </>,
  },
  {
  },
  {
  },
  {
    title: "穩健可靠 \u2022 杜絕不穩定測試",
    description: (
      <>
        <p>
          <b>自動等待。</b> Playwright 會在執行動作前先等待元素可互動，並提供豐富的內建觀察事件。兩者搭配可消除人為設定的逾時——這往往是不穩定測試的主因。
        </p>
        <p>
          <b>Web 優先的斷言。</b> Playwright 的斷言針對動態網頁而生。檢查會自動重試，直到滿足必要條件為止。
        </p>
        <p>
          <b>追蹤。</b> 設定測試重試策略，並擷取執行追蹤、影片、螢幕截圖，以排除不穩定因素。
        </p>
      </>
    ),
  },
  {
    title: "不必取捨 \u2022 沒有限制",
    description: (
      <>
        <p>
          瀏覽器會將不同來源的網頁內容分別在不同程序中執行。
          Playwright 與現代瀏覽器的架構一致，測試在程序外執行，
          因此不受典型同程序測試執行器的限制。
        </p>
        <p>
          <b>多重情境皆可。</b> 支援涵蓋多個<b>分頁</b>、多個<b>來源</b>與多個<b>使用者</b>的情境。
          為不同使用者建立不同的情境，並在同一個測試中對著您的伺服器執行。
        </p>
        <p>
          <b>可信賴事件。</b> 可將滑鼠懸停在元素上、與動態控制項互動，產生可信賴的事件。
          Playwright 使用真實的瀏覽器輸入管線，與實際使用者操作無異。
        </p>
        <p>
          <b>測試框架、穿透 Shadow DOM。</b> Playwright 的選擇器可穿透 Shadow DOM，並能無縫進入框架。
        </p>
      </>
    ),
  },
  {
  },
  {
  },
  {
    title: "完全隔離 \u2022 快速執行",
    description: (
      <>
        <p>
          <b>瀏覽器情境。</b> Playwright 會為每個測試建立一個瀏覽器情境。
          瀏覽器情境相當於全新的瀏覽器設定檔，帶來零額外負擔的完整測試隔離。
          建立新的瀏覽器情境只需短短幾毫秒。
        </p>
        <p>
          <b>只需登入一次。</b> 保存情境的驗證狀態，並在所有測試中重用。
          這能略過每個測試中重複的登入操作，同時仍提供彼此獨立的完整隔離。
        </p>
      </>
    ),
  },
  {
    title: "強大工具",
    description: (
      <>
        <p>
          <b><a href="docs/codegen">Codegen.</a></b> 透過錄製您的操作自動產生測試，並可輸出為任一支援語言。
        </p>
        <p>
          <b><a href="docs/debug#playwright-inspector">Playwright inspector.</a></b> 檢視頁面、產生選擇器、逐步執行測試、查看點擊位置並探索執行日誌。
        </p>
        <p>
          <b><a href="docs/trace-viewer-intro">Trace Viewer.</a></b> 蒐集調查測試失敗所需的所有資訊。Playwright 追蹤
          包含測試執行的螢幕錄影、即時 DOM 快照、動作探索器、測試原始碼等更多內容。
        </p>
      </>
    ),
  },
];

type FeatureProps = {
  imageUrl?: string
  title?: string
  description?: React.ReactElement
}

const Feature: React.FC<FeatureProps> = ({ imageUrl, title, description }) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--6", styles.feature)} style={{ marginTop: 40 }}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  );
}

type FeatureRowProps = {
  title: string
  description: string
  videoUrl: string
  isImageLeft: boolean
}

const FeatureRow: React.FC<FeatureRowProps> = ({ title, description, videoUrl, isImageLeft }) => {
  const textColumn = (
    <div className={"col col--5"}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
  const imageColumn = (
    <div className={"col col--7"}>
      <video muted controls loop>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
  return (
    <section
      className={clsx(!isImageLeft ? styles.featureContainerAlt : undefined)}
    >
      <div className={"container"}>
        <div
          className={clsx(
            "row",
            styles.featureRow,
            !isImageLeft ? styles.featureRowAlt : undefined
          )}
        >
          {imageColumn}
          {textColumn}
        </div>
      </div>
    </section>
  );
}

const logos = [
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

const Home: React.FC = () => {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  return (
    <Layout
      title={siteConfig.tagline}
      description="為現代 Web 應用程式打造的跨瀏覽器端對端測試"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx("hero__title", styles.heroTitle)}>
            <span className={styles.highlight}>Playwright</span> 讓現代 Web 應用的端對端測試更可靠。
          </h1>
          <div className={styles.buttons}>
            <Link
              className={styles.getStarted}
              to={useBaseUrl("docs/intro")}
            >
              開始使用
            </Link>
            <GitHubStarButton owner="microsoft" repo={siteConfig.customFields.repositoryName as string}/>
          </div>
        </div>
      </header>
      <br></br>
      <main>
        <br></br>
        <br></br>
        <div style={{textAlign: 'center'}}>
          <img src="img/logos/Browsers.png" width="40%" alt="瀏覽器（Chromium、Firefox、WebKit）" />
        </div>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.logosSection}>
          <div className="container">
            <div className="row">
              <div className={clsx("col col--12", styles.logosColumn)}>
                <h2>深受企業與開放原始碼專案信任</h2>
                <ul className={styles.logosList}>
                  {logos.map(({ imageUrl, href, alt }, idx) => (
                    <li key={idx}>
                      <a href={href} target="_blank" rel="noreferrer noopener">
                        <img src={imageUrl} alt={alt} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
