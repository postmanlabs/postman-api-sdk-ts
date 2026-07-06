# ApiCatalogService

A list of all methods in the `ApiCatalogService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                         | Description                                                                                                                                                          |
| :---------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getApiCatalogDiscoveryServices](#getapicatalogdiscoveryservices)                               | Gets a list of all [discovered services](https://learning.postman.com/docs/api-catalog/overview#discover-apis-and-services) in the API Catalog.                      |
| [postApiCatalogDiscoveryServices](#postapicatalogdiscoveryservices)                             | Adds discovered services to the API Catalog. Accepts up to 20 services in a single call.                                                                             |
| [getApiCatalogDiscoveryService](#getapicatalogdiscoveryservice)                                 | Gets detailed information about a discovered service, including a base64-encoded OpenAPI specification and an array of endpoints.                                    |
| [getApiCatalogServices](#getapicatalogservices)                                                 | Gets a list of services in a system environment. The response includes details about analytics, compliance, and governance metadata.                                 |
| [getApiCatalogService](#getapicatalogservice)                                                   | Gets information about a service, including its health, traffic, compliance, ownership, and dependencies.                                                            |
| [getApiCatalogServiceEndpoints](#getapicatalogserviceendpoints)                                 | Get a list of observed API endpoints for a service and its performance metrics.                                                                                      |
| [getApiCatalogServiceMonitorRuns](#getapicatalogservicemonitorruns)                             | Gets a list of scheduled monitor runs for a service that includes summary statistics.                                                                                |
| [getApiCatalogServiceSpecificationLints](#getapicatalogservicespecificationlints)               | Gets a list of API specification lint runs for a service that includes summary statistics and per-severity issue counts.                                             |
| [getApiCatalogServiceCiRuns](#getapicatalogserviceciruns)                                       | Gets a paginated list of CI collection runs for a service that includes summary statistics, pipeline details, and Git metadata.                                      |
| [getApiCatalogSystemEnvironments](#getapicatalogsystemenvironments)                             | Gets all of the authenticated team's system environments.                                                                                                            |
| [createApiCatalogSystemEnvironment](#createapicatalogsystemenvironment)                         | Creates a system environment for the authenticated team.                                                                                                             |
| [getApiCatalogSystemEnvironment](#getapicatalogsystemenvironment)                               | Gets information about a system environment.                                                                                                                         |
| [updateApiCatalogSystemEnvironment](#updateapicatalogsystemenvironment)                         | Updates a system environment's information. You can update one or more fields in a single call. **Note:** If you update the name, it must be unique within the team. |
| [getApiCatalogSystemEnvironmentAssociations](#getapicatalogsystemenvironmentassociations)       | Gets the workspace-environment associations for a system environment.                                                                                                |
| [addApiCatalogSystemEnvironmentAssociations](#addapicatalogsystemenvironmentassociations)       | Adds workspace-environment associations to a system environment.                                                                                                     |
| [removeApiCatalogSystemEnvironmentAssociations](#removeapicatalogsystemenvironmentassociations) | Removes workspace-environment associations from a system environment.                                                                                                |

## getApiCatalogDiscoveryServices

Gets a list of all [discovered services](https://learning.postman.com/docs/api-catalog/overview#discover-apis-and-services) in the API Catalog.

- HTTP Method: `GET`
- Endpoint: `/api-catalog/discovery-services`

**Parameters**

| Name            | Type                                                            | Required | Description                                                                                                                                                                                                                                                                          |
| :-------------- | :-------------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| discoverySource | [DiscoveryServicesSource](../models/DiscoveryServicesSource.md) | ❌       | Filter results by the given discovery source type: - `api_gateway_app` — API Gateway integrations. - `insights_project` — Postman Insights. - `infra_watcher` — Cluster Watcher. - `public_api` — Services manually added using the POST `/api-catalog/discovery-services` endpoint. |
| status          | string                                                          | ❌       | A comma-separated list of statuses to filter the results by. Accepts the `discovered`, `integrated`, and `archived` values.                                                                                                                                                          |
| search          | string                                                          | ❌       | Filter results by the given value that match a service's name. Matching is not case-sensitive.                                                                                                                                                                                       |
| limit           | number                                                          | ❌       | The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response.                                                                                                                                   |
| cursor          | string                                                          | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.                                                                                                                                           |

**Return Type**

`GetApiCatalogDiscoveryServices`

**Example Usage Code Snippet**

```typescript
import { DiscoveryServicesSource, PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const discoveryServicesSource = DiscoveryServicesSource.API_GATEWAY_APP;

  const data = await postmanApiSdkSourceOverlayed.apiCatalog.getApiCatalogDiscoveryServices({
    discoverySource: discoveryServicesSource,
    status: 'discovered',
    search: 'Order',
    limit: 3,
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
  });

  console.log(data);
})();
```

## postApiCatalogDiscoveryServices

Adds discovered services to the API Catalog. Accepts up to 20 services in a single call.

- HTTP Method: `POST`
- Endpoint: `/api-catalog/discovery-services`

**Parameters**

| Name | Type                                                                            | Required | Description       |
| :--- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [PostApiCatalogDiscoveryServices](../models/PostApiCatalogDiscoveryServices.md) | ❌       | The request body. |

**Return Type**

`PostApiCatalogDiscoveryServicesResponse`

**Example Usage Code Snippet**

```typescript
import {
  ApiCatalogDiscoveryServiceEndpointsData,
  PostApiCatalogDiscoveryServiceData,
  PostApiCatalogDiscoveryServices,
  PostApiCatalogDiscoveryServicesApiDefinitionData,
  PostApiCatalogDiscoveryServicesProviderMetadataData,
  PostmanApiSdkSourceOverlayed,
} from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const postApiCatalogDiscoveryServicesApiDefinitionData: PostApiCatalogDiscoveryServicesApiDefinitionData =
    {
      content:
        'eyJvcGVuYXBpIjoiMy4wLjAiLCJpbmZvIjp7InRpdGxlIjoiQ29uZmlnIiwidmVyc2lvbiI6IjEuMC4wIn0sInBhdGhzIjp7Ii9jb25maWciOnsiZ2V0Ijp7InN1bW1hcnkiOiJHZXQgY29uZmlnIn19LCIvY29uZmlnL3trZXl9Ijp7InB1dCI6eyJzdW1tYXJ5IjoiVXBkYXRlIGNvbmZpZyJ9fX19=',
    };

  const apiCatalogDiscoveryServiceEndpointsData: ApiCatalogDiscoveryServiceEndpointsData = {
    method: 'GET',
    path: '/api/recipes',
    description: 'description',
    host: 'host',
  };

  const postApiCatalogDiscoveryServicesProviderMetadataData: PostApiCatalogDiscoveryServicesProviderMetadataData =
    {
      commitSha: 'a1b2c3d4e5f6',
      branch: 'main',
      gitRepoUrl: 'https://github.com/acme/user-service',
      deployedAt: '2026-02-10T12:00:00Z',
    };

  const postApiCatalogDiscoveryServiceData: PostApiCatalogDiscoveryServiceData = {
    name: 'user-service',
    version: '3.0.0',
    providerServiceId: 'usr-svc-custom-id-001',
    description: 'Handles user registration, authentication, and profile management',
    sourceEnvironment: 'production',
    apiDefinition: postApiCatalogDiscoveryServicesApiDefinitionData,
    endpoints: [apiCatalogDiscoveryServiceEndpointsData],
    tags: ['auth'],
    providerMetadata: postApiCatalogDiscoveryServicesProviderMetadataData,
  };

  const postApiCatalogDiscoveryServices: PostApiCatalogDiscoveryServices = {
    discoveredServices: [postApiCatalogDiscoveryServiceData],
  };

  const data = await postmanApiSdkSourceOverlayed.apiCatalog.postApiCatalogDiscoveryServices(
    postApiCatalogDiscoveryServices,
  );

  console.log(data);
})();
```

## getApiCatalogDiscoveryService

Gets detailed information about a discovered service, including a base64-encoded OpenAPI specification and an array of endpoints.

- HTTP Method: `GET`
- Endpoint: `/api-catalog/discovery-services/{serviceId}`

**Parameters**

| Name      | Type   | Required | Description                  |
| :-------- | :----- | :------- | :--------------------------- |
| serviceId | string | ✅       | The discovered service's ID. |

**Return Type**

`GetApiCatalogDiscoveryService`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.apiCatalog.getApiCatalogDiscoveryService(
    'c6ec74e7-14f8-498c-9470-7a654173bed6',
  );

  console.log(data);
})();
```

