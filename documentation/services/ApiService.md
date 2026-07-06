# ApiService

A list of all methods in the `ApiService` service. Click on the method name to view detailed information about that method.

| Methods                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [getApis](#getapis)                                       | Gets information about all APIs in a workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [createApi](#createapi)                                   | Creates an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [getApi](#getapi)                                         | Gets information about an API. **Note:** - Git-connected APIs will only return the `versions` and `gitInfo` query responses. This is because schema and collection information is stored in the connected Git repository. The `gitInfo` object only lists the repository and folder locations of the files. - API viewers can only use the `versions` option in the `include` query parameter.                                                                                                                                                                                                                                                                                  |
| [updateApi](#updateapi)                                   | Updates an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [deleteApi](#deleteapi)                                   | Deletes an API. On success, this returns an HTTP `204 No Content` response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [addApiCollection](#addapicollection)                     | Adds a collection to an API. To do this, use the following `operationType` values: - `COPY_COLLECTION` — Copies a collection from the workspace and adds it to an API. - `CREATE_NEW` — Creates a new collection by providing the new collection's content. - `GENERATE_FROM_SCHEMA` — Generates the collection from an API schema. - `options` — An object that contains advanced creation options and their values. You can find a complete list of properties and their values in Postman's [OpenAPI to Postman Collection Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). These properties are case-sensitive. |
| [getApiCollection](#getapicollection)                     | Gets a collection attached to an API. You can use the `versionId` query parameter to get a collection published in a version. **Note:** - You cannot use this endpoint to get a Git-linked API collection. Collections in a Git-linked API are stored in the linked Git repository, not in the Postman cloud. This endpoint only has access to Postman servers. - You can get a collection published in an API version with the `versionId` query parameter. - The `versionId` query parameter is a required parameter for API viewers.                                                                                                                                         |
| [getApiCollectionComments](#getapicollectioncomments)     | Gets all comments left by users in an API's collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [createApiCollectionComment](#createapicollectioncomment) | Creates a comment on an API's collection. To create a reply on an existing comment, include the `threadId` property in the request body. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [updateApiCollectionComment](#updateapicollectioncomment) | Updates a comment on an API's collection. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [deleteApiCollectionComment](#deleteapicollectioncomment) | Deletes a comment from an API's collection. On success, this returns an HTTP `204 No Content` response. **Note:** Deleting the first comment of a thread deletes all the comments in the thread.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [syncCollectionWithSchema](#synccollectionwithschema)     | Syncs a collection attached to an API with the API schema. This is an asynchronous endpoint that returns an HTTP `202 Accepted` response. The response contains a polling link to the `/apis/{apiId}/tasks/{taskId}` endpoint in the `Location` header. **Note:** This endpoint only supports the OpenAPI 3 schema type.                                                                                                                                                                                                                                                                                                                                                        |
| [getApiComments](#getapicomments)                         | Gets all comments left by users in an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [createApiComment](#createapicomment)                     | Creates a comment on an API. To create a reply on an existing comment, include the `threadId` property in the request body. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [updateApiComment](#updateapicomment)                     | Updates a comment on an API. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [deleteApiComment](#deleteapicomment)                     | Deletes a comment from an API. On success, this returns an HTTP `204 No Content` response. **Note:** Deleting the first comment of a thread deletes all the comments in the thread.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [createApiSchema](#createapischema)                       | Creates a schema for an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [getApiSchema](#getapischema)                             | Gets information about API schema. You can use the `versionId` query parameter to get a schema published in an API version. You can use this API to do the following: - Get a schema's metadata. - Get all the files in a schema. This only returns the first file in the schema. The endpoint response contains a link to the next set of response results. - Get a schema's contents in multi-file or bundled format. **Note:** The `versionId` query parameter is a required parameter for API viewers.                                                                                                                                                                      |
| [getApiSchemaFiles](#getapischemafiles)                   | Gets the files in an API schema. You can use the `versionId` query parameter to get schema files published in an API version. **Note:** The `versionId` query parameter is a required parameter for API viewers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [getApiSchemaFileContents](#getapischemafilecontents)     | Gets an API schema file contents at the defined path. You can use the `versionId` query parameter to get schema file contents published in an API version. **Note:** The `versionId` query parameter is a required parameter for API viewers.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [createUpdateApiSchemaFile](#createupdateapischemafile)   | Creates or updates an API schema file. **Note:** - If the provided file path exists, the file is updated with the new contents. - If the provided file path does not exist, then a new schema file is created. - If the file path contains a `/` (forward slash) character, then a folder is created. For example, if the file path is the `dir/schema.json` value, then a `dir` folder is created with the `schema.json` file inside. - You can only update the `root` tag for protobuf specifications.                                                                                                                                                                        |
| [deleteApiSchemaFile](#deleteapischemafile)               | Deletes a file in an API schema. On success, this returns an HTTP `204 No Content` response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [getStatusOfAnAsyncApiTask](#getstatusofanasyncapitask)   | Gets the status of an asynchronous task.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [getApiVersions](#getapiversions)                         | Gets all the published versions of an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [createApiVersion](#createapiversion)                     | Creates a new API version asynchronously and immediately returns an HTTP `202 Accepted` response. The response contains a polling link to the task status API in the `Location` header. This endpoint is equivalent to publishing a version in Postman app, which is the snapshot of API collections and schema at a given point in time.                                                                                                                                                                                                                                                                                                                                       |
| [getApiVersion](#getapiversion)                           | Gets information about an API version. **Note:** - For API editors, this endpoint returns an HTTP `302 Found` status code when the version status is pending. It also returns the `/apis/{apiId}/tasks/{taskId}` task status response header. - For API viewers, this endpoint returns an HTTP `404 Not Found` when the version status is pending.                                                                                                                                                                                                                                                                                                                              |
| [updateApiVersion](#updateapiversion)                     | Updates an API version. **Note:** This endpoint returns an HTTP `404 Not Found` response when an API version is pending publication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [deleteApiVersion](#deleteapiversion)                     | Deletes an API version. On success, this returns an HTTP `204 No Content` response. **Note:** This endpoint returns an HTTP `404 Not Found` response when an API version is pending publication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## getApis

Gets information about all APIs in a workspace.

- HTTP Method: `GET`
- Endpoint: `/apis`

**Parameters**

| Name        | Type   | Required | Description                                                                                                                                |
| :---------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| workspaceId | string | ✅       | The workspace's ID.                                                                                                                        |
| createdBy   | number | ❌       | Return only results created by the given user ID.                                                                                          |
| cursor      | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| description | string | ❌       | Return only APIs whose description includes the given value. Matching is not case-sensitive.                                               |
| limit       | number | ❌       | The maximum number of rows to return in the response.                                                                                      |

**Return Type**

`GetApIs`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.getApis({
    workspaceId: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    createdBy: 12345678,
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    description: 'This is an API for testing purposes',
    limit: 10,
  });

  console.log(data);
})();
```

## createApi

Creates an API.

- HTTP Method: `POST`
- Endpoint: `/apis`

**Parameters**

| Name        | Type                                            | Required | Description         |
| :---------- | :---------------------------------------------- | :------- | :------------------ |
| body        | [CreateUpdateApi](../models/CreateUpdateApi.md) | ❌       | The request body.   |
| workspaceId | string                                          | ✅       | The workspace's ID. |

**Return Type**

`ApiCreated`

**Example Usage Code Snippet**

```typescript
import { CreateUpdateApi, PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const createUpdateApi: CreateUpdateApi = {
    name: 'Test API',
    summary: 'Testing API',
    description: 'This is a test API.',
  };

  const data = await postmanApiSdkSourceOverlayed.api.createApi(createUpdateApi, {
    workspaceId: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

## getApi

Gets information about an API. **Note:** - Git-connected APIs will only return the `versions` and `gitInfo` query responses. This is because schema and collection information is stored in the connected Git repository. The `gitInfo` object only lists the repository and folder locations of the files. - API viewers can only use the `versions` option in the `include` query parameter.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}`

**Parameters**

| Name    | Type                                    | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :------ | :-------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apiId   | string                                  | ✅       | The API's ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| include | [ApiInclude[]](../models/ApiInclude.md) | ❌       | An array that contains additional resources to include in the response. Use this parameter to query for element links to the API, such as collections and schemas: - `collections` — Query for linked Postman collections. - `versions` — Query for linked versions. - `schemas` — Query for linked schemas. - `gitInfo` — Query for information about the API's git-linked repository. This query only returns the linked repository and folder locations of the files. It does not return `collections` or `schemas` information. **Note:** API viewers can only use the `versions` option. |

**Return Type**

`GetAnApi`

**Example Usage Code Snippet**

```typescript
import { ApiInclude, PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const apiInclude = ApiInclude.COLLECTIONS;

  const data = await postmanApiSdkSourceOverlayed.api.getApi(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    {
      include: [apiInclude],
    },
  );

  console.log(data);
})();
```

## updateApi

Updates an API.

- HTTP Method: `PUT`
- Endpoint: `/apis/{apiId}`

**Parameters**

| Name  | Type                                            | Required | Description       |
| :---- | :---------------------------------------------- | :------- | :---------------- |
| body  | [CreateUpdateApi](../models/CreateUpdateApi.md) | ❌       | The request body. |
| apiId | string                                          | ✅       | The API's ID.     |

**Return Type**

`UpdateApiResponse`

**Example Usage Code Snippet**

```typescript
import { CreateUpdateApi, PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const createUpdateApi: CreateUpdateApi = {
    name: 'Test API',
    summary: 'Testing API',
    description: 'This is a test API.',
  };

  const data = await postmanApiSdkSourceOverlayed.api.updateApi(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    createUpdateApi,
  );

  console.log(data);
})();
```

## deleteApi

Deletes an API. On success, this returns an HTTP `204 No Content` response.

- HTTP Method: `DELETE`
- Endpoint: `/apis/{apiId}`

**Parameters**

| Name  | Type   | Required | Description   |
| :---- | :----- | :------- | :------------ |
| apiId | string | ✅       | The API's ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.deleteApi(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
  );

  console.log(data);
})();
```

## addApiCollection

Adds a collection to an API. To do this, use the following `operationType` values: - `COPY_COLLECTION` — Copies a collection from the workspace and adds it to an API. - `CREATE_NEW` — Creates a new collection by providing the new collection's content. - `GENERATE_FROM_SCHEMA` — Generates the collection from an API schema. - `options` — An object that contains advanced creation options and their values. You can find a complete list of properties and their values in Postman's [OpenAPI to Postman Collection Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). These properties are case-sensitive.

- HTTP Method: `POST`
- Endpoint: `/apis/{apiId}/collections`

**Parameters**

| Name  | Type                                              | Required | Description       |
| :---- | :------------------------------------------------ | :------- | :---------------- |
| body  | [AddApiCollection](../models/AddApiCollection.md) | ❌       | The request body. |
| apiId | string                                            | ✅       | The API's ID.     |

**Return Type**

`ApiCollectionAdded`

**Example Usage Code Snippet**

```typescript
import {
  AddApiCollection,
  CopyCollectionToApi,
  CopyCollectionToApiData,
  CopyCollectionToApiOperationType,
  PostmanApiSdkSourceOverlayed,
} from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const copyCollectionToApiData: CopyCollectionToApiData = {
    collectionId: '12345678-61867bcc-c4c1-11ed-afa1-0242ac120002',
  };

  const copyCollectionToApiOperationType = CopyCollectionToApiOperationType.COPY_COLLECTION;

  const copyCollectionToApi: CopyCollectionToApi = {
    data: copyCollectionToApiData,
    operationType: copyCollectionToApiOperationType,
  };

  const data = await postmanApiSdkSourceOverlayed.api.addApiCollection(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    copyCollectionToApi,
  );

  console.log(data);
})();
```

## getApiCollection

Gets a collection attached to an API. You can use the `versionId` query parameter to get a collection published in a version. **Note:** - You cannot use this endpoint to get a Git-linked API collection. Collections in a Git-linked API are stored in the linked Git repository, not in the Postman cloud. This endpoint only has access to Postman servers. - You can get a collection published in an API version with the `versionId` query parameter. - The `versionId` query parameter is a required parameter for API viewers.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/collections/{collectionId}`

**Parameters**

| Name         | Type   | Required | Description                                                         |
| :----------- | :----- | :------- | :------------------------------------------------------------------ |
| apiId        | string | ✅       | The API's ID.                                                       |
| collectionId | string | ✅       | The collection's unique ID.                                         |
| versionId    | string | ❌       | The API's version ID. This is a required parameter for API viewers. |

**Return Type**

`GetApiCollection`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.getApiCollection(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '12345678-61867bcc-c4c1-11ed-afa1-0242ac120002',
    {
      versionId: '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    },
  );

  console.log(data);
})();
```

## getApiCollectionComments

Gets all comments left by users in an API's collection.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/collections/{collectionId}/comments`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| apiId        | string | ✅       | The API's ID.               |
| collectionId | string | ✅       | The collection's unique ID. |

**Return Type**

`CommentResponseObject`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.getApiCollectionComments(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '12345678-61867bcc-c4c1-11ed-afa1-0242ac120002',
  );

  console.log(data);
})();
```

## createApiCollectionComment

Creates a comment on an API's collection. To create a reply on an existing comment, include the `threadId` property in the request body. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `POST`
- Endpoint: `/apis/{apiId}/collections/{collectionId}/comments`

**Parameters**

| Name         | Type                                        | Required | Description                 |
| :----------- | :------------------------------------------ | :------- | :-------------------------- |
| body         | [CommentCreate](../models/CommentCreate.md) | ✅       | The request body.           |
| apiId        | string                                      | ✅       | The API's ID.               |
| collectionId | string                                      | ✅       | The collection's unique ID. |

**Return Type**

`CommentUpdatedCreatedObject`

**Example Usage Code Snippet**

```typescript
import {
  CommentCreate,
  PostmanApiSdkSourceOverlayed,
  TaggedUsers,
  UserName,
  UserNameType,
} from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const userNameType = UserNameType.USER;

  const userName: UserName = {
    type: userNameType,
    id: '87654321',
  };

  const taggedUsers: TaggedUsers = {
    _userName_: userName,
  };

  const commentCreate: CommentCreate = {
    body: 'This is an example.',
    threadId: 12345,
    tags: taggedUsers,
  };

  const data = await postmanApiSdkSourceOverlayed.api.createApiCollectionComment(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '12345678-61867bcc-c4c1-11ed-afa1-0242ac120002',
    commentCreate,
  );

  console.log(data);
})();
```

## updateApiCollectionComment

Updates a comment on an API's collection. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `PUT`
- Endpoint: `/apis/{apiId}/collections/{collectionId}/comments/{commentId}`

**Parameters**

| Name         | Type                                        | Required | Description                 |
| :----------- | :------------------------------------------ | :------- | :-------------------------- |
| body         | [CommentUpdate](../models/CommentUpdate.md) | ✅       | The request body.           |
| apiId        | string                                      | ✅       | The API's ID.               |
| collectionId | string                                      | ✅       | The collection's unique ID. |
| commentId    | number                                      | ✅       | The comment's ID.           |

**Return Type**

`CommentUpdatedCreatedObject`

**Example Usage Code Snippet**

```typescript
import {
  CommentUpdate,
  PostmanApiSdkSourceOverlayed,
  TaggedUsers,
  UserName,
  UserNameType,
} from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const userNameType = UserNameType.USER;

  const userName: UserName = {
    type: userNameType,
    id: '87654321',
  };

  const taggedUsers: TaggedUsers = {
    _userName_: userName,
  };

  const commentUpdate: CommentUpdate = {
    body: 'This is an example.',
    tags: taggedUsers,
  };

  const data = await postmanApiSdkSourceOverlayed.api.updateApiCollectionComment(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '12345678-61867bcc-c4c1-11ed-afa1-0242ac120002',
    46814,
    commentUpdate,
  );

  console.log(data);
})();
```

## deleteApiCollectionComment

Deletes a comment from an API's collection. On success, this returns an HTTP `204 No Content` response. **Note:** Deleting the first comment of a thread deletes all the comments in the thread.

- HTTP Method: `DELETE`
- Endpoint: `/apis/{apiId}/collections/{collectionId}/comments/{commentId}`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| apiId        | string | ✅       | The API's ID.               |
| collectionId | string | ✅       | The collection's unique ID. |
| commentId    | number | ✅       | The comment's ID.           |

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.deleteApiCollectionComment(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '12345678-61867bcc-c4c1-11ed-afa1-0242ac120002',
    46814,
  );

  console.log(data);
})();
```

## syncCollectionWithSchema

Syncs a collection attached to an API with the API schema. This is an asynchronous endpoint that returns an HTTP `202 Accepted` response. The response contains a polling link to the `/apis/{apiId}/tasks/{taskId}` endpoint in the `Location` header. **Note:** This endpoint only supports the OpenAPI 3 schema type.

- HTTP Method: `PUT`
- Endpoint: `/apis/{apiId}/collections/{collectionId}/sync-with-schema-tasks`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| apiId        | string | ✅       | The API's ID.               |
| collectionId | string | ✅       | The collection's unique ID. |

**Return Type**

`SyncCollectionWithSchemaResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.syncCollectionWithSchema(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '12345678-61867bcc-c4c1-11ed-afa1-0242ac120002',
  );

  console.log(data);
})();
```

## getApiComments

Gets all comments left by users in an API.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/comments`

**Parameters**

| Name  | Type   | Required | Description   |
| :---- | :----- | :------- | :------------ |
| apiId | string | ✅       | The API's ID. |

**Return Type**

`CommentResponseObject`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.getApiComments(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
  );

  console.log(data);
})();
```

## createApiComment

Creates a comment on an API. To create a reply on an existing comment, include the `threadId` property in the request body. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `POST`
- Endpoint: `/apis/{apiId}/comments`

**Parameters**

| Name  | Type                                        | Required | Description       |
| :---- | :------------------------------------------ | :------- | :---------------- |
| body  | [CommentCreate](../models/CommentCreate.md) | ✅       | The request body. |
| apiId | string                                      | ✅       | The API's ID.     |

**Return Type**

`CommentUpdatedCreatedObject`

**Example Usage Code Snippet**

```typescript
import {
  CommentCreate,
  PostmanApiSdkSourceOverlayed,
  TaggedUsers,
  UserName,
  UserNameType,
} from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const userNameType = UserNameType.USER;

  const userName: UserName = {
    type: userNameType,
    id: '87654321',
  };

  const taggedUsers: TaggedUsers = {
    _userName_: userName,
  };

  const commentCreate: CommentCreate = {
    body: 'This is an example.',
    threadId: 12345,
    tags: taggedUsers,
  };

  const data = await postmanApiSdkSourceOverlayed.api.createApiComment(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    commentCreate,
  );

  console.log(data);
})();
```

## updateApiComment

Updates a comment on an API. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `PUT`
- Endpoint: `/apis/{apiId}/comments/{commentId}`

**Parameters**

| Name      | Type                                        | Required | Description       |
| :-------- | :------------------------------------------ | :------- | :---------------- |
| body      | [CommentUpdate](../models/CommentUpdate.md) | ✅       | The request body. |
| apiId     | string                                      | ✅       | The API's ID.     |
| commentId | number                                      | ✅       | The comment's ID. |

**Return Type**

`CommentUpdatedCreatedObject`

**Example Usage Code Snippet**

```typescript
import {
  CommentUpdate,
  PostmanApiSdkSourceOverlayed,
  TaggedUsers,
  UserName,
  UserNameType,
} from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const userNameType = UserNameType.USER;

  const userName: UserName = {
    type: userNameType,
    id: '87654321',
  };

  const taggedUsers: TaggedUsers = {
    _userName_: userName,
  };

  const commentUpdate: CommentUpdate = {
    body: 'This is an example.',
    tags: taggedUsers,
  };

  const data = await postmanApiSdkSourceOverlayed.api.updateApiComment(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    46814,
    commentUpdate,
  );

  console.log(data);
})();
```

## deleteApiComment

Deletes a comment from an API. On success, this returns an HTTP `204 No Content` response. **Note:** Deleting the first comment of a thread deletes all the comments in the thread.

- HTTP Method: `DELETE`
- Endpoint: `/apis/{apiId}/comments/{commentId}`

**Parameters**

| Name      | Type   | Required | Description       |
| :-------- | :----- | :------- | :---------------- |
| apiId     | string | ✅       | The API's ID.     |
| commentId | number | ✅       | The comment's ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.deleteApiComment(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    46814,
  );

  console.log(data);
})();
```

## createApiSchema

Creates a schema for an API.

- HTTP Method: `POST`
- Endpoint: `/apis/{apiId}/schemas`

**Parameters**

| Name  | Type                                            | Required | Description       |
| :---- | :---------------------------------------------- | :------- | :---------------- |
| body  | [CreateApiSchema](../models/CreateApiSchema.md) | ❌       | The request body. |
| apiId | string                                          | ✅       | The API's ID.     |

**Return Type**

`CreateApiSchemaResponse`

**Example Usage Code Snippet**

```typescript
import {
  CreateApiSchema,
  CreateApiSchemaFiles,
  CreateApiSchemaFilesRoot,
  CreateApiSchemaType,
  PostmanApiSdkSourceOverlayed,
} from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const createApiSchemaType = CreateApiSchemaType.PROTO_2;

  const createApiSchemaFilesRoot: CreateApiSchemaFilesRoot = {
    enabled: true,
  };

  const createApiSchemaFiles: CreateApiSchemaFiles = {
    path: 'index.json',
    root: createApiSchemaFilesRoot,
    content: 'content',
  };

  const createApiSchema: CreateApiSchema = {
    type: createApiSchemaType,
    files: [createApiSchemaFiles],
  };

  const data = await postmanApiSdkSourceOverlayed.api.createApiSchema(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    createApiSchema,
  );

  console.log(data);
})();
```

## getApiSchema

Gets information about API schema. You can use the `versionId` query parameter to get a schema published in an API version. You can use this API to do the following: - Get a schema's metadata. - Get all the files in a schema. This only returns the first file in the schema. The endpoint response contains a link to the next set of response results. - Get a schema's contents in multi-file or bundled format. **Note:** The `versionId` query parameter is a required parameter for API viewers.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/schemas/{schemaId}`

