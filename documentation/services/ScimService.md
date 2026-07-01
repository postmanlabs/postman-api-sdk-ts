# ScimService

A list of all methods in the `ScimService` service. Click on the method name to view detailed information about that method.

| Methods                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getScimGroupResources](#getscimgroupresources)               | Gets information about all Postman team members.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [createScimGroup](#createscimgroup)                           | Creates a new user group in Postman and creates a new account for each group member. Each account is added to your Postman team and authentication is activated for each user. If an existing Postman account uses an email that matches a group member's email ID, an [email invite](https://postman.postman.co/docs/administration/managing-your-team/managing-your-team/#invites) to join your Postman team is sent to that user. Once the user accepts the invite, they'll be added to your team. By default, the system assigns new users the developer role. You can [update user roles in Postman](https://learning.postman.com/docs/administration/managing-your-team/managing-your-team/#managing-team-roles).                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [getScimGroupResource](#getscimgroupresource)                 | Gets information about a Postman group within the team.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [scimUpdateGroup](#scimupdategroup)                           | Updates a group's information. Using this endpoint you can: - Update a group's name. - Add or remove members from a Postman group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [deleteScimGroup](#deletescimgroup)                           | Deletes a group in Postman. On success, this returns an HTTP `204 No Content` response. User accounts that were in the deleted group are deactivated in Postman if the app is assigned to the user only with the deleted group. User accounts and the data corresponding to them are not deleted. To permanently delete user accounts and their data, [contact Postman support](https://www.postman.com/support/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [getScimResourceTypes](#getscimresourcetypes)                 | Gets all the resource types supported by Postman's SCIM API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [getScimServiceProviderConfig](#getscimserviceproviderconfig) | Gets the Postman SCIM API configuration information. This includes a list of supported operations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [getScimUserResources](#getscimuserresources)                 | Gets information about all Postman team members.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [createScimUser](#createscimuser)                             | Creates a new user account in Postman and adds the user to your organization's Postman team. - If the account does not exist, this also activates the user so they can authenticate in to your Postman team. - If an account matching the email ID exists, the user receives [email invite](https://learning.postman.com/docs/administration/managing-your-team/manage-team-members/#manage-invites) to join the Postman team. The user joins the team when they accept the invite. - If the user's email domain matches your team's verified domains, the user is immediately added to the team. By default, the system assigns new users the developer role. You can [update user roles in Postman](https://learning.postman.com/docs/administration/managing-your-team/manage-team-members/#manage-team-roles). **Note:** - Users must join the team before you can assign them to any groups. - If the user is a member of a different team during SCIM provisioning and their email domain is **not** verified with your Postman team, then the user is **not** provisioned. The endpoint returns an HTTP `409 Conflict` response. |
| [getScimUserResource](#getscimuserresource)                   | Gets information about a Postman team member.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [updateScimUser](#updatescimuser)                             | Updates a user in Postman. **Reactivating a user** By setting the `active` property from `false` to `true`, this reactivates an account. This allows the account to authenticate in to Postman and adds the account back on to your Postman team.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [updateScimUserPatch](#updatescimuserpatch)                   | Updates a user in Postman. **Reactivating a user** By setting the `active` property from `false` to `true`, this reactivates an account. This allows the account to authenticate in to Postman and adds the account back on to your Postman team.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## getScimGroupResources

Gets information about all Postman team members.

- HTTP Method: `GET`
- Endpoint: `/scim/v2/Groups`

**Parameters**

| Name       | Type   | Required | Description                                                                                                                                                                                                                           |
| :--------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| startIndex | number | ❌       | The index entry by which to begin the list of returned results. Must be a value of `1` or greater.                                                                                                                                    |
| count      | number | ❌       | Limit the number of results returned in a single response.                                                                                                                                                                            |
| filter     | string | ❌       | Filter results by a specific word or phrase. This query parameter only supports the `displayName` filter and has the following requirements: - Filter values are case-sensitive. - Special characters and spaces must be URL encoded. |

**Return Type**

`GetScimGroupResourcesOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.scim.getScimGroupResources({
    startIndex: 1,
    count: 2,
    filter: 'displayName eq "TestAPI"',
  });

  console.log(data);
})();
```

## createScimGroup

Creates a new user group in Postman and creates a new account for each group member. Each account is added to your Postman team and authentication is activated for each user. If an existing Postman account uses an email that matches a group member's email ID, an [email invite](https://postman.postman.co/docs/administration/managing-your-team/managing-your-team/#invites) to join your Postman team is sent to that user. Once the user accepts the invite, they'll be added to your team. By default, the system assigns new users the developer role. You can [update user roles in Postman](https://learning.postman.com/docs/administration/managing-your-team/managing-your-team/#managing-team-roles).

- HTTP Method: `POST`
- Endpoint: `/scim/v2/Groups`

**Parameters**

| Name | Type                                            | Required | Description       |
| :--- | :---------------------------------------------- | :------- | :---------------- |
| body | [CreateScimGroup](../models/CreateScimGroup.md) | ❌       | The request body. |

**Return Type**

`ScimGroupCreated`

**Example Usage Code Snippet**

```typescript
import { CreateScimGroup, CreateScimGroupMembers, PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createScimGroupMembers: CreateScimGroupMembers = {
    value: '405775fe15ed41872a8eea4c8aa2b38cda9749812cc55c99',
    display: 'Taylor Lee',
  };

  const createScimGroup: CreateScimGroup = {
    schemas: ['urn:ietf:params:scim:schemas:core:2.0:Group'],
    displayName: 'Test-API',
    members: [createScimGroupMembers],
  };

  const data = await postmanApiSdk.scim.createScimGroup(createScimGroup);

  console.log(data);
})();
```

## getScimGroupResource

Gets information about a Postman group within the team.

- HTTP Method: `GET`
- Endpoint: `/scim/v2/Groups/{groupId}`

**Parameters**

| Name    | Type   | Required | Description     |
| :------ | :----- | :------- | :-------------- |
| groupId | string | ✅       | The group's ID. |

**Return Type**

`GetScimGroupResourceOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.scim.getScimGroupResource(
    '405775fe15ed41872a8eea4c8aa2b38cda9749812cc55c99',
  );

  console.log(data);
})();
```

## scimUpdateGroup

Updates a group's information. Using this endpoint you can: - Update a group's name. - Add or remove members from a Postman group.

- HTTP Method: `PATCH`
- Endpoint: `/scim/v2/Groups/{groupId}`

**Parameters**

| Name    | Type                                            | Required | Description       |
| :------ | :---------------------------------------------- | :------- | :---------------- |
| body    | [UpdateScimGroup](../models/UpdateScimGroup.md) | ❌       | The request body. |
| groupId | string                                          | ✅       | The group's ID.   |

**Return Type**

`ScimGroupUpdated`

**Example Usage Code Snippet**

```typescript
import {
  PostmanApiSdk,
  UpdateScimGroup,
  UpdateScimGroupOperations,
  UpdateScimGroupOperationsValue,
} from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const updateScimGroupOperationsOp = 'replace';

  const updateScimGroupOperationsValue: UpdateScimGroupOperationsValue = {
    id: '561631fq14ed41872a8eea4c8aa2b38cda9749812cc55c00',
    displayName: 'Test-API',
  };

  const updateScimGroupOperations: UpdateScimGroupOperations = {
    op: updateScimGroupOperationsOp,
    path: 'members',
    value: updateScimGroupOperationsValue,
  };

  const updateScimGroup: UpdateScimGroup = {
    schemas: ['urn:ietf:params:scim:api:messages:2.0:PatchOp'],
    operations: [updateScimGroupOperations],
  };

  const data = await postmanApiSdk.scim.scimUpdateGroup(
    '405775fe15ed41872a8eea4c8aa2b38cda9749812cc55c99',
    updateScimGroup,
  );

  console.log(data);
})();
```

## deleteScimGroup

Deletes a group in Postman. On success, this returns an HTTP `204 No Content` response. User accounts that were in the deleted group are deactivated in Postman if the app is assigned to the user only with the deleted group. User accounts and the data corresponding to them are not deleted. To permanently delete user accounts and their data, [contact Postman support](https://www.postman.com/support/).

- HTTP Method: `DELETE`
- Endpoint: `/scim/v2/Groups/{groupId}`

**Parameters**

| Name    | Type   | Required | Description     |
| :------ | :----- | :------- | :-------------- |
| groupId | string | ✅       | The group's ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.scim.deleteScimGroup(
    '405775fe15ed41872a8eea4c8aa2b38cda9749812cc55c99',
  );

  console.log(data);
})();
```

## getScimResourceTypes

Gets all the resource types supported by Postman's SCIM API.

- HTTP Method: `GET`
- Endpoint: `/scim/v2/ResourceTypes`

**Return Type**

`GetScimResourceTypes[]`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.scim.getScimResourceTypes();

  console.log(data);
})();
```

## getScimServiceProviderConfig

Gets the Postman SCIM API configuration information. This includes a list of supported operations.

- HTTP Method: `GET`
- Endpoint: `/scim/v2/ServiceProviderConfig`

**Return Type**

`GetScimServiceProviderConfigOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.scim.getScimServiceProviderConfig();

  console.log(data);
})();
```

## getScimUserResources

Gets information about all Postman team members.

- HTTP Method: `GET`
- Endpoint: `/scim/v2/Users`

**Parameters**

| Name       | Type   | Required | Description                                                                                                                                                                                                                                                                    |
| :--------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| startIndex | number | ❌       | The index entry by which to begin the list of returned results. Must be a value of `1` or greater.                                                                                                                                                                             |
| count      | number | ❌       | Limit the number of results returned in a single response.                                                                                                                                                                                                                     |
| filter     | string | ❌       | Filter results by a specific word or phrase. This query parameter accepts the following: - `userName` — Filter values are case-sensitive, and special characters and spaces must be URL encoded. - `active` — Return only users who are active (`true`) or inactive (`false`). |

**Return Type**

`ScimUsers`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.scim.getScimUserResources({
    startIndex: 1,
    count: 2,
    filter: 'userName eq "taylor-lee%40example.com"',
  });

  console.log(data);
})();
```

## createScimUser

Creates a new user account in Postman and adds the user to your organization's Postman team. - If the account does not exist, this also activates the user so they can authenticate in to your Postman team. - If an account matching the email ID exists, the user receives [email invite](https://learning.postman.com/docs/administration/managing-your-team/manage-team-members/#manage-invites) to join the Postman team. The user joins the team when they accept the invite. - If the user's email domain matches your team's verified domains, the user is immediately added to the team. By default, the system assigns new users the developer role. You can [update user roles in Postman](https://learning.postman.com/docs/administration/managing-your-team/manage-team-members/#manage-team-roles). **Note:** - Users must join the team before you can assign them to any groups. - If the user is a member of a different team during SCIM provisioning and their email domain is **not** verified with your Postman team, then the user is **not** provisioned. The endpoint returns an HTTP `409 Conflict` response.

- HTTP Method: `POST`
- Endpoint: `/scim/v2/Users`

**Parameters**

| Name | Type                                          | Required | Description       |
| :--- | :-------------------------------------------- | :------- | :---------------- |
| body | [CreateScimUser](../models/CreateScimUser.md) | ❌       | The request body. |

**Return Type**

`ScimUserCreated`

**Example Usage Code Snippet**

```typescript
import { CreateScimUser, CreateScimUserName, PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createScimUserName: CreateScimUserName = {
    givenName: 'Taylor',
    familyName: 'Lee',
  };

  const createScimUser: CreateScimUser = {
    schemas: ['urn:ietf:params:scim:schemas:core:2.0:User'],
    userName: 'taylor.lee@example.com',
    active: true,
    externalId: '12345678',
    groups: ['Test Group'],
    locale: 'en-US',
    name: createScimUserName,
  };

  const data = await postmanApiSdk.scim.createScimUser(createScimUser);

  console.log(data);
})();
```

## getScimUserResource

Gets information about a Postman team member.

- HTTP Method: `GET`
- Endpoint: `/scim/v2/Users/{userId}`

**Parameters**

| Name   | Type   | Required | Description         |
| :----- | :----- | :------- | :------------------ |
| userId | string | ✅       | The user's SCIM ID. |

**Return Type**

`GetScimUserResourceOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.scim.getScimUserResource(
    '405775fe15ed41872a8eea4c8aa2b38cda9749812cc55c99',
  );

  console.log(data);
})();
```

## updateScimUser

Updates a user in Postman. **Reactivating a user** By setting the `active` property from `false` to `true`, this reactivates an account. This allows the account to authenticate in to Postman and adds the account back on to your Postman team.

- HTTP Method: `PUT`
- Endpoint: `/scim/v2/Users/{userId}`

**Parameters**

| Name   | Type                                                        | Required | Description         |
| :----- | :---------------------------------------------------------- | :------- | :------------------ |
| body   | [UpdateScimUserRequest](../models/UpdateScimUserRequest.md) | ❌       | The request body.   |
| userId | string                                                      | ✅       | The user's SCIM ID. |

**Return Type**

`GetScimUserResourceOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk, UpdateScimUserName, UpdateScimUserRequest } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const updateScimUserName: UpdateScimUserName = {
    givenName: 'Taylor',
    familyName: 'Lee',
  };

  const updateScimUserRequest: UpdateScimUserRequest = {
    schemas: ['urn:ietf:params:scim:schemas:core:2.0:User'],
    userName: 'taylor-lee@example.com',
    name: updateScimUserName,
    active: true,
  };

  const data = await postmanApiSdk.scim.updateScimUser(
    '405775fe15ed41872a8eea4c8aa2b38cda9749812cc55c99',
    updateScimUserRequest,
  );

  console.log(data);
})();
```

## updateScimUserPatch

Updates a user in Postman. **Reactivating a user** By setting the `active` property from `false` to `true`, this reactivates an account. This allows the account to authenticate in to Postman and adds the account back on to your Postman team.

- HTTP Method: `PATCH`
- Endpoint: `/scim/v2/Users/{userId}`

**Parameters**

| Name   | Type                                                                  | Required | Description         |
| :----- | :-------------------------------------------------------------------- | :------- | :------------------ |
| body   | [UpdateScimUserPatchRequest](../models/UpdateScimUserPatchRequest.md) | ❌       | The request body.   |
| userId | string                                                                | ✅       | The user's SCIM ID. |

**Return Type**

`GetScimUserResourceOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  PostmanApiSdk,
  UpdateActiveState,
  UpdateActiveStateOperations,
  UpdateActiveStateOperationsValue,
  UpdateScimUserPatchRequest,
} from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const updateActiveStateOperationsOp = 'replace';

  const updateActiveStateOperationsValue: UpdateActiveStateOperationsValue = {
    active: true,
  };

  const updateActiveStateOperations: UpdateActiveStateOperations = {
    op: updateActiveStateOperationsOp,
    value: updateActiveStateOperationsValue,
  };

  const updateActiveState: UpdateActiveState = {
    schemas: ['urn:ietf:params:scim:api:messages:2.0:PatchOp'],
    operations: [updateActiveStateOperations],
  };

  const data = await postmanApiSdk.scim.updateScimUserPatch(
    '405775fe15ed41872a8eea4c8aa2b38cda9749812cc55c99',
    updateActiveState,
  );

  console.log(data);
})();
```
