import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/control-plane/0.2.0/controlplane-api",
    },
    {
      type: "category",
      label: "Collaboration Spaces",
      link: {
        type: "doc",
        id: "api/control-plane/0.2.0/collaboration-spaces",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-all-collaboration-spaces",
          label: "Get All Collaboration Spaces",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/create-collaboration-space",
          label: "Create Collaboration Space",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-collaboration-space",
          label: "Get Collaboration Space",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/update-collaboration-space",
          label: "Update Collaboration Space",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/delete-collaboration-space",
          label: "Delete Collaboration Space",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/invite-collaborator",
          label: "Invite Collaborator",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-collaborators",
          label: "Get Collaborators",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/create-collaborator",
          label: "Create Collaborator",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-collaborator",
          label: "Get Collaborator",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/update-collaborator",
          label: "Update Collaborator",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/delete-collaborator",
          label: "Delete Collaborator",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-public-key",
          label: "GetPublicKey",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/publish-event",
          label: "Publish Event",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-attestation-report",
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
        id: "api/control-plane/0.2.0/cages",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/0.2.0/deploy-cage",
          label: "Deploy Cage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/delete-cage",
          label: "Delete Cage",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/upload-resource",
          label: "Upload Resource",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-algorithm-logs",
          label: "Get Algorithm Logs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-deployment-logs",
          label: "Get Deployment Logs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-pod-statusses",
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
        id: "api/control-plane/0.2.0/authentication",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-current-credentials",
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
        id: "api/control-plane/0.2.0/data-contracts",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-data-contracts",
          label: "Get All Data Contracts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/create-data-contract",
          label: "Create Data Contract",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-data-contract",
          label: "Get Data Contract",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/update-data-contract",
          label: "Update Data Contract",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/delete-data-contract",
          label: "Delete Data Contract",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/create-schema",
          label: "Create Schema",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-schema",
          label: "Get Schema",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/update-schema",
          label: "Update Schema",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/delete-schema",
          label: "Delete Schema",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/create-property",
          label: "Create Property",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-property",
          label: "Get Property",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/update-property",
          label: "Update Property",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/delete-property",
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
        id: "api/control-plane/0.2.0/clients",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-notifications",
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
        id: "api/control-plane/0.2.0/public",
      },
      items: [
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-collaboration-space-web-id",
          label: "Get WebId Document",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-collaboration-space-app-id",
          label: "Get AppId Document",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/control-plane/0.2.0/get-client",
          label: "Get Client Info",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
