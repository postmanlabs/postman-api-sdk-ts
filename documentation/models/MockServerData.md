# MockServerData

Information about the mock server.

**Properties**

| Name        | Type                                            | Required | Description                                                                                                                        |
| :---------- | :---------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| id          | string                                          | ❌       | The mock server's ID.                                                                                                              |
| owner       | string                                          | ❌       | The ID of mock server's owner.                                                                                                     |
| uid         | string                                          | ❌       | The mock server's unique ID.                                                                                                       |
| collection  | string                                          | ❌       | The unique ID of the mock's associated collection.                                                                                 |
| mockUrl     | string                                          | ❌       | The mock server URL.                                                                                                               |
| name        | string                                          | ❌       | The mock server's name.                                                                                                            |
| config      | [MockServerConfigData](MockServerConfigData.md) | ❌       | Information about the mock server's configuration.                                                                                 |
| createdAt   | string                                          | ❌       | The date and time at which the mock server was created.                                                                            |
| updatedAt   | string                                          | ❌       | The date and time at which the mock server was last updated.                                                                       |
| isPublic    | boolean                                         | ❌       | If true, the mock server is public and visible to all users. This field does not indicate the mock server's access control status. |
| deactivated | boolean                                         | ❌       | If true, the mock server is not active. Mock servers deactivate when a linked collection or environment is deleted.                |
| environment | string                                          | ❌       | The mock server's associated environment ID.                                                                                       |
