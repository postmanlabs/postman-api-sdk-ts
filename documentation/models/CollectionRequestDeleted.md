# CollectionRequestDeleted

**Properties**

| Name     | Type                         | Required | Description                                                                                                                                                                         |
| :------- | :--------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelId  | string                       | ❌       | The request's ID.                                                                                                                                                                   |
| meta     | any                          | ❌       | A Postman-specific response that contains information about the internal performed operation.                                                                                       |
| data     | CollectionRequestDeletedData | ❌       | The request's information.                                                                                                                                                          |
| revision | number                       | ❌       | An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource. |

# CollectionRequestDeletedData

The request's information.

**Properties**

| Name  | Type   | Required | Description                         |
| :---- | :----- | :------- | :---------------------------------- |
| id    | string | ❌       | The request's ID.                   |
| owner | string | ❌       | The user ID of the request's owner. |
