# CollectionRequestsService

A list of all methods in the `CollectionRequestsService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description                                                                                                                                                                                |
| :-------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getRequestComments](#getrequestcomments)     | Gets all comments left by users in a request.                                                                                                                                              |
| [createRequestComment](#createrequestcomment) | Creates a comment on a request. To create a reply on an existing comment, include the `threadId` property in the request body. **Note:** This endpoint accepts a max of 10,000 characters. |
| [updateRequestComment](#updaterequestcomment) | Updates a comment on a request. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                                |
| [deleteRequestComment](#deleterequestcomment) | Deletes a comment from a request. On success, this returns an HTTP `204 No Content` response. **Note:** Deleting the first comment of a thread deletes all the comments in the thread.     |

## getRequestComments

Gets all comments left by users in a request.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/requests/{requestId}/comments`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |
| requestId    | string | ✅       | The request's unique ID.    |

**Return Type**

`CommentResponseObject`

**Example Usage Code Snippet**

```typescript
import { PostmanPostmanApiSdk } from 'postman-postman-api-sdk';

(async () => {
  const postmanPostmanApiSdk = new PostmanPostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanPostmanApiSdk.collectionRequests.getRequestComments(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-c82dd02c-4870-4907-8fcb-593a876cf05b',
  );

  console.log(data);
})();
```

## createRequestComment

Creates a comment on a request. To create a reply on an existing comment, include the `threadId` property in the request body. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionId}/requests/{requestId}/comments`

**Parameters**

| Name         | Type                                        | Required | Description                 |
| :----------- | :------------------------------------------ | :------- | :-------------------------- |
| body         | [CommentCreate](../models/CommentCreate.md) | ✅       | The request body.           |
| collectionId | string                                      | ✅       | The collection's unique ID. |
| requestId    | string                                      | ✅       | The request's unique ID.    |

**Return Type**

`CommentUpdatedCreatedObject`

**Example Usage Code Snippet**

```typescript
import {
  CommentCreate,
  PostmanPostmanApiSdk,
  TaggedUsers,
  UserName,
} from 'postman-postman-api-sdk';

(async () => {
  const postmanPostmanApiSdk = new PostmanPostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const userNameType = 'user';

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

  const data = await postmanPostmanApiSdk.collectionRequests.createRequestComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-c82dd02c-4870-4907-8fcb-593a876cf05b',
    commentCreate,
  );

  console.log(data);
})();
```

## updateRequestComment

Updates a comment on a request. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/requests/{requestId}/comments/{commentId}`

**Parameters**

| Name         | Type                                        | Required | Description                 |
| :----------- | :------------------------------------------ | :------- | :-------------------------- |
| body         | [CommentUpdate](../models/CommentUpdate.md) | ✅       | The request body.           |
| collectionId | string                                      | ✅       | The collection's unique ID. |
| requestId    | string                                      | ✅       | The request's unique ID.    |
| commentId    | number                                      | ✅       | The comment's ID.           |

**Return Type**

`CommentUpdatedCreatedObject`

**Example Usage Code Snippet**

```typescript
import {
  CommentUpdate,
  PostmanPostmanApiSdk,
  TaggedUsers,
  UserName,
} from 'postman-postman-api-sdk';

(async () => {
  const postmanPostmanApiSdk = new PostmanPostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const userNameType = 'user';

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

  const data = await postmanPostmanApiSdk.collectionRequests.updateRequestComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-c82dd02c-4870-4907-8fcb-593a876cf05b',
    46814,
    commentUpdate,
  );

  console.log(data);
})();
```

## deleteRequestComment

Deletes a comment from a request. On success, this returns an HTTP `204 No Content` response. **Note:** Deleting the first comment of a thread deletes all the comments in the thread.

- HTTP Method: `DELETE`
- Endpoint: `/collections/{collectionId}/requests/{requestId}/comments/{commentId}`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |
| requestId    | string | ✅       | The request's unique ID.    |
| commentId    | number | ✅       | The comment's ID.           |

**Example Usage Code Snippet**

```typescript
import { PostmanPostmanApiSdk } from 'postman-postman-api-sdk';

(async () => {
  const postmanPostmanApiSdk = new PostmanPostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanPostmanApiSdk.collectionRequests.deleteRequestComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-c82dd02c-4870-4907-8fcb-593a876cf05b',
    46814,
  );

  console.log(data);
})();
```
