import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import {
  versionSelector,
  versionCrumb,
} from "docusaurus-plugin-openapi-docs/lib/sidebars/utils";
import fs from "fs";
import path from "path";
import { SidebarItemConfig } from "@docusaurus/plugin-content-docs/src/sidebars/types.js";

import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import type * as Plugin from "@docusaurus/types/src/plugin";

const defaultSidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      label: "User Manual",
      link: {
        type: "generated-index",
        title: "User Manual",
        description:
          "Datavillage user manual to manage collaboration spaces and data contracts",
        slug: "/user-manual",
      },
      items: require("./docs/user-manual/sidebar.js"),
    },
  ],
  algorithmDevelopment: [
    {
      type: "category",
      label: "Algorithm Development",
      link: {
        type: "generated-index",
        title: "Algorithm Development",
        description: "Algorithm Development",
        slug: "/algorithm-development",
      },
      items: require("./docs/algorithm-development/sidebar.js"),
    },
  ],
  reference: [
    {
      type: "category",
      label: "API",
      link: {
        type: "generated-index",
        title: "API",
        description: "API",
        slug: "/reference",
      },
      items: require("./docs/reference/sidebar.js"),
    },
  ],
};

type Projects = {
  [projectId: string]: ProjectVersionConfig[];
};

type ProjectVersionConfig = {
  version: string;
  label: string;
  baseUrl: string;
};

export function loadVersionsFromJsons(): Projects {
  const result: Projects = {};

  fs.readdirSync("docs/api", { withFileTypes: true })
    .filter((folder) => folder.isDirectory())
    .forEach((folder) => {
      const versionsFile =
        folder.parentPath + path.sep + folder.name + path.sep + "versions.json";

      const versionConfig: ProjectVersionConfig[] = JSON.parse(
        fs.readFileSync(versionsFile, "utf-8")
      );
      result[folder.name] = versionConfig;
    });

  return result;
}

export function loadVersionsFromFileStructure(): Projects {
  const result: Projects = {};

  fs.readdirSync("api/", { withFileTypes: true })
    .filter((projectFolder) => projectFolder.isDirectory())
    .forEach((projectFolder) => {
      const baseUrl = "/dv-documentation/docs/api";
      result[projectFolder.name] = getVersionsFromFileStructure(
        path.join(projectFolder.parentPath, projectFolder.name),
        baseUrl
      );
    });
  return result;
}

function getVersionsFromFileStructure(
  dir: string,
  baseUrl: string
): ProjectVersionConfig[] {
  const pathSplitted = dir.split(path.sep);
  const projectId = pathSplitted[pathSplitted.length - 1];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((file) => !file.isDirectory())
    .filter((file) => file.name.endsWith(".yaml"))
    .map((file) => file.name.substring(0, ".yaml".length + 1))
    .sort((a, b) => b.localeCompare(a))
    .map((version) => {
      return {
        version,
        label: version.replace("v", "version "),
        baseUrl: `${baseUrl}/${projectId}/${version}`,
      };
    });
}

function createSidebarConfigProjectVersion(
  projectId: string,
  version: ProjectVersionConfig,
  versionSelector: string,
  isLatest: boolean
): SidebarItemConfig[] {
  const projectName = projectIdToName(projectId);

  const sidebarLocation = isLatest
    ? `./docs/api/${projectId}/sidebar`
    : `./docs/api/${projectId}/${version.version}/sidebar`;

  const slug = isLatest
    ? `/api/${projectId}`
    : `/api/${projectId}/${version.version}`;

  return [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector,
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(version.version),
    },
    {
      type: "category",
      label: `${projectName} API ${version.label}`,
      link: {
        type: "generated-index",
        title: `${projectName} ${version.label}`,
        description: `An exhaustive API description of ${projectName} ${version.label}`,
        slug,
      },
      items: require(sidebarLocation),
    },
  ];
}

function getHighestVersion(
  versions: ProjectVersionConfig[]
): ProjectVersionConfig | null {
  let highestVersion: ProjectVersionConfig | null = null;
  versions.forEach((vc) => {
    if (highestVersion == null || vc.version > highestVersion.version) {
      highestVersion = vc;
    }
  });
  return highestVersion;
}

function projectIdToName(projectId: string): string {
  return projectId
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

export function loadSidebars(): SidebarsConfig {
  const projects = loadVersionsFromJsons();

  const result = defaultSidebars;
  for (const [projectId, versions] of Object.entries(projects)) {
    const highestVersion = getHighestVersion(versions);

    const selector = versionSelector(versions);

    versions.forEach((v) => {
      const projectVersionId = `${projectId}-${v.version}`;
      result[projectVersionId] = createSidebarConfigProjectVersion(
        projectId,
        v,
        selector,
        v.version == highestVersion?.version
      );
    });
  }

  return result;
}

export function loadApiConfiguration(): Plugin.PluginOptions {
  const projects = loadVersionsFromFileStructure();
  const result: Plugin.PluginOptions = {};
  for (const [projectId, versions] of Object.entries(projects)) {
    const projectConfig = createApiConfigurationForProject(projectId, versions);
    result[projectId] = projectConfig;
  }
  return result;
}

function createApiConfigurationForProject(
  projectId: string,
  versions: ProjectVersionConfig[]
): OpenApiPlugin.Options {
  const highestVersion = getHighestVersion(versions);
  if (highestVersion == null) {
    return {};
  }
  const result: OpenApiPlugin.Options = {
    specPath: `api/${projectId}/${highestVersion.version}.yaml`,
    outputDir: `docs/api/${projectId}`,
    sidebarOptions: {
      groupPathsBy: "tag",
      categoryLinkSource: "tag",
    },
    version: highestVersion.version,
    label: highestVersion.label,
    baseUrl: `/dv-documentation/docs/api/${projectId}`,
  };

  versions
    .filter((v) => v.version != highestVersion.version)
    .forEach((v) => {
      const versionConfig = {
        specPath: `api/${projectId}/${v.version}.yaml`,
        outputDir: `docs/api/${projectId}/${v.version}`,
        label: v.label,
        baseUrl: v.baseUrl,
      };
      if (result["versions"] == undefined) {
        result["versions"] = {};
      }
      result["versions"][v.version] = versionConfig;
    });

  return result;
}
