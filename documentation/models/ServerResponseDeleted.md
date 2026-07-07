# ServerResponseDeleted

Information about the deleted server response.

**Properties**

| Name       | Type                                                              | Required | Description                                                                                           |
| :--------- | :---------------------------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------- |
| id         | string                                                            | ❌       | The server response's ID.                                                                             |
| name       | string                                                            | ❌       | The server response's name.                                                                           |
| statusCode | number                                                            | ❌       | The server response's 5xx HTTP response code.                                                         |
| headers    | [ServerResponseDeletedHeaders](ServerResponseDeletedHeaders.md)[] | ❌       | The server response's request headers, such as Content-Type, Accept, encoding, and other information. |
| language   | ServerResponseDeletedLanguage                                     | ❌       | The server response's body language type.                                                             |
| body       | string                                                            | ❌       | The server response's body that returns when calling the mock server.                                 |
| createdBy  | string                                                            | ❌       | The user ID of the user who created the server response.                                              |
| updatedBy  | string                                                            | ❌       | The user ID of the user who last updated the server response.                                         |
| createdAt  | string                                                            | ❌       | The date and time at which the server response was created.                                           |

# ServerResponseDeletedLanguage

The server response's body language type.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| TEXT       | string | ✅       | "text"       |
| JAVASCRIPT | string | ✅       | "javascript" |
| JSON       | string | ✅       | "json"       |
| HTML       | string | ✅       | "html"       |
| XML        | string | ✅       | "xml"        |
