// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { loadApiConfiguration } from "./loadConfiguration";

const config: Config = {
  title: "Datavillage Documentation",
  tagline: "Secured Data Collaborations",
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
          label: "User Manual",
          position: "left",
          to: "/docs/user-manual",
        },
        {
          label: "Algorithm Development",
          position: "left",
          to: "/docs/algorithm-development",
        },
        {
          label: "dv-utils",
          position: "left",
          to: "/docs/reference",
        },
        {
          label: "Control Plane API",
          position: "left",
          to: "/docs/api/control-plane",
          docsPluginId: "classic",
        },
        {
          href: "https://datavillage.me",
          label: "Datavillage home",
          position: "right",
        },
      ],
    },
    // footer: {
    //   style: "dark",
    //   links: [
    //     {
    //       title: "API docs",
    //       items: [
    //         {
    //           label: "Control Plane API",
    //           href: "/docs/api/control-plane",
    //         },
    //       ],
    //     },
    //     {
    //       title: "More",
    //       items: [
    //         {
    //           label: "GitHub",
    //           href: "https://github.com/datavillage-me",
    //         },
    //         {
    //           label: "Datavillage Home",
    //           href: "https://datavillage.me",
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} Datavillage, Inc.`,
    // },
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
    [
      "docusaurus-plugin-remote-content",
      {
        name: "cage-template", // this is the folder name where the file will be saved
        sourceBaseUrl:
          "https://raw.githubusercontent.com/datavillage-me/cage-template/main/",
        outDir: "docs/algorithm-development/reference-repositories",
        documents: ["README.md"],
        modifyContent(filename, content) {
          if (filename === "README.md") {
            return {
              filename: "cage-template.md",
              content: `https://github.com/datavillage-me/cage-template ${content}`,
            };
          }
          return undefined;
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        name: "algorithm-demo",
        sourceBaseUrl:
          "https://raw.githubusercontent.com/datavillage-me/algorithm-demo/main/",
        outDir: "docs/algorithm-development/reference-repositories",
        documents: ["README.md"],
        modifyContent(filename, content) {
          if (filename === "README.md") {
            return {
              content: `https://github.com/datavillage-me/algorithm-demo ${content}`,
              filename: "algorithm-demo.md",
            };
          }
          return undefined;
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
};

export default async function createConfig() {
  return config;
}
