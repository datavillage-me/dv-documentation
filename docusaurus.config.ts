// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { loadApiConfiguration } from "./loadConfiguration";

const config: Config = {
  title: "Datavillage Documentation",
  tagline: "Trusted Data Collaborations",
  url: "https://datavillage.me",
  baseUrl: "/dv-documentation/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "datavillage-me", // Usually your GitHub org/user name.
  projectName: "dv-documentation", // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/datavillage-me/dv-documentation",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: "Datavillage Documentation",
      logo: {
        alt: "Datavillage Logo",
        src: "img/logo.png",
      },
      items: [
        {
          position: "left",
          label: "User Manual",
          to: "/docs/user-manual",
        },
        {
          position: "left",
          label: "Cage Development",
          to: "/docs/cage-development",
        },
        {
          label: "Cage Manager API",
          position: "left",
          to: "/docs/api/cage-manager",
        },
        {
          label: "Control Plane API",
          position: "left",
          to: "/docs/api/control-plane",
          docsPluginId: "classic",
        },
        {
          href: "https://datavillage.me",
          label: "Datavillage website",
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
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/datavillage-me",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      prism: {
        additionalLanguages: [
          "ruby",
          "csharp",
          "php",
          "java",
          "powershell",
          "json",
          "bash",
        ],
      },
      languageTabs: [
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "bash",
          language: "curl",
          logoClass: "bash",
        },
        {
          highlight: "csharp",
          language: "csharp",
          logoClass: "csharp",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
        },
        {
          highlight: "ruby",
          language: "ruby",
          logoClass: "ruby",
        },
        {
          highlight: "php",
          language: "php",
          logoClass: "php",
        },
        {
          highlight: "java",
          language: "java",
          logoClass: "java",
          variant: "unirest",
        },
        {
          highlight: "powershell",
          language: "powershell",
          logoClass: "powershell",
        },
      ],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api-docs",
        docsPluginId: "classic",
        config: loadApiConfiguration(),
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

export default async function createConfig() {
  return config;
}
