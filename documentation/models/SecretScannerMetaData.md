# SecretScannerMetaData

The response's meta information for paginated results.

**Properties**

| Name             | Type                                                  | Required | Description                                                                 |
| :--------------- | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------- |
| activityFeed     | [SecretActivityFeedData](SecretActivityFeedData.md)[] | ❌       | The history of the secret's resolution status changes.                      |
| cursor           | string                                                | ❌       | The pointer to the first record of the set of paginated results.            |
| limit            | number                                                | ❌       | The maximum number of rows to return in the response.                       |
| nextCursor       | string                                                | ❌       | The Base64-encoded value that points to the next record in the results set. |
| obfuscatedSecret | string                                                | ❌       | The secret's obfuscated value.                                              |
| secretHash       | string                                                | ❌       | The secret's SHA-256 hash.                                                  |
| secretType       | string                                                | ❌       | The type of thesecret.                                                      |
| total            | number                                                | ❌       | The total number of discovered secret locations.                            |
