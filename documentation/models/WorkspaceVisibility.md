# WorkspaceVisibility

The workspace's visibility. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace: - `personal` — Only you can access the workspace. - `team` — All team members can access the workspace. - `private` — Only invited team members can access the workspace ([**Team** and **Enterprise** plans only](https://www.postman.com/pricing)). - `public` — Everyone can access the workspace. - `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Team** and **Enterprise** plans only](https://www.postman.com/pricing)).

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| PERSONAL  | string | ✅       | "personal"  |
| TEAM      | string | ✅       | "team"      |
| PRIVATE\_ | string | ✅       | "private"   |
| PUBLIC\_  | string | ✅       | "public"    |
| PARTNER   | string | ✅       | "partner"   |
