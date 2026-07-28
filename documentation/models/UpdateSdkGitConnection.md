# UpdateSdkGitConnection

**Properties**

| Name                          | Type                         | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :---------------------------- | :--------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status                        | UpdateSdkGitConnectionStatus | ✅       | The updated SDK Git connection lifecycle state.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| autoUpdatePullRequestsEnabled | boolean                      | ❌       | If true, pull requests are opened automatically whenever the source changes or a new version of the SDK generator is released. If false, pull requests are opened automatically, but only for manually-triggered SDK regeneration. If `autoUpdatePullRequestsEnabled` isn't set, the default behavior depends on the user's Postman plan: - **Enterprise** plan users — Defaults to the `true` value. - **Team** plan users and read only — Defaults to the `false` value. |

# UpdateSdkGitConnectionStatus

The updated SDK Git connection lifecycle state.

**Properties**

| Name         | Type   | Required | Description    |
| :----------- | :----- | :------- | :------------- |
| ACTIVE       | string | ✅       | "active"       |
| DISCONNECTED | string | ✅       | "disconnected" |
