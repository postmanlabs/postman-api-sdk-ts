# GroupsService

A list of all methods in the `GroupsService` service. Click on the method name to view detailed information about that method.

| Methods                 | Description                                                                                                             |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| [getGroups](#getgroups) | Gets all of a team's Postman [groups](https://learning.postman.com/docs/collaborating-in-postman/user-groups/).         |
| [getGroup](#getgroup)   | Gets information about a Postman [user group](https://learning.postman.com/docs/collaborating-in-postman/user-groups/). |

## getGroups

Gets all of a team's Postman [groups](https://learning.postman.com/docs/collaborating-in-postman/user-groups/).

- HTTP Method: `GET`
- Endpoint: `/groups`

**Return Type**

`PostmanGroupsInformation`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.groups.getGroups();

  console.log(data);
})();
```

## getGroup

Gets information about a Postman [user group](https://learning.postman.com/docs/collaborating-in-postman/user-groups/).

- HTTP Method: `GET`
- Endpoint: `/groups/{groupId}`

**Parameters**

| Name    | Type   | Required | Description     |
| :------ | :----- | :------- | :-------------- |
| groupId | number | ✅       | The group's ID. |

**Return Type**

`PostmanGroupInformation`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.groups.getGroup(123);

  console.log(data);
})();
```
