# ResponseHeader2_1

Information about the header.

**Properties**

| Name        | Type    | Required | Description                                                    |
| :---------- | :------ | :------- | :------------------------------------------------------------- |
| key         | string  | ✅       | The header's key, such as `Content-Type` or `X-Custom-Header`. |
| value       | string  | ✅       | The header key's value.                                        |
| disabled    | boolean | ❌       | If true, the current header isn't sent with requests.          |
| description | string  | ❌       | The header's description.                                      |
