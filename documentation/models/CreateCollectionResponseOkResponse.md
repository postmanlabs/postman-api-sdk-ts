# CreateCollectionResponseOkResponse

**Properties**

| Name     | Type                          | Required | Description                                                                                                                                                                                                                      |
| :------- | :---------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data     | CollectionResponseCreatedData | ❌       | Information about the response. For a complete list of properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). |
| meta     | any                           | ❌       | A Postman-specific response that contains information about the internal performed operation.                                                                                                                                    |
| modelId  | string                        | ❌       | The response's ID.                                                                                                                                                                                                               |
| revision | number                        | ❌       | An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.                                              |

# CollectionResponseCreatedData

Information about the response. For a complete list of properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

**Properties**

| Name          | Type   | Required | Description                                               |
| :------------ | :----- | :------- | :-------------------------------------------------------- |
| id            | string | ❌       | The response's ID.                                        |
| owner         | string | ❌       | The user ID of the response's owner.                      |
| request       | string | ❌       | The request ID of the response's associated request.      |
| createdAt     | string | ❌       | The date and time at which the response was created.      |
| updatedAt     | string | ❌       | The date and time at which the response was last updated. |
| lastUpdatedBy | string | ❌       | The user ID of the user who last updated the response.    |
