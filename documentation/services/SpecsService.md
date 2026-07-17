# SpecsService

A list of all methods in the `SpecsService` service. Click on the method name to view detailed information about that method.

| Methods                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :---------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getGeneratedCollectionSpecs](#getgeneratedcollectionspecs) | Gets the API specification generated for the given collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [generateSpecFromCollection](#generatespecfromcollection)   | Generates an OpenAPI 2.0, 3.0, or 3.1 specification for the given collection. The response contains a polling link to the task status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [syncCollectionWithSpec](#synccollectionwithspec)           | Syncs a collection generated from an API specification. This is an asynchronous endpoint that returns an HTTP `202 Accepted` response. **Note:** - This endpoint only supports the OpenAPI 2.0, 3.0, and 3.1 specification types. - You can only sync collections generated from the given spec ID.                                                                                                                                                                                                                                                                                                                                                                         |
| [getAsyncSpecTaskStatus](#getasyncspectaskstatus)           | Gets the status of an asynchronous API specification creation task.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [getAllSpecs](#getallspecs)                                 | Gets all API specifications in a workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [createSpec](#createspec)                                   | Creates an API specification in Postman's [Spec Hub](https://learning.postman.com/docs/design-apis/specifications/overview/). Specifications can be single or multi-file. **Note:** - Postman supports OpenAPI (2.0, 3.0, and 3.1), AsyncAPI (2.0 and 3.0), protobuf (2 and 3), GraphQL, and Smithy specifications. - If the file path contains a `/` (forward slash) character, then a folder is created. For example, if the path is the `components/schemas.json` value, then a `components` folder is created with the `schemas.json` file inside. - Multi-file specifications can only have one root file. - Files cannot exceed a maximum of 12 MB in size.           |
| [getSpec](#getspec)                                         | Gets information about an API specification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [updateSpecProperties](#updatespecproperties)               | Updates an API specification's properties, such as its name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [deleteSpec](#deletespec)                                   | Deletes an API specification. On success, this returns an HTTP `204 No Content` response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [updateSpecSyncOptions](#updatespecsyncoptions)             | Updates the [sync options](https://learning.postman.com/docs/design-apis/specifications/generate-collections/#configure-sync-settings) for a specification's generated collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [getSpecDefinition](#getspecdefinition)                     | Gets the complete contents of an OpenAPI or AsyncAPI specification's definition.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [getSpecFiles](#getspecfiles)                               | Gets all the files in an API specification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [createSpecFile](#createspecfile)                           | Creates a file for an OpenAPI or a protobuf 2 or 3 specification. **Note:** - If the file path contains a `/` (forward slash) character, then a folder is created. For example, if the path is the `components/schemas.json` value, then a `components` folder is created with the `schemas.json` file inside. - Creating a spec file assigns it the `DEFAULT` file type. - Multi-file specifications can only have one root file. - Files cannot exceed a maximum of 10 MB in size.                                                                                                                                                                                        |
| [getSpecFile](#getspecfile)                                 | Gets the contents of an API specification's file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [updateSpecFile](#updatespecfile)                           | Updates a file for an OpenAPI or protobuf 2 or 3 specification. **Note:** - This endpoint does not accept an empty request body. You must pass one of the accepted values. - This endpoint does not accept multiple request body properties in a single call. For example, you cannot pass both the `content` and `type` property at the same time. - Multi-file specifications can only have one root file. - When updating a file type to `ROOT`, the previous root file is updated to the `DEFAULT` file type. - Files cannot exceed a maximum of 10 MB in size.                                                                                                         |
| [deleteSpecFile](#deletespecfile)                           | Deletes a file in an API specification. On success, this returns an HTTP `204 No Content` response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [getSpecCollections](#getspeccollections)                   | Gets all of an API specification's generated collections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [generateCollection](#generatecollection)                   | Creates a collection from the given OpenAPI 2.0, 3.0, or 3.1 specification or Smithy specification. The response contains a polling link to the task status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [syncSpecWithCollection](#syncspecwithcollection)           | Syncs an API specification linked to a collection. This is an asynchronous endpoint that returns an HTTP `202 Accepted` response. **Note:** - This endpoint only supports the OpenAPI 2.0, 3.0, and 3.1 specification types. - You can only sync collections generated from the given specification ID.                                                                                                                                                                                                                                                                                                                                                                     |
| [getSpecVersionTag](#getspecversiontag)                     | Gets information about a specification's version tag. The response returns a snapshot of a specification at a point in time that lets you track changes to your specifications over time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [getSpecVersionTags](#getspecversiontags)                   | Gets a list of a specification's version tags.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [createSpecVersionTag](#createspecversiontag)               | Creates a version tag for a specification. Version tags are snapshots of a specification at a point in time that let you to track changes to your specifications over time. **Note:** Conflicts can occur if you try to create a version tag for a changelog group that already has a version tag. To resolve this, make new changes to the specification to create a new changelog group, then create a version tag on that new changelog group.                                                                                                                                                                                                                           |

## getGeneratedCollectionSpecs

Gets the API specification generated for the given collection.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionUid}/generations/{elementType}`

**Parameters**

| Name          | Type                                            | Required | Description                 |
| :------------ | :---------------------------------------------- | :------- | :-------------------------- |
| collectionUid | string                                          | ✅       | The collection's unique ID. |
| elementType   | [ElementTypeSpec](../models/ElementTypeSpec.md) | ✅       | The `spec` value.           |

**Return Type**

`GetGeneratedCollectionSpecs`

**Example Usage Code Snippet**

```typescript
import { ElementTypeSpec, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const elementTypeSpec = ElementTypeSpec.SPEC;

  const data = await postmanApi.specs.getGeneratedCollectionSpecs(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    elementTypeSpec,
  );

  console.log(data);
})();
```

## generateSpecFromCollection

Generates an OpenAPI 2.0, 3.0, or 3.1 specification for the given collection. The response contains a polling link to the task status.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionUid}/generations/{elementType}`

**Parameters**

| Name          | Type                                                                  | Required | Description                 |
| :------------ | :-------------------------------------------------------------------- | :------- | :-------------------------- |
| body          | [GenerateSpecFromCollection](../models/GenerateSpecFromCollection.md) | ❌       | The request body.           |
| collectionUid | string                                                                | ✅       | The collection's unique ID. |
| elementType   | [ElementTypeSpec](../models/ElementTypeSpec.md)                       | ✅       | The `spec` value.           |

**Return Type**

`TaskCreated`

**Example Usage Code Snippet**

```typescript
import {
  ElementTypeSpec,
  Format,
  GenerateSpecFromCollection,
  GenerateSpecFromCollectionType,
  PostmanApi,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const elementTypeSpec = ElementTypeSpec.SPEC;

  const generateSpecFromCollectionType = GenerateSpecFromCollectionType.OPENAPI_2_0;

  const format = Format.JSON;

  const generateSpecFromCollection: GenerateSpecFromCollection = {
    name: 'Sample API',
    type: generateSpecFromCollectionType,
    format: format,
  };

  const data = await postmanApi.specs.generateSpecFromCollection(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    elementTypeSpec,
    generateSpecFromCollection,
  );

  console.log(data);
})();
```

## syncCollectionWithSpec

Syncs a collection generated from an API specification. This is an asynchronous endpoint that returns an HTTP `202 Accepted` response. **Note:** - This endpoint only supports the OpenAPI 2.0, 3.0, and 3.1 specification types. - You can only sync collections generated from the given spec ID.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionUid}/synchronizations`

**Parameters**

| Name          | Type   | Required | Description                 |
| :------------ | :----- | :------- | :-------------------------- |
| collectionUid | string | ✅       | The collection's unique ID. |
| specId        | string | ✅       | The spec's ID.              |

**Return Type**

`TaskCreated`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.specs.syncCollectionWithSpec(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    {
      specId: '73e15000-bc7a-4802-b80e-05fff18fd7f8',
    },
  );

  console.log(data);
})();
```

## getAsyncSpecTaskStatus

Gets the status of an asynchronous API specification creation task.

- HTTP Method: `GET`
- Endpoint: `/{elementType}/{elementId}/tasks/{taskId}`

**Parameters**

| Name        | Type                                    | Required | Description                       |
| :---------- | :-------------------------------------- | :------- | :-------------------------------- |
| elementType | [ElementType](../models/ElementType.md) | ✅       | The element to filter results by. |
| elementId   | [ElementId](../models/ElementId.md)     | ✅       | The element's ID.                 |
| taskId      | string                                  | ✅       | The task's ID.                    |

**Return Type**

`GetAsyncCollectionTaskStatus`

**Example Usage Code Snippet**

```typescript
import { ElementId, ElementType, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const elementType = ElementType.COLLECTIONS;
  const elementId = 'ad occaeca';

  const data = await postmanApi.specs.getAsyncSpecTaskStatus(
    elementType,
    elementId,
    '66ae9950-0869-4e65-96b0-1e0e47e771af',
  );

  console.log(data);
})();
```

## getAllSpecs

Gets all API specifications in a workspace.

- HTTP Method: `GET`
- Endpoint: `/specs`

**Parameters**

| Name        | Type   | Required | Description                                                                                                                                |
| :---------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| workspaceId | string | ✅       | The workspace's ID.                                                                                                                        |
| cursor      | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| limit       | number | ❌       | The maximum number of rows to return in the response.                                                                                      |

**Return Type**

`GetAllSpecs`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.specs.getAllSpecs({
    workspaceId: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    limit: 10,
  });

  console.log(data);
})();
```

## createSpec

Creates an API specification in Postman's [Spec Hub](https://learning.postman.com/docs/design-apis/specifications/overview/). Specifications can be single or multi-file. **Note:** - Postman supports OpenAPI (2.0, 3.0, and 3.1), AsyncAPI (2.0 and 3.0), protobuf (2 and 3), GraphQL, and Smithy specifications. - If the file path contains a `/` (forward slash) character, then a folder is created. For example, if the path is the `components/schemas.json` value, then a `components` folder is created with the `schemas.json` file inside. - Multi-file specifications can only have one root file. - Files cannot exceed a maximum of 12 MB in size.

- HTTP Method: `POST`
- Endpoint: `/specs`

**Parameters**

| Name        | Type                                  | Required | Description         |
| :---------- | :------------------------------------ | :------- | :------------------ |
| body        | [CreateSpec](../models/CreateSpec.md) | ❌       | The request body.   |
| workspaceId | string                                | ✅       | The workspace's ID. |

**Return Type**

`CreateSpecResponse`

**Example Usage Code Snippet**

```typescript
import {
  CreateSpec,
  MultiFileSpec,
  MultiFileSpecType,
  PostmanApi,
  SpecType,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const specType = SpecType.OPENAPI_2_0;

  const multiFileSpecType = MultiFileSpecType.DEFAULT_;

  const multiFileSpec: MultiFileSpec = {
    path: 'schemas.json',
    content:
      '{\n    "SpacecraftId": {\n        "description": "The unique identifier of a spacecraft",\n        "type": "string"\n    },\n    "Spacecraft": {\n        "type": "object",\n        "required": [\n            "id",\n            "name",\n            "type"\n        ],\n        "properties": {\n            "id": {\n                "$ref": "#/SpacecraftId"\n            },\n            "name": {\n                "type": "string"\n            },\n            "type": {\n                "type": "string",\n                "enum": [\n                    "capsule",\n                    "probe",\n                    "satellite",\n                    "spaceplane",\n                    "station"\n                ]\n            },\n            "description": {\n                "type": "string"\n            }\n        }\n    },\n    "Error": {\n        "type": "object",\n        "required": [\n            "message"\n        ],\n        "properties": {\n            "message": {\n                "description": "A human readable error message",\n                "type": "string"\n            }\n        }\n    }\n}',
    type: multiFileSpecType,
  };

  const createSpec: CreateSpec = {
    name: 'Sample API',
    type: specType,
    files: [multiFileSpec],
  };

  const data = await postmanApi.specs.createSpec(createSpec, {
    workspaceId: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

## getSpec

Gets information about an API specification.

- HTTP Method: `GET`
- Endpoint: `/specs/{specId}`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| specId | string | ✅       | The spec's ID. |

**Return Type**

`SpecInformation`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.specs.getSpec('73e15000-bc7a-4802-b80e-05fff18fd7f8');

  console.log(data);
})();
```

## updateSpecProperties

Updates an API specification's properties, such as its name.

- HTTP Method: `PATCH`
- Endpoint: `/specs/{specId}`

**Parameters**

| Name   | Type                                                      | Required | Description       |
| :----- | :-------------------------------------------------------- | :------- | :---------------- |
| body   | [UpdateSpecProperties](../models/UpdateSpecProperties.md) | ❌       | The request body. |
| specId | string                                                    | ✅       | The spec's ID.    |

**Return Type**

`UpdateSpecPropertiesResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApi, UpdateSpecProperties } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const updateSpecProperties: UpdateSpecProperties = {
    name: 'Sample API',
  };

  const data = await postmanApi.specs.updateSpecProperties(
    '73e15000-bc7a-4802-b80e-05fff18fd7f8',
    updateSpecProperties,
  );

  console.log(data);
})();
```

## deleteSpec

Deletes an API specification. On success, this returns an HTTP `204 No Content` response.

- HTTP Method: `DELETE`
- Endpoint: `/specs/{specId}`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| specId | string | ✅       | The spec's ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.specs.deleteSpec('73e15000-bc7a-4802-b80e-05fff18fd7f8');

  console.log(data);
})();
```

