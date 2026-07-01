# ApiCatalogServiceServiceData

Information about the service.

**Properties**

| Name            | Type                                        | Required | Description                                                                                                              |
| :-------------- | :------------------------------------------ | :------- | :----------------------------------------------------------------------------------------------------------------------- |
| id              | string                                      | ✅       | The service's ID.                                                                                                        |
| name            | string                                      | ✅       | The service's name.                                                                                                      |
| status          | ApiCatalogServiceServiceDataStatus          | ✅       | The overall health status, derived from compliance signals.                                                              |
| lastActivityAt  | string                                      | ✅       | The date and time of the last observed activity. If there's no activity in the time window, this returns a null value.   |
| traffic         | Traffic                                     | ✅       | Information about traffic and performance within the time window. If there's no traffic data, this returns a null value. |
| compliance      | Compliance                                  | ✅       | Information about compliance and governance.                                                                             |
| createdAt       | string                                      | ✅       | The date and time at which the workspace was created.                                                                    |
| gitRepo         | string                                      | ✅       | The URL of the linked Git repository. If the workspace isn't connected to a repository, this returns a null value.       |
| owner           | Owner                                       | ✅       | The service's owner. If no owner is assigned, this returns a null value.                                                 |
| tags            | string[]                                    | ✅       | A list of the workspace's tags.                                                                                          |
| governanceGroup | ApiCatalogServiceServiceDataGovernanceGroup | ✅       | The governance group that the workspace belongs to. If no governance group is assigned, this returns a null value.       |

# ApiCatalogServiceServiceDataStatus

The overall health status, derived from compliance signals.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| HEALTHY  | string | ✅       | "healthy"   |
| WARNING  | string | ✅       | "warning"   |
| CRITICAL | string | ✅       | "critical"  |
| INACTIVE | string | ✅       | "inactive"  |

# Traffic

Information about traffic and performance within the time window. If there's no traffic data, this returns a null value.

**Properties**

| Name         | Type   | Required | Description                                            |
| :----------- | :----- | :------- | :----------------------------------------------------- |
| p95LatencyMs | number | ✅       | The 95th-percentile response latency, in milliseconds. |
| errorRatePct | number | ✅       | The percentage of requests that resulted in errors.    |

# Compliance

Information about compliance and governance.

**Properties**

| Name       | Type                 | Required | Description                                   |
| :--------- | :------------------- | :------- | :-------------------------------------------- |
| monitorRun | ComplianceMonitorRun | ✅       | The scheduled monitor run summary.            |
| cliRun     | ComplianceCliRun     | ✅       | Information about the CI/CD pipeline.         |
| specLint   | ComplianceSpecLint   | ✅       | Information about the API specification lint. |

# ComplianceMonitorRun

The scheduled monitor run summary.

**Properties**

| Name   | Type                       | Required | Description                                                                                      |
| :----- | :------------------------- | :------- | :----------------------------------------------------------------------------------------------- |
| status | ComplianceMonitorRunStatus | ✅       | Whether the monitor's latest runs passed or failed. If no runs exist, this returns a null value. |

# ComplianceMonitorRunStatus

Whether the monitor's latest runs passed or failed. If no runs exist, this returns a null value.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| PASSED | string | ✅       | "passed"    |
| FAILED | string | ✅       | "failed"    |

# ComplianceCliRun

Information about the CI/CD pipeline.

**Properties**

| Name   | Type                   | Required | Description                                                                                       |
| :----- | :--------------------- | :------- | :------------------------------------------------------------------------------------------------ |
| status | ComplianceCliRunStatus | ✅       | Whether the pipelines' latest runs passed or failed. If no runs exist, this returns a null value. |

# ComplianceCliRunStatus

Whether the pipelines' latest runs passed or failed. If no runs exist, this returns a null value.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| PASSED | string | ✅       | "passed"    |
| FAILED | string | ✅       | "failed"    |

# ComplianceSpecLint

Information about the API specification lint.

**Properties**

| Name   | Type                     | Required | Description                                                                                              |
| :----- | :----------------------- | :------- | :------------------------------------------------------------------------------------------------------- |
| status | ComplianceSpecLintStatus | ✅       | Whether the specifications' latest lints passed or failed. If no lints exist, this returns a null value. |

# ComplianceSpecLintStatus

Whether the specifications' latest lints passed or failed. If no lints exist, this returns a null value.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| PASSED | string | ✅       | "passed"    |
| FAILED | string | ✅       | "failed"    |

# Owner

The service's owner. If no owner is assigned, this returns a null value.

**Properties**

| Name          | Type      | Required | Description                             |
| :------------ | :-------- | :------- | :-------------------------------------- |
| type          | OwnerType | ✅       | The type of owner.                      |
| id            | string    | ✅       | The owner's ID.                         |
| name          | string    | ✅       | The owner's display name.               |
| profilePicUrl | string    | ✅       | The URL of the owner's profile picture. |
| publicHandle  | string    | ✅       | The URL of the owner's public profile.  |

# OwnerType

The type of owner.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| USER  | string | ✅       | "user"      |
| GROUP | string | ✅       | "group"     |

# ApiCatalogServiceServiceDataGovernanceGroup

The governance group that the workspace belongs to. If no governance group is assigned, this returns a null value.

**Properties**

| Name | Type   | Required | Description                  |
| :--- | :----- | :------- | :--------------------------- |
| id   | string | ✅       | The governance group's ID.   |
| name | string | ✅       | The governance group's name. |
