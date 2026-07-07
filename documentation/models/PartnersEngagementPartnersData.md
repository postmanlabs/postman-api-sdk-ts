# PartnersEngagementPartnersData

Information about partner users and their activity.

**Properties**

| Name       | Type                                                        | Required | Description                                                                                                      |
| :--------- | :---------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------- |
| schema     | [GetAnalyticsDataSchema](GetAnalyticsDataSchema.md)         | ❌       |                                                                                                                  |
| rows       | [GetAnalyticsDataRowsData](GetAnalyticsDataRowsData.md)[][] | ❌       | A list of data row entries. Each row is an array of values that correspond to the columns defined in the schema. |
| pagination | [PaginationData](PaginationData.md)                         | ❌       | Information about the response pagination.                                                                       |
