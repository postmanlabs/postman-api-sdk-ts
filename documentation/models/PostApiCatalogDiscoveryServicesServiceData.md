# PostApiCatalogDiscoveryServicesServiceData

Information about a discovered service.

**Properties**

| Name                | Type     | Required | Description                                                                                |
| :------------------ | :------- | :------- | :----------------------------------------------------------------------------------------- |
| id                  | string   | ❌       | The service's ID.                                                                          |
| organizationId      | number   | ❌       | The ID of the organization that the service belongs to.                                    |
| name                | string   | ❌       | The servie's name.                                                                         |
| description         | string   | ❌       | The service's description.                                                                 |
| version             | string   | ❌       | The service's version.                                                                     |
| sourceEnvironment   | string   | ❌       | The source environment in which the service was discovered.                                |
| systemEnvironmentId | string   | ❌       | The mapped system environment's ID. Returns a null value if the environment is not mapped. |
| tags                | string[] | ❌       | A list of tags associated with the service.                                                |
| status              | string   | ❌       | The service's current status.                                                              |
| endpointsCount      | number   | ❌       | The total number of endpoints associated with the service.                                 |
| providerServiceId   | string   | ❌       | The ID of the service in the source registry.                                              |
| discoveredAt        | string   | ❌       | The date and time at which the service was first discovered.                               |
| discoveredBy        | number   | ❌       | The user ID of the user who discovered or ingested the service.                            |
| lastSyncedAt        | string   | ❌       | The date and time of the most recent service sync.                                         |
