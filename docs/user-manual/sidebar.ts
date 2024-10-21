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
        type: "generated-index",
        title: "Collaboration Spaces",
        description: "Manage collaboration spaces",
        slug: "/user-manual/collaboration-spaces",
      },
      items: [
        {
          type: "doc",
          id: "user-manual/collaboration-spaces/create-space",
          label: "Create",
        },
      ],
    },
    {
      type: "category",
      label: "Data Contracts",
      link: {
        type: "generated-index",
        title: "Data Contracts",
        description: "Manage data contracts",
        slug: "/user-manual/data-contracts",
      },
      items: [
        {
          type: "doc",
          id: "user-manual/data-contracts/create-contract",
          label: "Create",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
