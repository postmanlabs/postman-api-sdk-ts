# CreateGetTeamSettingsResponse

**Properties**

| Name     | Type                                  | Required | Description |
| :------- | :------------------------------------ | :------- | :---------- |
| settings | CreateGetTeamSettingsResponseSettings | ❌       |             |

# CreateGetTeamSettingsResponseSettings

**Properties**

| Name                  | Type   | Required | Description                                                                              |
| :-------------------- | :----- | :------- | :--------------------------------------------------------------------------------------- |
| rfaForAddMember       | string | ❌       | If enabled, admins must approve any new team members before they can join.               |
| rfaForAddCollaborator | string | ❌       | If enabled, collaborators require approval before they can access the team's workspaces. |
