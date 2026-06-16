# CreateMockServerResponseOkResponse

Information about the mock server's response.

**Properties**

| Name       | Type                                                        | Required | Description                                                                                                           |
| :--------- | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------- |
| createdAt  | string                                                      | ❌       | The date and time at which the server response was created.                                                           |
| updatedAt  | string                                                      | ❌       | The date and time at which the server response was last updated.                                                      |
| id         | string                                                      | ❌       | The server response's ID.                                                                                             |
| name       | string                                                      | ❌       | The server response's name.                                                                                           |
| statusCode | number                                                      | ❌       | The server response's 5xx HTTP response code.                                                                         |
| headers    | [SuccessfulResponseHeaders](SuccessfulResponseHeaders.md)[] | ❌       | The server response's request headers key-value pairs, such as Content-Type, Accept, encoding, and other information. |
| language   | string                                                      | ❌       | The server response's body language type.                                                                             |
| body       | string                                                      | ❌       | The server response's body that returns when calling the mock server.                                                 |
| createdBy  | string                                                      | ❌       | The user ID of the user who created the server response.                                                              |
| updatedBy  | string                                                      | ❌       | The user ID of the user who last updated the server response.                                                         |
| mock       | string                                                      | ❌       | The associated mock server's ID.                                                                                      |
