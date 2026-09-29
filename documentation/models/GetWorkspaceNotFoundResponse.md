# GetWorkspaceNotFoundResponse

**Properties**

| Name  | Type           | Required | Description                  |
| :---- | :------------- | :------- | :--------------------------- |
| error | NotFoundError2 | ❌       | Information about the error. |

# NotFoundError2

Information about the error.

**Properties**

| Name       | Type   | Required | Description                   |
| :--------- | :----- | :------- | :---------------------------- |
| name       | string | ❌       | The error name.               |
| message    | string | ❌       | The error message.            |
| statusCode | number | ❌       | The error's HTTP status code. |
