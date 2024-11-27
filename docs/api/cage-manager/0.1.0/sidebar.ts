import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/cage-manager/0.1.0/cagemanager-api",
    },
    {
      type: "category",
      label: "crud",
      link: {
        type: "doc",
        id: "api/cage-manager/0.1.0/crud",
      },
      items: [
        {
          type: "doc",
          id: "api/cage-manager/0.1.0/get-deployed-cages",
          label: "Get deployed cages.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/0.1.0/delete-a-cage",
          label: "Delete a cage",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "operate",
      link: {
        type: "doc",
        id: "api/cage-manager/0.1.0/operate",
      },
      items: [
        {
          type: "doc",
          id: "api/cage-manager/0.1.0/deploy-a-cage",
          label: "Deploy a cage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/cage-manager/0.1.0/get-the-public-key-of-a-cage",
          label: "Get the public key of a cage.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "monitor",
      link: {
        type: "doc",
        id: "api/cage-manager/0.1.0/monitor",
      },
      items: [
        {
          type: "doc",
          id: "api/cage-manager/0.1.0/get-the-logs-of-the-algo",
          label: "Get the logs of the algo",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
