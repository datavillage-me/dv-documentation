import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/cage-manager/v0.1.0/cagemanager-api",
    },
    {
      type: "category",
      label: "CRUD",
      link: {
        type: "doc",
        id: "api/cage-manager/v0.1.0/crud",
      },
      items: [
        {
          type: "doc",
          id: "api/cage-manager/v0.1.0/get-cages",
          label: "Get Cages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/v0.1.0/delete-cage",
          label: "Delete Cage",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Operate",
      link: {
        type: "doc",
        id: "api/cage-manager/v0.1.0/operate",
      },
      items: [
        {
          type: "doc",
          id: "api/cage-manager/v0.1.0/deploy-cage",
          label: "Deploy Cage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/cage-manager/v0.1.0/get-public-key",
          label: "Get Public Key",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Monitor",
      link: {
        type: "doc",
        id: "api/cage-manager/v0.1.0/monitor",
      },
      items: [
        {
          type: "doc",
          id: "api/cage-manager/v0.1.0/get-logs",
          label: "Get logs",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