**Parameters**

| Name      | Type    | Required | Description                                                         |
| :-------- | :------ | :------- | :------------------------------------------------------------------ |
| apiId     | string  | ✅       | The API's ID.                                                       |
| schemaId  | string  | ✅       | The API schema's ID.                                                |
| versionId | string  | ❌       | The API's version ID. This is a required parameter for API viewers. |
| bundled   | boolean | ❌       | If true, return the schema in a bundled format.                     |

**Return Type**

`GetApiSchema`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.getApiSchema(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '5381f010-c4c1-11ed-afa1-0242ac120002',
    {
      versionId: '12ece9e1-2abf-4edc-8e34-de66e74114d2',
      bundled: true,
    },
  );

  console.log(data);
})();
```

## getApiSchemaFiles

Gets the files in an API schema. You can use the `versionId` query parameter to get schema files published in an API version. **Note:** The `versionId` query parameter is a required parameter for API viewers.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/schemas/{schemaId}/files`

**Parameters**

| Name      | Type   | Required | Description                                                                                                                                |
| :-------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| apiId     | string | ✅       | The API's ID.                                                                                                                              |
| schemaId  | string | ✅       | The API schema's ID.                                                                                                                       |
| versionId | string | ❌       | The API's version ID. This is a required parameter for API viewers.                                                                        |
| limit     | number | ❌       | The maximum number of rows to return in the response.                                                                                      |
| cursor    | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |

