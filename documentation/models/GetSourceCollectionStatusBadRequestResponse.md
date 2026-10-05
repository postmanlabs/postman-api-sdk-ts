# GetSourceCollectionStatusBadRequestResponse

**Properties**

| Name       | Type                 | Required | Description                                           |
| :--------- | :------------------- | :------- | :---------------------------------------------------- |
| collection | BadRequestCollection | ❌       | Information about the collection that failed to fork. |

# BadRequestCollection

Information about the collection that failed to fork.

**Properties**

| Name    | Type   | Required | Description        |
| :------ | :----- | :------- | :----------------- |
| name    | string | ❌       | The error name.    |
| message | string | ❌       | The error message. |
