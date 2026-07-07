# CollectionRequestUpdated

**Properties**

| Name     | Type                         | Required | Description                                                                                                                                                                                                                            |
| :------- | :--------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data     | CollectionRequestUpdatedData | ❌       | Information about the updated request. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). |
| meta     | any                          | ❌       | A Postman-specific response that contains information about the internal performed operation.                                                                                                                                          |
| modelId  | string                       | ❌       | The request's ID.                                                                                                                                                                                                                      |
| revision | number                       | ❌       | An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.                                                    |

# CollectionRequestUpdatedData

Information about the updated request. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

**Properties**

| Name          | Type   | Required | Description                                                                                                                                                                         |
| :------------ | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | string | ❌       | The request's ID.                                                                                                                                                                   |
| name          | string | ❌       | The request's name.                                                                                                                                                                 |
| description   | string | ❌       | The request's description.                                                                                                                                                          |
| createdAt     | string | ❌       | The request's creation date and time.                                                                                                                                               |
| updatedAt     | string | ❌       | The date and time at which the request was last updated.                                                                                                                            |
| owner         | string | ❌       | The user ID of the request's owner.                                                                                                                                                 |
| lastUpdatedBy | string | ❌       | The user ID of the user that last updated the request.                                                                                                                              |
| lastRevision  | number | ❌       | An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource. |
