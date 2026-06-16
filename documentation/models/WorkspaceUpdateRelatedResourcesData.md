# WorkspaceUpdateRelatedResourcesData

**Properties**

| Name       | Type     | Required | Description                  |
| :--------- | :------- | :------- | :--------------------------- |
| resource   | Resource | ✅       | The type of linked resource. |
| resourceId | string   | ✅       | The linked resource's ID.    |

# Resource

The type of linked resource.

**Properties**

| Name                       | Type   | Required | Description                |
| :------------------------- | :----- | :------- | :------------------------- |
| COLLECTION                 | string | ✅       | "collection"               |
| REQUEST                    | string | ✅       | "request"                  |
| RESPONSE                   | string | ✅       | "response"                 |
| FOLDER                     | string | ✅       | "folder"                   |
| EXTENSIBLE_COLLECTION      | string | ✅       | "extensibleCollection"     |
| EXTENSIBLE_COLLECTION_ITEM | string | ✅       | "extensibleCollectionItem" |