## updateSpecSyncOptions

Updates the [sync options](https://learning.postman.com/docs/design-apis/specifications/generate-collections/#configure-sync-settings) for a specification's generated collection.

- HTTP Method: `PATCH`
- Endpoint: `/specs/{specId}/collections/{collectionId}/sync-options`

**Parameters**

| Name         | Type                                                  | Required | Description          |
| :----------- | :---------------------------------------------------- | :------- | :------------------- |
| body         | [ApiSpecSyncOptions](../models/ApiSpecSyncOptions.md) | ❌       | The request body.    |
| specId       | string                                                | ✅       | The spec's ID.       |
| collectionId | string                                                | ✅       | The collection's ID. |

**Return Type**

`ApiSpecSyncOptions`

**Example Usage Code Snippet**

```typescript
import { ApiSpecSyncOptions, PostmanApi, SyncOptions } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const syncOptions: SyncOptions = {
    syncExamples: true,
    deleteOrphanedRequests: true,
  };

  const apiSpecSyncOptions: ApiSpecSyncOptions = {
    syncOptions: syncOptions,
  };

  const data = await postmanApi.specs.updateSpecSyncOptions(
    '73e15000-bc7a-4802-b80e-05fff18fd7f8',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    apiSpecSyncOptions,
  );

  console.log(data);
})();
```

## getSpecDefinition

Gets the complete contents of an OpenAPI or AsyncAPI specification's definition.

- HTTP Method: `GET`
- Endpoint: `/specs/{specId}/definitions`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| specId | string | ✅       | The spec's ID. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.specs.getSpecDefinition('73e15000-bc7a-4802-b80e-05fff18fd7f8');

  console.log(data);
})();
```

## getSpecFiles

Gets all the files in an API specification.

- HTTP Method: `GET`
- Endpoint: `/specs/{specId}/files`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| specId | string | ✅       | The spec's ID. |

**Return Type**

`GetSpecFiles`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.specs.getSpecFiles('73e15000-bc7a-4802-b80e-05fff18fd7f8');

  console.log(data);
})();
```

