# Forbidden

**Properties**

| Name  | Type           | Required | Description |
| :---- | :------------- | :------- | :---------- |
| error | ForbiddenError | ❌       |             |

# ForbiddenError

**Properties**

| Name     | Type   | Required | Description                                                               |
| :------- | :----- | :------- | :------------------------------------------------------------------------ |
| status   | number | ❌       | The error's HTTP status code.                                             |
| name     | string | ❌       | The error name.                                                           |
| message  | string | ❌       | The error message.                                                        |
| detail   | string | ❌       | Information about the error.                                              |
| instance | string | ❌       | The URI reference that identifies the specific occurrence of the problem. |
