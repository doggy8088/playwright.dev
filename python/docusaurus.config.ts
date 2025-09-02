import prismLight from './src/config/prismLight'
import prismDark from './src/config/prismDark'

import type {Config} from '@docusaurus/types';
import path from "path";
const isProd = process.env.NODE_ENV === "production";

const hasStableVersion = require(path.join(__dirname, 'python/versions.json')).includes('stable');

let plugins = [
  [
    require.resolve("@docusaurus/plugin-content-docs"),
    {
      sidebarPath: require.resolve("./sidebars.js"),
      // Docusaurus crashes if we don't have a stable version and run docusaurus commands.
      // This is a workaround to make it work since during roll we temporarily remove the stable version.
      ...(hasStableVersion ? {
        versions: {
          stable: {
            badge: false,
          }
        }
      } : {}),
    },
  ],
  [
    'content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      id: 'community',
      path: 'community',
      routeBasePath: 'community',
      sidebarPath: require.resolve('./sidebarCommunity.js'),
    }),
  ],
  require.resolve("@docusaurus/plugin-content-pages"),
    [
    require.resolve('@docusaurus/plugin-ideal-image'),
    {
      max: 1024,
      min: 640,
      steps: 4,
      disableInDev: false
    }
  ],
];

if (isProd) {
  plugins.push(require.resolve("@docusaurus/plugin-sitemap"));
}

export default {
  title: "Playwright Python",
  tagline: "快速且可靠的現代 Web 應用程式端對端測試",
  // Repo config for GitHub Pages
  url: "https://playwright.dev",
  baseUrl: "/python/",
  organizationName: "microsoft",
  projectName: "playwright.dev",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  scripts: ["/python/js/redirection.js"],
  favicon: "img/playwright-logo.ico",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismLight,
      darkTheme: prismDark,
      additionalLanguages: ['python', 'bash', 'batch', 'powershell'],
    },
    navbar: {
      title: "Playwright（Python）",
      logo: {
        alt: "Playwright logo",
        src: "img/playwright-logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          label: "文件",
          position: "left",
        },
        {
          type: "doc",
          docId: "api/class-playwright",
          label: "API",
          position: "left",
        },
        {
          position: "right",
          label: "🥇 多奇教育訓練課程",
          href: "https://learn.duotify.com/courses/e2e-playwright",
        },
        {
          href: "https://github.com/microsoft/playwright-python",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub 儲存庫",
        },
        {
          href: "https://aka.ms/playwright/discord",
          position: "right",
          className: "header-discord-link",
          "aria-label": "Discord 伺服器",
        },
        {
          label: 'Python',
          position: 'left',
          items: [
            {
              label: 'Python',
              'data-language-prefix': '/python/',
              href: '#',
            },
            {
              label: 'Node.js',
              'data-language-prefix': '/',
              href: '#',
            },
            {
              label: 'Java',
              'data-language-prefix': '/java/',
              href: '#',
            },
            {
              label: '.NET',
              'data-language-prefix': '/dotnet/',
              href: '#',
            },
          ],
        },
        {
          to: '/community/welcome',
          label: '社群',
          position: 'left',
          activeBaseRegex: `/community/`,
        },

      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "學習",
          items: [
            {
              label: "快速上手",
              to: "docs/intro",
            },
            {
              label: "訓練課程",
              href: "https://learn.microsoft.com/en-us/training/modules/build-with-playwright/",
            },
            {
              label: "教學影片",
              to: "/community/learn-videos",
            },
            {
              label: "精選影片",
              to: "/community/feature-videos",
            },
          ],
        },
        {
          title: "社群",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/playwright",
            },
            {
              label: "Discord",
              href: "https://aka.ms/playwright/discord",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/playwrightweb",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/playwrightweb",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/microsoft/playwright-python",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg",
            },
            {
              label: "部落格",
              href: "https://dev.to/playwright",
            },
            {
              label: "推廣大使",
              href: "/community/ambassadors",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Microsoft | 正體中文翻譯由 <a href="https://www.duotify.com">Will 保哥</a> 提供`,
    },
    algolia: {
      indexName: 'playwright-python',
      appId: 'K09ICMCV6X',
      apiKey: 'a5b64422711c37ab6a0ce4d86d16cdd9',
    },
    image: 'https://repository-images.githubusercontent.com/221981891/8c5c6942-c91f-4df1-825f-4cf474056bd7',
  },
  themes: [
    [
      require.resolve("@docusaurus/theme-classic"),
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
    '@docusaurus/theme-search-algolia',
  ],
  plugins,
  customFields: {
    repositoryName: "playwright-python",
  },
  trailingSlash: false,
  future: {
    experimental_faster: true,
    v4: true,
  },
} satisfies Config;
