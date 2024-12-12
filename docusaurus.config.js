import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: "Shalostx's KB",
  tagline: 'База знаний для разработчиков Minecraft',
  favicon: 'img/favicon.ico',
  url: 'https://kb.shalostx.space',
  baseUrl: '/',
  organizationName: 'shalostx',
  projectName: 'kb',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Shalostx's KB",
      logo: {
        alt: 'Shalostxs KB',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'База Знаний',
        },
        {to: '/blog', label: 'Блог', position: 'left'},
        {
          href: 'https://github.com/shalostx/github',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Блог',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/shalostx/wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shalostx's KB, Inc. Создано с помощью Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