## getApiCatalogServices

Gets a list of services in a system environment. The response includes details about analytics, compliance, and governance metadata.

- HTTP Method: `GET`
- Endpoint: `/api-catalog/services`

**Parameters**

| Name                | Type   | Required | Description                                                                                                                                        |
| :------------------ | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| systemEnvironmentId | string | ✅       | The system environment's ID.                                                                                                                       |
| name                | string | ❌       | Filter results to the given the service name. This is case-insensitive.                                                                            |
| tags                | string | ❌       | A comma-separated list of tag names to filter by.                                                                                                  |
| governanceGroupId   | string | ❌       | Filter results to only services that belong to the given governance group ID.                                                                      |
| limit               | number | ❌       | The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response. |
| cursor              | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.         |

**Return Type**

`GetApiCatalogServices`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.apiCatalog.getApiCatalogServices({
    systemEnvironmentId: '23b554c1-c30c-483d-bf98-dbe9ab7b88a0',
    name: 'acs',
    tags: 'acs',
    governanceGroupId: '4937d932-b1f4-44cd-a929-4a860707766e',
    limit: 3,
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
  });

  console.log(data);
})();
```

## getApiCatalogService

Gets information about a service, including its health, traffic, compliance, ownership, and dependencies.

- HTTP Method: `GET`
- Endpoint: `/api-catalog/services/{serviceId}`

**Parameters**

| Name                | Type   | Required | Description                  |
| :------------------ | :----- | :------- | :--------------------------- |
| serviceId           | string | ✅       | The service's ID.            |
| systemEnvironmentId | string | ✅       | The system environment's ID. |

**Return Type**

`GetApiCatalogService`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.apiCatalog.getApiCatalogService(
    'c6ec74e7-14f8-498c-9470-7a654173bed6',
    {
      systemEnvironmentId: '23b554c1-c30c-483d-bf98-dbe9ab7b88a0',
    },
  );

  console.log(data);
})();
```

