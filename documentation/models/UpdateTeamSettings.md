# UpdateTeamSettings

**Properties**

| Name     | Type                       | Required | Description                          |
| :------- | :------------------------- | :------- | :----------------------------------- |
| settings | UpdateTeamSettingsSettings | ❌       | Information about the team settings. |

# UpdateTeamSettingsSettings

Information about the team settings.

**Properties**

| Name                  | Type                  | Required | Description                                                                              |
| :-------------------- | :-------------------- | :------- | :--------------------------------------------------------------------------------------- |
| rfaForAddMember       | RfaForAddMember       | ❌       | If enabled, admins must approve any new team members before they can join.               |
| rfaForAddCollaborator | RfaForAddCollaborator | ❌       | If enabled, collaborators require approval before they can access the team's workspaces. |

# RfaForAddMember

If enabled, admins must approve any new team members before they can join.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| ENABLED  | string | ✅       | "enabled"   |
| DISABLED | string | ✅       | "disabled"  |

# RfaForAddCollaborator

If enabled, collaborators require approval before they can access the team's workspaces.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| ENABLED  | string | ✅       | "enabled"   |
| DISABLED | string | ✅       | "disabled"  |
