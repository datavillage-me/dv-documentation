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
          label: "Create New Collaboration Space",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/get-collaboration-space",
          label: "Get Collaboration Space By ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/patch-collaboration-space",
          label: "Update Collaboration Space By ID",
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
          label: "Get Your Current Credentials",
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
          id: "api/control-plane/create-new-data-contract",
          label: "Create New Data Contract",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/get-data-contract-by-id",
          label: "Get Data Contract By ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/update-data-contract-by-id",
          label: "Update Data Contract By ID",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/control-plane/delete-data-contract-by-id",
          label: "Delete Data Contract By ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/control-plane/create-new-schema",
          label: "Create New Schema",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/get-schema-by-id",
          label: "Get Schema By ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/update-schema-by-id",
          label: "Update Schema By ID",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/control-plane/delete-schema-by-id",
          label: "Delete Schema By ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/control-plane/create-new-property",
          label: "Create New Property",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/get-property-by-id",
          label: "Get Property By ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/update-property-by-id",
          label: "Update Property By ID",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/control-plane/delete-property-by-id",
          label: "Delete Property By ID",
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
