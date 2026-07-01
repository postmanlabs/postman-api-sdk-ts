# GetApiVersions

**Properties**

| Name     | Type                                              | Required | Description                                            |
| :------- | :------------------------------------------------ | :------- | :----------------------------------------------------- |
| meta     | GetApiVersionsMeta                                | ❌       | The response's meta information for paginated results. |
| versions | [ApiVersionDataSchema](ApiVersionDataSchema.md)[] | ❌       | A list of the API's versions.                          |

# GetApiVersionsMeta

The response's meta information for paginated results.

**Properties**

| Name       | Type   | Required | Description                                                              |
| :--------- | :----- | :------- | :----------------------------------------------------------------------- |
| limit      | number | ❌       | The maximum number of records in the paginated response.                 |
| total      | number | ❌       | The number of records that match the defined criteria.                   |
| nextCursor | string | ❌       | The pagination cursor that points to the next record in the results set. |
