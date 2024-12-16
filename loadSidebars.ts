import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import {
  versionSelector,
  versionCrumb,
} from "docusaurus-plugin-openapi-docs/lib/sidebars/utils";
import cagemanagerversions from "./docs/api/cage-manager/versions.json";

export function loadSidebars(): SidebarsConfig {
  return {
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
    "cage-manager-0.1.2": [
      {
        type: "html",
        defaultStyle: true,
        value: versionSelector(cagemanagerversions),
      },
      {
        type: "html",
        defaultStyle: true,
        value: versionCrumb("0.1.2"),
      },
      {
        type: "category",
        label: "Cage Manager latest",
        link: {
          type: "generated-index",
          title: "Cagemanager API",
          description: "Endpoints implemented in the Cage Manager",
          slug: "/api/cage-manager",
        },
        items: require("./docs/api/cage-manager/sidebar"),
      },
    ],
    "cage-manager-0.1.0": [
      {
        type: "html",
        defaultStyle: true,
        value: versionSelector(cagemanagerversions),
      },
      {
        type: "html",
        defaultStyle: true,
        value: versionCrumb("0.1.0"),
      },
      {
        type: "category",
        label: "Cage Manager v0.1.0",
        link: {
          type: "generated-index",
          title: "Cagemanager API",
          description: "Endpoints implemented in the Cage Manager",
          slug: "/api/cage-manager/0.1.0",
        },
        items: require("./docs/api/cage-manager/0.1.0/sidebar"),
      },
    ],
    controlPlaneSidebar: [
      {
        type: "category",
        label: "Control Plane",
        link: {
          type: "generated-index",
          title: "Control Plane API",
          description: "Endpoints implemented in the Control Plane",
          slug: "/api/control-plane",
        },
        items: require("./docs/api/control-plane/sidebar.js"),
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
}
