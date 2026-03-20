import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  title: 'Burger Barn',
  description: 'Learn HTML & CSS by building a restaurant menu webpage',
  base: '/burger-barn/',
  appearance: 'dark',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview' },
    ],

    sidebar: [
      { text: 'Tutorial Overview', link: '/overview' },
      {
        text: '0 -- HTML Skeleton',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/stage-00/' },
          { text: 'Changelog', link: '/stage-00/changelog' },
          { text: 'Steps', link: '/stage-00/steps' },
          { text: 'Walkthrough', link: '/stage-00/walkthrough' },
          { text: 'Architecture', link: '/stage-00/architecture' },
          { text: 'Exercises', link: '/stage-00/exercises' },
          { text: 'Troubleshooting', link: '/stage-00/troubleshooting' },
        ],
      },
      {
        text: '1 -- Header & Intro',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/stage-01/' },
        ],
      },
      {
        text: '2 -- Semantic Sections',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/stage-02/' },
        ],
      },
      {
        text: '3 -- Menu Items',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/stage-03/' },
        ],
      },
      {
        text: '4 -- Footer',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/stage-04/' },
        ],
      },
      {
        text: '5 -- Basic CSS',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/stage-05/' },
        ],
      },
      {
        text: '6 -- Spacing',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/stage-06/' },
        ],
      },
      {
        text: '7 -- Menu Cards',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/stage-07/' },
        ],
      },
      {
        text: '8 -- Flexbox Layout',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/stage-08/' },
        ],
      },
      {
        text: '9 -- Polish & Responsive',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/stage-09/' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vedanta/burger-barn' },
    ],

    outline: 'deep',
  },

  mermaid: {
    theme: 'dark',
  },
})
