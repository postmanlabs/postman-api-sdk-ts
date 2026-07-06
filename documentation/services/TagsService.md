# TagsService

A list of all methods in the `TagsService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :-------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getApiTags](#getapitags)                     | Gets all the tags associated with an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [updateApiTags](#updateapitags)               | Updates an API's associated tags. This endpoint replaces all existing tags with those you pass in the request body.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [getCollectionTags](#getcollectiontags)       | Gets all the tags associated with a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [updateCollectionTags](#updatecollectiontags) | Updates a collection's associated tags. This endpoint replaces all existing tags with those you pass in the request body.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [getTaggedEntities](#gettaggedentities)       | Gets Postman elements (entities) by a given tag. Tags enable you to organize and search [workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#tagging-a-workspace), [APIs](https://learning.postman.com/docs/designing-and-developing-your-api/managing-apis/#tagging-apis), and [collections](https://learning.postman.com/docs/collections/using-collections/#tagging-a-collection) that contain shared tags. **Note:** Tagging is available on Postman [**Solo**, **Team**, and **Enterprise** plans](https://www.postman.com/pricing/). |
| [getWorkspaceTags](#getworkspacetags)         | Gets all the tags associated with a workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [updateWorkspaceTags](#updateworkspacetags)   | Updates a workspace's associated tags. This endpoint replaces all existing tags with those you pass in the request body.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## getApiTags

Gets all the tags associated with an API.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/tags`

**Parameters**

| Name  | Type   | Required | Description   |
| :---- | :----- | :------- | :------------ |
| apiId | string | ✅       | The API's ID. |

**Return Type**

`SuccessResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.tags.getApiTags(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
  );

  console.log(data);
})();
```

## updateApiTags

Updates an API's associated tags. This endpoint replaces all existing tags with those you pass in the request body.

- HTTP Method: `PUT`
- Endpoint: `/apis/{apiId}/tags`

**Parameters**

| Name  | Type                                  | Required | Description       |
| :---- | :------------------------------------ | :------- | :---------------- |
| body  | [UpdateTags](../models/UpdateTags.md) | ❌       | The request body. |
| apiId | string                                | ✅       | The API's ID.     |

**Return Type**

`SuccessResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed, UpdateTags, UpdateTagsTags } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const updateTagsTags: UpdateTagsTags = {
    slug: 'needs-review',
  };

  const updateTags: UpdateTags = {
    tags: [updateTagsTags],
  };

  const data = await postmanApiSdkSourceOverlayed.tags.updateApiTags(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    updateTags,
  );

  console.log(data);
})();
```

## getCollectionTags

Gets all the tags associated with a collection.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/tags`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |

**Return Type**

`SuccessResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.tags.getCollectionTags(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

## updateCollectionTags

Updates a collection's associated tags. This endpoint replaces all existing tags with those you pass in the request body.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/tags`

**Parameters**

| Name         | Type                                  | Required | Description                 |
| :----------- | :------------------------------------ | :------- | :-------------------------- |
| body         | [UpdateTags](../models/UpdateTags.md) | ❌       | The request body.           |
| collectionId | string                                | ✅       | The collection's unique ID. |

**Return Type**

`SuccessResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed, UpdateTags, UpdateTagsTags } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const updateTagsTags: UpdateTagsTags = {
    slug: 'needs-review',
  };

  const updateTags: UpdateTags = {
    tags: [updateTagsTags],
  };

  const data = await postmanApiSdkSourceOverlayed.tags.updateCollectionTags(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    updateTags,
  );

  console.log(data);
})();
```

## getTaggedEntities

Gets Postman elements (entities) by a given tag. Tags enable you to organize and search [workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#tagging-a-workspace), [APIs](https://learning.postman.com/docs/designing-and-developing-your-api/managing-apis/#tagging-apis), and [collections](https://learning.postman.com/docs/collections/using-collections/#tagging-a-collection) that contain shared tags. **Note:** Tagging is available on Postman [**Solo**, **Team**, and **Enterprise** plans](https://www.postman.com/pricing/).

- HTTP Method: `GET`
- Endpoint: `/tags/{slug}/entities`

**Parameters**

| Name       | Type                                                  | Required | Description                                                                                                                                       |
| :--------- | :---------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| slug       | string                                                | ✅       | The tag's ID within a team or individual (non-team) user scope.                                                                                   |
| limit      | number                                                | ❌       | The maximum number of tagged elements to return in a single call.                                                                                 |
| direction  | [AscDescDefaultDesc](../models/AscDescDefaultDesc.md) | ❌       | The ascending (`asc`) or descending (`desc`) order to sort the results by, based on the time of the entity's tagging.                             |
| cursor     | string                                                | ❌       | The cursor to get the next set of results in the paginated response. If you pass an invalid value, the API only returns the first set of results. |
| entityType | [TagsEntityType](../models/TagsEntityType.md)         | ❌       | Filter results for the given entity type.                                                                                                         |

**Return Type**

`GetTaggedEntitiesOkResponse`

**Example Usage Code Snippet**

```typescript
import { AscDescDefaultDesc, PostmanApiSdkSourceOverlayed, TagsEntityType } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const ascDescDefaultDesc = AscDescDefaultDesc.ASC;
  const tagsEntityType = TagsEntityType.API;

  const data = await postmanApiSdkSourceOverlayed.tags.getTaggedEntities('needs-review', {
    limit: 2,
    direction: ascDescDefaultDesc,
    cursor: 'eyJpZCI6ODYsImVudGl0eVR5cGUiOiJhcGkifQ==',
    entityType: tagsEntityType,
  });

  console.log(data);
})();
```

## getWorkspaceTags

Gets all the tags associated with a workspace.

- HTTP Method: `GET`
- Endpoint: `/workspaces/{workspaceId}/tags`

**Parameters**

| Name        | Type   | Required | Description         |
| :---------- | :----- | :------- | :------------------ |
| workspaceId | string | ✅       | The workspace's ID. |

**Return Type**

`SuccessResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.tags.getWorkspaceTags(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  );

  console.log(data);
})();
```

## updateWorkspaceTags

Updates a workspace's associated tags. This endpoint replaces all existing tags with those you pass in the request body.

- HTTP Method: `PUT`
- Endpoint: `/workspaces/{workspaceId}/tags`

**Parameters**

| Name        | Type                                  | Required | Description         |
| :---------- | :------------------------------------ | :------- | :------------------ |
| body        | [UpdateTags](../models/UpdateTags.md) | ❌       | The request body.   |
| workspaceId | string                                | ✅       | The workspace's ID. |

**Return Type**

`SuccessResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed, UpdateTags, UpdateTagsTags } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const updateTagsTags: UpdateTagsTags = {
    slug: 'needs-review',
  };

  const updateTags: UpdateTags = {
    tags: [updateTagsTags],
  };

  const data = await postmanApiSdkSourceOverlayed.tags.updateWorkspaceTags(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    updateTags,
  );

  console.log(data);
})();
```
