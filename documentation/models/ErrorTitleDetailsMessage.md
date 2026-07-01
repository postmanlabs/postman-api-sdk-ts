# ErrorTitleDetailsMessage

**Properties**

| Name  | Type                          | Required | Description |
| :---- | :---------------------------- | :------- | :---------- |
| error | ErrorTitleDetailsMessageError | ❌       |             |

# ErrorTitleDetailsMessageError

**Properties**

| Name    | Type                                 | Required | Description                     |
| :------ | :----------------------------------- | :------- | :------------------------------ |
| title   | string                               | ❌       | A short summary of the problem. |
| details | ErrorTitleDetailsMessageErrorDetails | ❌       | Information about the error.    |
| message | string                               | ❌       | The error message.              |

# ErrorTitleDetailsMessageErrorDetails

Information about the error.

**Properties**

| Name        | Type   | Required | Description         |
| :---------- | :----- | :------- | :------------------ |
| workspaceId | string | ❌       | The workspace's ID. |
