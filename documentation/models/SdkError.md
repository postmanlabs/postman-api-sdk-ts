# SdkError

**Properties**

| Name      | Type   | Required | Description                                                                                      |
| :-------- | :----- | :------- | :----------------------------------------------------------------------------------------------- |
| type      | string | ✅       | The [URI reference](https://www.rfc-editor.org/rfc/rfc3986) that identifies the type of problem. |
| title     | string | ✅       | A short summary of the problem.                                                                  |
| status    | number | ✅       | The error's HTTP status code.                                                                    |
| detail    | string | ❌       | Information about the error.                                                                     |
| instance  | string | ❌       | A URI reference that identifies the specific occurrence of the problem.                          |
| requestId | string | ❌       | The request's ID.                                                                                |
