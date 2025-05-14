import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "algorithm-development/intro",
      customProps: { icon: "Home" },
    },
    {
      type: "doc",
      id: "algorithm-development/event",
    },
    {
      type: "doc",
      id: "algorithm-development/check-status",
    },
    {
      type: "doc",
      id: "algorithm-development/mount",
    },
    {
      type: "doc",
      id: "algorithm-development/query",
    },
    {
      type: "doc",
      id: "algorithm-development/export",
    },
  ],
};

export default sidebar.apisidebar;
