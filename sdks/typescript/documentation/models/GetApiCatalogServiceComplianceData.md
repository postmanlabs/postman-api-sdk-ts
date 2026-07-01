# GetApiCatalogServiceComplianceData

Information about compliance and governance.

**Properties**

| Name           | Type                                         | Required | Description                                                                                   |
| :------------- | :------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------- |
| monitorRun     | GetApiCatalogServiceComplianceDataMonitorRun | ✅       | The scheduled monitor run summary.                                                            |
| cliRun         | GetApiCatalogServiceComplianceDataCliRun     | ✅       | Information about the CI/CD pipeline.                                                         |
| specLint       | GetApiCatalogServiceComplianceDataSpecLint   | ✅       | Information about the API specification lint.                                                 |
| collectionRuns | CollectionRuns                               | ✅       | Information about collection runs, including monitor runs, CI pipeline runs, and manual runs. |

# GetApiCatalogServiceComplianceDataMonitorRun

The scheduled monitor run summary.

**Properties**

| Name            | Type                                               | Required | Description                                                                                                    |
| :-------------- | :------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------- |
| status          | GetApiCatalogServiceComplianceDataMonitorRunStatus | ✅       | Whether the monitor's latest runs passed or failed. If no runs exist, this returns a null value.               |
| totalMonitors   | number                                             | ✅       | The total number of monitors in the workspace. This value is the same as the as `entityCounts.monitors` value. |
| activeMonitors  | number                                             | ✅       | The number of distinct monitors with at least one run in the time window.                                      |
| passingMonitors | number                                             | ✅       | The number of distinct monitors whose latest run passed within the time window.                                |
| failingMonitors | number                                             | ✅       | The number of distinct monitors whose latest run failed within the time window.                                |
| lastRunAt       | string                                             | ✅       | The date and time of the most recent run across all monitors. If no runs exist, this returns a null value.     |

# GetApiCatalogServiceComplianceDataMonitorRunStatus

Whether the monitor's latest runs passed or failed. If no runs exist, this returns a null value.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| PASSED | string | ✅       | "passed"    |
| FAILED | string | ✅       | "failed"    |

# GetApiCatalogServiceComplianceDataCliRun

Information about the CI/CD pipeline.

**Properties**

| Name             | Type                                           | Required | Description                                                                                                 |
| :--------------- | :--------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------- |
| status           | GetApiCatalogServiceComplianceDataCliRunStatus | ✅       | Whether the pipelines' latest runs passed or failed. If no runs exist, this returns a null value.           |
| activePipelines  | number                                         | ✅       | The number of distinct pipelines with at least one run within the time window.                              |
| passingPipelines | number                                         | ✅       | The number of distinct pipelines whose latest run passed within the time window.                            |
| failingPipelines | number                                         | ✅       | The number of distinct pipelines whose latest run failed within the time window.                            |
| lastRunAt        | string                                         | ✅       | The date and time of the most recent run across all pipelines. If no runs exist, this returns a null value. |

# GetApiCatalogServiceComplianceDataCliRunStatus

Whether the pipelines' latest runs passed or failed. If no runs exist, this returns a null value.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| PASSED | string | ✅       | "passed"    |
| FAILED | string | ✅       | "failed"    |

# GetApiCatalogServiceComplianceDataSpecLint

Information about the API specification lint.

**Properties**

| Name         | Type                                             | Required | Description                                                                                                                    |
| :----------- | :----------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------- |
| status       | GetApiCatalogServiceComplianceDataSpecLintStatus | ✅       | Whether the specifications' latest lints passed or failed. If no lints exist, this returns a null value.                       |
| totalSpecs   | number                                           | ✅       | The total number of API specifications in the workspace. This value is the same as the as `entityCounts.specifications` value. |
| activeSpecs  | number                                           | ✅       | The number of distinct specifications with at least one lint within the time window.                                           |
| passingSpecs | number                                           | ✅       | The number of distinct specifications whose latest lint passed within the time window.                                         |
| failingSpecs | number                                           | ✅       | The number of distinct specifications whose latest lint failed within the time window.                                         |
| lastRunAt    | string                                           | ✅       | The date and time of the most recent lint run across all specifications. If no lint exist, this returns a null value.          |

# GetApiCatalogServiceComplianceDataSpecLintStatus

Whether the specifications' latest lints passed or failed. If no lints exist, this returns a null value.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| PASSED | string | ✅       | "passed"    |
| FAILED | string | ✅       | "failed"    |

# CollectionRuns

Information about collection runs, including monitor runs, CI pipeline runs, and manual runs.

**Properties**

| Name              | Type   | Required | Description                                                                                                          |
| :---------------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------- |
| totalRuns         | number | ✅       | The total number of collection runs.                                                                                 |
| passedRuns        | number | ✅       | The number of collection runs that passed.                                                                           |
| failedRuns        | number | ✅       | The number of collection runs that failed.                                                                           |
| passRate          | number | ✅       | The percentage of collection runs that passed. If no runs exist, this returns a null value.                          |
| totalCollections  | number | ✅       | The total number of collections in the workspace. This value is the same as the as `entityCounts.collections` value. |
| activeCollections | number | ✅       | The number of distinct collections with at least one run within the time window.                                     |
| totalAssertions   | number | ✅       | The total number of assertions evaluated.                                                                            |
| failedAssertions  | number | ✅       | The number of assertions that failed.                                                                                |