## getApiCatalogServiceEndpoints

Get a list of observed API endpoints for a service and its performance metrics.

- HTTP Method: `GET`
- Endpoint: `/api-catalog/services/{serviceId}/endpoints`

**Parameters**

| Name                | Type   | Required | Description                                                                                                                                                          |
| :------------------ | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| serviceId           | string | ✅       | The service's ID.                                                                                                                                                    |
| systemEnvironmentId | string | ✅       | The system environment's ID.                                                                                                                                         |
| httpMethods         | string | ❌       | A.comma-separated list of HTTP methods to filter the results by.                                                                                                     |
| hosts               | string | ❌       | A comma-separated list of hostnames to filter the results by.                                                                                                        |
| responseCodes       | string | ❌       | A comma-separated list of HTTP status codes to filter the results by.                                                                                                |
| search              | string | ❌       | Filter results to the search filter given on the endpoint's path.                                                                                                    |
| sort                | string | ❌       | Sort the results in field:direction order format. Accepts the `count`, `endpoint`, `p95LatencyMs`, and `errorRate` fields. Supports the `asc` and `desc` directions. |
| limit               | number | ❌       | The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response.                   |
| cursor              | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.                           |

**Return Type**

`GetApiCatalogServiceEndpoints`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.apiCatalog.getApiCatalogServiceEndpoints(
    'c6ec74e7-14f8-498c-9470-7a654173bed6',
    {
      systemEnvironmentId: '23b554c1-c30c-483d-bf98-dbe9ab7b88a0',
      httpMethods: 'GET,POST',
      hosts: 'acs-test-new.example.com',
      responseCodes: '200,400',
      search: 'object-group',
      sort: 'errorRate:desc',
      limit: 3,
      cursor:
        'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    },
  );

  console.log(data);
})();
```

## getApiCatalogServiceMonitorRuns

Gets a list of scheduled monitor runs for a service that includes summary statistics.

- HTTP Method: `GET`
- Endpoint: `/api-catalog/services/{serviceId}/monitor-runs`

**Parameters**

| Name                | Type                                                                        | Required | Description                                                                                                                                                     |
| :------------------ | :-------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| serviceId           | string                                                                      | ✅       | The service's ID.                                                                                                                                               |
| systemEnvironmentId | string                                                                      | ✅       | The system environment's ID.                                                                                                                                    |
| collectionId        | string                                                                      | ❌       | Filter results to only the given collection ID's runs.                                                                                                          |
| sort                | string                                                                      | ❌       | Sort the results in field:direction order format. Accepts the `timestamp`, `duration`, and `failedAssertions` fields. Supports the `asc` and `desc` directions. |
| environmentId       | string                                                                      | ❌       | Filter results to only the given environment ID runs.                                                                                                           |
| status              | [ApiCatalogServiceStatusFilter](../models/ApiCatalogServiceStatusFilter.md) | ❌       | Filter results by run status.                                                                                                                                   |
| limit               | number                                                                      | ❌       | The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response.              |
| cursor              | string                                                                      | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.                      |

**Return Type**

`GetApiCatalogServiceMonitorRuns`

**Example Usage Code Snippet**

```typescript
import { ApiCatalogServiceStatusFilter, PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const apiCatalogServiceStatusFilter = ApiCatalogServiceStatusFilter.PASSED;

  const data = await postmanApiSdkSourceOverlayed.apiCatalog.getApiCatalogServiceMonitorRuns(
    'c6ec74e7-14f8-498c-9470-7a654173bed6',
    {
      systemEnvironmentId: '23b554c1-c30c-483d-bf98-dbe9ab7b88a0',
      collectionId: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
      sort: 'failedAssertions:desc',
      environmentId: '5daabc50-8451-43f6-922d-96b403b4f28e',
      status: apiCatalogServiceStatusFilter,
      limit: 3,
      cursor:
        'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    },
  );

  console.log(data);
})();
```

## getApiCatalogServiceSpecificationLints

Gets a list of API specification lint runs for a service that includes summary statistics and per-severity issue counts.

- HTTP Method: `GET`
- Endpoint: `/api-catalog/services/{serviceId}/spec-lints`

**Parameters**

| Name      | Type                                                                                            | Required | Description                                                                                                                                        |
| :-------- | :---------------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| serviceId | string                                                                                          | ✅       | The service's ID.                                                                                                                                  |
| specId    | string                                                                                          | ❌       | Filter results to the given API specification ID.                                                                                                  |
| severity  | [ApiCatalogServiceSpecLintSeverityFilter](../models/ApiCatalogServiceSpecLintSeverityFilter.md) | ❌       | Filter results to runs with issues at or above the given severity threshold. Higher severities are always included.                                |
| status    | [ApiCatalogServiceStatusFilter](../models/ApiCatalogServiceStatusFilter.md)                     | ❌       | Filter results to the given spec lint outcome.                                                                                                     |
| sort      | string                                                                                          | ❌       | Sort the results in field:direction order format. Accepts the `timestamp` and `errorCount` fields. Supports the `asc` and `desc` directions.       |
| limit     | number                                                                                          | ❌       | The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response. |
| cursor    | string                                                                                          | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.         |

**Return Type**

`GetApiCatalogServiceSpecificationLints`

**Example Usage Code Snippet**

```typescript
import {
  ApiCatalogServiceSpecLintSeverityFilter,
  ApiCatalogServiceStatusFilter,
  PostmanApiSdkSourceOverlayed,
} from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const apiCatalogServiceSpecLintSeverityFilter = ApiCatalogServiceSpecLintSeverityFilter.INFO;
  const apiCatalogServiceStatusFilter = ApiCatalogServiceStatusFilter.PASSED;

  const data = await postmanApiSdkSourceOverlayed.apiCatalog.getApiCatalogServiceSpecificationLints(
    'c6ec74e7-14f8-498c-9470-7a654173bed6',
    {
      specId: '73e15000-bc7a-4802-b80e-05fff18fd7f8',
      severity: apiCatalogServiceSpecLintSeverityFilter,
      status: apiCatalogServiceStatusFilter,
      sort: 'timestamp:asc',
      limit: 3,
      cursor:
        'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    },
  );

  console.log(data);
})();
```

## getApiCatalogServiceCiRuns

Gets a paginated list of CI collection runs for a service that includes summary statistics, pipeline details, and Git metadata.

- HTTP Method: `GET`
- Endpoint: `/api-catalog/services/{serviceId}/ci-runs`

**Parameters**

| Name                | Type                                                                        | Required | Description                                                                                                                                        |
| :------------------ | :-------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| serviceId           | string                                                                      | ✅       | The service's ID.                                                                                                                                  |
| systemEnvironmentId | string                                                                      | ✅       | The system environment's ID.                                                                                                                       |
| collectionId        | string                                                                      | ❌       | Filter results to only the given collection ID's runs.                                                                                             |
| environmentId       | string                                                                      | ❌       | Filter results to only the given environment ID runs.                                                                                              |
| status              | [ApiCatalogServiceStatusFilter](../models/ApiCatalogServiceStatusFilter.md) | ❌       | Filter results by run status.                                                                                                                      |
| branch              | string                                                                      | ❌       | Filter results by the given Git branch name.                                                                                                       |
| workflowName        | string                                                                      | ❌       | Filter results by the given CI workflow name.                                                                                                      |
| actor               | string                                                                      | ❌       | Filter results by the given CI user that triggered the run.                                                                                        |
| repoName            | string                                                                      | ❌       | Filter results by the given repository name.                                                                                                       |
| repoOwner           | string                                                                      | ❌       | Filter results by the given repository owner.                                                                                                      |
| sort                | string                                                                      | ❌       | Sort the results in field:direction order format. Accepts the `timestamp` and `duration` fields. Supports the `asc` and `desc` directions.         |
| limit               | number                                                                      | ❌       | The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response. |
| cursor              | string                                                                      | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.         |

**Return Type**

`GetApiCatalogServiceCiRuns`

**Example Usage Code Snippet**

```typescript
import { ApiCatalogServiceStatusFilter, PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const apiCatalogServiceStatusFilter = ApiCatalogServiceStatusFilter.PASSED;

  const data = await postmanApiSdkSourceOverlayed.apiCatalog.getApiCatalogServiceCiRuns(
    'c6ec74e7-14f8-498c-9470-7a654173bed6',
    {
      systemEnvironmentId: '23b554c1-c30c-483d-bf98-dbe9ab7b88a0',
      collectionId: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
      environmentId: '5daabc50-8451-43f6-922d-96b403b4f28e',
      status: apiCatalogServiceStatusFilter,
      branch: 'develop',
      workflowName: 'E2E Tests',
      actor: 'taylor-lee',
      repoName: 'acs-catalog',
      repoOwner: 'acs-team',
      sort: 'duration:desc',
      limit: 3,
      cursor:
        'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    },
  );

  console.log(data);
})();
```

## getApiCatalogSystemEnvironments

Gets all of the authenticated team's system environments.

- HTTP Method: `GET`
- Endpoint: `/api-catalog/system-environments`

**Parameters**

| Name         | Type    | Required | Description                                                                                                                                        |
| :----------- | :------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| isProduction | boolean | ❌       | If true, filters the response results to return only system environments marked as production.                                                     |
| limit        | number  | ❌       | The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response. |
| cursor       | string  | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.         |

**Return Type**

`GetApiCatalogSystemEnvironments`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.apiCatalog.getApiCatalogSystemEnvironments({
    isProduction: true,
    limit: 3,
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
  });

  console.log(data);
})();
```

