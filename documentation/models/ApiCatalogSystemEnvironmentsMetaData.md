# ApiCatalogSystemEnvironmentsMetaData

The response's meta information for paginated results.

**Properties**

| Name       | Type                                                                                  | Required | Description                                                              |
| :--------- | :------------------------------------------------------------------------------------ | :------- | :----------------------------------------------------------------------- |
| total      | number                                                                                | ✅       | The number of records that match the defined criteria.                   |
| nextCursor | string                                                                                | ✅       | The pagination cursor that points to the next record in the results set. |
| limit      | number                                                                                | ✅       | The maximum number of records in the paginated response.                 |
| filters    | [ApiCatalogSystemEnvironmentsFiltersData](ApiCatalogSystemEnvironmentsFiltersData.md) | ❌       | The applied filters, if any.                                             |
