# CollectionRequestCreated

**Properties**

| Name     | Type                         | Required | Description                                                                                                                                                                                                                            |
| :------- | :--------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data     | CollectionRequestCreatedData | ❌       | Information about the created request. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). |
| meta     | any                          | ❌       | A Postman-specific response that contains information about the internal performed operation.                                                                                                                                          |
| modelId  | string                       | ❌       | The request's ID.                                                                                                                                                                                                                      |
| revision | number                       | ❌       | An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.                                                    |

# CollectionRequestCreatedData

Information about the created request. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

**Properties**

| Name           | Type     | Required | Description                                              |
| :------------- | :------- | :------- | :------------------------------------------------------- |
| id             | string   | ❌       | The request's ID.                                        |
| name           | string   | ❌       | The request's name.                                      |
| owner          | string   | ❌       | The user ID of the request's owner.                      |
| folder         | string   | ❌       | Information about the request's parent folder.           |
| responses      | string[] | ❌       | A list of the request's responses.                       |
| collection     | string   | ❌       | The collection ID that the request belongs to.           |
| responsesOrder | string[] | ❌       | A list of response IDs and their order in the folder.    |
| createdAt      | string   | ❌       | The requeset's creation date and time.                   |
| updatedAt      | string   | ❌       | The date and time at which the request was last updated. |
| lastUpdatedBy  | string   | ❌       | The user ID of the user that last updated the folder.    |
