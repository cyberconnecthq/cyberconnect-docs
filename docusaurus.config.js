// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CyberConnect",
  tagline: "Building the composable social graph protocol for Web3",
  url: "https://doc.cyberconnect.me",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "CyberConnect", // Usually your GitHub org/user name.
  projectName: "CyberConnect Developer Center", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/cyberconnecthq/cyberconnect-docs/tree/dev",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve("@edno/docusaurus2-graphql-doc-generator"),
      {
        schema: "https://api.cybertino.io/connect/",
        rootPath: "./docs",
        baseURL: "GraphQL",
        linkRoot: "/docs",
        homepage: "./docs/graphql.md",
        loaders: {
          UrlLoader: "@graphql-tools/url-loader",
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "CyberConnect Developer Center",
        logo: {
          alt: "CyberConnect Logo",
          src: "img/logo.png",
          srcDark: "img/dark-mode-logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "right",
            label: "Introduction",
          },
          {
            type: "doc",
            docId: "get_started",
            position: "right",
            label: "Docs",
          },
          {
            type: "doc",
            docId: "GraphQL/graphql",
            position: "right",
            label: "API",
          },
          {
            type: "doc",
            docId: "Partnership Examples/unipass",
            position: "right",
            label: "Showcase",
          },
          {
            type: "doc",
            docId: "Community/community",
            position: "right",
            label: "Community",
          },
          // {
          //   href: 'https://github.com/cyberconnecthq',
          //   label: 'Version',
          //   position: 'right',
          // },
          {
            href: "https://github.com/cyberconnecthq",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://cyberconnect.me/",
            label: "Website",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://cyberconnect.fyi/discord",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/CyberConnectHQ",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/cyberconnecthq",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      themeConfig: {
        metadata: [
          { name: "og:title", content: "CyberConnect Developer Center" },
          { name: "og:type", content: "website" },
          { name: "og:url", content: "https://docs.cyberconnect.me/" },
          {
            name: "og:image",
            content: "https://cyberconnect.me/assets/logo-black.svg",
          },
        ],
      },
    }),
};

module.exports = config;
