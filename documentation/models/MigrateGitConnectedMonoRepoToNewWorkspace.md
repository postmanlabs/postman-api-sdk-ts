# MigrateGitConnectedMonoRepoToNewWorkspace

**Properties**

| Name          | Type                                                   | Required | Description                                           |
| :------------ | :----------------------------------------------------- | :------- | :---------------------------------------------------- |
| workspaceInfo | MigrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfo | ✅       | Information about the new workspace.                  |
| gitInfo       | GitInfo                                                | ✅       | Information about the connected remote Git mono-repo. |

# MigrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfo

Information about the new workspace.

**Properties**

| Name | Type   | Required | Description                                                        |
| :--- | :----- | :------- | :----------------------------------------------------------------- |
| name | string | ✅       | The name of the workspace to create and migrate the definition to. |

# GitInfo

Information about the connected remote Git mono-repo.

**Properties**

| Name | Type   | Required | Description                                                                                                                                                                                                                                                                   |
| :--- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| path | string | ✅       | The directory path in the remote mono-repo containing the API's collections and definitions. This property expects an absolute path and only contains alphanumeric characters, slashes, hyphens, underscores, and periods. It cannot contain path traversal sequences (\..\). |
