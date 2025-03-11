import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "user-manual/intro",
    },
    {
      type: 'category',
      label: 'Collaboration Space Owner',
      collapsible: true,
      collapsed: true,
      items: [
        'user-manual/collaboration-space-owner/intro',
        'user-manual/collaboration-space-owner/auth',
        {
          type: 'category',
          label: 'Space Management',
          items: ['user-manual/collaboration-space-owner/space-management/create-space', 'user-manual/collaboration-space-owner/space-management/update-space', 'user-manual/collaboration-space-owner/space-management/delete-space'],
        },
        {
          type: 'category',
          label: 'Cage Management',
          items: ['user-manual/collaboration-space-owner/cage-management/deploy-cage', 'user-manual/collaboration-space-owner/cage-management/logs'],
        },
        {
          type: 'category',
          label: 'Data Contract Management',
          items: ['user-manual/collaboration-space-owner/data-contract-management/create-data-contract', 'user-manual/collaboration-space-owner/data-contract-management/delete-data-contract'],
        },
        {
          type: 'category',
          label: 'Invite Collaborator',
          items: ['user-manual/collaboration-space-owner/invite-collaborator/create-invite', 'user-manual/collaboration-space-owner/invite-collaborator/list-invites', 'user-manual/collaboration-space-owner/invite-collaborator/delete-invite'],
        },
      ],
    },
    {
      type: "category",
      label: "Code Provider",
      collapsible: true,
      collapsed: true,
      items: [
        'user-manual/code-provider/intro',
        'user-manual/code-provider/accept-invitation',
        {
          type: 'category',
          label: 'Create Algorithm',
          items: ['user-manual/code-provider/create-algorithm/get-docker-template', 'user-manual/code-provider/create-algorithm/develop-algorithm', 'user-manual/code-provider/create-algorithm/create-docker-image'],
        },
        {
          type: 'category',
          label: 'Update Collaborator',
          items: ['user-manual/code-provider/configure-collaborator/configure-registry', 'user-manual/code-provider/configure-collaborator/configure-variables', 'user-manual/code-provider/configure-collaborator/configure-secrets'],
        }
      ],
    },
    {
      type: "category",
      label: "Data Provider",
      collapsible: true,
      collapsed: true,
      items: [
        'user-manual/data-provider/intro',
        'user-manual/data-provider/accept-invitation',
        {
          type: 'category',
          label: 'Configure Collaborator',
          items: ['user-manual/data-provider/configure-collaborator/configure-data-source'],
        },
        {
          type: 'category',
          label: 'Google Cloud Storage GCS',
          items: ['user-manual/data-provider/google-cloud-storage/create-bucket', 'user-manual/data-provider/google-cloud-storage/create-service-account'],
        },
        {
          type: 'category',
          label: 'Encryption',
          items: ['user-manual/data-provider/encryption/create-encryption-key', 'user-manual/data-provider/encryption/encrypt-parquet-file'],
        },
      ],
    },
    {
      type: "category",
      label: "Data Consumer",
      collapsible: true,
      collapsed: true,
      items: [
        'user-manual/data-consumer/intro',
        'user-manual/data-consumer/accept-invitation',
        {
          type: 'category',
          label: 'Configure Collaborator',
          items: ['user-manual/data-consumer/configure-collaborator/configure-data-source'],
        },
        {
          type: 'category',
          label: 'Google Cloud Storage GCS',
          items: ['user-manual/data-consumer/google-cloud-storage/create-bucket', 'user-manual/data-consumer/google-cloud-storage/create-service-account'],
        },
        {
          type: 'category',
          label: 'Encryption',
          items: ['user-manual/data-consumer/encryption/create-encryption-key', 'user-manual/data-consumer/encryption/decrypt-parquet-file'],
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
