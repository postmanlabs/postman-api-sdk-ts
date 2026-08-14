# PackagesService

A list of all methods in the `PackagesService` service. Click on the method name to view detailed information about that method.

| Methods                         | Description                                                                                                                                                                                                                     |
| :------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [getPackages](#getpackages)     | Gets all active packages available to the authenticated user. **Note:** Script content isn't included in response.                                                                                                              |
| [createPackage](#createpackage) | Creates a package and its index script as a Postman Package Library resource.                                                                                                                                                   |
| [getPackage](#getpackage)       | Gets an active package's metadata and its current index script content.                                                                                                                                                         |
| [updatePackage](#updatepackage) | Updates a package's description and/or index script content.                                                                                                                                                                    |
| [deletePackage](#deletepackage) | Deletes the package and its associated index script content. On success, this returns an HTTP `204 No Content` response. **Note:** The endpoint returns an HTTP `204 No Content` response even if the package no longer exists. |

## getPackages

Gets all active packages available to the authenticated user. **Note:** Script content isn't included in response.

- HTTP Method: `GET`
- Endpoint: `/packages`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                |
| :----- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| limit  | number | ❌       | The maximum number of packages to return.                                                                                                  |
| cursor | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |

**Return Type**

`GetPackages`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.packages.getPackages({
    limit: 10,
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
  });

  console.log(data);
})();
```

## createPackage

Creates a package and its index script as a Postman Package Library resource.

- HTTP Method: `POST`
- Endpoint: `/packages`

**Parameters**

| Name      | Type                                        | Required | Description         |
| :-------- | :------------------------------------------ | :------- | :------------------ |
| body      | [CreatePackage](../models/CreatePackage.md) | ✅       | The request body.   |
| workspace | string                                      | ✅       | The workspace's ID. |

**Return Type**

`CreatePackageResponse`

**Example Usage Code Snippet**

```typescript
import { CreatePackage, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const createPackage: CreatePackage = {
    name: 'my-math-package',
    description: 'A package that provides math functions.',
    script: 'module.exports = { add: (a, b) => a + b };',
  };

  const data = await postmanApi.packages.createPackage(createPackage, {
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

## getPackage

Gets an active package's metadata and its current index script content.

- HTTP Method: `GET`
- Endpoint: `/packages/{packageId}`

**Parameters**

| Name      | Type   | Required | Description       |
| :-------- | :----- | :------- | :---------------- |
| packageId | string | ✅       | The package's ID. |

**Return Type**

`UnifiedPackage`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.packages.getPackage('3b60f5f3-cd98-4e04-b560-3eb039fe85d8');

  console.log(data);
})();
```

## updatePackage

Updates a package's description and/or index script content.

- HTTP Method: `PATCH`
- Endpoint: `/packages/{packageId}`

**Parameters**

| Name      | Type                                        | Required | Description       |
| :-------- | :------------------------------------------ | :------- | :---------------- |
| body      | [UpdatePackage](../models/UpdatePackage.md) | ✅       | The request body. |
| packageId | string                                      | ✅       | The package's ID. |

**Return Type**

`CreatePackageResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApi, UpdatePackage } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const updatePackage: UpdatePackage = {
    description: 'A package that provides math functions.',
    script: 'module.exports = { add: (a, b) => a + b };',
  };

  const data = await postmanApi.packages.updatePackage(
    '3b60f5f3-cd98-4e04-b560-3eb039fe85d8',
    updatePackage,
  );

  console.log(data);
})();
```

## deletePackage

Deletes the package and its associated index script content. On success, this returns an HTTP `204 No Content` response. **Note:** The endpoint returns an HTTP `204 No Content` response even if the package no longer exists.

- HTTP Method: `DELETE`
- Endpoint: `/packages/{packageId}`

**Parameters**

| Name      | Type   | Required | Description       |
| :-------- | :----- | :------- | :---------------- |
| packageId | string | ✅       | The package's ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.packages.deletePackage('3b60f5f3-cd98-4e04-b560-3eb039fe85d8');

  console.log(data);
})();
```