## createApiCatalogSystemEnvironment

Creates a system environment for the authenticated team.

- HTTP Method: `POST`
- Endpoint: `/api-catalog/system-environments`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [CreateApiCatalogSystemEnvironment](../models/CreateApiCatalogSystemEnvironment.md) | ❌       | The request body. |

**Return Type**

`CreateApiCatalogSystemEnvironmentResponse`

**Example Usage Code Snippet**

```typescript
import { CreateApiCatalogSystemEnvironment, PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const createApiCatalogSystemEnvironment: CreateApiCatalogSystemEnvironment = {
    name: 'ALPHA',
    label: 'alpha',
    description: 'This is the ALPHA environment',
    color: '#00FF00',
    isProduction: true,
  };

  const data = await postmanApiSdkSourceOverlayed.apiCatalog.createApiCatalogSystemEnvironment(
    createApiCatalogSystemEnvironment,
  );

  console.log(data);
})();
```

## getApiCatalogSystemEnvironment

Gets information about a system environment.

- HTTP Method: `GET`
- Endpoint: `/api-catalog/system-environments/{systemEnvironmentId}`

**Parameters**

| Name                | Type   | Required | Description                  |
| :------------------ | :----- | :------- | :--------------------------- |
| systemEnvironmentId | string | ✅       | The system environment's ID. |

