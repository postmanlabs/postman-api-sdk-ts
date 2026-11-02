# PartnersEngagementCollectionViews

Information about partner users' views of collections in a workspace.

**Properties**

| Name       | Type                                                        | Required | Description                                                                                                      |
| :--------- | :---------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------- |
| schema     | PartnersEngagementCollectionViewsSchema                     | ❌       | The shape of the analytics data (column definitions).                                                            |
| rows       | [GetAnalyticsDataRowsData](GetAnalyticsDataRowsData.md)[][] | ❌       | A list of data row entries. Each row is an array of values that correspond to the columns defined in the schema. |
| pagination | [PaginationData](PaginationData.md)                         | ❌       | Information about the response pagination.                                                                       |

# PartnersEngagementCollectionViewsSchema

The shape of the analytics data (column definitions).

**Properties**

| Name    | Type                                                            | Required | Description               |
| :------ | :-------------------------------------------------------------- | :------- | :------------------------ |
| columns | [GetAnalyticsDataColumnsData](GetAnalyticsDataColumnsData.md)[] | ❌       | A list of column entries. |
