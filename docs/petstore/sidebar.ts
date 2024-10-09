import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "petstore/cagemanager-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "petstore/get-deployed-cages",
          label: "Get deployed cages.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/deploy-a-cage",
          label: "Deploy a cage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore/delete-a-cage",
          label: "Delete a cage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore/get-the-public-key-of-a-cage",
          label: "Get the public key of a cage.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/get-the-logs-of-the-algo",
          label: "Get the logs of the algo",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
