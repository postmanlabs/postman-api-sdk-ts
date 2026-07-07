# CommentsService

A list of all methods in the `CommentsService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :-------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [resolveCommentThread](#resolvecommentthread) | Resolves a comment and any associated replies. On success, this returns an HTTP `204 No Content` response. Comment thread IDs return in the GET `/comments` response for [collections](https://www.postman.com/postman/workspace/postman-public-workspace/request/12959542-a6582e0a-9382-4760-8b91-53a8aa6cb8d7) and [collection items](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-efeda219-66e1-474c-a83b-253d15723bf7). |

## resolveCommentThread

Resolves a comment and any associated replies. On success, this returns an HTTP `204 No Content` response. Comment thread IDs return in the GET `/comments` response for [collections](https://www.postman.com/postman/workspace/postman-public-workspace/request/12959542-a6582e0a-9382-4760-8b91-53a8aa6cb8d7) and [collection items](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-efeda219-66e1-474c-a83b-253d15723bf7).

- HTTP Method: `POST`
- Endpoint: `/comments-resolutions/{threadId}`

**Parameters**

| Name     | Type   | Required | Description              |
| :------- | :----- | :------- | :----------------------- |
| threadId | number | ✅       | The comment's thread ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.comments.resolveCommentThread(34567);

  console.log(data);
})();
```
