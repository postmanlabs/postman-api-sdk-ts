# GetApiCatalogServiceCiRuns

**Properties**

| Name | Type                                                                  | Required | Description                                            |
| :--- | :-------------------------------------------------------------------- | :------- | :----------------------------------------------------- |
| meta | GetApiCatalogServiceCiRunsMeta                                        | ✅       | The response's meta information for paginated results. |
| data | [GetApiCatalogServiceCiRunsData](GetApiCatalogServiceCiRunsData.md)[] | ✅       | A list of CI collection runs.                          |

# GetApiCatalogServiceCiRunsMeta

The response's meta information for paginated results.

**Properties**

| Name           | Type                                                                                | Required | Description                                                              |
| :------------- | :---------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------- |
| nextCursor     | string                                                                              | ✅       | The pagination cursor that points to the next record in the results set. |
| limit          | number                                                                              | ✅       | The maximum number of records in the paginated response.                 |
| filters        | any                                                                                 | ✅       | The filters applied to the request.                                      |
| timeRange      | [ApiCatalogServiceMetadataTimeRangeData](ApiCatalogServiceMetadataTimeRangeData.md) | ✅       | The time window for the returned data.                                   |
| totalRuns      | number                                                                              | ✅       | The total number of runs that match the given filters.                   |
| passedRuns     | number                                                                              | ✅       | The number of successful runs.                                           |
| failedRuns     | number                                                                              | ✅       | The number of runs with at least one failure.                            |
| successRatePct | number                                                                              | ✅       | The percentage of runs that passed, rounded to two decimal places.       |
