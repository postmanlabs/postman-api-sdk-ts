# GetAnalyticsMetadata

**Properties**

| Name | Type                     | Required | Description                               |
| :--- | :----------------------- | :------- | :---------------------------------------- |
| data | GetAnalyticsMetadataData | ❌       | The Analytics API's metadata information. |

# GetAnalyticsMetadataData

The Analytics API's metadata information.

**Properties**

| Name        | Type                                | Required | Description                         |
| :---------- | :---------------------------------- | :------- | :---------------------------------- |
| description | string                              | ❌       | A description of the endpoint.      |
| resources   | [DataResources](DataResources.md)[] | ❌       | A list of accepted resource values. |
