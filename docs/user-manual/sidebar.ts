import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "user-manual/intro",
      customProps: { icon: "Home" },
    },
    {
      type: "category",
      label: "Collaboration Space Owner",
      collapsible: true,
      collapsed: true,
      customProps: { icon: "Settings" },

      items: [
        "user-manual/collaboration-space-owner/intro",
        "user-manual/collaboration-space-owner/auth",
        "user-manual/collaboration-space-owner/space-management/create-space",
        {
          type: "category",
          label: "Algorithm",
          customProps: { icon: "Handshake" },
          items: [
            "user-manual/code-provider/intro",
            "user-manual/code-provider/create-invite",
            "user-manual/code-provider/configure-collaborator/general",
            {
              type: "category",
              label: "Develop Algorithm",
              items: [
                "user-manual/code-provider/create-algorithm/get-docker-template",
                "user-manual/code-provider/create-algorithm/develop-algorithm",
                "user-manual/code-provider/create-algorithm/create-docker-image",
              ],
            },

            "user-manual/code-provider/configure-collaborator/configure-secrets",
            "user-manual/code-provider/accept-invite",
          ],
        },
        "user-manual/collaboration-space-owner/cage-management/deploy-cage",
        "user-manual/collaboration-space-owner/cage-management/logs",
        "user-manual/collaboration-space-owner/data-contract-management/create-data-contract",
        "user-manual/collaboration-space-owner/invite-collaborator/create-invite",
      ],
    },
    {
      type: "category",
      label: "Data Provider",
      collapsible: true,
      collapsed: true,
      customProps: { icon: "Handshake" },

      items: [
        "user-manual/data-provider/intro",
        "user-manual/data-provider/accept-invite",
        "user-manual/data-provider/configure-data-provider",
        "user-manual/data-provider/configure-secrets",
        {
          type: "category",
          label: "Google Cloud Storage GCS",
          items: [
            "user-manual/data-provider/google-cloud-storage/create-bucket",
            "user-manual/data-provider/google-cloud-storage/create-service-account",
          ],
        },
        {
          type: "category",
          label: "Encryption",
          items: [
            "user-manual/data-provider/encryption/create-encryption-key",
            "user-manual/data-provider/encryption/encrypt-parquet-file",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Data Consumer",
      collapsible: true,
      collapsed: true,
      customProps: { icon: "Handshake" },

      items: [
        "user-manual/data-consumer/intro",
        "user-manual/data-consumer/accept-invite",
        "user-manual/data-consumer/configure-data-consumer",
        "user-manual/data-consumer/configure-secrets",
        {
          type: "category",
          label: "Google Cloud Storage GCS",
          items: [
            "user-manual/data-consumer/google-cloud-storage/create-bucket",
            "user-manual/data-consumer/google-cloud-storage/create-service-account",
          ],
        },
        {
          type: "category",
          label: "Encryption",
          items: [
            "user-manual/data-consumer/encryption/create-encryption-key",
            "user-manual/data-consumer/encryption/decrypt-parquet-file",
          ],
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
