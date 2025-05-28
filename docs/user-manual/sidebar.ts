import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "user-manual/intro",
      customProps: { icon: "Home" },
    },
    {
      type: "doc",
      id: "user-manual/auth",
    },
    {
      type: "category",
      label: "Collaboration Space Owner",
      collapsible: true,
      collapsed: true,
      customProps: { icon: "Settings" },
      items: [
        "user-manual/collaboration-space-owner/intro",
        "user-manual/collaboration-space-owner/space-management/create-space",
        {
          type: "category",
          label: "Algorithm",
          items: [
            "user-manual/collaboration-space-owner/algorithm/intro",
            "user-manual/collaboration-space-owner/algorithm/configure",
            "user-manual/collaboration-space-owner/algorithm/configure-secrets",
          ],
        },
        "user-manual/collaboration-space-owner/deploy-space",
        "user-manual/collaboration-space-owner/logs",
        "user-manual/collaboration-space-owner/data-contract-management/create-data-contract",
        "user-manual/collaboration-space-owner/invite-collaborator/create-invite",
        "user-manual/collaboration-space-owner/events",
      ],
    },
    {
      type: "category",
      label: "Data collaborator",
      collapsible: true,
      collapsed: true,
      customProps: { icon: "Handshake" },

      items: [
        "user-manual/data-collaborator/intro",
        "user-manual/data-collaborator/accept-invite",
        "user-manual/data-collaborator/configure",
        "user-manual/data-collaborator/configure-secrets",
        {
          type: "category",
          label: "Google Cloud Storage GCS",
          items: [
            "user-manual/data-collaborator/google-cloud-storage/create-bucket",
            "user-manual/data-collaborator/google-cloud-storage/create-service-account",
          ],
        },
        {
          type: "category",
          label: "Encryption",
          items: [
            "user-manual/data-collaborator/encryption/create-encryption-key",
            "user-manual/data-collaborator/encryption/encrypt-parquet-file",
            "user-manual/data-collaborator/encryption/decrypt-parquet-file",
          ],
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
