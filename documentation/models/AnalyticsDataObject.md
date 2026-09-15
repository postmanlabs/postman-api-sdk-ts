# AnalyticsDataObject

Data analytics information.

**Properties**

| Name       | Type                                                        | Required | Description                                                                                                      |
| :--------- | :---------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------- |
| schema     | [GetAnalyticsDataSchema](GetAnalyticsDataSchema.md)         | ❌       | The shape of the analytics data (column definitions).                                                            |
| rows       | [GetAnalyticsDataRowsData](GetAnalyticsDataRowsData.md)[][] | ❌       | A list of data row entries. Each row is an array of values that correspond to the columns defined in the schema. |
| pagination | [PaginationData](PaginationData.md)                         | ❌       | Information about the response pagination.                                                                       |
