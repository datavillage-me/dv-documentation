import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/control-plane/controlplane-api",
    },
    {
      type: "category",
      label: "collaboration-spaces",
      link: {
        type: "doc",
        id: "api/control-plane/collaboration-spaces",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/get-collaboration-spaces",
          label: "getCollaborationSpaces",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/get-collaboration-space",
          label: "Get a specific collaboration space",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "auth",
      link: {
        type: "doc",
        id: "api/control-plane/auth",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/get-current-credentials",
          label: "getCurrentCredentials",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
