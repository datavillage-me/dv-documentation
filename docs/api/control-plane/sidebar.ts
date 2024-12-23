import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/control-plane/controlplane-api",
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
    {
      type: "category",
      label: "data-contracts",
      link: {
        type: "doc",
        id: "api/control-plane/data-contracts",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/all-data-contracts",
          label: "All data contracts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/create-data-contract",
          label: "Create data contract",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/get-a-specific-data-contract",
          label: "Get a specific data contract",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/update-the-odcs-definition-of-a-specific-data-contract",
          label: "Update the ODCS definition of a specific data contract",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/control-plane/delete-a-specific-data-contract",
          label: "Delete a specific data contract",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
