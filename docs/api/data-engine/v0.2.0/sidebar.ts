import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/data-engine/v0.2.0/dataengine-api",
    },
    {
      type: "category",
      label: "Quality",
      link: {
        type: "doc",
        id: "api/data-engine/v0.2.0/quality",
      },
      items: [
        {
          type: "doc",
          id: "api/data-engine/v0.2.0/get-collaborator-reports",
          label: "Get Collaborator Reports",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/data-engine/v0.2.0/start-quality-validation",
          label: "Start Quality Validation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/data-engine/v0.2.0/get-quality-report",
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
          id: "api/data-engine/v0.2.0/collaborator-status",
          label: "Status of a collaborator in the data engine",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/data-engine/v0.2.0/mount-collaborator",
          label: "Mount a new collaborator",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/data-engine/v0.2.0/unmount-collaborator",
          label: "Unmount a collaborator",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/data-engine/v0.2.0/query-collaborator",
          label: "Query on a collaborator",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/data-engine/v0.2.0/append-collaborator",
          label: "Append data on a Data Consumer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/data-engine/v0.2.0/export-collaborator",
          label: "Export Data Consumer",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
