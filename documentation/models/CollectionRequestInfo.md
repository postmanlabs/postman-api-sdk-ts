# CollectionRequestInfo

**Properties**

| Name    | Type                      | Required | Description                                                                                                                                                                                                                    |
| :------ | :------------------------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelId | string                    | ❌       | The request's ID.                                                                                                                                                                                                              |
| meta    | any                       | ❌       | A Postman-specific response that contains information about the internal performed operation.                                                                                                                                  |
| data    | CollectionRequestInfoData | ❌       | Information about the request. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). |

# CollectionRequestInfoData

Information about the request. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

**Properties**

| Name          | Type   | Required | Description                                                                                                                                                                         |
| :------------ | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | string | ❌       | The request's ID.                                                                                                                                                                   |
| name          | string | ❌       | The request's name.                                                                                                                                                                 |
| owner         | string | ❌       | The user ID of the request's owner.                                                                                                                                                 |
| lastRevision  | number | ❌       | An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource. |
| lastUpdatedBy | string | ❌       | The user ID of the user that last updated the request.                                                                                                                              |
| createdAt     | string | ❌       | The request's creation date and time.                                                                                                                                               |
| updatedAt     | string | ❌       | The date and time at which the request was last updated.                                                                                                                            |
