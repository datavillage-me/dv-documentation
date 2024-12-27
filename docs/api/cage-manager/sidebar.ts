import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/cage-manager/cagemanager-api",
    },
    {
      type: "category",
      label: "CRUD",
      link: {
        type: "doc",
        id: "api/cage-manager/crud",
      },
      items: [
        {
          type: "doc",
          id: "api/cage-manager/get-deployed-cages",
          label: "Get Deployed Cages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/delete-cage-deprecated",
          label: "[DEPRECATED] Delete Cage",
          className: "menu__list-item--deprecated api-method post",
        },
        {
          type: "doc",
          id: "api/cage-manager/delete-cage",
          label: "Delete Cage",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Operate",
      link: {
        type: "doc",
        id: "api/cage-manager/operate",
      },
      items: [
        {
          type: "doc",
          id: "api/cage-manager/deploy-cage-deprecated",
          label: "[DEPRECATED] Deploy Cage",
          className: "menu__list-item--deprecated api-method post",
        },
        {
          type: "doc",
          id: "api/cage-manager/deploy-cage",
          label: "Deploy Cage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/cage-manager/send-event-deprecated",
          label: "[DEPRECATED] Send Event",
          className: "menu__list-item--deprecated api-method post",
        },
        {
          type: "doc",
          id: "api/cage-manager/send-event",
          label: "Send Event",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/cage-manager/get-key-deprecated",
          label: "[DEPRECATED] Get Public Key",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/get-public-key",
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
        id: "api/cage-manager/monitor",
      },
      items: [
        {
          type: "doc",
          id: "api/cage-manager/get-pod-status-logs-backup",
          label: "[DEPRECATED] Get Status",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/get-pod-status-logs",
          label: "Get Status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/get-algo-logs-backup",
          label: "[DEPRECATED] Get Logs",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/get-algo-logs",
          label: "Get Logs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/get-logs-deprecated",
          label: "[DEPRECATED] Get Logs",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "api/cage-manager/get-logs",
          label: "Get Logs",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
