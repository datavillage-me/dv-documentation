import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

import fs from "fs";
import path from "path";

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

export function loadNavbarItems(): any[] {
  const projectIdToName = (projectId: string): string => {
    return projectId
      .replaceAll("-", " ")
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const filePathToVersion = (filePath: string): string => {
    const pathSplit = filePath.split(path.sep);
    return pathSplit[pathSplit.length - 1].substring(0, ".yaml".length + 1);
  };

  const createItems = (baseUrl: string, versions: string[]): any[] => {
    return versions.map((f, i) => {
      var version = filePathToVersion(f);
      var url = baseUrl + "/" + version;
      var label = version;
      if (i == 0) {
        url = baseUrl;
        label += " (latest)";
      }

      return {
        label,
        to: url,
      };
    });
  };

  return findProjects("api").flatMap((p) => {
    const pId = p[0];
    const pName = projectIdToName(pId);
    const baseUrl = "/docs/api/" + pId;
    const items = createItems(baseUrl, p[1]);

    return {
      label: pName + " API",
      position: "left",
      to: baseUrl,
      docsPluginId: "classic",
      type: "dropdown",
      items,
    };
  });
}

export function loadRedoclyConfiguration(): {
  spec: string;
  id: string;
  route: string;
}[] {
  const apiPath = "api";
  const projects = findProjects(apiPath);

  const result = projects.flatMap((config) =>
    createRedoclySpec(config[0], config[1])
  );

  return result;
}

function findProjects(apiPath: string): [string, string[]][] {
  return fs
    .readdirSync(apiPath, { withFileTypes: true })
    .filter((folder) => folder.isDirectory())
    .map((folder) => {
      const p = apiPath + path.sep + folder.name;
      return [folder.name, findProjectVersions(p)];
    });
}

function findProjectVersions(projectPath: string): string[] {
  return fs
    .readdirSync(projectPath, { withFileTypes: true })
    .filter((file) => !file.isDirectory())
    .filter((file) => file.name.endsWith(".yaml"))
    .map((file) => file.parentPath + path.sep + file.name)
    .sort((a, b) => b.localeCompare(a));
}

function createRedoclySpec(
  project: string,
  versions: string[]
): {
  spec: string;
  id: string;
  route: string;
}[] {
  const fileNameToVersion = (fileName: string): string => {
    return fileName.substring(0, ".yaml".length + 1);
  };

  return versions.map((filePath, i) => {
    const filePathSplit = filePath.split(path.sep);
    const fileName = filePathSplit[filePathSplit.length - 1];
    const v = fileNameToVersion(fileName);
    var route = "/docs/api/" + project;
    if (i != 0) {
      route += "/" + v;
    }

    return {
      spec: filePath,
      id: project + "-" + v.replaceAll(".", ""),
      route: route,
    };
  });
}

export function loadSidebars(): SidebarsConfig {
  return defaultSidebars;
}
