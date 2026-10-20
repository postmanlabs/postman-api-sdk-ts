# UpdateWorkspaceData

**Properties**

| Name        | Type                    | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :---------- | :---------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | string                  | ❌       | The workspace's new name.                                                                                                                                                                                                                                                                                                                                                                                                          |
| type        | UpdateWorkspaceDataType | ❌       | The new workspace visibility [type](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility). This property does not support the following workspace visibility changes: - `private` to `public`, `public` to `private`, and `private` to `personal` for Free and Basic [plans](https://www.postman.com/pricing/). - `public` to `personal` for team users. |
| description | string                  | ❌       | The new workspace description.                                                                                                                                                                                                                                                                                                                                                                                                     |
| about       | string                  | ❌       | A brief summary about the workspace.                                                                                                                                                                                                                                                                                                                                                                                               |

# UpdateWorkspaceDataType

The new workspace visibility [type](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility). This property does not support the following workspace visibility changes: - `private` to `public`, `public` to `private`, and `private` to `personal` for Free and Basic [plans](https://www.postman.com/pricing/). - `public` to `personal` for team users.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| PRIVATE\_ | string | ✅       | "private"   |
| PERSONAL  | string | ✅       | "personal"  |
| TEAM      | string | ✅       | "team"      |
| PUBLIC\_  | string | ✅       | "public"    |
