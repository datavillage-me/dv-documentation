import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "control-plane-cage-client",
      collapsible: true,
      collapsed: true,
      customProps: { icon: "Settings" },

      items: [
        "reference/control_plane_cage_client/api/data_contracts/get_data_contract",
        "reference/control_plane_cage_client/api/collaboration_spaces/get_collaborator",
        "reference/control_plane_cage_client/api/collaboration_spaces/get_collaborators",
      ],
    },
    {
      type: "category",
      label: "data-engine-client",
      collapsible: true,
      collapsed: true,
      customProps: { icon: "Settings" },

      items: [
        "reference/dv_data_engine_client/api/default/mount_collaborator",
        "reference/dv_data_engine_client/api/default/collaborator_status",
        "reference/dv_data_engine_client/api/default/query_collaborator",
        "reference/dv_data_engine_client/api/default/append_collaborator",
        "reference/dv_data_engine_client/api/default/export_collaborator",
        "reference/dv_data_engine_client/api/default/unmount_collaborator",
        "reference/dv_data_engine_client/api/quality/start_quality_validation",
        "reference/dv_data_engine_client/api/quality/get_quality_report",
        "reference/dv_data_engine_client/api/quality/get_collaborator_reports",
      ],
    },
  ],
};

export default sidebar.apisidebar;
