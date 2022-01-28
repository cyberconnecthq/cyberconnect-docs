// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CyberConnect',
  tagline: 'CyberConnect is super cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/cyberconnecthq/cyberconnect-docs/tree/dev',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CyberConnect Developer Center',
        logo: {
          alt: 'CyberConnect Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: 'get_started',
            position: 'left', 
            label: 'Integration',
          },
          {
            type: 'doc',
            docId: 'Partnership Examples/unipass',
            position: 'left',
            label: 'Showcase',
          },
          {
            type: 'doc',
            docId: 'Community/community',
            position: 'left',
            label: 'Community',
          },
          // {
          //   href: 'https://github.com/cyberconnecthq',
          //   label: 'Version',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/cyberconnecthq',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://cyberconnect.me/',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://cyberconnect.fyi/discord',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/CyberConnectHQ',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/cyberconnecthq',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CyberConnect, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