**Return Type**

`ApiSchemaFiles`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.getApiSchemaFiles(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '5381f010-c4c1-11ed-afa1-0242ac120002',
    {
      versionId: '12ece9e1-2abf-4edc-8e34-de66e74114d2',
      limit: 10,
      cursor:
        'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    },
  );

  console.log(data);
})();
```

## getApiSchemaFileContents

Gets an API schema file contents at the defined path. You can use the `versionId` query parameter to get schema file contents published in an API version. **Note:** The `versionId` query parameter is a required parameter for API viewers.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/schemas/{schemaId}/files/{file-path}`

**Parameters**

| Name      | Type   | Required | Description                                                         |
| :-------- | :----- | :------- | :------------------------------------------------------------------ |
| apiId     | string | ✅       | The API's ID.                                                       |
| schemaId  | string | ✅       | The API schema's ID.                                                |
| filePath  | string | ✅       | The path to the schema file.                                        |
| versionId | string | ❌       | The API's version ID. This is a required parameter for API viewers. |

**Return Type**

`SchemaFileContents`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.getApiSchemaFileContents(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '5381f010-c4c1-11ed-afa1-0242ac120002',
    'postman/collection/c1.json',
    {
      versionId: '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    },
  );

  console.log(data);
})();
```

## createUpdateApiSchemaFile

Creates or updates an API schema file. **Note:** - If the provided file path exists, the file is updated with the new contents. - If the provided file path does not exist, then a new schema file is created. - If the file path contains a `/` (forward slash) character, then a folder is created. For example, if the file path is the `dir/schema.json` value, then a `dir` folder is created with the `schema.json` file inside. - You can only update the `root` tag for protobuf specifications.

- HTTP Method: `PUT`
- Endpoint: `/apis/{apiId}/schemas/{schemaId}/files/{file-path}`

**Parameters**

| Name     | Type                                                                | Required | Description                  |
| :------- | :------------------------------------------------------------------ | :------- | :--------------------------- |
| body     | [CreateUpdateApiSchemaFile](../models/CreateUpdateApiSchemaFile.md) | ❌       | The request body.            |
| apiId    | string                                                              | ✅       | The API's ID.                |
| schemaId | string                                                              | ✅       | The API schema's ID.         |
| filePath | string                                                              | ✅       | The path to the schema file. |

**Return Type**

`CreateUpdateApiSchemaFileResponse`

**Example Usage Code Snippet**

```typescript
import {
  CreateUpdateApiSchemaFile,
  CreateUpdateApiSchemaFileRoot,
  PostmanApiSdkSourceOverlayed,
} from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const createUpdateApiSchemaFileRoot: CreateUpdateApiSchemaFileRoot = {
    enabled: true,
  };

  const createUpdateApiSchemaFile: CreateUpdateApiSchemaFile = {
    name: 'index.json',
    root: createUpdateApiSchemaFileRoot,
    content:
      '{\n  "openapi": "3.1.0",\n  "info": {\n    "version": "1.0.0",\n    "title": "Sample API",\n    "description": "Buy or rent spacecrafts"\n  },\n  "paths": {\n    "/spacecrafts/{spacecraftId}": {\n      "parameters": [\n        {\n          "name": "spacecraftId",\n          "description": "The unique identifier of the spacecraft",\n          "in": "path",\n          "required": true,\n          "schema": {\n            "$ref": "#/components/schemas/SpacecraftId"\n          }\n        }\n      ],\n      "get": {\n        "summary": "Read a spacecraft",\n        "responses": {\n          "200": {\n            "description": "The spacecraft corresponding to the provided `spacecraftId`",\n            "content": {\n              "application/json": {\n                "schema": {\n                  "$ref": "#/components/schemas/Spacecraft"\n                }\n              }\n            }\n          },\n          "404": {\n            "description": "No spacecraft found for the provided `spacecraftId`",\n            "content": {\n              "application/json": {\n                "schema": {\n                  "$ref": "#/components/schemas/Error"\n                }\n              }\n            }\n          },\n          "500": {\n            "description": "Unexpected error",\n            "content": {\n              "application/json": {\n                "schema": {\n                  "$ref": "#/components/schemas/Error"\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  },\n  "components": {\n    "schemas": {\n      "SpacecraftId": {\n        "description": "The unique identifier of a spacecraft",\n        "type": "string"\n      },\n      "Spacecraft": {\n        "type": "object",\n        "required": [\n          "id",\n          "name",\n          "type"\n        ],\n        "properties": {\n          "id": {\n            "$ref": "#/components/schemas/SpacecraftId"\n          },\n          "name": {\n            "type": "string"\n          },\n          "type": {\n            "type": "string",\n            "enum": [\n              "capsule",\n              "probe",\n              "satellite",\n              "spaceplane",\n              "station"\n            ]\n          },\n          "description": {\n            "type": "string"\n          }\n        }\n      },\n      "Error": {\n        "type": "object",\n        "required": [\n          "message"\n        ],\n        "properties": {\n          "message": {\n            "description": "A human readable error message",\n            "type": "string"\n          }\n        }\n      }\n    },\n    "securitySchemes": {\n      "ApiKey": {\n        "type": "apiKey",\n        "in": "header",\n        "name": "X-Api-Key"\n      }\n    }\n  },\n  "security": [\n    {\n      "ApiKey": [\n\n      ]\n    }\n  ]\n}',
  };

  const data = await postmanApiSdkSourceOverlayed.api.createUpdateApiSchemaFile(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '5381f010-c4c1-11ed-afa1-0242ac120002',
    'postman/collection/c1.json',
    createUpdateApiSchemaFile,
  );

  console.log(data);
})();
```

## deleteApiSchemaFile

Deletes a file in an API schema. On success, this returns an HTTP `204 No Content` response.

- HTTP Method: `DELETE`
- Endpoint: `/apis/{apiId}/schemas/{schemaId}/files/{file-path}`

**Parameters**

| Name     | Type   | Required | Description                  |
| :------- | :----- | :------- | :--------------------------- |
| apiId    | string | ✅       | The API's ID.                |
| schemaId | string | ✅       | The API schema's ID.         |
| filePath | string | ✅       | The path to the schema file. |

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.deleteApiSchemaFile(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '5381f010-c4c1-11ed-afa1-0242ac120002',
    'postman/collection/c1.json',
  );

  console.log(data);
})();
```

