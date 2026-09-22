# ContextGraphService

A list of all methods in the `ContextGraphService` service. Click on the method name to view detailed information about that method.

| Methods                                         | Description                                                                                                                                                                                                                                                                                                                                                            |
| :---------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [submitContextGraphAsk](#submitcontextgraphask) | Submits a natural-language question about your team's Context Graph. Asks are asynchronous. On success, this returns an HTTP `202 Accepted` response with the ask's `askId`. Send a request to the GET `/context-graph/asks/{askId}` endpoint to poll the ask for its status and, once it completes, its result. **Note:** Postman derives the team from your API key. |
| [getContextGraphAsk](#getcontextgraphask)       | Gets a submitted ask's status and, once the ask completes, its result. Poll this endpoint after submitting an ask. The `status` property is `pending` or `running` while the ask is in progress, and `completed` or `failed` once it reaches a terminal state. The `result` property is only present once `status` is `completed`.                                     |

## submitContextGraphAsk

Submits a natural-language question about your team's Context Graph. Asks are asynchronous. On success, this returns an HTTP `202 Accepted` response with the ask's `askId`. Send a request to the GET `/context-graph/asks/{askId}` endpoint to poll the ask for its status and, once it completes, its result. **Note:** Postman derives the team from your API key.

- HTTP Method: `POST`
- Endpoint: `/context-graph/asks`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [SubmitContextGraphAsk](../models/SubmitContextGraphAsk.md) | ✅       | The request body. |

**Return Type**

`SubmitContextGraphAskResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApi, SubmitContextGraphAsk } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const submitContextGraphAsk: SubmitContextGraphAsk = {
    query: 'What endpoints does authentication-service expose?',
    includeAnswer: true,
    maxSteps: 8,
  };

  const data = await postmanApi.contextGraph.submitContextGraphAsk(submitContextGraphAsk);

  console.log(data);
})();
```

## getContextGraphAsk

Gets a submitted ask's status and, once the ask completes, its result. Poll this endpoint after submitting an ask. The `status` property is `pending` or `running` while the ask is in progress, and `completed` or `failed` once it reaches a terminal state. The `result` property is only present once `status` is `completed`.

- HTTP Method: `GET`
- Endpoint: `/context-graph/asks/{askId}`

**Parameters**

| Name  | Type   | Required | Description   |
| :---- | :----- | :------- | :------------ |
| askId | string | ✅       | The ask's ID. |

**Return Type**

`GetContextGraphAskResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.contextGraph.getContextGraphAsk(
    '01a03dd2-114a-766f-820b-4209e4fc78d2',
  );

  console.log(data);
})();
```
