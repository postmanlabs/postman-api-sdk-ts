# UsersService

A list of all methods in the `UsersService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description                                                                                                                                                                                                                                                                                                                                        |
| :-------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getAuthenticatedUser](#getauthenticateduser) | Gets information about the authenticated user. **Note:** - This API returns a different response for users with the [Guest and Partner roles](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles). - The `flow_count` response only returns for users on [Free plans](https://www.postman.com/pricing/). |
| [getTeamUsers](#getteamusers)                 | Gets information about all users on the [Postman team](https://learning.postman.com/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/).                                                                                                                                                                                 |
| [getTeamUser](#getteamuser)                   | Gets information about a user on the Postman team.                                                                                                                                                                                                                                                                                                 |

## getAuthenticatedUser

Gets information about the authenticated user. **Note:** - This API returns a different response for users with the [Guest and Partner roles](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles). - The `flow_count` response only returns for users on [Free plans](https://www.postman.com/pricing/).

- HTTP Method: `GET`
- Endpoint: `/me`

**Return Type**

`GetAuthenticatedUserOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanPostmanApiSdk } from 'postman-postman-api-sdk';

(async () => {
  const postmanPostmanApiSdk = new PostmanPostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanPostmanApiSdk.users.getAuthenticatedUser();

  console.log(data);
})();
```

## getTeamUsers

Gets information about all users on the [Postman team](https://learning.postman.com/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/).

- HTTP Method: `GET`
- Endpoint: `/users`

**Parameters**

| Name    | Type   | Required | Description                                                                                                                                                        |
| :------ | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| groupId | number | ❌       | Filter results by the given [group](https://learning.postman.com/docs/collaborating-in-postman/user-groups/) ID. To get group IDs, use the GET `/groups` endpoint. |

**Return Type**

`TeamUsersInformation`

**Example Usage Code Snippet**

```typescript
import { PostmanPostmanApiSdk } from 'postman-postman-api-sdk';

(async () => {
  const postmanPostmanApiSdk = new PostmanPostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanPostmanApiSdk.users.getTeamUsers({
    groupId: 123,
  });

  console.log(data);
})();
```

## getTeamUser

Gets information about a user on the Postman team.

- HTTP Method: `GET`
- Endpoint: `/users/{userId}`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| userId | number | ✅       | The user's ID. |

**Return Type**

`UserInformation`

**Example Usage Code Snippet**

```typescript
import { PostmanPostmanApiSdk } from 'postman-postman-api-sdk';

(async () => {
  const postmanPostmanApiSdk = new PostmanPostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanPostmanApiSdk.users.getTeamUser(1);

  console.log(data);
})();
```