## getStatusOfAnAsyncApiTask

Gets the status of an asynchronous task.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/tasks/{taskId}`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| apiId  | string | ✅       | The API's ID.  |
| taskId | string | ✅       | The task's ID. |

**Return Type**

`GetStatusOfAnAsyncApiTaskOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.getStatusOfAnAsyncApiTask(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '90ca9f5a-c4c4-21ed-afa1-0242ac120002',
  );

  console.log(data);
})();
```

## getApiVersions

Gets all the published versions of an API.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/versions`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                |
| :----- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| apiId  | string | ✅       | The API's ID.                                                                                                                              |
| cursor | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| limit  | number | ❌       | The maximum number of rows to return in the response.                                                                                      |

**Return Type**

`GetApiVersions`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.getApiVersions(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    {
      cursor:
        'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
      limit: 10,
    },
  );

  console.log(data);
})();
```

## createApiVersion

Creates a new API version asynchronously and immediately returns an HTTP `202 Accepted` response. The response contains a polling link to the task status API in the `Location` header. This endpoint is equivalent to publishing a version in Postman app, which is the snapshot of API collections and schema at a given point in time.

- HTTP Method: `POST`
- Endpoint: `/apis/{apiId}/versions`

**Parameters**

| Name  | Type                                              | Required | Description       |
| :---- | :------------------------------------------------ | :------- | :---------------- |
| body  | [CreateApiVersion](../models/CreateApiVersion.md) | ❌       | The request body. |
| apiId | string                                            | ✅       | The API's ID.     |

**Return Type**

`ApiVersionCreated`

**Example Usage Code Snippet**

```typescript
import {
  CreateApiVersion,
  CreateVersionSchemaNotGitLinked,
  CreateVersionSchemaNotGitLinkedCollections,
  CreateVersionSchemaNotGitLinkedSchemas,
  PostmanApiSdkSourceOverlayed,
} from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const createVersionSchemaNotGitLinkedSchemas: CreateVersionSchemaNotGitLinkedSchemas = {
    id: '5381f010-c4c1-11ed-afa1-0242ac120002',
  };

  const createVersionSchemaNotGitLinkedCollections: CreateVersionSchemaNotGitLinkedCollections = {
    id: '123456-12ece9e1-2abf-4edc-8e34-de66e74114d2',
  };

  const createVersionSchemaNotGitLinked: CreateVersionSchemaNotGitLinked = {
    name: 'v1',
    schemas: [createVersionSchemaNotGitLinkedSchemas],
    collections: [createVersionSchemaNotGitLinkedCollections],
    releaseNotes: 'This is the first release.',
  };

  const data = await postmanApiSdkSourceOverlayed.api.createApiVersion(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    createVersionSchemaNotGitLinked,
  );

  console.log(data);
})();
```

## getApiVersion

Gets information about an API version. **Note:** - For API editors, this endpoint returns an HTTP `302 Found` status code when the version status is pending. It also returns the `/apis/{apiId}/tasks/{taskId}` task status response header. - For API viewers, this endpoint returns an HTTP `404 Not Found` when the version status is pending.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/versions/{versionId}`

