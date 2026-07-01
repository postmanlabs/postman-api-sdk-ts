# AddApiCatalogSystemEnvironmentAssociationsData

Information about the associated workspace environment.

**Properties**

| Name                        | Type                                                 | Required | Description                                                                                                                                                                                                                                                    |
| :-------------------------- | :--------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| workspaceEnvironmentId      | string                                               | ✅       | The workspace's environment ID.                                                                                                                                                                                                                                |
| status                      | AddApiCatalogSystemEnvironmentAssociationsDataStatus | ✅       | The association's status: - `created` — An association was created. - `existing` — The association already existed and is unchanged. - `replaced` — The association was moved from a different system environment. - `excluded` — The association was skipped. |
| id                          | string                                               | ❌       | The association's unique ID. This value doesn't return if the item was excluded.                                                                                                                                                                               |
| workspaceId                 | string                                               | ❌       | The ID of the workspace that contains the environment. This value doesn't return if the item was excluded.                                                                                                                                                     |
| associatedAt                | string                                               | ❌       | The date and time at which the association was created. This value doesn't return if the item was excluded.                                                                                                                                                    |
| previousSystemEnvironmentId | string                                               | ❌       | The system environment ID the association was moved from. This only returns when the status is `replaced`.                                                                                                                                                     |
| reason                      | string                                               | ❌       | The reason the association was excluded. This only returns when the status is `excluded`.                                                                                                                                                                      |

# AddApiCatalogSystemEnvironmentAssociationsDataStatus

The association's status: - `created` — An association was created. - `existing` — The association already existed and is unchanged. - `replaced` — The association was moved from a different system environment. - `excluded` — The association was skipped.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| CREATED  | string | ✅       | "created"   |
| EXISTING | string | ✅       | "existing"  |
| REPLACED | string | ✅       | "replaced"  |
| EXCLUDED | string | ✅       | "excluded"  |
