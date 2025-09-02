module.exports = {
  community: [
    'welcome',
    'ambassadors',
    {
      type: 'category',
      label: '影片',
      items: [
        { type: 'link', label: '研討會影片', href: '/community/conference-videos' },
        { type: 'link', label: '版本發佈影片', href: '/community/release-videos' },
        { type: 'link', label: '線上直播', href: '/community/live-streams' },
        { type: 'link', label: '精選影片', href: '/community/feature-videos' },
        { type: 'link', label: '教學影片', href: '/community/learn-videos' }
      ],
      collapsed: false
    },
    {
      type: 'link',
      label: '部落格',
      href: 'https://dev.to/playwright',
    },
    {
      type: 'link',
      label: '加入我們的 Discord 社群',
      href: 'https://aka.ms/playwright/discord'
    }
  ]
};
