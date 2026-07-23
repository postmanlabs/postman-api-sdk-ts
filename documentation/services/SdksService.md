# SdksService

A list of all methods in the `SdksService` service. Click on the method name to view detailed information about that method.

| Methods                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [getSdks](#getsdks)                                                 | Lists all SDKs the authenticated user has access to. **Note:** - Use the `sdkIds` parameter to get the generation build status of multiple SDKs in a single call. - When you pass the `sdkIds` value, other filters are ignored and the response contains only the accessible SDKs from this list.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [createSdk](#createsdk)                                             | Creates an asynchronous generation job for a single SDK (in one language) from a collection or specification. To get the status of an SDK's generation, use the GET `/sdks/{sdkId}` endpoint and track its `buildStatus`. When the status is the `succeeded` value, the SDK is ready to download. You can also use the URL in the POST response's `Location` header. **Note:** The request body is determined by the given `language` value, so only provide the properties relevant to that language's SDK.                                                                                                                                                                                                                    |
| [getSdk](#getsdk)                                                   | Returns information about the SDK, including the current build job status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [deleteSdk](#deletesdk)                                             | Deletes an SDK record and its stored archive. On success, this returns a `204 No Content` response. **Note:** You can't use this endpoint to cancel a generation job that's still in progress.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [getSdkDownloadUrl](#getsdkdownloadurl)                             | Gets a short-lived signed URL for the generated SDK archive (zip). The generated URL is created on demand and expires within a few minutes. **Note:** The API doesn't stream the archive directly to keep responses small and predictable. Use the returned URL to download the SDK zip file.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [getSdkGitConnections](#getsdkgitconnections)                       | Gets all Git repository connections the authenticated user has access to in the given workspace. Each connection links one Postman Collection or specification and one SDK language to a target Git repository.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [createSdkGitConnection](#createsdkgitconnection)                   | Connects a Postman source element (collection or specification) to a Git repository for one SDK language. This creates a new connection in the `active` state. **Note:** - Each source and language pair maps to a single connection. If a connection already exists for the pair, this returns `409 Conflict` response. - To update an existing connection, use the PUT `/sdk-git-connections/{sdkGitConnectionId}` endpoint. - The `autoUpdatePullRequestsEnabled` property is only available to **Enterprise** plan users. If the user is on a **Team** plan, this value is always `false`.                                                                                                                                  |
| [getSdkGitConnection](#getsdkgitconnection)                         | Gets information about an SDK's Git connection. The response includes the SDK currently sent to the targetBranch and the most recent SDK-update pull request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [updateSdkGitConnection](#updatesdkgitconnection)                   | Updates the Git connection's lifecycle status: - `active` — Connects or reconnects the repository. All auto-update pull requests resume. - `disconnected` — Disconnects the repository, and no further auto-update pull requests are opened. The historical pull request record is preserved and remains queryable. **Note:** - The `autoUpdatePullRequestsEnabled` property is only available to **Enterprise** plan users and defaults to `true`. If the user is on a **Team** plan, this value is always `false`. - This action is idempotent. Setting the fields to their current values is a no-op and still returns the connection. - The `inaccessible` status is system-determined and can't be set with this endpoint. |
| [getSdkGitConnectionPullRequests](#getsdkgitconnectionpullrequests) | Lists all SDK update pull requests for the Git connection, in order of newest first by its `updatedAt` property. **Note:** Direct push requests to the base branch are not returned in the response if a Git connection is configured to push only some changes directly to a base branch.                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## getSdks

Lists all SDKs the authenticated user has access to. **Note:** - Use the `sdkIds` parameter to get the generation build status of multiple SDKs in a single call. - When you pass the `sdkIds` value, other filters are ignored and the response contains only the accessible SDKs from this list.

- HTTP Method: `GET`
- Endpoint: `/sdks`

**Parameters**

| Name        | Type                                          | Required | Description                                                                                                                                      |
| :---------- | :-------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| workspaceId | string                                        | ✅       | The ID of the workspace that contains the SDK.                                                                                                   |
| sdkIds      | string[]                                      | ❌       | A comma-separated list of SDK IDs to return in the response. If you pass this query parameter with other filters, the other filters are ignored. |
| buildStatus | [SdkBuildStatus](../models/SdkBuildStatus.md) | ❌       | Filter results by build status.                                                                                                                  |
| language    | [SdkLanguage](../models/SdkLanguage.md)       | ❌       | Filter results by SDK language.                                                                                                                  |
| sourceId    | string                                        | ❌       | Filter results by the originating Postman Collection or specification ID.                                                                        |
| cursor      | string                                        | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.       |
| limit       | number                                        | ❌       | The maximum number of rows to return in the response, up to a maximum value of 25. Any value greater than 25 returns a 400 Bad Request response. |

**Return Type**

`SdkList`

**Example Usage Code Snippet**

```typescript
import { PostmanApi, SdkBuildStatus, SdkLanguage } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const sdkBuildStatus = SdkBuildStatus.QUEUED;
  const sdkLanguage = SdkLanguage.TYPESCRIPT;

  const data = await postmanApi.sdks.getSdks({
    workspaceId: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    sdkIds: ['9c4e7d1a-2b3c-4f5e-8a9b-1c2d3e4f5a6b'],
    buildStatus: sdkBuildStatus,
    language: sdkLanguage,
    sourceId: '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    limit: 10,
  });

  console.log(data);
})();
```

## createSdk

Creates an asynchronous generation job for a single SDK (in one language) from a collection or specification. To get the status of an SDK's generation, use the GET `/sdks/{sdkId}` endpoint and track its `buildStatus`. When the status is the `succeeded` value, the SDK is ready to download. You can also use the URL in the POST response's `Location` header. **Note:** The request body is determined by the given `language` value, so only provide the properties relevant to that language's SDK.

- HTTP Method: `POST`
- Endpoint: `/sdks`

**Parameters**

| Name | Type                                | Required | Description       |
| :--- | :---------------------------------- | :------- | :---------------- |
| body | [CreateSdk](../models/CreateSdk.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import {
  CliOptions,
  CreateSdk,
  CsharpOptions,
  ElementType2,
  GoOptions,
  HttpMethodsToRetry,
  JavaOptions,
  KotlinOptions,
  PhpOptions,
  PostmanApi,
  PythonOptions,
  RubyOptions,
  RustOptions,
  SdkAuthorData,
  SdkLanguage,
  SdkRetryOptions,
  SdkSource,
  TypescriptOptions,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const elementType2 = ElementType2.COLLECTION;

  const sdkSource: SdkSource = {
    type: elementType2,
    id: '12ece9e1-2abf-4edc-8e34-de66e74114d2',
  };

  const sdkLanguage = SdkLanguage.TYPESCRIPT;

  const sdkAuthorData: SdkAuthorData = {
    name: 'Engineering',
    email: 'engineering@example.com',
  };

  const httpMethodsToRetry = HttpMethodsToRetry.GET_;

  const sdkRetryOptions: SdkRetryOptions = {
    enabled: true,
    maxAttempts: 3,
    retryDelay: 150,
    maxDelay: 3000,
    backOffFactor: 2,
    retryDelayJitter: 100,
    httpCodesToRetry: [429],
    httpMethodsToRetry: [httpMethodsToRetry],
  };

  const typescriptOptions: TypescriptOptions = {
    npmOrg: '@engineering',
    npmName: 'engineering-sdk',
  };

  const pythonOptions: PythonOptions = {
    pypiPackageName: 'engineering-sdk',
  };

  const goOptions: GoOptions = {
    goModuleName: 'github.com/engineering/engineering-sdk',
  };

  const javaOptions: JavaOptions = {
    groupId: 'com.engineering',
    artifactId: 'engineering-sdk',
  };

  const csharpOptions: CsharpOptions = {
    packageId: 'engineering.Sdk',
  };

  const rubyOptions: RubyOptions = {
    gemName: 'engineering-sdk',
  };

  const phpOptions: PhpOptions = {
    packageName: 'engineering/sdk',
  };

  const kotlinOptions: KotlinOptions = {
    groupId: 'com.engineering',
    artifactId: 'engineering-sdk',
  };

  const rustOptions: RustOptions = {
    packageName: 'engineering-sdk',
  };

  const cliOptions: CliOptions = {
    goModuleName: 'github.com/engineering/engineering-cli',
  };

  const createSdk: CreateSdk = {
    source: sdkSource,
    language: sdkLanguage,
    sdkVersion: '1.0.0',
    authors: [sdkAuthorData],
    retry: sdkRetryOptions,
    typescriptOptions: typescriptOptions,
    pythonOptions: pythonOptions,
    goOptions: goOptions,
    javaOptions: javaOptions,
    csharpOptions: csharpOptions,
    rubyOptions: rubyOptions,
    phpOptions: phpOptions,
    kotlinOptions: kotlinOptions,
    rustOptions: rustOptions,
    cliOptions: cliOptions,
  };

  const data = await postmanApi.sdks.createSdk(createSdk);

  console.log(data);
})();
```

## getSdk

Returns information about the SDK, including the current build job status.

- HTTP Method: `GET`
- Endpoint: `/sdks/{sdkId}`

**Parameters**

| Name  | Type   | Required | Description   |
| :---- | :----- | :------- | :------------ |
| sdkId | string | ✅       | The SDK's ID. |

**Return Type**

`Sdk`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.sdks.getSdk('9c4e7d1a-2b3c-4f5e-8a9b-1c2d3e4f5a6b');

  console.log(data);
})();
```

## deleteSdk

Deletes an SDK record and its stored archive. On success, this returns a `204 No Content` response. **Note:** You can't use this endpoint to cancel a generation job that's still in progress.

- HTTP Method: `DELETE`
- Endpoint: `/sdks/{sdkId}`

**Parameters**

| Name  | Type   | Required | Description   |
| :---- | :----- | :------- | :------------ |
| sdkId | string | ✅       | The SDK's ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.sdks.deleteSdk('9c4e7d1a-2b3c-4f5e-8a9b-1c2d3e4f5a6b');

  console.log(data);
})();
```

## getSdkDownloadUrl

Gets a short-lived signed URL for the generated SDK archive (zip). The generated URL is created on demand and expires within a few minutes. **Note:** The API doesn't stream the archive directly to keep responses small and predictable. Use the returned URL to download the SDK zip file.

- HTTP Method: `GET`
- Endpoint: `/sdks/{sdkId}/downloads`

**Parameters**

| Name  | Type   | Required | Description   |
| :---- | :----- | :------- | :------------ |
| sdkId | string | ✅       | The SDK's ID. |

**Return Type**

`SdkDownload`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.sdks.getSdkDownloadUrl('9c4e7d1a-2b3c-4f5e-8a9b-1c2d3e4f5a6b');

  console.log(data);
})();
```

## getSdkGitConnections

Gets all Git repository connections the authenticated user has access to in the given workspace. Each connection links one Postman Collection or specification and one SDK language to a target Git repository.

- HTTP Method: `GET`
- Endpoint: `/sdk-git-connections`

**Parameters**

| Name          | Type                                                          | Required | Description                                                                                                                                      |
| :------------ | :------------------------------------------------------------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| workspaceId   | string                                                        | ✅       | The ID of the workspace that owns the source entities.                                                                                           |
| sourceId      | string                                                        | ❌       | Filter results by the originating Postman Collection or specification ID.                                                                        |
| language      | [SdkLanguage](../models/SdkLanguage.md)                       | ❌       | Filter results by SDK language.                                                                                                                  |
| status        | [SdkGitConnectionStatus](../models/SdkGitConnectionStatus.md) | ❌       | Filter results by connection status.                                                                                                             |
| repositoryUrl | string                                                        | ❌       | Filter results by the canonical URL of the target Git repository.                                                                                |
| cursor        | string                                                        | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.       |
| limit         | number                                                        | ❌       | The maximum number of rows to return in the response, up to a maximum value of 25. Any value greater than 25 returns a 400 Bad Request response. |

**Return Type**

`SdkGitConnectionList`

**Example Usage Code Snippet**

```typescript
import { PostmanApi, SdkGitConnectionStatus, SdkLanguage } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const sdkLanguage = SdkLanguage.TYPESCRIPT;
  const sdkGitConnectionStatus = SdkGitConnectionStatus.ACTIVE;

  const data = await postmanApi.sdks.getSdkGitConnections({
    workspaceId: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    sourceId: '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    language: sdkLanguage,
    status: sdkGitConnectionStatus,
    repositoryUrl: 'https://git.example.com/engineering/engineering-sdk',
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    limit: 10,
  });

  console.log(data);
})();
```

## createSdkGitConnection

Connects a Postman source element (collection or specification) to a Git repository for one SDK language. This creates a new connection in the `active` state. **Note:** - Each source and language pair maps to a single connection. If a connection already exists for the pair, this returns `409 Conflict` response. - To update an existing connection, use the PUT `/sdk-git-connections/{sdkGitConnectionId}` endpoint. - The `autoUpdatePullRequestsEnabled` property is only available to **Enterprise** plan users. If the user is on a **Team** plan, this value is always `false`.

- HTTP Method: `POST`
- Endpoint: `/sdk-git-connections`

**Parameters**

| Name | Type                                                          | Required | Description       |
| :--- | :------------------------------------------------------------ | :------- | :---------------- |
| body | [CreateSdkGitConnection](../models/CreateSdkGitConnection.md) | ✅       | The request body. |

**Return Type**

`SdkGitConnection`

**Example Usage Code Snippet**

```typescript
import {
  CreateSdkGitConnection,
  ElementType2,
  PostmanApi,
  SdkLanguage,
  SdkSource,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const elementType2 = ElementType2.COLLECTION;

  const sdkSource: SdkSource = {
    type: elementType2,
    id: '12ece9e1-2abf-4edc-8e34-de66e74114d2',
  };

  const sdkLanguage = SdkLanguage.TYPESCRIPT;

  const createSdkGitConnection: CreateSdkGitConnection = {
    source: sdkSource,
    language: sdkLanguage,
    repositoryUrl: 'https://git.example.com/acme/acme-sdk',
    targetBranch: 'main',
    autoUpdatePullRequestsEnabled: true,
  };

  const data = await postmanApi.sdks.createSdkGitConnection(createSdkGitConnection);

  console.log(data);
})();
```

## getSdkGitConnection

Gets information about an SDK's Git connection. The response includes the SDK currently sent to the targetBranch and the most recent SDK-update pull request.

- HTTP Method: `GET`
- Endpoint: `/sdk-git-connections/{sdkGitConnectionId}`

**Parameters**

| Name               | Type   | Required | Description              |
| :----------------- | :----- | :------- | :----------------------- |
| sdkGitConnectionId | string | ✅       | The Git connection's ID. |

**Return Type**

`SdkGitConnection`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.sdks.getSdkGitConnection('8d4f7c1a-2b3e-4f5a-9c8d-1a2b3c4d5e6f');

  console.log(data);
})();
```

## updateSdkGitConnection

Updates the Git connection's lifecycle status: - `active` — Connects or reconnects the repository. All auto-update pull requests resume. - `disconnected` — Disconnects the repository, and no further auto-update pull requests are opened. The historical pull request record is preserved and remains queryable. **Note:** - The `autoUpdatePullRequestsEnabled` property is only available to **Enterprise** plan users and defaults to `true`. If the user is on a **Team** plan, this value is always `false`. - This action is idempotent. Setting the fields to their current values is a no-op and still returns the connection. - The `inaccessible` status is system-determined and can't be set with this endpoint.

- HTTP Method: `PUT`
- Endpoint: `/sdk-git-connections/{sdkGitConnectionId}`

**Parameters**

| Name               | Type                                                          | Required | Description              |
| :----------------- | :------------------------------------------------------------ | :------- | :----------------------- |
| body               | [UpdateSdkGitConnection](../models/UpdateSdkGitConnection.md) | ✅       | The request body.        |
| sdkGitConnectionId | string                                                        | ✅       | The Git connection's ID. |

**Return Type**

`SdkGitConnection`

**Example Usage Code Snippet**

```typescript
import { PostmanApi, UpdateSdkGitConnection, UpdateSdkGitConnectionStatus } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const updateSdkGitConnectionStatus = UpdateSdkGitConnectionStatus.ACTIVE;

  const updateSdkGitConnection: UpdateSdkGitConnection = {
    status: updateSdkGitConnectionStatus,
    autoUpdatePullRequestsEnabled: true,
  };

  const data = await postmanApi.sdks.updateSdkGitConnection(
    '8d4f7c1a-2b3e-4f5a-9c8d-1a2b3c4d5e6f',
    updateSdkGitConnection,
  );

  console.log(data);
})();
```

## getSdkGitConnectionPullRequests

Lists all SDK update pull requests for the Git connection, in order of newest first by its `updatedAt` property. **Note:** Direct push requests to the base branch are not returned in the response if a Git connection is configured to push only some changes directly to a base branch.

- HTTP Method: `GET`
- Endpoint: `/sdk-git-connections/{sdkGitConnectionId}/pull-requests`

**Parameters**

| Name               | Type                                                              | Required | Description                                                                                                                                      |
| :----------------- | :---------------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| sdkGitConnectionId | string                                                            | ✅       | The Git connection's ID.                                                                                                                         |
| status             | [SdkGitConnectionPrStatus](../models/SdkGitConnectionPrStatus.md) | ❌       | Filter results by pull request status.                                                                                                           |
| cursor             | string                                                            | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.       |
| limit              | number                                                            | ❌       | The maximum number of rows to return in the response, up to a maximum value of 25. Any value greater than 25 returns a 400 Bad Request response. |

**Return Type**

`SdkGitConnectionPullRequestList`

**Example Usage Code Snippet**

```typescript
import { PostmanApi, SdkGitConnectionPrStatus } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const sdkGitConnectionPrStatus = SdkGitConnectionPrStatus.OPEN;

  const data = await postmanApi.sdks.getSdkGitConnectionPullRequests(
    '8d4f7c1a-2b3e-4f5a-9c8d-1a2b3c4d5e6f',
    {
      status: sdkGitConnectionPrStatus,
      cursor:
        'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
      limit: 10,
    },
  );

  console.log(data);
})();
```
