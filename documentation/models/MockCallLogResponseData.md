# MockCallLogResponseData

The server response's response information.

**Properties**

| Name       | Type                                                            | Required | Description                      |
| :--------- | :-------------------------------------------------------------- | :------- | :------------------------------- |
| type       | string                                                          | ❌       | The type of response.            |
| statusCode | number                                                          | ❌       | The response's status code.      |
| headers    | [CallLogsResponseHeadersData](CallLogsResponseHeadersData.md)[] | ❌       | The response's headers.          |
| body       | [MockServerResponseBodyData](MockServerResponseBodyData.md)     | ❌       | The response's body information. |