## createSpecFile

Creates a file for an OpenAPI or a protobuf 2 or 3 specification. **Note:** - If the file path contains a `/` (forward slash) character, then a folder is created. For example, if the path is the `components/schemas.json` value, then a `components` folder is created with the `schemas.json` file inside. - Creating a spec file assigns it the `DEFAULT` file type. - Multi-file specifications can only have one root file. - Files cannot exceed a maximum of 10 MB in size.

- HTTP Method: `POST`
- Endpoint: `/specs/{specId}/files`

**Parameters**

| Name   | Type                                          | Required | Description       |
| :----- | :-------------------------------------------- | :------- | :---------------- |
| body   | [CreateSpecFile](../models/CreateSpecFile.md) | ❌       | The request body. |
| specId | string                                        | ✅       | The spec's ID.    |

**Return Type**

`CreateUpdateSpecFileResponse`

**Example Usage Code Snippet**

```typescript
import { CreateSpecFile, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const createSpecFile: CreateSpecFile = {
    path: 'schemas.json',
    content:
      '{\n    "SpacecraftId": {\n        "description": "The unique identifier of a spacecraft",\n        "type": "string"\n    },\n    "Spacecraft": {\n        "type": "object",\n        "required": [\n            "id",\n            "name",\n            "type"\n        ],\n        "properties": {\n            "id": {\n                "$ref": "#/SpacecraftId"\n            },\n            "name": {\n                "type": "string"\n            },\n            "type": {\n                "type": "string",\n                "enum": [\n                    "capsule",\n                    "probe",\n                    "satellite",\n                    "spaceplane",\n                    "station"\n                ]\n            },\n            "description": {\n                "type": "string"\n            }\n        }\n    },\n    "Error": {\n        "type": "object",\n        "required": [\n            "message"\n        ],\n        "properties": {\n            "message": {\n                "description": "A human readable error message",\n                "type": "string"\n            }\n        }\n    }\n}',
  };

  const data = await postmanApi.specs.createSpecFile(
    '73e15000-bc7a-4802-b80e-05fff18fd7f8',
    createSpecFile,
  );

  console.log(data);
})();
```

