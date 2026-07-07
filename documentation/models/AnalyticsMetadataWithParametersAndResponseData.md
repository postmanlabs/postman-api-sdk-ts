# AnalyticsMetadataWithParametersAndResponseData

Detailed information about the resource including its metrics, parameters, and response schema.

**Properties**

| Name        | Type                                                                                                    | Required | Description                                                |
| :---------- | :------------------------------------------------------------------------------------------------------ | :------- | :--------------------------------------------------------- |
| resource    | string                                                                                                  | ❌       | The name of the resource.                                  |
| description | string                                                                                                  | ❌       | A description of the resource.                             |
| type        | string                                                                                                  | ❌       | The metric's data type.                                    |
| isRequired  | boolean                                                                                                 | ❌       | If true, the metric is required.                           |
| metrics     | [GetAnalyticsMetadataResourceMetricsDataDetailed](GetAnalyticsMetadataResourceMetricsDataDetailed.md)[] | ❌       | A list of the resource's detailed accepted metrics values. |
