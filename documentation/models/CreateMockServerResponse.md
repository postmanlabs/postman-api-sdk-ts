# CreateMockServerResponse

**Properties**

| Name           | Type                                   | Required | Description |
| :------------- | :------------------------------------- | :------- | :---------- |
| serverResponse | CreateMockServerResponseServerResponse | ❌       |             |

# CreateMockServerResponseServerResponse

**Properties**

| Name       | Type                                                                                                | Required | Description                                                                                           |
| :--------- | :-------------------------------------------------------------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------- |
| name       | string                                                                                              | ✅       | The server response's name.                                                                           |
| statusCode | number                                                                                              | ✅       | The server response's 5xx HTTP response code. This property only accepts 5xx values.                  |
| headers    | [CreateMockServerResponseServerResponseHeaders](CreateMockServerResponseServerResponseHeaders.md)[] | ❌       | The server response's request headers, such as Content-Type, Accept, encoding, and other information. |
| language   | CreateMockServerResponseServerResponseLanguage                                                      | ❌       | The server response's body language type.                                                             |
| body       | string                                                                                              | ❌       | The server response's body that returns when calling the mock server.                                 |

# CreateMockServerResponseServerResponseLanguage

The server response's body language type.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| TEXT       | string | ✅       | "text"       |
| JAVASCRIPT | string | ✅       | "javascript" |
| JSON       | string | ✅       | "json"       |
| HTML       | string | ✅       | "html"       |
| XML        | string | ✅       | "xml"        |
