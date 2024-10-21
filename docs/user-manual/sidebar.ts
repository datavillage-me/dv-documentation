import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "user-manual/intro",
    },
    {
      type: "category",
      label: "Collaboration Spaces",
      link: {
        type: "doc",
        id: "user-manual/collaboration-spaces/intro",
      },
      items: [
        {
          type: "doc",
          id: "user-manual/collaboration-spaces/create-space",
          label: "Create new collaboration spaces",
        },
      ],
    },
    {
      type: "category",
      label: "Datacontracts",
      link: {
        type: "doc",
        id: "user-manual/datacontracts/intro",
      },
      items: [
        {
          type: "doc",
          id: "user-manual/datacontracts/create-contract",
          label: "Create new datacontracts",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
