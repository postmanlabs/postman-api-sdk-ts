# GetApiCatalogServiceEndpoints

**Properties**

| Name | Type                                                                        | Required | Description                                                            |
| :--- | :-------------------------------------------------------------------------- | :------- | :--------------------------------------------------------------------- |
| meta | GetApiCatalogServiceEndpointsMeta                                           | ✅       | The response's meta information for paginated results.                 |
| data | [GetApiCatalogServiceEndpointsData](GetApiCatalogServiceEndpointsData.md)[] | ✅       | A list of observed API endpoints with traffic and performance metrics. |

# GetApiCatalogServiceEndpointsMeta

The response's meta information for paginated results.

**Properties**

| Name           | Type                                                                                | Required | Description                                                              |
| :------------- | :---------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------- |
| nextCursor     | string                                                                              | ✅       | The pagination cursor that points to the next record in the results set. |
| limit          | number                                                                              | ✅       | The maximum number of records in the paginated response.                 |
| filters        | any                                                                                 | ✅       | The filters applied to the request.                                      |
| timeRange      | [ApiCatalogServiceMetadataTimeRangeData](ApiCatalogServiceMetadataTimeRangeData.md) | ✅       | The time window for the returned data.                                   |
| totalEndpoints | number                                                                              | ✅       | The total number of endpoints that match the given filters.              |
| totalRequests  | number                                                                              | ✅       | The total number of requests that match the given filters.               |
