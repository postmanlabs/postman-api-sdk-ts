# CreateMock

**Properties**

| Name | Type           | Required | Description                                  |
| :--- | :------------- | :------- | :------------------------------------------- |
| mock | CreateMockMock | ❌       | Information about the mock server to create. |

# CreateMockMock

Information about the mock server to create.

**Properties**

| Name        | Type    | Required | Description                                                                                                                     |
| :---------- | :------ | :------- | :------------------------------------------------------------------------------------------------------------------------------ |
| collection  | string  | ✅       | The unique ID of the mock's associated collection.                                                                              |
| environment | string  | ❌       | The unique ID of the mock's associated environment.                                                                             |
| name        | string  | ❌       | The mock server's name.                                                                                                         |
| private     | boolean | ❌       | If true, the mock server is set private. By default, mock servers are public and can receive requests from anyone and anywhere. |
