import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import GitHubStarButton from '../components/GitHubStarButton';
import styles from "./styles.module.css";

const features = [
  {
    title: "任何瀏覽器 \u2022 任何平台 \u2022 一個 API",
    description: <>
      <p>
        <b>跨瀏覽器 \u2022 </b> Playwright 支援所有現代渲染引擎，包括 Chromium、WebKit 和 Firefox。
      </p>
      <p>
        <b>跨平台 \u2022 </b> 在 Windows、Linux 和 macOS 上進行測試，本地或在 CI 上，無頭或有頭。
      </p>
      <p>
        <b>跨語言 \u2022 </b> 使用 Playwright API 在 <a
        href="https://playwright.dev/docs/intro">TypeScript</a>、<a
        href="https://playwright.dev/docs/intro">JavaScript</a>、<a
        href="https://playwright.dev/python/docs/intro">Python</a>、<a
        href="https://playwright.dev/dotnet/docs/intro">.NET</a>、<a
        href="https://playwright.dev/java/docs/intro">Java</a> 中。
      </p>
      <p>
        <b>測試行動網頁 \u2022 </b> Google Chrome for Android 和 Mobile Safari 的原生行動模擬。相同的渲染引擎在您的桌面和雲端中運行。
      </p>
    </>,
  },
  {
  },
  {
  },
  {
    title: "可靠 \u2022 無不穩定測試",
    description: (
      <>
        <p>
          <b>自動等待 \u2022 </b> Playwright 在執行操作之前等待元素可操作。它還有一套豐富的內省事件。兩者的結合消除了人工超時的需要 - 這是導致不穩定測試的主要原因。
        </p>
        <p>
          <b>以網頁為主的斷言 \u2022 </b> Playwright 斷言專為動態網頁設計。檢查會自動重試，直到滿足必要條件。
        </p>
        <p>
          <b>追蹤 \u2022 </b> 配置測試重試策略，捕獲執行追蹤、影片、截圖以消除不穩定性。
        </p>
      </>
    ),
  },
  {
    title: "沒有妥協 \u2022 沒有限制",
    description: (
      <>
        <p>
          瀏覽器在不同程序中運行屬於不同來源的網頁內容。Playwright 與現代瀏覽器架構保持一致，並在程序外運行測試。這使得 Playwright 擺脫了典型的程序內測試執行器限制。
        </p>
        <p>
          <b>多重一切 \u2022 </b> 測試場景涵蓋多個 <b>頁籤(tabs)</b>、多個 <b>來源(origins)</b> 和多個 <b>用戶(users)</b>。為不同用戶建立不同上下文的場景，並在一個測試中對您的伺服器進行測試。
        </p>
        <p>
          <b>可信事件 \u2022 </b> 懸停元素，與動態控件交互，生成可信事件。Playwright 使用真實的瀏覽器輸入管道，與真實用戶無法區分。
        </p>
        <p>
          <b>測試 Frames，穿透 Shadow DOM \u2022 </b> Playwright 選擇器穿透 Shadow DOM，並允許無縫進入 Frames。
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
          <b>瀏覽器上下文 \u2022 </b> Playwright 為每個測試建立一個瀏覽器上下文。瀏覽器上下文相當於一個全新的瀏覽器配置文件。這提供了完全的測試隔離，且沒有任何開銷。建立一個新的瀏覽器上下文只需幾毫秒。
        </p>
        <p>
          <b>僅登入一次 \u2022 </b> 保存上下文的身份驗證狀態，並在所有測試中重用它。這繞過了每個測試中的重複登錄操作，但仍提供了獨立測試的完全隔離。
        </p>
      </>
    ),
  },
  {
    title: "強大的工具",
    description: (
      <>
        <p>
          <b><a href="docs/codegen">程式碼產生器</a></b> 通過記錄您的操作生成測試。將它們保存到任何語言中。
        </p>
        <p>
          <b><a href="docs/debug#playwright-inspector">Playwright inspector</a></b> 檢查頁面，生成選擇器，逐步執行測試，查看點擊點，探索執行日誌。
        </p>
        <p>
          <b><a href="docs/trace-viewer-intro">追蹤檢視器</a></b> 捕獲所有訊息以調查測試失敗。Playwright 追蹤包含測試執行螢幕截圖、即時 DOM 快照、操作探索器、測試原始碼等。
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
        您的瀏覽器不支援影片標籤。
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
      description="現代網頁應用的跨瀏覽器端到端測試"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx("hero__title", styles.heroTitle)}>
            <span className={styles.highlight}>Playwright</span> 為現代網頁應用提供穩定可靠的<br/>端到端測試體驗。
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
          <img src="img/logos/Browsers.png" width="40%" alt="瀏覽器 (Chromium, Firefox, WebKit)" />
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
                <h2>被公司和開源專案選擇</h2>
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
