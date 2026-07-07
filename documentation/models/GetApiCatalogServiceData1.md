# GetApiCatalogServiceData1

Information about the discovered service.

**Properties**

| Name                | Type     | Required | Description                                                                                |
| :------------------ | :------- | :------- | :----------------------------------------------------------------------------------------- |
| id                  | string   | ❌       | The service's ID.                                                                          |
| name                | string   | ❌       | The service's name.                                                                        |
| version             | string   | ❌       | The service's version.                                                                     |
| sourceEnvironment   | string   | ❌       | The source environment in which the service was discovered.                                |
| systemEnvironmentId | string   | ❌       | The mapped system environment's ID. Returns a null value if the environment is not mapped. |
| status              | string   | ❌       | The service's current status.                                                              |
| endpointsCount      | number   | ❌       | The total number of endpoints associated with the service.                                 |
| discoverySource     | string   | ❌       | The source through which the service was discovered.                                       |
| tags                | string[] | ❌       | A list of tags associated with the service.                                                |
| discoveredAt        | string   | ❌       | The date and time at which the service was first discovered.                               |