**Return Type**

`GetApiCatalogSystemEnvironment`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.apiCatalog.getApiCatalogSystemEnvironment(
    '23b554c1-c30c-483d-bf98-dbe9ab7b88a0',
  );

  console.log(data);
})();
```

## updateApiCatalogSystemEnvironment

Updates a system environment's information. You can update one or more fields in a single call. **Note:** If you update the name, it must be unique within the team.

- HTTP Method: `PATCH`
- Endpoint: `/api-catalog/system-environments/{systemEnvironmentId}`

**Parameters**

| Name                | Type                                                                                | Required | Description                  |
| :------------------ | :---------------------------------------------------------------------------------- | :------- | :--------------------------- |
| body                | [UpdateApiCatalogSystemEnvironment](../models/UpdateApiCatalogSystemEnvironment.md) | ❌       | The request body.            |
| systemEnvironmentId | string                                                                              | ✅       | The system environment's ID. |

**Return Type**

`UpdateApiCatalogSystemEnvironmentResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed, UpdateApiCatalogSystemEnvironment } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const updateApiCatalogSystemEnvironment: UpdateApiCatalogSystemEnvironment = {
    name: 'US-BETA',
    description: 'This is a beta environment for testing US data center.',
    color: '#FFFFFF',
    isProduction: true,
  };

  const data = await postmanApiSdkSourceOverlayed.apiCatalog.updateApiCatalogSystemEnvironment(
    '23b554c1-c30c-483d-bf98-dbe9ab7b88a0',
    updateApiCatalogSystemEnvironment,
  );

  console.log(data);
})();
```

## getApiCatalogSystemEnvironmentAssociations

Gets the workspace-environment associations for a system environment.

- HTTP Method: `GET`
- Endpoint: `/api-catalog/system-environments/{systemEnvironmentId}/associations`

**Parameters**

| Name                | Type   | Required | Description                                                                                                                                        |
| :------------------ | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| systemEnvironmentId | string | ✅       | The system environment's ID.                                                                                                                       |
| workspaceId         | string | ❌       | The workspace's ID to which the environments in the association belong to.                                                                         |
| limit               | number | ❌       | The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response. |
| cursor              | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.         |

**Return Type**

`GetApiCatalogSystemEnvironmentAssociations`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data =
    await postmanApiSdkSourceOverlayed.apiCatalog.getApiCatalogSystemEnvironmentAssociations(
      '23b554c1-c30c-483d-bf98-dbe9ab7b88a0',
      {
        workspaceId: '47d1b387-2485-482a-bf62-46ddd70a6d1e',
        limit: 3,
        cursor:
          'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
      },
    );

  console.log(data);
})();
```

