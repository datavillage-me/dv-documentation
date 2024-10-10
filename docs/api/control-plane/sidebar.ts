import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/control-plane/controlplane-api",
    },
    {
      type: "category",
      label: "Auth",
      link: {
        type: "doc",
        id: "api/control-plane/auth",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/get-your-current-credentials",
          label: "Get your current credentials",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Collaboration Spaces",
      link: {
        type: "doc",
        id: "api/control-plane/spaces",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/get-all-spaces-your-account-has-access-to",
          label: "Get all spaces your account has access to",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
