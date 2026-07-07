# ItemResponse2

Information about the request's response.

**Properties**

| Name            | Type                                                    | Required | Description                                                          |
| :-------------- | :------------------------------------------------------ | :------- | :------------------------------------------------------------------- |
| id              | string                                                  | ❌       | The response's ID.                                                   |
| originalRequest | [ResponseOriginalRequest2](ResponseOriginalRequest2.md) | ❌       | Information about the collection request.                            |
| responseTime    | number                                                  | ❌       | The time taken by the request to complete. The unit is milliseconds. |
| header          | ResponseHeader2_3                                       | ❌       |                                                                      |
| body            | string                                                  | ❌       | The raw text of the response.                                        |
| status          | string                                                  | ❌       | The response's status.                                               |
| code            | number                                                  | ❌       | The response status code.                                            |
| createdAt       | string                                                  | ❌       | The date and time at which the response was created.                 |
| updatedAt       | string                                                  | ❌       | The date and time at which the response was updated.                 |
| uid             | string                                                  | ❌       | The item's unique ID.                                                |

# ResponseHeader2_3
