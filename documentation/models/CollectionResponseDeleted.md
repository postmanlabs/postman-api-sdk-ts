# CollectionResponseDeleted

**Properties**

| Name     | Type                          | Required | Description                                                                                                                                                                         |
| :------- | :---------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelId  | string                        | ❌       | The response's ID.                                                                                                                                                                  |
| meta     | any                           | ❌       | A Postman-specific response that contains information about the internal performed operation.                                                                                       |
| data     | CollectionResponseDeletedData | ❌       | The response's information.                                                                                                                                                         |
| revision | number                        | ❌       | An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource. |

# CollectionResponseDeletedData

The response's information.

**Properties**

| Name  | Type   | Required | Description                         |
| :---- | :----- | :------- | :---------------------------------- |
| id    | string | ❌       | The response's ID.                  |
| owner | string | ❌       | The user ID of the request's owner. |
