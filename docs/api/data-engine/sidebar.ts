import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/data-engine/dataengine-api",
    },
    {
      type: "category",
      label: "Quality",
      link: {
        type: "doc",
        id: "api/data-engine/quality",
      },
      items: [
        {
          type: "doc",
          id: "api/data-engine/get-collaborator-reports",
          label: "Get Collaborator Reports",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/data-engine/start-quality-validation",
          label: "Start Quality Validation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/data-engine/get-quality-report",
          label: "Get Quality Report",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/data-engine/collaborator-status",
          label: "Status of a collaborator in the data engine",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/data-engine/mount-collaborator",
          label: "Mount a new collaborator",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/data-engine/unmount-collaborator",
          label: "Unmount a collaborator",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/data-engine/query-collaborator",
          label: "Query on a collaborator",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/data-engine/append-collaborator",
          label: "Append data on a Data Consumer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/data-engine/export-collaborator",
          label: "Export Data Consumer",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
