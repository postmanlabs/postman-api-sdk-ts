# GetAnalyticsMetadataResourceMetricsDataDetailed

Information about the resource's metric.

**Properties**

| Name        | Type                                                                                                                      | Required | Description                                           |
| :---------- | :------------------------------------------------------------------------------------------------------------------------ | :------- | :---------------------------------------------------- |
| metric      | string                                                                                                                    | ❌       | The metric's name.                                    |
| description | string                                                                                                                    | ❌       | A description of the metric.                          |
| type        | string                                                                                                                    | ❌       | The metric's data type.                               |
| isRequired  | boolean                                                                                                                   | ❌       | If true, the metric is required.                      |
| parameters  | [GetAnalyticsMetadataResourceMetricsDataDetailedParameters](GetAnalyticsMetadataResourceMetricsDataDetailedParameters.md) | ❌       | Information about the metric's parameters.            |
| response    | [GetAnalyticsMetadataResourceMetricsDataDetailedResponse1](GetAnalyticsMetadataResourceMetricsDataDetailedResponse1.md)   | ❌       | Information about the metric's `response` parameters. |
