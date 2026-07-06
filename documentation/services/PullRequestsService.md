# PullRequestsService

A list of all methods in the `PullRequestsService` service. Click on the method name to view detailed information about that method.

| Methods                                 | Description                                                                                                                                                                          |
| :-------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getPullRequest](#getpullrequest)       | Gets information about a pull request, such as the source and destination details, who reviewed the pull request, the merge's current status, and whether the element is accessible. |
| [updatePullRequest](#updatepullrequest) | Updates an open pull request.                                                                                                                                                        |
| [reviewPullRequest](#reviewpullrequest) | Updates the [review](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/) status of a pull request.                            |

## getPullRequest

Gets information about a pull request, such as the source and destination details, who reviewed the pull request, the merge's current status, and whether the element is accessible.

- HTTP Method: `GET`
- Endpoint: `/pull-requests/{pullRequestId}`

**Parameters**

| Name          | Type   | Required | Description            |
| :------------ | :----- | :------- | :--------------------- |
| pullRequestId | string | ✅       | The pull request's ID. |

**Return Type**

`GetPullRequestOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.pullRequests.getPullRequest(
    '4e1a6609-1a29-4037-a411-89ecc14c6cd8',
  );

  console.log(data);
})();
```

## updatePullRequest

Updates an open pull request.

- HTTP Method: `PUT`
- Endpoint: `/pull-requests/{pullRequestId}`

**Parameters**

| Name          | Type                                                | Required | Description            |
| :------------ | :-------------------------------------------------- | :------- | :--------------------- |
| body          | [UpdatePullRequest](../models/UpdatePullRequest.md) | ❌       | The request body.      |
| pullRequestId | string                                              | ✅       | The pull request's ID. |

**Return Type**

`PullRequestUpdated`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed, UpdatePullRequest } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const updatePullRequest: UpdatePullRequest = {
    title: 'Updated PR title',
    description: 'Updated description of the pull request.',
    reviewers: ['12345678'],
  };

  const data = await postmanApiSdkSourceOverlayed.pullRequests.updatePullRequest(
    '4e1a6609-1a29-4037-a411-89ecc14c6cd8',
    updatePullRequest,
  );

  console.log(data);
})();
```

## reviewPullRequest

Updates the [review](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/) status of a pull request.

- HTTP Method: `POST`
- Endpoint: `/pull-requests/{pullRequestId}/tasks`

**Parameters**

| Name          | Type                                                | Required | Description            |
| :------------ | :-------------------------------------------------- | :------- | :--------------------- |
| body          | [ReviewPullRequest](../models/ReviewPullRequest.md) | ❌       | The request body.      |
| pullRequestId | string                                              | ✅       | The pull request's ID. |

**Return Type**

`ReviewPullRequestOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  PostmanApiSdkSourceOverlayed,
  ReviewPullRequest,
  ReviewPullRequestAction,
} from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const reviewPullRequestAction = ReviewPullRequestAction.APPROVE;

  const reviewPullRequest: ReviewPullRequest = {
    action: reviewPullRequestAction,
    comment: 'Missing descriptions in requests',
  };

  const data = await postmanApiSdkSourceOverlayed.pullRequests.reviewPullRequest(
    '4e1a6609-1a29-4037-a411-89ecc14c6cd8',
    reviewPullRequest,
  );

  console.log(data);
})();
```
