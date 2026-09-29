# MockCallLogData

Information about the mock server's server response.

**Properties**

| Name         | Type                                                  | Required | Description                                                |
| :----------- | :---------------------------------------------------- | :------- | :--------------------------------------------------------- |
| id           | string                                                | ❌       | The server response's ID.                                  |
| responseName | string                                                | ❌       | The server response's name.                                |
| servedAt     | string                                                | ❌       | The date and time at which the server response was served. |
| request      | [MockCallLogRequestData](MockCallLogRequestData.md)   | ❌       | The server response's request information.                 |
| response     | [MockCallLogResponseData](MockCallLogResponseData.md) | ❌       | The server response's response information.                |
