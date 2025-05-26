import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "algorithm-development/intro",
      customProps: { icon: "Home" },
    },
    {
      type: "category",
      label: "Reference repositories",
      collapsible: true,
      collapsed: true,
      items: [
        "algorithm-development/reference-repositories/algorithm-demo",
        "algorithm-development/reference-repositories/cage-template",
      ],
    },
    {
      type: "category",
      label: "Basics",
      collapsible: true,
      collapsed: true,
      items: [
        "algorithm-development/basics/logging",
        "algorithm-development/basics/event-processing",
        "algorithm-development/basics/control-plane-data-engine",
      ],
    },
    {
      type: "category",
      label: "Learn By Example",
      collapsible: true,
      collapsed: true,
      items: [
        "algorithm-development/learn-by-example/intro",
        "algorithm-development/learn-by-example/list_collaborators",
        "algorithm-development/learn-by-example/check-status",
        "algorithm-development/learn-by-example/mount",
        "algorithm-development/learn-by-example/query",
        "algorithm-development/learn-by-example/export",
      ],
    },
  ],
};

export default sidebar.apisidebar;