## getSpecFile

Gets the contents of an API specification's file.

- HTTP Method: `GET`
- Endpoint: `/specs/{specId}/files/{filePath}`

**Parameters**

| Name     | Type   | Required | Description           |
| :------- | :----- | :------- | :-------------------- |
| specId   | string | ✅       | The spec's ID.        |
| filePath | string | ✅       | The path to the file. |

**Return Type**

`GetSpecFile`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.specs.getSpecFile(
    '73e15000-bc7a-4802-b80e-05fff18fd7f8',
    'index.json',
  );

  console.log(data);
})();
```

## updateSpecFile

Updates a file for an OpenAPI or protobuf 2 or 3 specification. **Note:** - This endpoint does not accept an empty request body. You must pass one of the accepted values. - This endpoint does not accept multiple request body properties in a single call. For example, you cannot pass both the `content` and `type` property at the same time. - Multi-file specifications can only have one root file. - When updating a file type to `ROOT`, the previous root file is updated to the `DEFAULT` file type. - Files cannot exceed a maximum of 10 MB in size.

- HTTP Method: `PATCH`
- Endpoint: `/specs/{specId}/files/{filePath}`

**Parameters**

| Name     | Type                                          | Required | Description           |
| :------- | :-------------------------------------------- | :------- | :-------------------- |
| body     | [UpdateSpecFile](../models/UpdateSpecFile.md) | ❌       | The request body.     |
| specId   | string                                        | ✅       | The spec's ID.        |
| filePath | string                                        | ✅       | The path to the file. |

**Return Type**

`CreateUpdateSpecFileResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApi, UpdateSpecFile, UpdateSpecFileType } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const updateSpecFileType = UpdateSpecFileType.DEFAULT_;

  const updateSpecFile: UpdateSpecFile = {
    name: 'index.json',
    type: updateSpecFileType,
    content:
      '{\n  "openapi": "3.0.0",\n  "info": {\n    "version": "1.0.0",\n    "title": "Sample API",\n    "description": "Buy or rent spacecrafts"\n  },\n  "paths": {\n    "/spacecrafts/{spacecraftId}": {\n      "parameters": [\n        {\n          "name": "spacecraftId",\n          "description": "The unique identifier of the spacecraft",\n          "in": "path",\n          "required": true,\n          "schema": {\n            "$ref": "#/components/schemas/SpacecraftId"\n          }\n        }\n      ],\n      "get": {\n        "summary": "Read a spacecraft",\n        "responses": {\n          "200": {\n            "description": "The spacecraft corresponding to the provided `spacecraftId`",\n            "content": {\n              "application/json": {\n                "schema": {\n                  "$ref": "#/components/schemas/Spacecraft"\n                }\n              }\n            }\n          },\n          "404": {\n            "description": "No spacecraft found for the provided `spacecraftId`",\n            "content": {\n              "application/json": {\n                "schema": {\n                  "$ref": "#/components/schemas/Error"\n                }\n              }\n            }\n          },\n          "500": {\n            "description": "Unexpected error",\n            "content": {\n              "application/json": {\n                "schema": {\n                  "$ref": "#/components/schemas/Error"\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  },\n  "components": {\n    "schemas": {\n      "SpacecraftId": {\n        "description": "The unique identifier of a spacecraft",\n        "type": "string"\n      },\n      "Spacecraft": {\n        "type": "object",\n        "required": [\n          "id",\n          "name",\n          "type"\n        ],\n        "properties": {\n          "id": {\n            "$ref": "#/components/schemas/SpacecraftId"\n          },\n          "name": {\n            "type": "string"\n          },\n          "type": {\n            "type": "string",\n            "enum": [\n              "capsule",\n              "probe",\n              "satellite",\n              "spaceplane",\n              "station"\n            ]\n          },\n          "description": {\n            "type": "string"\n          }\n        }\n      },\n      "Error": {\n        "type": "object",\n        "required": [\n          "message"\n        ],\n        "properties": {\n          "message": {\n            "description": "A human readable error message",\n            "type": "string"\n          }\n        }\n      }\n    },\n    "securitySchemes": {\n      "ApiKey": {\n        "type": "apiKey",\n        "in": "header",\n        "name": "X-Api-Key"\n      }\n    }\n  },\n  "security": [\n    {\n      "ApiKey": [\n\n      ]\n    }\n  ]\n}',
  };

  const data = await postmanApi.specs.updateSpecFile(
    '73e15000-bc7a-4802-b80e-05fff18fd7f8',
    'index.json',
    updateSpecFile,
  );

  console.log(data);
})();
```

## deleteSpecFile

Deletes a file in an API specification. On success, this returns an HTTP `204 No Content` response.

- HTTP Method: `DELETE`
- Endpoint: `/specs/{specId}/files/{filePath}`

**Parameters**

| Name     | Type   | Required | Description           |
| :------- | :----- | :------- | :-------------------- |
| specId   | string | ✅       | The spec's ID.        |
| filePath | string | ✅       | The path to the file. |

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.specs.deleteSpecFile(
    '73e15000-bc7a-4802-b80e-05fff18fd7f8',
    'index.json',
  );

  console.log(data);
})();
```

