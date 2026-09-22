# MockCreateUpdateData

Information about the mock server.

**Properties**

| Name        | Type                                            | Required | Description                                                  |
| :---------- | :---------------------------------------------- | :------- | :----------------------------------------------------------- |
| id          | string                                          | ❌       | The mock server's ID.                                        |
| owner       | string                                          | ❌       | The ID of mock server's owner.                               |
| uid         | string                                          | ❌       | The mock server's unique ID.                                 |
| collection  | string                                          | ❌       | The unique ID of the mock's associated collection.           |
| mockUrl     | string                                          | ❌       | The mock server URL.                                         |
| name        | string                                          | ❌       | The mock server's name.                                      |
| config      | [MockServerConfigData](MockServerConfigData.md) | ❌       | Information about the mock server's configuration.           |
| createdAt   | string                                          | ❌       | The date and time at which the mock server was created.      |
| updatedAt   | string                                          | ❌       | The date and time at which the mock server was last updated. |
| environment | string                                          | ❌       | The unique ID of the mock's associated environment.          |
