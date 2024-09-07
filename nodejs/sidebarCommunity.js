module.exports = {
  community: [
    'welcome',
    'ambassadors',
    {
      type: 'category',
      label: '影片',
      items: [
        {
          type: 'link',
          label: '會議影片',
          href: '/community/conference-videos'
        },
        {
          type: 'link',
          label: '發行影片',
          href: '/community/release-videos'
        },
        {
          type: 'link',
          label: '直播影片',
          href: '/community/live-streams'
        },
        {
          type: 'link',
          label: '精選影片',
          href: '/community/feature-videos'
        },
        {
          type: 'link',
          label: '教學影片',
          href: '/community/learn-videos'
        }
      ],
      collapsed: false
    },
    {
      type: 'link',
      label: "學習 Playwright",
      href: "https://learn.microsoft.com/en-us/training/modules/build-with-playwright/",
    },
    {
      type: 'link',
      label: "Playwright 範例",
      href: "https://learn.microsoft.com/en-us/samples/browse/?products=playwright",
    },
    {
      type: 'link',
      label: "部落格",
      href: "https://dev.to/playwright",
    },
    {
      type: 'link',
      label: '加入我們的 Discord 社群',
      href: 'https://aka.ms/playwright/discord'
    }
  ]
};
