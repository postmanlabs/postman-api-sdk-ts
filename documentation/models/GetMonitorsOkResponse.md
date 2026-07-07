# GetMonitorsOkResponse

**Properties**

| Name     | Type                                                          | Required | Description                                            |
| :------- | :------------------------------------------------------------ | :------- | :----------------------------------------------------- |
| monitors | [SuccessfulResponseMonitors](SuccessfulResponseMonitors.md)[] | ❌       | A list of monitors.                                    |
| meta     | SuccessfulResponseMeta5                                       | ❌       | The response's meta information for paginated results. |

# SuccessfulResponseMeta5

The response's meta information for paginated results.

**Properties**

| Name       | Type   | Required | Description                                                              |
| :--------- | :----- | :------- | :----------------------------------------------------------------------- |
| nextCursor | string | ❌       | The pagination cursor that points to the next record in the results set. |
| limit      | number | ❌       | The maximum number of records in the paginated response.                 |
