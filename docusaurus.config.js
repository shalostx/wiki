import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: "Shalostx's Wiki",
  tagline: 'База знаний для разработчиков Minecraft',
  favicon: 'img/logo.png',
  url: 'https://wiki.shalostx.space',
  baseUrl: '/',
  organizationName: 'shalostx',
  projectName: 'wiki',
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
          editUrl: 'https://github.com/shalostx/wiki/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/shalostx/wiki/tree/main/',
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
    image: 'img/social-card.png',
    navbar: {
      title: "Shalostx's Wiki",
      logo: {
        alt: 'Shalostxs Wiki',
        src: 'img/logo.png',
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
          href: 'https://github.com/shalostx/wiki',
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
              href: 'https://discord.gg/UGq47tqRzz',
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
      copyright: `Copyright © ${new Date().getFullYear()} Shalostx's Wiki, Inc. Создано с помощью Docusaurus.`,
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
