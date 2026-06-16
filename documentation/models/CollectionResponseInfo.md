# CollectionResponseInfo

**Properties**

| Name    | Type                       | Required | Description                                                                                                                                                                                                                      |
| :------ | :------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data    | CollectionResponseInfoData | ❌       | Information about the response. For a complete list of properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). |
| meta    | any                        | ❌       | A Postman-specific response that contains information about the internal performed operation.                                                                                                                                    |
| modelId | string                     | ❌       | The response's ID.                                                                                                                                                                                                               |

# CollectionResponseInfoData

Information about the response. For a complete list of properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

**Properties**

| Name          | Type   | Required | Description                                                                                                                                                                         |
| :------------ | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | string | ❌       | The response's ID.                                                                                                                                                                  |
| request       | string | ❌       | The ID of the request that the response belongs to.                                                                                                                                 |
| name          | string | ❌       | The response's name.                                                                                                                                                                |
| owner         | string | ❌       | The user ID of the response's owner.                                                                                                                                                |
| createdAt     | string | ❌       | The response's creation date and time.                                                                                                                                              |
| updatedAt     | string | ❌       | The date and time at which the response was last updated.                                                                                                                           |
| lastRevision  | number | ❌       | An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource. |
| lastUpdatedBy | string | ❌       | The user ID of the user that last updated the response.                                                                                                                             |
