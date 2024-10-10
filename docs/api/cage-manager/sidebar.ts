import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/cage-manager/cagemanager-api",
    },
    {
      type: "category",
      label: "Cage Deployment",
      link: {
        type: "doc",
        id: "api/cage-manager/deploy",
      },
      items: [
        {
          type: "doc",
          id: "api/cage-manager/get-deployed-cages",
          label: "Get deployed cages.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/deploy-a-cage",
          label: "Deploy a cage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/cage-manager/delete-a-cage",
          label: "Delete a cage",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Cage Monitoring",
      link: {
        type: "doc",
        id: "api/cage-manager/monitor",
      },
      items: [
        {
          type: "doc",
          id: "api/cage-manager/get-the-public-key-of-a-cage",
          label: "Get the public key of a cage.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/get-the-logs-of-the-algo",
          label: "Get the logs of the algo",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
