# UpdateMock

**Properties**

| Name | Type           | Required | Description |
| :--- | :------------- | :------- | :---------- |
| mock | UpdateMockMock | ❌       |             |

# UpdateMockMock

**Properties**

| Name        | Type                 | Required | Description                                                                                                                     |
| :---------- | :------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------ |
| name        | string               | ❌       | The mock server's name.                                                                                                         |
| environment | string               | ❌       | The associated environment's unique ID.                                                                                         |
| description | string               | ❌       | The mock server's description.                                                                                                  |
| private     | boolean              | ❌       | If true, the mock server is set private. By default, mock servers are public and can receive requests from anyone and anywhere. |
| versionTag  | string               | ❌       | The API's version tag ID.                                                                                                       |
| collection  | string               | ❌       | The ID of the collection associated with the mock server.                                                                       |
| config      | UpdateMockMockConfig | ❌       | The mock server's configuration settings.                                                                                       |

# UpdateMockMockConfig

The mock server's configuration settings.

**Properties**

| Name             | Type   | Required | Description                                                                                                                                               |
| :--------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| serverResponseId | string | ❌       | The server response ID. This sets the given server response as the default response for each request. To deactivate a server response, pass a null value. |