## addApiCatalogSystemEnvironmentAssociations

Adds workspace-environment associations to a system environment.

- HTTP Method: `POST`
- Endpoint: `/api-catalog/system-environments/{systemEnvironmentId}/associations`

**Parameters**

| Name                | Type                                                                                                  | Required | Description                                                                                                                                                        |
| :------------------ | :---------------------------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body                | [AddApiCatalogSystemEnvironmentAssociations](../models/AddApiCatalogSystemEnvironmentAssociations.md) | ❌       | The request body.                                                                                                                                                  |
| systemEnvironmentId | string                                                                                                | ✅       | The system environment's ID.                                                                                                                                       |
| allowPartial        | boolean                                                                                               | ❌       | If false, the system only adds associations when there are no status errors. If true, the system skips any ineligible associations and adds eligible associations. |

**Return Type**

`AddApiCatalogSystemEnvironmentAssociationsResponse`

**Example Usage Code Snippet**

```typescript
import {
  AddApiCatalogSystemEnvironmentAssociations,
  PostmanApiSdkSourceOverlayed,
} from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const addApiCatalogSystemEnvironmentAssociations: AddApiCatalogSystemEnvironmentAssociations = {
    workspaceEnvironmentIds: ['12345678-4b076607-09cf-4f9d-8a9a-08c8f3cf4619'],
  };

  const data =
    await postmanApiSdkSourceOverlayed.apiCatalog.addApiCatalogSystemEnvironmentAssociations(
      '23b554c1-c30c-483d-bf98-dbe9ab7b88a0',
      addApiCatalogSystemEnvironmentAssociations,
      {
        allowPartial: true,
      },
    );

  console.log(data);
})();
```

