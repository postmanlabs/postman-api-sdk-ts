# CollectionFolderUpdated

**Properties**

| Name     | Type                        | Required | Description                                                                                                                                                                                                                                |
| :------- | :-------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data     | CollectionFolderUpdatedData | ❌       | The folder's updated information, including the updated properties. For a complete list of properties, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v1.0.0/draft-07/collection.json). |
| meta     | any                         | ❌       | A Postman-specific response that contains information about the internal performed operation.                                                                                                                                              |
| modelId  | string                      | ❌       | The folder's ID.                                                                                                                                                                                                                           |
| revision | number                      | ❌       | An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.                                                        |

# CollectionFolderUpdatedData

The folder's updated information, including the updated properties. For a complete list of properties, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v1.0.0/draft-07/collection.json).

**Properties**

| Name          | Type   | Required | Description                                                                                                                                                                         |
| :------------ | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | string | ❌       | The folder's ID.                                                                                                                                                                    |
| name          | string | ❌       | The folder's name.                                                                                                                                                                  |
| description   | string | ❌       | The folder's description.                                                                                                                                                           |
| createdAt     | string | ❌       | The folder's creation date and time.                                                                                                                                                |
| updatedAt     | string | ❌       | The date and time at which the folder was last updated.                                                                                                                             |
| owner         | string | ❌       | The user ID of the folder's owner.                                                                                                                                                  |
| lastUpdatedBy | string | ❌       | The user ID of the user that last updated the folder.                                                                                                                               |
| lastRevision  | number | ❌       | An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource. |
| collection    | string | ❌       | The collection ID that the folder belongs to.                                                                                                                                       |
| folder        | string | ❌       | Information about the folder.                                                                                                                                                       |