## getSpecCollections

Gets all of an API specification's generated collections.

- HTTP Method: `GET`
- Endpoint: `/specs/{specId}/generations/{elementType}`

**Parameters**

| Name        | Type                                                        | Required | Description                                                                                                                                |
| :---------- | :---------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| specId      | string                                                      | ✅       | The spec's ID.                                                                                                                             |
| elementType | [ElementTypeCollection](../models/ElementTypeCollection.md) | ✅       | The `collection` element type.                                                                                                             |
| limit       | number                                                      | ❌       | The maximum number of rows to return in the response.                                                                                      |
| cursor      | string                                                      | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |

**Return Type**

`GetSpecCollections`

**Example Usage Code Snippet**

```typescript
import { ElementTypeCollection, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const elementTypeCollection = ElementTypeCollection.COLLECTION;

  const data = await postmanApi.specs.getSpecCollections(
    '73e15000-bc7a-4802-b80e-05fff18fd7f8',
    elementTypeCollection,
    {
      limit: 10,
      cursor:
        'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    },
  );

  console.log(data);
})();
```

## generateCollection

Creates a collection from the given OpenAPI 2.0, 3.0, or 3.1 specification or Smithy specification. The response contains a polling link to the task status.

- HTTP Method: `POST`
- Endpoint: `/specs/{specId}/generations/{elementType}`