## removeApiCatalogSystemEnvironmentAssociations

Removes workspace-environment associations from a system environment.

- HTTP Method: `DELETE`
- Endpoint: `/api-catalog/system-environments/{systemEnvironmentId}/associations`

**Parameters**

| Name                | Type                                                                                                        | Required | Description                  |
| :------------------ | :---------------------------------------------------------------------------------------------------------- | :------- | :--------------------------- |
| body                | [RemoveApiCatalogSystemEnvironmentAssociations](../models/RemoveApiCatalogSystemEnvironmentAssociations.md) | ❌       | The request body.            |
| systemEnvironmentId | string                                                                                                      | ✅       | The system environment's ID. |

**Return Type**

`RemoveApiCatalogSystemEnvironmentAssociationsResponse`

**Example Usage Code Snippet**

```typescript
import {
  PostmanApiSdkSourceOverlayed,
  RemoveApiCatalogSystemEnvironmentAssociations,
} from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const removeApiCatalogSystemEnvironmentAssociations: RemoveApiCatalogSystemEnvironmentAssociations =
    {
      workspaceEnvironmentIds: ['12345678-4b076607-09cf-4f9d-8a9a-08c8f3cf4619'],
    };

  const data =
    await postmanApiSdkSourceOverlayed.apiCatalog.removeApiCatalogSystemEnvironmentAssociations(
      '23b554c1-c30c-483d-bf98-dbe9ab7b88a0',
      removeApiCatalogSystemEnvironmentAssociations,
    );

  console.log(data);
})();
```