**Parameters**

| Name      | Type   | Required | Description           |
| :-------- | :----- | :------- | :-------------------- |
| apiId     | string | ✅       | The API's ID.         |
| versionId | string | ✅       | The API's version ID. |

**Return Type**

`ApiVersion`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.getApiVersion(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

## updateApiVersion

Updates an API version. **Note:** This endpoint returns an HTTP `404 Not Found` response when an API version is pending publication.

- HTTP Method: `PUT`
- Endpoint: `/apis/{apiId}/versions/{versionId}`

**Parameters**

| Name      | Type                                              | Required | Description           |
| :-------- | :------------------------------------------------ | :------- | :-------------------- |
| body      | [UpdateApiVersion](../models/UpdateApiVersion.md) | ❌       | The request body.     |
| apiId     | string                                            | ✅       | The API's ID.         |
| versionId | string                                            | ✅       | The API's version ID. |

**Return Type**

`ApiVersionUpdated`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed, UpdateApiVersion } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const updateApiVersion: UpdateApiVersion = {
    name: 'Release 1.5',
    releaseNotes: 'This is the first public release update.',
  };

  const data = await postmanApiSdkSourceOverlayed.api.updateApiVersion(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    updateApiVersion,
  );

  console.log(data);
})();
```

## deleteApiVersion

Deletes an API version. On success, this returns an HTTP `204 No Content` response. **Note:** This endpoint returns an HTTP `404 Not Found` response when an API version is pending publication.

- HTTP Method: `DELETE`
- Endpoint: `/apis/{apiId}/versions/{versionId}`

**Parameters**

| Name      | Type   | Required | Description           |
| :-------- | :----- | :------- | :-------------------- |
| apiId     | string | ✅       | The API's ID.         |
| versionId | string | ✅       | The API's version ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.api.deleteApiVersion(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```
