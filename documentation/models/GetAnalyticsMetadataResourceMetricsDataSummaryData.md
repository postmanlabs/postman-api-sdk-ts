# GetAnalyticsMetadataResourceMetricsDataSummaryData

Information about the metric's `summary` parameter.

**Properties**

| Name   | Type                                                     | Required | Description                                 |
| :----- | :------------------------------------------------------- | :------- | :------------------------------------------ |
| schema | GetAnalyticsMetadataResourceMetricsDataSummaryDataSchema | ❌       | The response schema for the `summary` view. |

# GetAnalyticsMetadataResourceMetricsDataSummaryDataSchema

The response schema for the `summary` view.

**Properties**

| Name    | Type                                                            | Required | Description               |
| :------ | :-------------------------------------------------------------- | :------- | :------------------------ |
| columns | [GetAnalyticsDataColumnsData](GetAnalyticsDataColumnsData.md)[] | ❌       | A list of column entries. |
