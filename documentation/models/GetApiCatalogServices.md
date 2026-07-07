# GetApiCatalogServices

**Properties**

| Name | Type                                                              | Required | Description                                            |
| :--- | :---------------------------------------------------------------- | :------- | :----------------------------------------------------- |
| meta | GetApiCatalogServicesMeta                                         | ❌       | The response's meta information for paginated results. |
| data | [ApiCatalogServiceServiceData](ApiCatalogServiceServiceData.md)[] | ❌       | A list of list of services.                            |

# GetApiCatalogServicesMeta

The response's meta information for paginated results.

**Properties**

| Name       | Type                                                                                | Required | Description                                                              |
| :--------- | :---------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------- |
| nextCursor | string                                                                              | ✅       | The pagination cursor that points to the next record in the results set. |
| limit      | number                                                                              | ✅       | The maximum number of records in the paginated response.                 |
| filters    | any                                                                                 | ✅       | The filters applied to the request.                                      |
| timeRange  | [ApiCatalogServiceMetadataTimeRangeData](ApiCatalogServiceMetadataTimeRangeData.md) | ✅       | The time window for the returned data.                                   |
