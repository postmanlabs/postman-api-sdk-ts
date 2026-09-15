# UpdateMockServerResponse

**Properties**

| Name           | Type                                   | Required | Description                           |
| :------------- | :------------------------------------- | :------- | :------------------------------------ |
| serverResponse | UpdateMockServerResponseServerResponse | ❌       | The server response fields to update. |

# UpdateMockServerResponseServerResponse

The server response fields to update.

**Properties**

| Name       | Type                                                                | Required | Description                                                                                                                                                        |
| :--------- | :------------------------------------------------------------------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | string                                                              | ❌       | The server response's name.                                                                                                                                        |
| statusCode | number                                                              | ❌       | The server response's 5xx HTTP response code. This property only accepts [5xx values](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml). |
| headers    | [MockServerResponseHeadersData](MockServerResponseHeadersData.md)[] | ❌       | The server response's request headers, such as Content-Type, Accept, encoding, and other information.                                                              |
| language   | [MockServerResponseLanguage](MockServerResponseLanguage.md)         | ❌       | The server response's body language type.                                                                                                                          |
| body       | string                                                              | ❌       | The server response's body that returns when you call the mock server.                                                                                             |