**Parameters**

| Name        | Type                                                        | Required | Description                    |
| :---------- | :---------------------------------------------------------- | :------- | :----------------------------- |
| body        | [GenerateCollection](../models/GenerateCollection.md)       | ❌       | The request body.              |
| specId      | string                                                      | ✅       | The spec's ID.                 |
| elementType | [ElementTypeCollection](../models/ElementTypeCollection.md) | ✅       | The `collection` element type. |

**Return Type**

`TaskCreated`

**Example Usage Code Snippet**

```typescript
import {
  ElementTypeCollection,
  FolderStrategy,
  GenerateCollection,
  GenerateCollectionOptions,
  IndentCharacter,
  PostmanApi,
  RequestNameSource,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const elementTypeCollection = ElementTypeCollection.COLLECTION;

  const requestNameSource = RequestNameSource.FALLBACK;

  const indentCharacter = IndentCharacter.TAB;

  const folderStrategy = FolderStrategy.PATHS;

  const generateCollectionOptions: GenerateCollectionOptions = {
    requestNameSource: requestNameSource,
    indentCharacter: indentCharacter,
    folderStrategy: folderStrategy,
    includeAuthInfoInExample: true,
    enableOptionalParameters: true,
    keepImplicitHeaders: true,
    includeDeprecated: true,
    alwaysInheritAuthentication: true,
    nestedFolderHierarchy: true,
  };

  const generateCollection: GenerateCollection = {
    name: 'Sample API',
    options: generateCollectionOptions,
  };

  const data = await postmanApi.specs.generateCollection(
    '73e15000-bc7a-4802-b80e-05fff18fd7f8',
    elementTypeCollection,
    generateCollection,
  );

  console.log(data);
})();
```

