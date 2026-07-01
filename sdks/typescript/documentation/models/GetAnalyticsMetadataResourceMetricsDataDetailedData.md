# GetAnalyticsMetadataResourceMetricsDataDetailedData

Information about the metric's `detailed` parameter.

**Properties**

| Name   | Type                                                      | Required | Description                                  |
| :----- | :-------------------------------------------------------- | :------- | :------------------------------------------- |
| schema | GetAnalyticsMetadataResourceMetricsDataDetailedDataSchema | ❌       | The response schema for the `detailed` view. |

# GetAnalyticsMetadataResourceMetricsDataDetailedDataSchema

The response schema for the `detailed` view.

**Properties**

| Name    | Type                                                            | Required | Description               |
| :------ | :-------------------------------------------------------------- | :------- | :------------------------ |
| columns | [GetAnalyticsDataColumnsData](GetAnalyticsDataColumnsData.md)[] | ❌       | A list of column entries. |
