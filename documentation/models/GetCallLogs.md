# GetCallLogs

**Properties**

| Name     | Type                      | Required | Description                                   |
| :------- | :------------------------ | :------- | :-------------------------------------------- |
| callLogs | [CallLogs](CallLogs.md)[] | ❌       | A list of call logs.                          |
| meta     | GetCallLogsMeta           | ❌       | The response's non-standard meta information. |

# GetCallLogsMeta

The response's non-standard meta information.

**Properties**

| Name       | Type   | Required | Description                                                              |
| :--------- | :----- | :------- | :----------------------------------------------------------------------- |
| nextCursor | string | ❌       | The pagination cursor that points to the next record in the results set. |
