import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/control-plane/v0.1.0/controlplane-api",
    },
    {
      type: "category",
      label: "Collaboration Spaces",
      link: {
        type: "doc",
        id: "api/control-plane/v0.1.0/collaboration-spaces",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/v0.1.0/get-collaboration-spaces",
          label: "Get All Collaboration Spaces",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/v0.1.0/get-collaboration-space",
          label: "Get Collaboration Space",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/v0.1.0/get-collaboration-space-collaborators",
          label: "Get Collaborators",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Authentication",
      link: {
        type: "doc",
        id: "api/control-plane/v0.1.0/authentication",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/v0.1.0/get-current-credentials",
          label: "Get Current Credentials",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