## syncSpecWithCollection

Syncs an API specification linked to a collection. This is an asynchronous endpoint that returns an HTTP `202 Accepted` response. **Note:** - This endpoint only supports the OpenAPI 2.0, 3.0, and 3.1 specification types. - You can only sync collections generated from the given specification ID.

- HTTP Method: `PUT`
- Endpoint: `/specs/{specId}/synchronizations`

**Parameters**

| Name          | Type   | Required | Description                 |
| :------------ | :----- | :------- | :-------------------------- |
| specId        | string | ✅       | The spec's ID.              |
| collectionUid | string | ✅       | The collection's unique ID. |

**Return Type**

`TaskCreated`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.specs.syncSpecWithCollection(
    '73e15000-bc7a-4802-b80e-05fff18fd7f8',
    {
      collectionUid: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    },
  );

  console.log(data);
})();
```

## getSpecVersionTag

Gets information about a specification's version tag. The response returns a snapshot of a specification at a point in time that lets you track changes to your specifications over time.

- HTTP Method: `GET`
- Endpoint: `/specs/{specId}/version-tags/{tagId}/files`

**Parameters**

| Name   | Type   | Required | Description           |
| :----- | :----- | :------- | :-------------------- |
| specId | string | ✅       | The spec's ID.        |
| tagId  | string | ✅       | The version tag's ID. |

**Return Type**

`GetSpecVersionTag`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.specs.getSpecVersionTag(
    '73e15000-bc7a-4802-b80e-05fff18fd7f8',
    '97d2c74e-19de-426d-9763-8e7400429759',
  );

  console.log(data);
})();
```

## getSpecVersionTags

Gets a list of a specification's version tags.

- HTTP Method: `GET`
- Endpoint: `/specs/{specId}/version-tags`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                |
| :----- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| specId | string | ✅       | The spec's ID.                                                                                                                             |
| cursor | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| limit  | number | ❌       | The maximum number of rows to return in the response.                                                                                      |

**Return Type**

`GetSpecVersionTags`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.specs.getSpecVersionTags('73e15000-bc7a-4802-b80e-05fff18fd7f8', {
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    limit: 10,
  });

  console.log(data);
})();
```

## createSpecVersionTag

Creates a version tag for a specification. Version tags are snapshots of a specification at a point in time that let you to track changes to your specifications over time. **Note:** Conflicts can occur if you try to create a version tag for a changelog group that already has a version tag. To resolve this, make new changes to the specification to create a new changelog group, then create a version tag on that new changelog group.

- HTTP Method: `POST`
- Endpoint: `/specs/{specId}/version-tags`

**Parameters**

| Name   | Type                                                      | Required | Description       |
| :----- | :-------------------------------------------------------- | :------- | :---------------- |
| body   | [CreateSpecVersionTag](../models/CreateSpecVersionTag.md) | ❌       | The request body. |
| specId | string                                                    | ✅       | The spec's ID.    |

**Return Type**

`CreateSpecVersionTagResponse`

**Example Usage Code Snippet**

```typescript
import { CreateSpecVersionTag, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const createSpecVersionTag: CreateSpecVersionTag = {
    name: 'name',
  };

  const data = await postmanApi.specs.createSpecVersionTag(
    '73e15000-bc7a-4802-b80e-05fff18fd7f8',
    createSpecVersionTag,
  );

  console.log(data);
})();
```
