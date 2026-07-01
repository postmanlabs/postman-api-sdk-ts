# AnalyticsMetadataResourceData

Information about the resource.

**Properties**

| Name        | Type                                                              | Required | Description                                       |
| :---------- | :---------------------------------------------------------------- | :------- | :------------------------------------------------ |
| resource    | string                                                            | ❌       | The name of the resource.                         |
| description | string                                                            | ❌       | A description of the resource.                    |
| metrics     | [AnalyticsMetadataMetricsData](AnalyticsMetadataMetricsData.md)[] | ❌       | A list of the resource's accepted metrics values. |
