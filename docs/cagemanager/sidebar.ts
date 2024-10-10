import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "cagemanager/cagemanager-api",
    },
    {
      type: "category",
      label: "Cage Deployment",
      link: {
        type: "doc",
        id: "cagemanager/deploy",
      },
      items: [
        {
          type: "doc",
          id: "cagemanager/get-deployed-cages",
          label: "Get deployed cages.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cagemanager/deploy-a-cage",
          label: "Deploy a cage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "cagemanager/delete-a-cage",
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
        id: "cagemanager/monitor",
      },
      items: [
        {
          type: "doc",
          id: "cagemanager/get-the-public-key-of-a-cage",
          label: "Get the public key of a cage.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cagemanager/get-the-logs-of-the-algo",
          label: "Get the logs of the algo",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
