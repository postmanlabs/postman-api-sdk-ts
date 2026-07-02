# PrivateApiNetworkService

A list of all methods in the `PrivateApiNetworkService` service. Click on the method name to view detailed information about that method.

| Methods                                                                 | Description                                                                                                                                                                                                                                                                                        |
| :---------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [listPrivateNetworkWorkspaces](#listprivatenetworkworkspaces)           | Gets information workspaces added to your team's [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/).                                                                                                                                        |
| [addWorkspaceToPrivateNetwork](#addworkspacetoprivatenetwork)           | Publishes a workspace in your team's [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/).                                                                                                                                                    |
| [updatePanElementOrFolder](#updatepanelementorfolder)                   | **This endpoint is deprecated.**                                                                                                                                                                                                                                                                   |
| [removeWorkspaceFromPrivateNetwork](#removeworkspacefromprivatenetwork) | Removes a workspace from your team's [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). **Note:** Removing a workspace does not delete it. It only removes it from the Private API Network folder.                                         |
| [listPrivateNetworkAddRequests](#listprivatenetworkaddrequests)         | Gets all requests to add workspaces to your team's [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/).                                                                                                                                      |
| [respondPrivateNetworkAddRequest](#respondprivatenetworkaddrequest)     | Responds to a user's request to add a workspace to your team's [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). Only managers can approve or deny a request. Once approved, the workspace will appear in the team's Private API Network. |

## listPrivateNetworkWorkspaces

Gets information workspaces added to your team's [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/).

- HTTP Method: `GET`
- Endpoint: `/network/private`

**Parameters**

| Name           | Type                                                      | Required | Description                                                                                                                                                                              |
| :------------- | :-------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type           | [ElementTypeQuery](../models/ElementTypeQuery.md)         | ❌       | The `workspace` value.                                                                                                                                                                   |
| name           | string                                                    | ❌       | Return only workspaces whose name includes the given value. Matching is not case-sensitive.                                                                                              |
| summary        | string                                                    | ❌       | Return only workspaces whose summary includes the given value. Matching is not case-sensitive.                                                                                           |
| description    | string                                                    | ❌       | Return only workspaces whose description includes the given value. Matching is not case-sensitive.                                                                                       |
| since          | string                                                    | ❌       | Return only results created since the given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be later than the `until` value.    |
| until          | string                                                    | ❌       | Return only results created until this given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be earlier than the `since` value. |
| addedBy        | number                                                    | ❌       | Return only workspaces published by the given user ID.                                                                                                                                   |
| sort           | [SortCreatedUpdatedAt](../models/SortCreatedUpdatedAt.md) | ❌       | Sort the results by the given value. If you use this query parameter, you must also use the `direction` parameter.                                                                       |
| direction      | [AscDesc](../models/AscDesc.md)                           | ❌       | Sort in ascending (`asc`) or descending (`desc`) order. Matching is not case-sensitive. If you use this query parameter, you must also use the `sort` parameter.                         |
| createdBy      | number                                                    | ❌       | Return only results created by the given user ID.                                                                                                                                        |
| offset         | number                                                    | ❌       | The zero-based offset of the first item to return.                                                                                                                                       |
| limit          | number                                                    | ❌       | The maximum number of results to return. If the value exceeds the maximum value of `1000`, then the system uses the `1000` value.                                                        |
| parentFolderId | number                                                    | ❌       | This parameter is deprecated.                                                                                                                                                            |

**Return Type**

`ListPrivateNetworkWorkspacesOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  AscDesc,
  ElementTypeQuery,
  PostmanApiSdkSourceOverlayed,
  SortCreatedUpdatedAt,
} from '@@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const elementTypeQuery = ElementTypeQuery.WORKSPACE;
  const sortCreatedUpdatedAt = SortCreatedUpdatedAt.CREATED_AT;
  const ascDesc = AscDesc.ASC;

  const data = await postmanApiSdkSourceOverlayed.privateApiNetwork.listPrivateNetworkWorkspaces({
    type: elementTypeQuery,
    name: 'billing',
    summary: 'payments',
    description: 'payments',
    since: '2022-06-01T00:00:00.000Z',
    until: '2022-06-15T00:00:00.000Z',
    addedBy: 12345678,
    sort: sortCreatedUpdatedAt,
    direction: ascDesc,
    createdBy: 12345678,
    offset: 5,
    limit: 10,
  });

  console.log(data);
})();
```

## addWorkspaceToPrivateNetwork

Publishes a workspace in your team's [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/).

- HTTP Method: `POST`
- Endpoint: `/network/private`

**Parameters**

| Name | Type                                      | Required | Description       |
| :--- | :---------------------------------------- | :------- | :---------------- |
| body | [AddWorkspace](../models/AddWorkspace.md) | ✅       | The request body. |

**Return Type**

`ElementCreated`

**Example Usage Code Snippet**

```typescript
import {
  AddWorkspace,
  AddWorkspaceWorkspace,
  PostmanApiSdkSourceOverlayed,
} from '@@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const addWorkspaceWorkspace: AddWorkspaceWorkspace = {
    id: '5360b75f-447e-467c-9299-12fd6c92450d',
  };

  const addWorkspace: AddWorkspace = {
    workspace: addWorkspaceWorkspace,
  };

  const data =
    await postmanApiSdkSourceOverlayed.privateApiNetwork.addWorkspaceToPrivateNetwork(addWorkspace);

  console.log(data);
})();
```

## updatePanElementOrFolder

**This endpoint is deprecated.**

- HTTP Method: `PUT`
- Endpoint: `/network/private/workspace/{workspaceId}`

**Parameters**

| Name        | Type                                                                            | Required | Description         |
| :---------- | :------------------------------------------------------------------------------ | :------- | :------------------ |
| body        | [UpdatePanElementOrFolderRequest](../models/UpdatePanElementOrFolderRequest.md) | ✅       | The request body.   |
| workspaceId | string                                                                          | ✅       | The workspace's ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed, UpdatePanElementOrFolderRequest } from '@@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const updatePanElementOrFolderRequest: UpdatePanElementOrFolderRequest = {};

  const data = await postmanApiSdkSourceOverlayed.privateApiNetwork.updatePanElementOrFolder(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    updatePanElementOrFolderRequest,
  );

  console.log(data);
})();
```

## removeWorkspaceFromPrivateNetwork

Removes a workspace from your team's [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). **Note:** Removing a workspace does not delete it. It only removes it from the Private API Network folder.

- HTTP Method: `DELETE`
- Endpoint: `/network/private/workspace/{workspaceId}`

**Parameters**

| Name        | Type   | Required | Description         |
| :---------- | :----- | :------- | :------------------ |
| workspaceId | string | ✅       | The workspace's ID. |

**Return Type**

`RemoveWorkspaceFromPrivateNetworkOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data =
    await postmanApiSdkSourceOverlayed.privateApiNetwork.removeWorkspaceFromPrivateNetwork(
      '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    );

  console.log(data);
})();
```

## listPrivateNetworkAddRequests

Gets all requests to add workspaces to your team's [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/).

- HTTP Method: `GET`
- Endpoint: `/network/private/network-entity/request/all`

**Parameters**

| Name        | Type                                                      | Required | Description                                                                                                                                                                                                                                                                     |
| :---------- | :-------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| since       | string                                                    | ❌       | Return only results created since the given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be later than the `until` value. To use `time-numoffset` format, you must use `%2B` URL-encoding for the `+` character.    |
| until       | string                                                    | ❌       | Return only results created until this given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be earlier than the `since` value. To use `time-numoffset` format, you must use `%2B` URL-encoding for the `+` character. |
| requestedBy | number                                                    | ❌       | Return a user's requests by their user ID.                                                                                                                                                                                                                                      |
| type        | [ElementTypeQuery](../models/ElementTypeQuery.md)         | ❌       | The `workspace` value.                                                                                                                                                                                                                                                          |
| status      | [PanRequestStatus](../models/PanRequestStatus.md)         | ❌       | Filter by the request status.                                                                                                                                                                                                                                                   |
| name        | string                                                    | ❌       | Return only workspaces whose name includes the given value. Matching is not case-sensitive.                                                                                                                                                                                     |
| sort        | [SortCreatedUpdatedAt](../models/SortCreatedUpdatedAt.md) | ❌       | Sort the results by the given value. If you use this query parameter, you must also use the `direction` parameter.                                                                                                                                                              |
| direction   | [AscDesc](../models/AscDesc.md)                           | ❌       | Sort in ascending (`asc`) or descending (`desc`) order. Matching is not case-sensitive. If you use this query parameter, you must also use the `sort` parameter.                                                                                                                |
| offset      | number                                                    | ❌       | The zero-based offset of the first item to return.                                                                                                                                                                                                                              |
| limit       | number                                                    | ❌       | The maximum number of results to return. If the value exceeds the maximum value of `1000`, then the system uses the `1000` value.                                                                                                                                               |

**Return Type**

`ListPrivateNetworkAddRequestsOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  AscDesc,
  ElementTypeQuery,
  PanRequestStatus,
  PostmanApiSdkSourceOverlayed,
  SortCreatedUpdatedAt,
} from '@@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const elementTypeQuery = ElementTypeQuery.WORKSPACE;
  const panRequestStatus = PanRequestStatus.PENDING;
  const sortCreatedUpdatedAt = SortCreatedUpdatedAt.CREATED_AT;
  const ascDesc = AscDesc.ASC;

  const data = await postmanApiSdkSourceOverlayed.privateApiNetwork.listPrivateNetworkAddRequests({
    since: '2022-06-01T00:00:00.000Z',
    until: '2022-06-15T00:00:00.000Z',
    requestedBy: 12345678,
    type: elementTypeQuery,
    status: panRequestStatus,
    name: 'billing',
    sort: sortCreatedUpdatedAt,
    direction: ascDesc,
    offset: 5,
    limit: 10,
  });

  console.log(data);
})();
```

## respondPrivateNetworkAddRequest

Responds to a user's request to add a workspace to your team's [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). Only managers can approve or deny a request. Once approved, the workspace will appear in the team's Private API Network.

- HTTP Method: `PUT`
- Endpoint: `/network/private/network-entity/request/{requestId}`

**Parameters**

| Name      | Type                                                                            | Required | Description       |
| :-------- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body      | [RespondPanElementAddRequestBody](../models/RespondPanElementAddRequestBody.md) | ❌       | The request body. |
| requestId | number                                                                          | ✅       | The request's ID. |

**Return Type**

`RespondPanElementAddRequest`

**Example Usage Code Snippet**

```typescript
import {
  PostmanApiSdkSourceOverlayed,
  RespondPanElementAddRequestBody,
  RespondPanElementAddRequestBodyResponse1,
  RespondPanElementAddRequestBodyStatus,
} from '@@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const respondPanElementAddRequestBodyStatus = RespondPanElementAddRequestBodyStatus.DENIED;

  const respondPanElementAddRequestBodyResponse1: RespondPanElementAddRequestBodyResponse1 = {
    message: 'The requested collection has a lot of governance violations. Please fix them.',
  };

  const respondPanElementAddRequestBody: RespondPanElementAddRequestBody = {
    status: respondPanElementAddRequestBodyStatus,
    response: respondPanElementAddRequestBodyResponse1,
  };

  const data = await postmanApiSdkSourceOverlayed.privateApiNetwork.respondPrivateNetworkAddRequest(
    232,
    respondPanElementAddRequestBody,
  );

  console.log(data);
})();
```
