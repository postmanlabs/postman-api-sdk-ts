# DetectedSecretsResourcesData

**Properties**

| Name | Type                             | Required | Description             |
| :--- | :------------------------------- | :------- | :---------------------- |
| type | DetectedSecretsResourcesDataType | ❌       | The type of resource.   |
| ids  | string[]                         | ❌       | A list of resource IDs. |

# DetectedSecretsResourcesDataType

The type of resource.

**Properties**

| Name                       | Type   | Required | Description                  |
| :------------------------- | :----- | :------- | :--------------------------- |
| COLLECTION                 | string | ✅       | "collection"                 |
| ENVIRONMENT                | string | ✅       | "environment"                |
| EXTENSIBLE_COLLECTION      | string | ✅       | "extensible-collection"      |
| GLOBALS                    | string | ✅       | "globals"                    |
| EXAMPLE                    | string | ✅       | "example"                    |
| REQUEST                    | string | ✅       | "request"                    |
| FOLDER                     | string | ✅       | "folder"                     |
| EXTENSIBLE_COLLECTION_META | string | ✅       | "extensible-collection-meta" |
| EXTENSIBLE_REQUEST         | string | ✅       | "extensible-request"         |
| EXTENSIBLE_FOLDER          | string | ✅       | "extensible-folder"          |
| EXTENSIBLE_EXAMPLE         | string | ✅       | "extensible-example"         |
| EXTENSIBLE_MESSAGE         | string | ✅       | "extensible-message"         |
