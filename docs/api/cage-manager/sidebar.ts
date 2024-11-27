import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/cage-manager/cagemanager-api",
    },
    {
      type: "category",
      label: "crud",
      link: {
        type: "doc",
        id: "api/cage-manager/crud",
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
          id: "api/cage-manager/delete-a-cage",
          label: "Delete a cage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/cage-manager/delete-a-cage",
          label: "Delete a cage",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "operate",
      link: {
        type: "doc",
        id: "api/cage-manager/operate",
      },
      items: [
        {
          type: "doc",
          id: "api/cage-manager/deploy-a-cage",
          label: "Deploy a cage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/cage-manager/deploy-a-cage",
          label: "Deploy a cage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/cage-manager/send-an-event-to-a-cage",
          label: "Send an event to a cage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/cage-manager/send-an-event-to-a-cage",
          label: "Send an event to a cage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/cage-manager/get-the-public-key-of-a-cage",
          label: "Get the public key of a cage.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/get-the-public-key-of-a-cage",
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
        id: "api/cage-manager/monitor",
      },
      items: [
        {
          type: "doc",
          id: "api/cage-manager/get-pod-status-logs-backup",
          label: "Get the status of all pods running",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/get-pod-status-logs",
          label: "Get the status of all pods running",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/get-algo-logs-backup",
          label: "Get the logs of the running algorithm",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/get-algo-logs",
          label: "Get the logs of the running algorithm",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/get-the-logs-of-the-algo",
          label: "Get the logs of the algo",
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
