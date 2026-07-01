# GetApiCatalogService

**Properties**

| Name | Type                      | Required | Description                                            |
| :--- | :------------------------ | :------- | :----------------------------------------------------- |
| meta | GetApiCatalogServiceMeta  | ✅       | The response's meta information for paginated results. |
| data | GetApiCatalogServiceData2 | ✅       | Information about the service.                         |

# GetApiCatalogServiceMeta

The response's meta information for paginated results.

**Properties**

| Name      | Type                                                                                | Required | Description                            |
| :-------- | :---------------------------------------------------------------------------------- | :------- | :------------------------------------- |
| timeRange | [ApiCatalogServiceMetadataTimeRangeData](ApiCatalogServiceMetadataTimeRangeData.md) | ✅       | The time window for the returned data. |
| filters   | any                                                                                 | ❌       | The filters applied to the request.    |

# GetApiCatalogServiceData2

Information about the service.

**Properties**

| Name            | Type                                                                          | Required | Description                                                                                                              |
| :-------------- | :---------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------- |
| id              | string                                                                        | ✅       | The service's ID.                                                                                                        |
| name            | string                                                                        | ✅       | The service's name.                                                                                                      |
| status          | GetApiCatalogServiceDataStatus                                                | ✅       | The overall health status, derived from compliance signals.                                                              |
| lastActivityAt  | string                                                                        | ✅       | The date and time of the last observed activity. If there's no activity in the time window, this returns a null value.   |
| traffic         | [GetApiCatalogServiceTrafficData](GetApiCatalogServiceTrafficData.md)         | ✅       | Information about traffic and performance within the time window. If there's no traffic data, this returns a null value. |
| compliance      | [GetApiCatalogServiceComplianceData](GetApiCatalogServiceComplianceData.md)   | ✅       | Information about compliance and governance.                                                                             |
| entityCounts    | [GetApiCatalogServiceEntityCountData](GetApiCatalogServiceEntityCountData.md) | ✅       | Information about the workspace's entities.                                                                              |
| createdAt       | string                                                                        | ✅       | The date and time at which the workspace was created.                                                                    |
| gitRepo         | string                                                                        | ✅       | The URL of the linked Git repository. If the workspace isn't connected to a repository, this returns a null value.       |
| owner           | [GetApiCatalogServiceOwnerData](GetApiCatalogServiceOwnerData.md)             | ✅       | The service's owner. If no owner is assigned, this returns a null value.                                                 |
| tags            | string[]                                                                      | ✅       | A list of the workspace's tags.                                                                                          |
| governanceGroup | DataGovernanceGroup                                                           | ✅       | The governance group that the workspace belongs to. If no governance group is assigned, this returns a null value.       |
| dependencies    | [Dependencies](Dependencies.md)[]                                             | ✅       | A list of inbound and outbound service dependencies from the service graph.                                              |

# GetApiCatalogServiceDataStatus

The overall health status, derived from compliance signals.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| HEALTHY  | string | ✅       | "healthy"   |
| WARNING  | string | ✅       | "warning"   |
| CRITICAL | string | ✅       | "critical"  |
| INACTIVE | string | ✅       | "inactive"  |

# DataGovernanceGroup

The governance group that the workspace belongs to. If no governance group is assigned, this returns a null value.

**Properties**

| Name | Type   | Required | Description                  |
| :--- | :----- | :------- | :--------------------------- |
| id   | string | ✅       | The governance group's ID.   |
| name | string | ✅       | The governance group's name. |
