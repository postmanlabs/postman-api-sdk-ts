# EnvironmentsService

A list of all methods in the `EnvironmentsService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :-------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getEnvironments](#getenvironments)           | Gets information about all of your [environments](https://learning.postman.com/docs/sending-requests/managing-environments/).                                                                                                                                                                                                                                                                                                                                                                                                |
| [createEnvironment](#createenvironment)       | Creates an environment. **Note:** - The request body size cannot exceed the maximum allowed size of 30MB. - If you receive an HTTP `411 Length Required` error response, manually pass the `Content-Length` header and its value in the request header. - If you do not include the `workspace` query parameter, the system creates the environment in the oldest personal Internal workspace you own.                                                                                                                       |
| [getEnvironment](#getenvironment)             | Gets information about an environment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [putEnvironment](#putenvironment)             | Replaces all the contents of an environment with the given information. **Note:** - The request body size cannot exceed the maximum allowed size of 30MB. - If you receive an HTTP `411 Length Required` error response, manually pass the `Content-Length` header and its value in the request header.                                                                                                                                                                                                                      |
| [patchEnvironment](#patchenvironment)         | Updates specific environment properties, such as its name and variables. **Note:** - You can only perform one type of operation at a time. For example, you cannot perform an `add` and `replace` operation in the same call. - The request body size cannot exceed the maximum allowed size of 30MB. - If you receive an HTTP `411 Length Required` error response, manually pass the `Content-Length` header and its value in the request header. - To add a description to an existing variable, use the `add` operation. |
| [deleteEnvironment](#deleteenvironment)       | Deletes an environment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [getEnvironmentForks](#getenvironmentforks)   | Gets all of an environment's forked environments.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [forkEnvironment](#forkenvironment)           | Creates a [fork](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/) of an existing environment.                                                                                                                                                                                                                                                                                                                                                                             |
| [mergeEnvironmentFork](#mergeenvironmentfork) | [Merges](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#merge-changes-from-a-fork) a forked environment back into its parent environment.                                                                                                                                                                                                                                                                                                                                |
| [pullEnvironment](#pullenvironment)           | [Pulls](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#pull-updates-from-a-parent-element) the changes from a parent (source) environment into the forked environment.                                                                                                                                                                                                                                                                                                   |

## getEnvironments

Gets information about all of your [environments](https://learning.postman.com/docs/sending-requests/managing-environments/).

- HTTP Method: `GET`
- Endpoint: `/environments`

**Parameters**

| Name      | Type   | Required | Description         |
| :-------- | :----- | :------- | :------------------ |
| workspace | string | ❌       | The workspace's ID. |

**Return Type**

`GetEnvironmentsOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.environments.getEnvironments({
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

## createEnvironment

Creates an environment. **Note:** - The request body size cannot exceed the maximum allowed size of 30MB. - If you receive an HTTP `411 Length Required` error response, manually pass the `Content-Length` header and its value in the request header. - If you do not include the `workspace` query parameter, the system creates the environment in the oldest personal Internal workspace you own.

- HTTP Method: `POST`
- Endpoint: `/environments`

**Parameters**

| Name      | Type                                                | Required | Description         |
| :-------- | :-------------------------------------------------- | :------- | :------------------ |
| body      | [CreateEnvironment](../models/CreateEnvironment.md) | ❌       | The request body.   |
| workspace | string                                              | ✅       | The workspace's ID. |

**Return Type**

`EnvironmentCreated`

**Example Usage Code Snippet**

```typescript
import {
  CreateEnvironment,
  CreateEnvironmentEnvironment,
  EnvironmentVariables,
  PostmanApiSdkSourceOverlayed,
} from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const environmentVariablesType = 'secret';

  const environmentVariables: EnvironmentVariables = {
    enabled: true,
    key: 'collectionId',
    value: '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    type: environmentVariablesType,
    description: "The collection's ID.",
  };

  const createEnvironmentEnvironment: CreateEnvironmentEnvironment = {
    name: 'Test Environment',
    values: [environmentVariables],
  };

  const createEnvironment: CreateEnvironment = {
    environment: createEnvironmentEnvironment,
  };

  const data = await postmanApiSdkSourceOverlayed.environments.createEnvironment(
    createEnvironment,
    {
      workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    },
  );

  console.log(data);
})();
```

## getEnvironment

Gets information about an environment.

- HTTP Method: `GET`
- Endpoint: `/environments/{environmentId}`

**Parameters**

| Name          | Type   | Required | Description           |
| :------------ | :----- | :------- | :-------------------- |
| environmentId | string | ✅       | The environment's ID. |

**Return Type**

`GetEnvironmentOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.environments.getEnvironment(
    '5daabc50-8451-43f6-922d-96b403b4f28e',
  );

  console.log(data);
})();
```

## putEnvironment

Replaces all the contents of an environment with the given information. **Note:** - The request body size cannot exceed the maximum allowed size of 30MB. - If you receive an HTTP `411 Length Required` error response, manually pass the `Content-Length` header and its value in the request header.

- HTTP Method: `PUT`
- Endpoint: `/environments/{environmentId}`

**Parameters**

| Name          | Type                                                          | Required | Description           |
| :------------ | :------------------------------------------------------------ | :------- | :-------------------- |
| body          | [ReplaceEnvironmentData](../models/ReplaceEnvironmentData.md) | ❌       | The request body.     |
| environmentId | string                                                        | ✅       | The environment's ID. |

**Return Type**

`PutEnvironmentOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  EnvironmentVariables,
  PostmanApiSdkSourceOverlayed,
  ReplaceEnvironmentData,
  ReplaceEnvironmentDataEnvironment,
} from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const environmentVariablesType = 'secret';

  const environmentVariables: EnvironmentVariables = {
    enabled: true,
    key: 'collectionId',
    value: '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    type: environmentVariablesType,
    description: "The collection's ID.",
  };

  const replaceEnvironmentDataEnvironment: ReplaceEnvironmentDataEnvironment = {
    name: 'Test Environment',
    values: [environmentVariables],
  };

  const replaceEnvironmentData: ReplaceEnvironmentData = {
    environment: replaceEnvironmentDataEnvironment,
  };

  const data = await postmanApiSdkSourceOverlayed.environments.putEnvironment(
    '5daabc50-8451-43f6-922d-96b403b4f28e',
    replaceEnvironmentData,
  );

  console.log(data);
})();
```

## patchEnvironment

Updates specific environment properties, such as its name and variables. **Note:** - You can only perform one type of operation at a time. For example, you cannot perform an `add` and `replace` operation in the same call. - The request body size cannot exceed the maximum allowed size of 30MB. - If you receive an HTTP `411 Length Required` error response, manually pass the `Content-Length` header and its value in the request header. - To add a description to an existing variable, use the `add` operation.

- HTTP Method: `PATCH`
- Endpoint: `/environments/{environmentId}`

**Parameters**

| Name          | Type                                              | Required | Description           |
| :------------ | :------------------------------------------------ | :------- | :-------------------- |
| body          | [PatchEnvironment](../models/PatchEnvironment.md) | ❌       | The request body.     |
| environmentId | string                                            | ✅       | The environment's ID. |

**Return Type**

`PatchEnvironmentOkResponse`

**Example Usage Code Snippet**

```typescript
import { PatchEnvironment, PostmanApiSdkSourceOverlayed } from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const patchEnvironment = [patchEnvironmentAdd];

  const data = await postmanApiSdkSourceOverlayed.environments.patchEnvironment(
    '5daabc50-8451-43f6-922d-96b403b4f28e',
    patchEnvironment,
  );

  console.log(data);
})();
```

## deleteEnvironment

Deletes an environment.

- HTTP Method: `DELETE`
- Endpoint: `/environments/{environmentId}`

**Parameters**

| Name          | Type   | Required | Description           |
| :------------ | :----- | :------- | :-------------------- |
| environmentId | string | ✅       | The environment's ID. |

**Return Type**

`EnvironmentDeleted`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.environments.deleteEnvironment(
    '5daabc50-8451-43f6-922d-96b403b4f28e',
  );

  console.log(data);
})();
```

## getEnvironmentForks

Gets all of an environment's forked environments.

- HTTP Method: `GET`
- Endpoint: `/environments/{environmentId}/forks`

**Parameters**

| Name          | Type                                            | Required | Description                                                                                                                                |
| :------------ | :---------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| environmentId | string                                          | ✅       | The environment's unique ID.                                                                                                               |
| cursor        | string                                          | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| direction     | [AscDesc](../models/AscDesc.md)                 | ❌       | Sort results in ascending (`asc`) or descending (`desc`) order.                                                                            |
| limit         | number                                          | ❌       | The maximum number of rows to return in the response.                                                                                      |
| sort          | [SortByCreatedAt](../models/SortByCreatedAt.md) | ❌       | Sort the results by the date and time of creation.                                                                                         |

**Return Type**

`GetEnvironmentForksOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const ascDesc = 'asc';
  const sortByCreatedAt = 'createdAt';

  const data = await postmanApiSdkSourceOverlayed.environments.getEnvironmentForks(
    '12345678-5daabc50-8451-43f6-922d-96b403b4f28e',
    {
      cursor:
        'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
      direction: ascDesc,
      limit: 10,
      sort: sortByCreatedAt,
    },
  );

  console.log(data);
})();
```

## forkEnvironment

Creates a [fork](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/) of an existing environment.

- HTTP Method: `POST`
- Endpoint: `/environments/{environmentId}/forks`

**Parameters**

| Name          | Type                                            | Required | Description                  |
| :------------ | :---------------------------------------------- | :------- | :--------------------------- |
| body          | [ForkEnvironment](../models/ForkEnvironment.md) | ❌       | The request body.            |
| environmentId | string                                          | ✅       | The environment's unique ID. |
| workspaceId   | string                                          | ✅       | The workspace's ID.          |

**Return Type**

`ForkEnvironmentOkResponse`

**Example Usage Code Snippet**

```typescript
import { ForkEnvironment, PostmanApiSdkSourceOverlayed } from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const forkEnvironment: ForkEnvironment = {
    forkName: 'My fork',
  };

  const data = await postmanApiSdkSourceOverlayed.environments.forkEnvironment(
    '12345678-5daabc50-8451-43f6-922d-96b403b4f28e',
    forkEnvironment,
    {
      workspaceId: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    },
  );

  console.log(data);
})();
```

## mergeEnvironmentFork

[Merges](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#merge-changes-from-a-fork) a forked environment back into its parent environment.

- HTTP Method: `POST`
- Endpoint: `/environments/{environmentId}/merges`

**Parameters**

| Name          | Type                                                      | Required | Description                  |
| :------------ | :-------------------------------------------------------- | :------- | :--------------------------- |
| body          | [MergeEnvironmentFork](../models/MergeEnvironmentFork.md) | ❌       | The request body.            |
| environmentId | string                                                    | ✅       | The environment's unique ID. |

**Return Type**

`MergeEnvironmentForkOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  MergeEnvironmentFork,
  PostmanApiSdkSourceOverlayed,
} from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const mergeEnvironmentFork: MergeEnvironmentFork = {
    source: '12345678-d9c7dc8f-904e-4bba-99b5-4d490aae1957',
    deleteSource: true,
  };

  const data = await postmanApiSdkSourceOverlayed.environments.mergeEnvironmentFork(
    '12345678-5daabc50-8451-43f6-922d-96b403b4f28e',
    mergeEnvironmentFork,
  );

  console.log(data);
})();
```

## pullEnvironment

[Pulls](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#pull-updates-from-a-parent-element) the changes from a parent (source) environment into the forked environment.

- HTTP Method: `POST`
- Endpoint: `/environments/{environmentUid}/pulls`

**Parameters**

| Name           | Type                                                                  | Required | Description                              |
| :------------- | :-------------------------------------------------------------------- | :------- | :--------------------------------------- |
| body           | [PullEnvironmentForkChanges](../models/PullEnvironmentForkChanges.md) | ❌       | The request body.                        |
| environmentUid | string                                                                | ✅       | The destination environment's unique ID. |

**Return Type**

`PullEnvironmentOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  PostmanApiSdkSourceOverlayed,
  PullEnvironmentForkChanges,
} from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const pullEnvironmentForkChanges: PullEnvironmentForkChanges = {
    source: '12345678-d9c7dc8f-904e-4bba-99b5-4d490aae1957',
  };

  const data = await postmanApiSdkSourceOverlayed.environments.pullEnvironment(
    '12345678-5daabc50-8451-43f6-922d-96b403b4f28e',
    pullEnvironmentForkChanges,
  );

  console.log(data);
})();
```
