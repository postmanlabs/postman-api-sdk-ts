# CollectionResponsesService

A list of all methods in the `CollectionResponsesService` service. Click on the method name to view detailed information about that method.

| Methods                                         | Description                                                                                                                                                                                 |
| :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [getResponseComments](#getresponsecomments)     | Gets all comments left by users in a response.                                                                                                                                              |
| [createResponseComment](#createresponsecomment) | Creates a comment on a response. To create a reply on an existing comment, include the `threadId` property in the request body. **Note:** This endpoint accepts a max of 10,000 characters. |
| [updateResponseComment](#updateresponsecomment) | Updates a comment on a response. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                                |
| [deleteResponseComment](#deleteresponsecomment) | Deletes a comment from a response. On success, this returns an HTTP `204 No Content` response. **Note:** Deleting the first comment of a thread deletes all the comments in the thread.     |

## getResponseComments

Gets all comments left by users in a response.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/responses/{responseId}/comments`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |
| responseId   | string | ✅       | The response's unique ID.   |

**Return Type**

`CommentResponseObject`

**Example Usage Code Snippet**

```typescript
import { PostmanPostmanApiSdk } from 'postman-postman-api-sdk';

(async () => {
  const postmanPostmanApiSdk = new PostmanPostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanPostmanApiSdk.collectionResponses.getResponseComments(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-cc364734-7dfd-4bfc-897d-be763dcdbb07',
  );

  console.log(data);
})();
```

## createResponseComment

Creates a comment on a response. To create a reply on an existing comment, include the `threadId` property in the request body. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionId}/responses/{responseId}/comments`

**Parameters**

| Name         | Type                                        | Required | Description                 |
| :----------- | :------------------------------------------ | :------- | :-------------------------- |
| body         | [CommentCreate](../models/CommentCreate.md) | ✅       | The request body.           |
| collectionId | string                                      | ✅       | The collection's unique ID. |
| responseId   | string                                      | ✅       | The response's unique ID.   |

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

  const data = await postmanPostmanApiSdk.collectionResponses.createResponseComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-cc364734-7dfd-4bfc-897d-be763dcdbb07',
    commentCreate,
  );

  console.log(data);
})();
```

## updateResponseComment

Updates a comment on a response. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/responses/{responseId}/comments/{commentId}`

**Parameters**

| Name         | Type                                        | Required | Description                 |
| :----------- | :------------------------------------------ | :------- | :-------------------------- |
| body         | [CommentUpdate](../models/CommentUpdate.md) | ✅       | The request body.           |
| collectionId | string                                      | ✅       | The collection's unique ID. |
| responseId   | string                                      | ✅       | The response's unique ID.   |
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

  const data = await postmanPostmanApiSdk.collectionResponses.updateResponseComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-cc364734-7dfd-4bfc-897d-be763dcdbb07',
    46814,
    commentUpdate,
  );

  console.log(data);
})();
```

## deleteResponseComment

Deletes a comment from a response. On success, this returns an HTTP `204 No Content` response. **Note:** Deleting the first comment of a thread deletes all the comments in the thread.

- HTTP Method: `DELETE`
- Endpoint: `/collections/{collectionId}/responses/{responseId}/comments/{commentId}`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |
| responseId   | string | ✅       | The response's unique ID.   |
| commentId    | number | ✅       | The comment's ID.           |

**Example Usage Code Snippet**

```typescript
import { PostmanPostmanApiSdk } from 'postman-postman-api-sdk';

(async () => {
  const postmanPostmanApiSdk = new PostmanPostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanPostmanApiSdk.collectionResponses.deleteResponseComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-cc364734-7dfd-4bfc-897d-be763dcdbb07',
    46814,
  );

  console.log(data);
})();
```
