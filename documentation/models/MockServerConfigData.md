# MockServerConfigData

Information about the mock server's configuration.

**Properties**

| Name             | Type                                          | Required | Description                                                                                                                                        |
| :--------------- | :-------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| delay            | [MockServerDelayData](MockServerDelayData.md) | ❌       | Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings. |
| headers          | string[]                                      | ❌       | A list of the mock server's headers.                                                                                                               |
| matchBody        | boolean                                       | ❌       | If true, match the request body.                                                                                                                   |
| matchHeader      | boolean                                       | ❌       | If true, match the request headers.                                                                                                                |
| matchQueryParams | boolean                                       | ❌       | If true, match query parameters.                                                                                                                   |
| matchWildcards   | boolean                                       | ❌       | If true, use wildcard variable matching.                                                                                                           |
| serverResponseId | string                                        | ❌       | The ID of mock server's default response for requests. All calls to the mock server will return the defined response.                              |
