# RemoveApiCatalogSystemEnvironmentAssociationsData

Information about the associated workspace environment.

**Properties**

| Name                   | Type                                                    | Required | Description                                                                                                                               |
| :--------------------- | :------------------------------------------------------ | :------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| workspaceEnvironmentId | string                                                  | ✅       | The workspace's environment ID.                                                                                                           |
| status                 | RemoveApiCatalogSystemEnvironmentAssociationsDataStatus | ✅       | The status of the operation: - `deleted` — The association was successfully removed. - `notFound` — The association could not be removed. |

# RemoveApiCatalogSystemEnvironmentAssociationsDataStatus

The status of the operation: - `deleted` — The association was successfully removed. - `notFound` — The association could not be removed.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| DELETED   | string | ✅       | "deleted"   |
| NOT_FOUND | string | ✅       | "notFound"  |
