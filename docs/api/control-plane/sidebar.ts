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
          id: "api/control-plane/get-all-collaboration-spaces",
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
          id: "api/control-plane/update-collaboration-space",
          label: "Update Collaboration Space",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/control-plane/delete-collaboration-space",
          label: "Delete Collaboration Space",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/control-plane/invite-collaborator",
          label: "Invite Collaborator",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/get-collaborators",
          label: "Get Collaborators",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/create-collaborator",
          label: "Create Collaborator",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/get-collaborator",
          label: "Get Collaborator",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/update-collaborator",
          label: "Update Collaborator",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/control-plane/delete-collaborator",
          label: "Delete Collaborator",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/control-plane/get-public-key",
          label: "GetPublicKey",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/publish-event",
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
      label: "Cages",
      link: {
        type: "doc",
        id: "api/control-plane/cages",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/deploy-cage",
          label: "Deploy Cage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/delete-cage",
          label: "Delete Cage",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/control-plane/upload-resource",
          label: "Upload Resource",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/control-plane/get-algorithm-logs",
          label: "Get Algorithm Logs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/get-deployment-logs",
          label: "Get Deployment Logs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/get-pod-statusses",
          label: "Get Pod Status",
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
          id: "api/control-plane/get-data-contracts",
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
      label: "Clients",
      link: {
        type: "doc",
        id: "api/control-plane/clients",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/get-notifications",
          label: "Get Notifications",
          className: "api-method get",
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
          id: "api/control-plane/get-collaboration-space-web-id",
          label: "Get WebId Document",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/get-collaboration-space-app-id",
          label: "Get AppId Document",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/get-client",
          label: "Get Client Info",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
