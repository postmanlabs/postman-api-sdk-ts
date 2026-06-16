# CollectionFolderCreated

**Properties**

| Name     | Type                        | Required | Description                                                                                                                                                                                                     |
| :------- | :-------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data     | CollectionFolderCreatedData | ❌       | Information about the collection folder. For a complete list of properties, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). |
| meta     | any                         | ❌       | A Postman-specific response that contains information about the internal performed operation.                                                                                                                   |
| modelId  | string                      | ❌       | The folder's ID.                                                                                                                                                                                                |
| revision | number                      | ❌       | An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.                             |

# CollectionFolderCreatedData

Information about the collection folder. For a complete list of properties, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

**Properties**

| Name          | Type     | Required | Description                                                  |
| :------------ | :------- | :------- | :----------------------------------------------------------- |
| id            | string   | ❌       | The folder's ID.                                             |
| name          | string   | ❌       | The folder's name.                                           |
| order         | string[] | ❌       | A list of request IDs and their order in the created folder. |
| owner         | string   | ❌       | The user ID of the folder's owner.                           |
| folder        | string   | ❌       | Information about the folder.                                |
| folders       | string[] | ❌       | A list of folders.                                           |
| requests      | string[] | ❌       | A list of requests.                                          |
| createdAt     | string   | ❌       | The folder's creation date and time.                         |
| updatedAt     | string   | ❌       | The date and time at which the folder was last updated.      |
| collection    | string   | ❌       | The collection ID that the folder belongs to.                |
| description   | string   | ❌       | The folder's description.                                    |
| foldersOrder  | string[] | ❌       | A list of folder IDs and their order in the collection.      |
| lastUpdatedBy | string   | ❌       | The user ID of the user that last updated the folder.        |
