import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/control-plane/0.1.0/controlplane-api",
    },
    {
      type: "category",
      label: "collaboration-spaces",
      link: {
        type: "doc",
        id: "api/control-plane/0.1.0/collaboration-spaces",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/0.1.0/get-collaboration-spaces",
          label: "getCollaborationSpaces",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/0.1.0/get-collaboration-space",
          label: "Get a specific collaboration space",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/0.1.0/get-collaboration-space-collaborators",
          label: "Get the list of collaborators of a specific collaboration space",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "auth",
      link: {
        type: "doc",
        id: "api/control-plane/0.1.0/auth",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/0.1.0/get-current-credentials",
          label: "getCurrentCredentials",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
