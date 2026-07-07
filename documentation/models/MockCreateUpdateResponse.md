# MockCreateUpdateResponse

**Properties**

| Name | Type                         | Required | Description                        |
| :--- | :--------------------------- | :------- | :--------------------------------- |
| mock | MockCreateUpdateResponseMock | ❌       | Information about the mock server. |

# MockCreateUpdateResponseMock

Information about the mock server.

**Properties**

| Name        | Type                               | Required | Description                                                  |
| :---------- | :--------------------------------- | :------- | :----------------------------------------------------------- |
| id          | string                             | ❌       | The mock server's ID.                                        |
| owner       | string                             | ❌       | The ID of mock server's owner.                               |
| uid         | string                             | ❌       | The mock server's unique ID.                                 |
| collection  | string                             | ❌       | The unique ID of the mock's associated collection.           |
| mockUrl     | string                             | ❌       | The mock server URL.                                         |
| name        | string                             | ❌       | The mock server's name.                                      |
| config      | MockCreateUpdateResponseMockConfig | ❌       | Information about the mock server's configuration.           |
| createdAt   | string                             | ❌       | The date and time at which the mock server was created.      |
| updatedAt   | string                             | ❌       | The date and time at which the mock server was last updated. |
| environment | string                             | ❌       | The unique ID of the mock's associated environment.          |

# MockCreateUpdateResponseMockConfig

Information about the mock server's configuration.

**Properties**

| Name             | Type                                    | Required | Description                                                                                                                                        |
| :--------------- | :-------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| matchBody        | boolean                                 | ❌       | If true, the mock server matches the request's body to the body of the saved examples.                                                             |
| matchHeader      | boolean                                 | ❌       | If true, the mock server matches the request's headers in the `header` array to the headers of the saved examples.                                 |
| headers          | string[]                                | ❌       | A list of header key values.                                                                                                                       |
| matchQueryParams | boolean                                 | ❌       | If true, match query parameters to the saved examples.                                                                                             |
| matchWildcards   | boolean                                 | ❌       | If true, use wildcard variable matching.                                                                                                           |
| delay            | MockCreateUpdateResponseMockConfigDelay | ❌       | Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings. |
| serverResponseId | string                                  | ❌       | The ID of mock server's default response for requests. All calls to the mock server will return the defined response.                              |

# MockCreateUpdateResponseMockConfigDelay

Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings.

**Properties**

| Name     | Type                                          | Required | Description                                                                                                                                       |
| :------- | :-------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| type     | MockCreateUpdateResponseMockConfigDelayType   | ❌       | The `fixed` value.                                                                                                                                |
| duration | number                                        | ❌       | For custom network delays, the custom configured delay, in milliseconds.                                                                          |
| preset   | MockCreateUpdateResponseMockConfigDelayPreset | ❌       | The simulated fixed network delay value: - `1` — 2G (300 ms). - `2` — 3G (100 ms). The object does not return this value for custom delay values. |

# MockCreateUpdateResponseMockConfigDelayType

The `fixed` value.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| FIXED | string | ✅       | "fixed"     |

# MockCreateUpdateResponseMockConfigDelayPreset

The simulated fixed network delay value: - `1` — 2G (300 ms). - `2` — 3G (100 ms). The object does not return this value for custom delay values.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| \_1  | string | ✅       | "1"         |
| \_2  | string | ✅       | "2"         |
