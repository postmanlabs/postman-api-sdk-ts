# GetMockServer

**Properties**

| Name | Type              | Required | Description                        |
| :--- | :---------------- | :------- | :--------------------------------- |
| mock | GetMockServerMock | ❌       | Information about the mock server. |

# GetMockServerMock

Information about the mock server.

**Properties**

| Name        | Type                    | Required | Description                                                                                                                        |
| :---------- | :---------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| id          | string                  | ❌       | The mock server's ID.                                                                                                              |
| owner       | string                  | ❌       | The ID of mock server's owner.                                                                                                     |
| uid         | string                  | ❌       | The mock server's unique ID.                                                                                                       |
| collection  | string                  | ❌       | The unique ID of the mock's associated collection.                                                                                 |
| mockUrl     | string                  | ❌       | The mock server URL.                                                                                                               |
| name        | string                  | ❌       | The mock server's name.                                                                                                            |
| config      | GetMockServerMockConfig | ❌       | Information about the mock server's configuration.                                                                                 |
| createdAt   | string                  | ❌       | The date and time at which the mock server was created.                                                                            |
| updatedAt   | string                  | ❌       | The date and time at which the mock server was last updated.                                                                       |
| isPublic    | boolean                 | ❌       | If true, the mock server is public and visible to all users. This field does not indicate the mock server's access control status. |
| deactivated | boolean                 | ❌       | If true, the mock server is not active. Mock servers deactivate when a linked collection or environment is deleted.                |
| environment | string                  | ❌       | The mock server's associated environment ID.                                                                                       |

# GetMockServerMockConfig

Information about the mock server's configuration.

**Properties**

| Name             | Type                         | Required | Description                                                                                                                                        |
| :--------------- | :--------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| headers          | string[]                     | ❌       | A list of the mock server's headers.                                                                                                               |
| matchBody        | boolean                      | ❌       | If true, match the request body.                                                                                                                   |
| matchQueryParams | boolean                      | ❌       | If true, match query parameters.                                                                                                                   |
| matchWildcards   | boolean                      | ❌       | If true, use wildcard variable matching.                                                                                                           |
| delay            | GetMockServerMockConfigDelay | ❌       | Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings. |
| serverResponseId | string                       | ❌       | The ID of mock server's default response for requests. All calls to the mock server will return the defined response.                              |

# GetMockServerMockConfigDelay

Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings.

**Properties**

| Name     | Type                               | Required | Description                                                                                                                                       |
| :------- | :--------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| type     | GetMockServerMockConfigDelayType   | ❌       | The type of simulated delay value: - `fixed` — The delay value is a fixed value.                                                                  |
| preset   | GetMockServerMockConfigDelayPreset | ❌       | The simulated fixed network delay value: - `1` — 2G (300 ms). - `2` — 3G (100 ms). The object does not return this value for custom delay values. |
| duration | number                             | ❌       | The configured delay, in milliseconds.                                                                                                            |

# GetMockServerMockConfigDelayType

The type of simulated delay value: - `fixed` — The delay value is a fixed value.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| FIXED | string | ✅       | "fixed"     |

# GetMockServerMockConfigDelayPreset

The simulated fixed network delay value: - `1` — 2G (300 ms). - `2` — 3G (100 ms). The object does not return this value for custom delay values.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| \_1  | string | ✅       | "1"         |
| \_2  | string | ✅       | "2"         |
