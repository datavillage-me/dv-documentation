import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import {
  versionSelector,
  versionCrumb,
} from "docusaurus-plugin-openapi-docs/lib/sidebars/utils";
import cagemanagerversions from "./docs/api/cage-manager/versions.json";
import fs from "fs";
import path from "path";
import {
  SidebarConfig,
  SidebarItemConfig,
} from "@docusaurus/plugin-content-docs/src/sidebars/types.js";

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
  cageDevelopmentSidebar: [
    {
      type: "category",
      label: "Cage Development",
      link: {
        type: "generated-index",
        title: "Cage Development",
        description: "How to develop algorithms to run in a cage",
        slug: "/cage-development",
      },
      items: require("./docs/cage-development/sidebar.js"),
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
    .map((file) => file.name.substring(0, ".yaml".length))
    .map((version) => {
      return {
        version,
        label: `v${version}`,
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
      label: "Test label",
      link: {
        type: "generated-index",
        title: "Test title",
        description: "Test description",
        slug,
      },
      items: require(sidebarLocation),
    },
  ];
}

export function loadSidebars(): SidebarsConfig {
  const projects = loadVersionsFromJsons();
  console.log(projects);

  const result = defaultSidebars;
  for (const [projectId, allVersions] of Object.entries(projects)) {
    const highestVersion = allVersions
      .map((obj) => obj.version)
      .sort((a, b) => b.localeCompare(a))[0];

    allVersions.forEach((version) => {
      const projectVersionId = `${projectId}-${version.version}`;
      result[projectVersionId] = createSidebarConfigProjectVersion(
        projectId,
        version,
        versionSelector(allVersions),
        version.version == highestVersion
      );
    });
  }
  // console.log(JSON.stringify(result));
  return result;
  // return {
  //   "cage-manager-0.1.2": [
  //     {
  //       type: "html",
  //       defaultStyle: true,
  //       value: versionSelector(cagemanagerversions),
  //     },
  //     {
  //       type: "html",
  //       defaultStyle: true,
  //       value: versionCrumb("0.1.2"),
  //     },
  //     {
  //       type: "category",
  //       label: "Cage Manager latest",
  //       link: {
  //         type: "generated-index",
  //         title: "Cagemanager API",
  //         description: "Endpoints implemented in the Cage Manager",
  //         slug: "/api/cage-manager",
  //       },
  //       items: require("./docs/api/cage-manager/sidebar"),
  //     },
  //   ],
  //   "cage-manager-0.1.0": [
  //     {
  //       type: "html",
  //       defaultStyle: true,
  //       value: versionSelector(cagemanagerversions),
  //     },
  //     {
  //       type: "html",
  //       defaultStyle: true,
  //       value: versionCrumb("0.1.0"),
  //     },
  //     {
  //       type: "category",
  //       label: "Cage Manager v0.1.0",
  //       link: {
  //         type: "generated-index",
  //         title: "Cagemanager API",
  //         description: "Endpoints implemented in the Cage Manager",
  //         slug: "/api/cage-manager/0.1.0",
  //       },
  //       items: require("./docs/api/cage-manager/0.1.0/sidebar"),
  //     },
  //   ],
  //   controlPlaneSidebar: [
  //     {
  //       type: "category",
  //       label: "Control Plane",
  //       link: {
  //         type: "generated-index",
  //         title: "Control Plane API",
  //         description: "Endpoints implemented in the Control Plane",
  //         slug: "/api/control-plane",
  //       },
  //       items: require("./docs/api/control-plane/sidebar.js"),
  //     },
  //   ],
  // };
}
