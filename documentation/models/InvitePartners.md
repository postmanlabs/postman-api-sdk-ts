# InvitePartners

Invite partners to a Partner Workspace.

**Properties**

| Name           | Type                                                                                                  | Required | Description                                                                                                                              |
| :------------- | :---------------------------------------------------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| action         | InvitePartnersAction                                                                                  | ✅       | The `invite_partner` action.                                                                                                             |
| targetEntity   | InvitePartnersTargetEntity                                                                            | ✅       | The `workspace` value.                                                                                                                   |
| targetEntityId | string                                                                                                | ✅       | The Partner Workspace's ID.                                                                                                              |
| roleId         | RoleId                                                                                                | ✅       | The role ID to assign to invited partners: - `4` — Viewer - `5` — Editor - `6` — Viewer and Partner Lead - `7` — Editor and Partner Lead |
| target         | [ManagePartnerWorkspaceInvitesTargetObjectEmails](ManagePartnerWorkspaceInvitesTargetObjectEmails.md) | ✅       | The target on which to perform the action.                                                                                               |

# InvitePartnersAction

The `invite_partner` action.

**Properties**

| Name           | Type   | Required | Description      |
| :------------- | :----- | :------- | :--------------- |
| INVITE_PARTNER | string | ✅       | "invite_partner" |

# InvitePartnersTargetEntity

The `workspace` value.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| WORKSPACE | string | ✅       | "workspace" |

# RoleId

The role ID to assign to invited partners: - `4` — Viewer - `5` — Editor - `6` — Viewer and Partner Lead - `7` — Editor and Partner Lead

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| \_4  | string | ✅       | "4"         |
| \_5  | string | ✅       | "5"         |
| \_6  | string | ✅       | "6"         |
| \_7  | string | ✅       | "7"         |
