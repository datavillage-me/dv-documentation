import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/control-plane/controlplane-api",
    },
    {
      type: "category",
      label: "Collaboration Spaces",
      link: {
        type: "doc",
        id: "api/control-plane/collaboration-spaces",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/get-collaboration-spaces",
          label: "Get All Collaboration Spaces",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/create-collaboration-space",
          label: "Create Collaboration Space",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/get-collaboration-space",
          label: "Get Collaboration Space",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/patch-collaboration-space",
          label: "Update Collaboration Space",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/control-plane/get-collaboration-space-collaborators",
          label: "Get Collaborators",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/get-collaboration-space-public-key",
          label: "getCollaborationSpacePublicKey",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/post-collaboration-space-event",
          label: "Publish Event",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/get-attestation-report",
          label: "Get Attestation Report",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Authentication",
      link: {
        type: "doc",
        id: "api/control-plane/authentication",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/get-current-credentials",
          label: "Get Current Credentials",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Data Contracts",
      link: {
        type: "doc",
        id: "api/control-plane/data-contracts",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/get-all-data-contracts",
          label: "Get All Data Contracts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/create-data-contract",
          label: "Create Data Contract",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/get-data-contract",
          label: "Get Data Contract",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/update-data-contract",
          label: "Update Data Contract",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/control-plane/delete-data-contract",
          label: "Delete Data Contract",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/control-plane/create-schema",
          label: "Create Schema",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/get-schema",
          label: "Get Schema",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/update-schema",
          label: "Update Schema",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/control-plane/delete-schema",
          label: "Delete Schema",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/control-plane/create-property",
          label: "Create Property",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/get-property",
          label: "Get Property",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/update-property",
          label: "Update Property",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/control-plane/delete-property",
          label: "Delete Property",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Public",
      link: {
        type: "doc",
        id: "api/control-plane/public",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/get-web-id",
          label: "Get WebId Document",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/get-app-id",
          label: "Get AppId Document",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
