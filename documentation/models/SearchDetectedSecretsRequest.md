# SearchDetectedSecretsRequest

**Properties**

| Name | Type                                                                      | Required | Description                                            |
| :--- | :------------------------------------------------------------------------ | :------- | :----------------------------------------------------- |
| meta | SearchDetectedSecretsRequestMeta                                          | ❌       | The response's meta information for paginated results. |
| data | [SearchDetectedSecretsRequestData](SearchDetectedSecretsRequestData.md)[] | ❌       |                                                        |

# SearchDetectedSecretsRequestMeta

The response's meta information for paginated results.

**Properties**

| Name       | Type   | Required | Description                                                                                                                                            |
| :--------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| limit      | number | ❌       | The maximum number of records in the paginated response.                                                                                               |
| nextCursor | string | ❌       | The pagination cursor that points to the next record in the results set.                                                                               |
| total      | number | ❌       | The number of records that match the defined criteria. This is only returned when the `include` query parameter is passed with the `meta.total` value. |
