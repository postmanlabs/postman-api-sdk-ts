# CreateWorkspace

**Properties**

| Name      | Type                     | Required | Description                      |
| :-------- | :----------------------- | :------- | :------------------------------- |
| workspace | CreateWorkspaceWorkspace | ❌       | Information about the workspace. |

# CreateWorkspaceWorkspace

Information about the workspace.

**Properties**

| Name        | Type                         | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :---------- | :--------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | string                       | ✅       | The workspace's name.                                                                                                                                                                                                                                                                                                                                                                                                       |
| type        | CreateWorkspaceWorkspaceType | ✅       | The type of workspace: - `personal` - `private` — Private workspaces are available on Postman [**Team** and **Enterprise** plans](https://www.postman.com/pricing). - `public` - `team` - `partner` — [Partner Workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) are available on Postman [**Team** and **Enterprise** plans](https://www.postman.com/pricing)). |
| description | string                       | ❌       | The workspace's description.                                                                                                                                                                                                                                                                                                                                                                                                |
| about       | string                       | ❌       | A brief summary about the workspace.                                                                                                                                                                                                                                                                                                                                                                                        |
| teamId      | string                       | ❌       | The team ID to assign to the workspace. This property is required if Postman [Organizations](https://learning.postman.com/docs/administration/managing-your-team/overview) is enabled.                                                                                                                                                                                                                                      |

# CreateWorkspaceWorkspaceType

The type of workspace: - `personal` - `private` — Private workspaces are available on Postman [**Team** and **Enterprise** plans](https://www.postman.com/pricing). - `public` - `team` - `partner` — [Partner Workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) are available on Postman [**Team** and **Enterprise** plans](https://www.postman.com/pricing)).

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| PERSONAL  | string | ✅       | "personal"  |
| PRIVATE\_ | string | ✅       | "private"   |
| PUBLIC\_  | string | ✅       | "public"    |
| TEAM      | string | ✅       | "team"      |
| PARTNER   | string | ✅       | "partner"   |
