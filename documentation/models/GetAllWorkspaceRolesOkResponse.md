# GetAllWorkspaceRolesOkResponse

**Properties**

| Name  | Type                    | Required | Description                              |
| :---- | :---------------------- | :------- | :--------------------------------------- |
| roles | SuccessfulResponseRoles | ❌       | Information about the workspace's roles. |

# SuccessfulResponseRoles

Information about the workspace's roles.

**Properties**

| Name      | Type                                        | Required | Description                                    |
| :-------- | :------------------------------------------ | :------- | :--------------------------------------------- |
| user      | [WorkspaceRoleData](WorkspaceRoleData.md)[] | ❌       | The list of user roles in the workspace.       |
| usergroup | [WorkspaceRoleData](WorkspaceRoleData.md)[] | ❌       | The list of user group roles in the workspace. |
| partner   | [WorkspaceRoleData](WorkspaceRoleData.md)[] | ❌       | The list of partner in the workspace.          |
