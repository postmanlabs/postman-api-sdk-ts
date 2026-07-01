# ItemResponse1

Information about the request's response.

**Properties**

| Name            | Type                                                    | Required | Description                                                                                                                                     |
| :-------------- | :------------------------------------------------------ | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| originalRequest | [ResponseOriginalRequest1](ResponseOriginalRequest1.md) | ❌       | Information about the collection request.                                                                                                       |
| responseTime    | number                                                  | ❌       | The time taken by the request to complete. If a number, the unit is milliseconds. If the response is manually created, this can be set as null. |
| header          | ResponseHeader1                                         | ❌       |                                                                                                                                                 |
| body            | string                                                  | ❌       | The raw text of the response.                                                                                                                   |
| status          | string                                                  | ❌       | The response's status.                                                                                                                          |
| code            | number                                                  | ❌       | The response status code.                                                                                                                       |

# ResponseHeader1
