# CollectionFolderDeleted

**Properties**

| Name     | Type                        | Required | Description                                                                                                                                                                         |
| :------- | :-------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data     | CollectionFolderDeletedData | ❌       | The folder's information.                                                                                                                                                           |
| meta     | any                         | ❌       | A Postman-specific response that contains information about the internal performed operation.                                                                                       |
| modelId  | string                      | ❌       | The folder's ID.                                                                                                                                                                    |
| revision | number                      | ❌       | An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource. |

# CollectionFolderDeletedData

The folder's information.

**Properties**

| Name  | Type   | Required | Description                        |
| :---- | :----- | :------- | :--------------------------------- |
| id    | string | ❌       | The folder's ID.                   |
| owner | string | ❌       | The user ID of the folder's owner. |
