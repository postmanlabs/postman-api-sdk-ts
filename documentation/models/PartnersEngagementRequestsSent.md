# PartnersEngagementRequestsSent

Information about requests sent by partner users.

**Properties**

| Name       | Type                                                        | Required | Description                                                                                                      |
| :--------- | :---------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------- |
| schema     | PartnersEngagementRequestsSentSchema                        | ❌       | The shape of the analytics data (column definitions).                                                            |
| rows       | [GetAnalyticsDataRowsData](GetAnalyticsDataRowsData.md)[][] | ❌       | A list of data row entries. Each row is an array of values that correspond to the columns defined in the schema. |
| pagination | [PaginationData](PaginationData.md)                         | ❌       | Information about the response pagination.                                                                       |

# PartnersEngagementRequestsSentSchema

The shape of the analytics data (column definitions).

**Properties**

| Name    | Type                                                            | Required | Description               |
| :------ | :-------------------------------------------------------------- | :------- | :------------------------ |
| columns | [GetAnalyticsDataColumnsData](GetAnalyticsDataColumnsData.md)[] | ❌       | A list of column entries. |
