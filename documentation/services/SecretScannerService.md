# SecretScannerService

A list of all methods in the `SecretScannerService` service. Click on the method name to view detailed information about that method.

| Methods                                                             | Description                                                                                                                                                                                                                                                          |
| :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [detectedSecretsQueries](#detectedsecretsqueries)                   | Returns all secrets detected by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/), grouped by workspace or resource. If you pass an empty request body, this endpoint returns all results.                                |
| [updateDetectedSecretResolutions](#updatedetectedsecretresolutions) | Updates the resolution status of a secret detected in a workspace.                                                                                                                                                                                                   |
| [getDetectedSecretsLocations](#getdetectedsecretslocations)         | Gets the locations of secrets detected by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/).                                                                                                                              |
| [getSecretTypes](#getsecrettypes)                                   | Gets the metadata of the secret types supported by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/). You can use a secret type's ID in the response to query data with the POST `/detected-secrets/{secretId}` endpoint. |

## detectedSecretsQueries

Returns all secrets detected by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/), grouped by workspace or resource. If you pass an empty request body, this endpoint returns all results.

- HTTP Method: `POST`
- Endpoint: `/detected-secrets-queries`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                                                                                                                                                     |
| :------ | :---------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| body    | [DetectedSecretsQueryRequest](../models/DetectedSecretsQueryRequest.md) | ❌       | The request body.                                                                                                                                                                                                                                                               |
| limit   | number                                                                  | ❌       | The maximum number of rows to return in the response.                                                                                                                                                                                                                           |
| cursor  | string                                                                  | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.                                                                                                                                      |
| include | string                                                                  | ❌       | The additional fields to be included as a part of the request: - `meta.total` — Include the total records found in the `meta` response object.                                                                                                                                  |
| since   | string                                                                  | ❌       | Return only results created since the given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be later than the `until` value. To use `time-numoffset` format, you must use `%2B` URL-encoding for the `+` character.    |
| until   | string                                                                  | ❌       | Return only results created until this given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be earlier than the `since` value. To use `time-numoffset` format, you must use `%2B` URL-encoding for the `+` character. |

**Return Type**

`SearchDetectedSecretsRequest`

**Example Usage Code Snippet**

```typescript
import {
  DetectedSecretsQueryRequest,
  DetectedSecretsQueryRequestResources,
  PostmanApiSdk,
} from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const statuses = 'FALSE_POSITIVE';

  const resourcesType = 'collection';

  const detectedSecretsQueryRequestResources: DetectedSecretsQueryRequestResources = {
    type: resourcesType,
    ids: ['12345678-94720289-b9f3-4572-b34d-ecdfb9225b07'],
  };

  const workspaceVisibilities = 'team';

  const detectedSecretsQueryRequest: DetectedSecretsQueryRequest = {
    resolved: true,
    secretTypes: ['1a7ec5d1-dcba-4ec7-8220-3c1ee490416b'],
    statuses: [statuses],
    resources: [detectedSecretsQueryRequestResources],
    workspaceIds: ['0fe6c2f2-022d-48f7-8e7e-3244369445b0'],
    workspaceVisibilities: [workspaceVisibilities],
  };

  const data = await postmanApiSdk.secretScanner.detectedSecretsQueries(
    detectedSecretsQueryRequest,
    {
      limit: 10,
      cursor:
        'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
      include: 'meta.total',
      since: '2022-06-01T00:00:00.000Z',
      until: '2022-06-15T00:00:00.000Z',
    },
  );

  console.log(data);
})();
```

## updateDetectedSecretResolutions

Updates the resolution status of a secret detected in a workspace.

- HTTP Method: `PUT`
- Endpoint: `/detected-secrets/{secretId}`

**Parameters**

| Name     | Type                                                                        | Required | Description       |
| :------- | :-------------------------------------------------------------------------- | :------- | :---------------- |
| body     | [UpdateSecretResolutionRequest](../models/UpdateSecretResolutionRequest.md) | ❌       | The request body. |
| secretId | string                                                                      | ✅       | The secret's ID.  |

**Return Type**

`UpdateDetectedSecretResolutionsOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk, UpdateSecretResolutionRequest } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const updateSecretResolutionRequestResolution = 'FALSE_POSITIVE';

  const updateSecretResolutionRequest: UpdateSecretResolutionRequest = {
    resolution: updateSecretResolutionRequestResolution,
    workspaceId: 'e361eeb4-00dd-4225-9774-6146a2555999',
  };

  const data = await postmanApiSdk.secretScanner.updateDetectedSecretResolutions(
    'MTc0ODA0Mw==',
    updateSecretResolutionRequest,
  );

  console.log(data);
})();
```

## getDetectedSecretsLocations

Gets the locations of secrets detected by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/).

- HTTP Method: `GET`
- Endpoint: `/detected-secrets/{secretId}/locations`

**Parameters**

| Name         | Type                                      | Required | Description                                                                                                                                                                                                                                                                     |
| :----------- | :---------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| secretId     | string                                    | ✅       | The secret's ID.                                                                                                                                                                                                                                                                |
| workspaceId  | string                                    | ✅       | The workspace's ID.                                                                                                                                                                                                                                                             |
| limit        | number                                    | ❌       | The maximum number of rows to return in the response.                                                                                                                                                                                                                           |
| cursor       | string                                    | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.                                                                                                                                      |
| since        | string                                    | ❌       | Return only results created since the given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be later than the `until` value. To use `time-numoffset` format, you must use `%2B` URL-encoding for the `+` character.    |
| until        | string                                    | ❌       | Return only results created until this given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be earlier than the `since` value. To use `time-numoffset` format, you must use `%2B` URL-encoding for the `+` character. |
| resourceType | [ResourceType](../models/ResourceType.md) | ❌       | Return only results that match the given resource type.                                                                                                                                                                                                                         |

**Return Type**

`GetDetectedSecretsLocationsOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const resourceType = 'collection';

  const data = await postmanApiSdk.secretScanner.getDetectedSecretsLocations('MTc0ODA0Mw==', {
    limit: 10,
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    workspaceId: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    since: '2022-06-01T00:00:00.000Z',
    until: '2022-06-15T00:00:00.000Z',
    resourceType: resourceType,
  });

  console.log(data);
})();
```

## getSecretTypes

Gets the metadata of the secret types supported by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/). You can use a secret type's ID in the response to query data with the POST `/detected-secrets/{secretId}` endpoint.

- HTTP Method: `GET`
- Endpoint: `/secret-types`

**Return Type**

`GetSecretTypesOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.secretScanner.getSecretTypes();

  console.log(data);
})();
```
