/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import "./docs/api/cage-manager/sidebar";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      label: "User Manual",
      link: {
        type: "generated-index",
        title: "User Manual",
        description:
          "Datavillage user manual to manage collaboration spaces and datacontracts",
        slug: "/user-manual",
      },
      items: require("./docs/user-manual/sidebar.js"),
    },
  ],
  cageManagerSidebar: [
    {
      type: "category",
      label: "Cage Manager",
      link: {
        type: "generated-index",
        title: "Cagemanager API",
        description: "Endpoints implemented in the Cage Manager",
        slug: "/api/cage-manager",
      },
      items: require("./docs/api/cage-manager/sidebar.js"),
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
};

export default sidebars;
