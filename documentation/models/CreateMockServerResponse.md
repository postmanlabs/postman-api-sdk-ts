# CreateMockServerResponse

**Properties**

| Name           | Type                                   | Required | Description                                      |
| :------------- | :------------------------------------- | :------- | :----------------------------------------------- |
| serverResponse | CreateMockServerResponseServerResponse | ❌       | Information about the server response to create. |

# CreateMockServerResponseServerResponse

Information about the server response to create.

**Properties**

| Name       | Type                                                                | Required | Description                                                                                           |
| :--------- | :------------------------------------------------------------------ | :------- | :---------------------------------------------------------------------------------------------------- |
| name       | string                                                              | ✅       | The server response's name.                                                                           |
| statusCode | number                                                              | ✅       | The server response's 5xx HTTP response code. This property only accepts 5xx values.                  |
| headers    | [MockServerResponseHeadersData](MockServerResponseHeadersData.md)[] | ❌       | The server response's request headers, such as Content-Type, Accept, encoding, and other information. |
| language   | [MockServerResponseLanguage](MockServerResponseLanguage.md)         | ❌       | The server response's body language type.                                                             |
| body       | string                                                              | ❌       | The server response's body that returns when calling the mock server.                                 |
