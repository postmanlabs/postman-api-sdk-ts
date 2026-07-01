# GetApIs

Information about the API schema.

**Properties**

| Name | Type              | Required | Description                                            |
| :--- | :---------------- | :------- | :----------------------------------------------------- |
| apis | [Apis](Apis.md)[] | ❌       |                                                        |
| meta | GetApIsMeta       | ❌       | The response's meta information for paginated results. |

# GetApIsMeta

The response's meta information for paginated results.

**Properties**

| Name       | Type   | Required | Description                                                              |
| :--------- | :----- | :------- | :----------------------------------------------------------------------- |
| limit      | number | ❌       | The maximum number of records in the paginated response.                 |
| total      | number | ❌       | The number of records that match the defined criteria.                   |
| nextCursor | string | ❌       | The pagination cursor that points to the next record in the results set. |
