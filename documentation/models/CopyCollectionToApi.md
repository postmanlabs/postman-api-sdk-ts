# CopyCollectionToApi

**Properties**

| Name          | Type                             | Required | Description                   |
| :------------ | :------------------------------- | :------- | :---------------------------- |
| data          | CopyCollectionToApiData          | ❌       |                               |
| operationType | CopyCollectionToApiOperationType | ❌       | The `COPY_COLLECTION` method. |

# CopyCollectionToApiData

**Properties**

| Name         | Type   | Required | Description                           |
| :----------- | :----- | :------- | :------------------------------------ |
| collectionId | string | ❌       | The collection ID to copy to the API. |

# CopyCollectionToApiOperationType

The `COPY_COLLECTION` method.

**Properties**

| Name            | Type   | Required | Description       |
| :-------------- | :----- | :------- | :---------------- |
| COPY_COLLECTION | string | ✅       | "COPY_COLLECTION" |
