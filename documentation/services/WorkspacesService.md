# WorkspacesService

A list of all methods in the `WorkspacesService` service. Click on the method name to view detailed information about that method.

| Methods                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :---------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [managePartnerWorkspaceInvites](#managepartnerworkspaceinvites)   | Manages invitations and access to your team's [Partner Workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/manage/). You can use this endpoint to: - Send Partner Workspace invitations to the given email addresses. Users who already exist in the partnership are added directly, while new users receive an invitation email. - Remove partners from a workspace. - Remove partners from a partnership and all of its workspaces. **Note:** - Partner Workspaces are available on the Postman **Team** and **Enterprise** [plans](https://www.postman.com/pricing/). - This endpoint requires the following [roles](https://learning.postman.com/docs/administration/roles-and-permissions/), based on your plan: - **Team** — Requires the **Workspace Editor** role to invite or remove partners from workspaces. The **Admin** role is required for removing partners from all workspaces. - **Enterprise** — The **Partner Manager** role can perform all operations. The **Workspace Editor** role and **Admin** roles have the same permissions on this plan as they do on the Team plan. It's recommended to use the **Partner Manager** role if you're on an **Enterprise** plan.                                      |
| [getWorkspaces](#getworkspaces)                                   | Gets all [workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). The response includes your workspaces and any workspaces that you have access to. **Note:** This endpoint's response contains the visibility field. Visibility determines who can access the workspace: - `personal` — Only you can access the workspace. - `team` — All team members can access the workspace. - `private` — Only invited team members can access the workspace ([**Team** and **Enterprise** plans only](https://www.postman.com/pricing)). - `public` — Everyone can access the workspace. - `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Team** and **Enterprise** plans only](https://www.postman.com/pricing)).                                                                                                                                                                                                                                                                                                                                                                                      |
| [createWorkspace](#createworkspace)                               | Creates a new [workspace](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). **Note:** - This endpoint returns a 403 `Forbidden` response if the user does not have permission to create workspaces. [Admins and Super Admins](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can configure workspace permissions to restrict users and/or user groups from creating workspaces or require approvals for the creation of team workspaces. - Private and [Partner Workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) are available on Postman [**Team** and **Enterprise** plans](https://www.postman.com/pricing). - There are rate limits when publishing public workspaces. - Public team workspace names must be unique. - The `teamId` property must be passed in the request body if [Postman Organizations](https://learning.postman.com/docs/administration/onboarding-checklist) is enabled.                                                                                                                                                                                                                             |
| [getAllWorkspaceRoles](#getallworkspaceroles)                     | Gets information about all roles in a workspace, based on the team's [plan](https://www.postman.com/pricing/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [getWorkspace](#getworkspace)                                     | Gets information about a workspace. **Note:** This endpoint's response contains the `visibility` field. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace: - `personal` — Only you can access the workspace. - `team` — All team members can access the workspace. - `private` — Only invited team members can access the workspace ([**Team** and **Enterprise** plans only](https://www.postman.com/pricing)). - `public` — Everyone can access the workspace. - `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Team** and **Enterprise** plans only](https://www.postman.com/pricing)).                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [updateWorkspace](#updateworkspace)                               | Updates a workspace's property, such as its name or visibility. **Note:** - This endpoint does not support the following visibility changes: - `private` to `public`, `public` to `private`, and `private` to `personal` for **Free** and **Solo** [plans](https://www.postman.com/pricing/). - `public` to `personal` for team users only. - There are rate limits when publishing public workspaces. - Public team workspace names must be unique.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [deleteWorkspace](#deleteworkspace)                               | Deletes an existing workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [getWorkspaceActivityFeed](#getworkspaceactivityfeed)             | Gets a workspace's [activity feed](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#view-workspace-activity). Activity feeds return information about who added or removed collections, environments, or elements from a workspace, and users that join or leave a workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [transferWorkspaceElement](#transferworkspaceelement)             | Transfers a [Postman element](https://learning.postman.com/docs/getting-started/basics/postman-elements/) from one workspace to another workspace. Supported elements include collections, environments, mocks, monitors, and Flows modules and actions. When copying an element between workspaces, the [activity feed](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/workspace-activity/) for both workspaces update to reflect the change. **Note:** This endpoint does not support transferring elements from team workspaces to personal workspaces.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [getWorkspaceGlobalVariables](#getworkspaceglobalvariables)       | Gets a workspace's global [variables](https://learning.postman.com/docs/sending-requests/variables/#variable-scopes). Global variables enable you to access data between collections, requests, scripts, and environments and are available throughout a workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [updateWorkspaceGlobalVariables](#updateworkspaceglobalvariables) | Updates and replaces a workspace's global [variables](https://learning.postman.com/docs/sending-requests/variables/#variable-scopes). This endpoint replaces all existing global variables with the variables you pass in the request body.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [getWorkspaceRoles](#getworkspaceroles)                           | Gets the roles of users, user groups, and partners in a workspace. **Note:** Partner roles don't support SCIM IDs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [updateWorkspaceRoles](#updateworkspaceroles)                     | Updates the roles of users, [user groups](https://learning.postman.com/docs/collaborating-in-postman/user-groups/), or partners in a workspace. To get a list of roles, use the GET `/workspace-roles` endpoint. To get a group ID, use the GET `/groups` endpoint. **Note:** - User groups are available on Postman [**Enterprise** plans](https://www.postman.com/pricing). - To use SCIM IDs for users and user groups, include the `identifierType=scim` header when you call this endpoint. To get SCIM user IDs, include the `include=scim` query parameter when calling the GET `/workspaces/{workspaceId}` or GET `/workspaces` endpoints. - You can't set roles for users in personal workspaces. - This endpoint doesn't support the external [Guest role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles). - The partner **Editor** and **Editor and Partner Lead** roles aren't supported in multi-partner workspaces. - You can't update partner and user roles in the same operation. - This endpoint is restricted to 50 operations per call. - The request body must contain one unique action per user, user group, or partner. For example, you cannot add and remove multiple roles for a user in the same request body. |
| [transferWorkspaceToTeam](#transferworkspacetoteam)               | Transfers a workspace from one team (`source`) to another team (`destination`). **Note:** - These endpoints are only available with [Postman **Enterprise** plans](https://www.postman.com/pricing/) with [Postman Organizations](https://learning.postman.com/docs/administration/onboarding-checklist) enabled. - Team user roles are modified when workspaces are transferred. For example, if a user has the Admin role in the `source` team but not the `destination` team, then their role is removed from the workspace after it's transferred to the `destination` team.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [getWorkspaceUpdates](#getworkspaceupdates)                       | Gets a list of workspace updates for the given workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [createWorkspaceUpdate](#createworkspaceupdate)                   | Creates a [workspace update](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/internal-workspaces/workspace-updates) in the given workspace. Workspace updates keep workspace watchers informed about changes, such as new features, bug fixes, breaking changes, and announcements.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [getWorkspaceUpdate](#getworkspaceupdate)                         | Gets information about a workspace update.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [patchWorkspaceUpdate](#patchworkspaceupdate)                     | Updates a workspace update. **Note:** This endpoint requires the `application/merge-patch+json` Content-Type header.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [deleteWorkspaceUpdate](#deleteworkspaceupdate)                   | Deletes a workspace update. On success, this returns an HTTP `204 No Content` response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## managePartnerWorkspaceInvites

Manages invitations and access to your team's [Partner Workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/manage/). You can use this endpoint to: - Send Partner Workspace invitations to the given email addresses. Users who already exist in the partnership are added directly, while new users receive an invitation email. - Remove partners from a workspace. - Remove partners from a partnership and all of its workspaces. **Note:** - Partner Workspaces are available on the Postman **Team** and **Enterprise** [plans](https://www.postman.com/pricing/). - This endpoint requires the following [roles](https://learning.postman.com/docs/administration/roles-and-permissions/), based on your plan: - **Team** — Requires the **Workspace Editor** role to invite or remove partners from workspaces. The **Admin** role is required for removing partners from all workspaces. - **Enterprise** — The **Partner Manager** role can perform all operations. The **Workspace Editor** role and **Admin** roles have the same permissions on this plan as they do on the Team plan. It's recommended to use the **Partner Manager** role if you're on an **Enterprise** plan.

- HTTP Method: `POST`
- Endpoint: `/invitations`

**Parameters**

| Name | Type                                                                        | Required | Description       |
| :--- | :-------------------------------------------------------------------------- | :------- | :---------------- |
| body | [ManagePartnerWorkspaceInvites](../models/ManagePartnerWorkspaceInvites.md) | ❌       | The request body. |

**Return Type**

`ManagePartnerWorkspaceInvitesResponse`

**Example Usage Code Snippet**

```typescript
import {
  InvitePartners,
  ManagePartnerWorkspaceInvites,
  ManagePartnerWorkspaceInvitesTargetObjectEmails,
  PostmanApiSdk,
} from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const invitePartnersAction = 'invite_partner';

  const invitePartnersTargetEntity = 'workspace';

  const roleId = '4';

  const managePartnerWorkspaceInvitesTargetObjectEmails: ManagePartnerWorkspaceInvitesTargetObjectEmails =
    {
      emails: ['alex.cruz@example.com'],
    };

  const invitePartners: InvitePartners = {
    action: invitePartnersAction,
    targetEntity: invitePartnersTargetEntity,
    targetEntityId: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    roleId: roleId,
    target: managePartnerWorkspaceInvitesTargetObjectEmails,
  };

  const data = await postmanApiSdk.workspaces.managePartnerWorkspaceInvites(invitePartners);

  console.log(data);
})();
```

## getWorkspaces

Gets all [workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). The response includes your workspaces and any workspaces that you have access to. **Note:** This endpoint's response contains the visibility field. Visibility determines who can access the workspace: - `personal` — Only you can access the workspace. - `team` — All team members can access the workspace. - `private` — Only invited team members can access the workspace ([**Team** and **Enterprise** plans only](https://www.postman.com/pricing)). - `public` — Everyone can access the workspace. - `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Team** and **Enterprise** plans only](https://www.postman.com/pricing)).

- HTTP Method: `GET`
- Endpoint: `/workspaces`

**Parameters**

| Name        | Type                                                                | Required | Description                                                                                                                                                                                                                                                            |
| :---------- | :------------------------------------------------------------------ | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type        | [WorkspaceTypeQuery](../models/WorkspaceTypeQuery.md)               | ❌       | The type of workspace to filter the response by.                                                                                                                                                                                                                       |
| createdBy   | number                                                              | ❌       | Return only workspaces created by a specific user ID. For multiple users, pass this value as a comma-separated list of user IDs. The response only returns workspaces that you have access to.                                                                         |
| include     | [WorkspaceIncludeQuery](../models/WorkspaceIncludeQuery.md)         | ❌       | Include the following information in the endpoint's response: - `mocks:deactivated` — Include all deactivated mock servers in the response. - `scim` — Return the SCIM user IDs of the workspace creator and who last modified it.                                     |
| elementType | [WorkspaceElementTypeQuery](../models/WorkspaceElementTypeQuery.md) | ❌       | Filter results to return the workspace where the given element type is located. If you pass this query parameter, you must also pass the `elementId` query parameter.                                                                                                  |
| elementId   | string                                                              | ❌       | Filter results to return the workspace where the given element's ID is located. When filtering by collection, you must use the collection's unique ID (`userId`-`collection`). If you pass this query parameter, you must also pass the `elementType` query parameter. |
| cursor      | string                                                              | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.                                                                                                                             |
| limit       | number                                                              | ❌       | The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response.                                                                                                                     |

**Return Type**

`GetWorkspacesOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const workspaceTypeQuery = 'personal';
  const workspaceIncludeQuery = 'mocks:deactivated';
  const workspaceElementTypeQuery = 'collection';

  const data = await postmanApiSdk.workspaces.getWorkspaces({
    type: workspaceTypeQuery,
    createdBy: 12345678,
    include: workspaceIncludeQuery,
    elementType: workspaceElementTypeQuery,
    elementId: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    limit: 5,
  });

  console.log(data);
})();
```

## createWorkspace

Creates a new [workspace](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). **Note:** - This endpoint returns a 403 `Forbidden` response if the user does not have permission to create workspaces. [Admins and Super Admins](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can configure workspace permissions to restrict users and/or user groups from creating workspaces or require approvals for the creation of team workspaces. - Private and [Partner Workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) are available on Postman [**Team** and **Enterprise** plans](https://www.postman.com/pricing). - There are rate limits when publishing public workspaces. - Public team workspace names must be unique. - The `teamId` property must be passed in the request body if [Postman Organizations](https://learning.postman.com/docs/administration/onboarding-checklist) is enabled.

- HTTP Method: `POST`
- Endpoint: `/workspaces`

**Parameters**

| Name | Type                                            | Required | Description       |
| :--- | :---------------------------------------------- | :------- | :---------------- |
| body | [CreateWorkspace](../models/CreateWorkspace.md) | ❌       | The request body. |

**Return Type**

`CreateWorkspaceOkResponse`

**Example Usage Code Snippet**

```typescript
import { CreateWorkspace, CreateWorkspaceWorkspace, PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const createWorkspaceWorkspaceType = 'personal';

  const createWorkspaceWorkspace: CreateWorkspaceWorkspace = {
    name: 'Team Workspace',
    type: createWorkspaceWorkspaceType,
    description: 'This is a team workspace.',
    about: 'This is a team workspace.',
    teamId: '123',
  };

  const createWorkspace: CreateWorkspace = {
    workspace: createWorkspaceWorkspace,
  };

  const data = await postmanApiSdk.workspaces.createWorkspace(createWorkspace);

  console.log(data);
})();
```

## getAllWorkspaceRoles

Gets information about all roles in a workspace, based on the team's [plan](https://www.postman.com/pricing/).

- HTTP Method: `GET`
- Endpoint: `/workspaces-roles`

**Return Type**

`GetAllWorkspaceRolesOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.workspaces.getAllWorkspaceRoles();

  console.log(data);
})();
```

## getWorkspace

Gets information about a workspace. **Note:** This endpoint's response contains the `visibility` field. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace: - `personal` — Only you can access the workspace. - `team` — All team members can access the workspace. - `private` — Only invited team members can access the workspace ([**Team** and **Enterprise** plans only](https://www.postman.com/pricing)). - `public` — Everyone can access the workspace. - `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Team** and **Enterprise** plans only](https://www.postman.com/pricing)).

- HTTP Method: `GET`
- Endpoint: `/workspaces/{workspaceId}`

**Parameters**

| Name        | Type                                                        | Required | Description                                                                                                                                                                                                                        |
| :---------- | :---------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| workspaceId | string                                                      | ✅       | The workspace's ID.                                                                                                                                                                                                                |
| include     | [WorkspaceIncludeQuery](../models/WorkspaceIncludeQuery.md) | ❌       | Include the following information in the endpoint's response: - `mocks:deactivated` — Include all deactivated mock servers in the response. - `scim` — Return the SCIM user IDs of the workspace creator and who last modified it. |

**Return Type**

`GetWorkspaceOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const workspaceIncludeQuery = 'mocks:deactivated';

  const data = await postmanApiSdk.workspaces.getWorkspace('1f0df51a-8658-4ee8-a2a1-d2567dfa09a9', {
    include: workspaceIncludeQuery,
  });

  console.log(data);
})();
```

## updateWorkspace

Updates a workspace's property, such as its name or visibility. **Note:** - This endpoint does not support the following visibility changes: - `private` to `public`, `public` to `private`, and `private` to `personal` for **Free** and **Solo** [plans](https://www.postman.com/pricing/). - `public` to `personal` for team users only. - There are rate limits when publishing public workspaces. - Public team workspace names must be unique.

- HTTP Method: `PUT`
- Endpoint: `/workspaces/{workspaceId}`

**Parameters**

| Name        | Type                                                          | Required | Description         |
| :---------- | :------------------------------------------------------------ | :------- | :------------------ |
| body        | [UpdateWorkspaceRequest](../models/UpdateWorkspaceRequest.md) | ❌       | The request body.   |
| workspaceId | string                                                        | ✅       | The workspace's ID. |

**Return Type**

`WorkspaceUpdated`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk, UpdateWorkspaceRequest, UpdateWorkspaceWorkspace1 } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const updateWorkspaceWorkspaceType = 'private';

  const updateWorkspaceWorkspace1: UpdateWorkspaceWorkspace1 = {
    name: 'Test Workspace',
    type: updateWorkspaceWorkspaceType,
    description: 'This is a test team workspace.',
    about: 'This is a team workspace.',
  };

  const updateWorkspaceRequest: UpdateWorkspaceRequest = {
    workspace: updateWorkspaceWorkspace1,
  };

  const data = await postmanApiSdk.workspaces.updateWorkspace(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    updateWorkspaceRequest,
  );

  console.log(data);
})();
```

## deleteWorkspace

Deletes an existing workspace.

- HTTP Method: `DELETE`
- Endpoint: `/workspaces/{workspaceId}`

**Parameters**

| Name        | Type   | Required | Description         |
| :---------- | :----- | :------- | :------------------ |
| workspaceId | string | ✅       | The workspace's ID. |

**Return Type**

`WorkspaceDeleted`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.workspaces.deleteWorkspace(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  );

  console.log(data);
})();
```

## getWorkspaceActivityFeed

Gets a workspace's [activity feed](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#view-workspace-activity). Activity feeds return information about who added or removed collections, environments, or elements from a workspace, and users that join or leave a workspace.

- HTTP Method: `GET`
- Endpoint: `/workspaces/{workspaceId}/activities`

**Parameters**

| Name        | Type                                      | Required | Description                                                                                                                                |
| :---------- | :---------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| workspaceId | string                                    | ✅       | The workspace's ID.                                                                                                                        |
| userId      | number                                    | ❌       | Filter results by the given user ID.                                                                                                       |
| elementType | [ElementType2](../models/ElementType2.md) | ❌       | A comma-separated list of elements to filter the results by.                                                                               |
| limit       | number                                    | ❌       | The maximum number of rows to return in the response.                                                                                      |
| cursor      | string                                    | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |

**Return Type**

`WorkspaceActivityFeed`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const elementType2 = 'collection';

  const data = await postmanApiSdk.workspaces.getWorkspaceActivityFeed(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    {
      userId: 12345678,
      elementType: elementType2,
      limit: 10,
      cursor:
        'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    },
  );

  console.log(data);
})();
```

## transferWorkspaceElement

Transfers a [Postman element](https://learning.postman.com/docs/getting-started/basics/postman-elements/) from one workspace to another workspace. Supported elements include collections, environments, mocks, monitors, and Flows modules and actions. When copying an element between workspaces, the [activity feed](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/workspace-activity/) for both workspaces update to reflect the change. **Note:** This endpoint does not support transferring elements from team workspaces to personal workspaces.

- HTTP Method: `POST`
- Endpoint: `/workspaces/{workspaceId}/element-transfers`

**Parameters**

| Name        | Type                                                              | Required | Description         |
| :---------- | :---------------------------------------------------------------- | :------- | :------------------ |
| body        | [TransferWorkspaceElement](../models/TransferWorkspaceElement.md) | ❌       | The request body.   |
| workspaceId | string                                                            | ✅       | The workspace's ID. |

**Return Type**

`TransferWorkspaceElementResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk, TransferWorkspaceElement } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const id = 'est dolor ut';

  const transferWorkspaceElementType = 'collection';

  const transferWorkspaceElement: TransferWorkspaceElement = {
    id: id,
    type: transferWorkspaceElementType,
    to: 'd56bc95f-57c5-47cc-bd99-75c4ad96a6dd',
  };

  const data = await postmanApiSdk.workspaces.transferWorkspaceElement(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    transferWorkspaceElement,
  );

  console.log(data);
})();
```

## getWorkspaceGlobalVariables

Gets a workspace's global [variables](https://learning.postman.com/docs/sending-requests/variables/#variable-scopes). Global variables enable you to access data between collections, requests, scripts, and environments and are available throughout a workspace.

- HTTP Method: `GET`
- Endpoint: `/workspaces/{workspaceId}/global-variables`

**Parameters**

| Name        | Type   | Required | Description         |
| :---------- | :----- | :------- | :------------------ |
| workspaceId | string | ✅       | The workspace's ID. |

**Return Type**

`GetWorkspaceGlobalVariablesOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.workspaces.getWorkspaceGlobalVariables(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  );

  console.log(data);
})();
```

## updateWorkspaceGlobalVariables

Updates and replaces a workspace's global [variables](https://learning.postman.com/docs/sending-requests/variables/#variable-scopes). This endpoint replaces all existing global variables with the variables you pass in the request body.

- HTTP Method: `PUT`
- Endpoint: `/workspaces/{workspaceId}/global-variables`

**Parameters**

| Name        | Type                                                        | Required | Description         |
| :---------- | :---------------------------------------------------------- | :------- | :------------------ |
| body        | [UpdateGlobalVariables](../models/UpdateGlobalVariables.md) | ❌       | The request body.   |
| workspaceId | string                                                      | ✅       | The workspace's ID. |

**Return Type**

`GlobalVariablesUpdated`

**Example Usage Code Snippet**

```typescript
import { GlobalVariableInfo, PostmanApiSdk, UpdateGlobalVariables } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const globalVariableInfoType = 'default';

  const globalVariableInfo: GlobalVariableInfo = {
    key: 'collectionId',
    type: globalVariableInfoType,
    value: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    enabled: true,
    description: "The collection's ID.",
  };

  const updateGlobalVariables: UpdateGlobalVariables = {
    values: [globalVariableInfo],
  };

  const data = await postmanApiSdk.workspaces.updateWorkspaceGlobalVariables(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    updateGlobalVariables,
  );

  console.log(data);
})();
```

## getWorkspaceRoles

Gets the roles of users, user groups, and partners in a workspace. **Note:** Partner roles don't support SCIM IDs.

- HTTP Method: `GET`
- Endpoint: `/workspaces/{workspaceId}/roles`

**Parameters**

| Name        | Type                                                                | Required | Description                                                                                                     |
| :---------- | :------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------- |
| workspaceId | string                                                              | ✅       | The workspace's ID.                                                                                             |
| include     | [WorkspaceIncludeScimQuery](../models/WorkspaceIncludeScimQuery.md) | ❌       | Include the following information in the endpoint's response: - `scim` — Return IDs as SCIM user and group IDs. |

**Return Type**

`WorkspaceRoles`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const workspaceIncludeScimQuery = 'scim';

  const data = await postmanApiSdk.workspaces.getWorkspaceRoles(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    {
      include: workspaceIncludeScimQuery,
    },
  );

  console.log(data);
})();
```

## updateWorkspaceRoles

Updates the roles of users, [user groups](https://learning.postman.com/docs/collaborating-in-postman/user-groups/), or partners in a workspace. To get a list of roles, use the GET `/workspace-roles` endpoint. To get a group ID, use the GET `/groups` endpoint. **Note:** - User groups are available on Postman [**Enterprise** plans](https://www.postman.com/pricing). - To use SCIM IDs for users and user groups, include the `identifierType=scim` header when you call this endpoint. To get SCIM user IDs, include the `include=scim` query parameter when calling the GET `/workspaces/{workspaceId}` or GET `/workspaces` endpoints. - You can't set roles for users in personal workspaces. - This endpoint doesn't support the external [Guest role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles). - The partner **Editor** and **Editor and Partner Lead** roles aren't supported in multi-partner workspaces. - You can't update partner and user roles in the same operation. - This endpoint is restricted to 50 operations per call. - The request body must contain one unique action per user, user group, or partner. For example, you cannot add and remove multiple roles for a user in the same request body.

- HTTP Method: `PATCH`
- Endpoint: `/workspaces/{workspaceId}/roles`

**Parameters**

| Name           | Type                                                      | Required | Description                                    |
| :------------- | :-------------------------------------------------------- | :------- | :--------------------------------------------- |
| body           | [UpdateWorkspaceRoles](../models/UpdateWorkspaceRoles.md) | ❌       | The request body.                              |
| workspaceId    | string                                                    | ✅       | The workspace's ID.                            |
| identifierType | string                                                    | ❌       | Use SCIM user IDs instead of Postman user IDs. |

**Return Type**

`WorkspaceRolesUpdated`

**Example Usage Code Snippet**

```typescript
import {
  PostmanApiSdk,
  UpdateWorkspaceRoles,
  UpdateWorkspaceRolesRoles,
  UpdateWorkspaceRolesRolesValue,
} from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const updateWorkspaceRolesRolesPath = '/user';

  const updateWorkspaceRolesRolesValue: UpdateWorkspaceRolesRolesValue = {
    id: '12345678',
    role: '1',
  };

  const updateWorkspaceRolesRoles: UpdateWorkspaceRolesRoles = {
    op: 'add',
    path: updateWorkspaceRolesRolesPath,
    value: [updateWorkspaceRolesRolesValue],
  };

  const updateWorkspaceRoles: UpdateWorkspaceRoles = {
    roles: [updateWorkspaceRolesRoles],
  };

  const data = await postmanApiSdk.workspaces.updateWorkspaceRoles(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    updateWorkspaceRoles,
    {
      identifierType: 'scim',
    },
  );

  console.log(data);
})();
```

## transferWorkspaceToTeam

Transfers a workspace from one team (`source`) to another team (`destination`). **Note:** - These endpoints are only available with [Postman **Enterprise** plans](https://www.postman.com/pricing/) with [Postman Organizations](https://learning.postman.com/docs/administration/onboarding-checklist) enabled. - Team user roles are modified when workspaces are transferred. For example, if a user has the Admin role in the `source` team but not the `destination` team, then their role is removed from the workspace after it's transferred to the `destination` team.

- HTTP Method: `PATCH`
- Endpoint: `/workspaces/{workspaceId}/transfers`

**Parameters**

| Name        | Type                                                            | Required | Description         |
| :---------- | :-------------------------------------------------------------- | :------- | :------------------ |
| body        | [TransferWorkspaceToTeam](../models/TransferWorkspaceToTeam.md) | ❌       | The request body.   |
| workspaceId | string                                                          | ✅       | The workspace's ID. |

**Return Type**

`TransferWorkspaceToTeamResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk, TransferWorkspaceToTeam } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const transferWorkspaceToTeam: TransferWorkspaceToTeam = {
    destination: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    source: 'd56bc95f-57c5-47cc-bd99-75c4ad96a6dd',
  };

  const data = await postmanApiSdk.workspaces.transferWorkspaceToTeam(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    transferWorkspaceToTeam,
  );

  console.log(data);
})();
```

## getWorkspaceUpdates

Gets a list of workspace updates for the given workspace.

- HTTP Method: `GET`
- Endpoint: `/workspaces/{workspaceId}/updates`

**Parameters**

| Name        | Type   | Required | Description                                                                                                                                        |
| :---------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| workspaceId | string | ✅       | The workspace's ID.                                                                                                                                |
| cursor      | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.         |
| category    | string | ❌       | A comma-separated list of categories to filter the results by. Accepts `improvement`, `bug_fix`, `new_feature`, `breaking_change`, `announcement`. |

**Return Type**

`GetWorkspaceUpdates`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.workspaces.getWorkspaceUpdates(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    {
      cursor:
        'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
      category: 'improvement,announcement',
    },
  );

  console.log(data);
})();
```

## createWorkspaceUpdate

Creates a [workspace update](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/internal-workspaces/workspace-updates) in the given workspace. Workspace updates keep workspace watchers informed about changes, such as new features, bug fixes, breaking changes, and announcements.

- HTTP Method: `POST`
- Endpoint: `/workspaces/{workspaceId}/updates`

**Parameters**

| Name        | Type                                                        | Required | Description         |
| :---------- | :---------------------------------------------------------- | :------- | :------------------ |
| body        | [CreateWorkspaceUpdate](../models/CreateWorkspaceUpdate.md) | ❌       | The request body.   |
| workspaceId | string                                                      | ✅       | The workspace's ID. |

**Return Type**

`WorkspaceUpdatePostPatchResponseData`

**Example Usage Code Snippet**

```typescript
import {
  CreateWorkspaceUpdate,
  PostmanApiSdk,
  WorkspaceUpdateRelatedResourcesData,
} from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const workspaceUpdateCategoryData = 'improvement';

  const resource = 'collection';

  const workspaceUpdateRelatedResourcesData: WorkspaceUpdateRelatedResourcesData = {
    resource: resource,
    resourceId: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
  };

  const createWorkspaceUpdate: CreateWorkspaceUpdate = {
    description: "We've released the first version of our newest API!",
    topic: 'API v1.0 released',
    category: workspaceUpdateCategoryData,
    relatedResources: [workspaceUpdateRelatedResourcesData],
  };

  const data = await postmanApiSdk.workspaces.createWorkspaceUpdate(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    createWorkspaceUpdate,
  );

  console.log(data);
})();
```

## getWorkspaceUpdate

Gets information about a workspace update.

- HTTP Method: `GET`
- Endpoint: `/workspaces/{workspaceId}/updates/{updateId}`

**Parameters**

| Name        | Type   | Required | Description                |
| :---------- | :----- | :------- | :------------------------- |
| workspaceId | string | ✅       | The workspace's ID.        |
| updateId    | number | ✅       | The workspace update's ID. |

**Return Type**

`WorkspaceUpdateData`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.workspaces.getWorkspaceUpdate(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    123,
  );

  console.log(data);
})();
```

## patchWorkspaceUpdate

Updates a workspace update. **Note:** This endpoint requires the `application/merge-patch+json` Content-Type header.

- HTTP Method: `PATCH`
- Endpoint: `/workspaces/{workspaceId}/updates/{updateId}`

**Parameters**

| Name        | Type                                                        | Required | Description                |
| :---------- | :---------------------------------------------------------- | :------- | :------------------------- |
| body        | [UpdateWorkspaceUpdate](../models/UpdateWorkspaceUpdate.md) | ❌       | The request body.          |
| workspaceId | string                                                      | ✅       | The workspace's ID.        |
| updateId    | number                                                      | ✅       | The workspace update's ID. |

**Return Type**

`WorkspaceUpdatePostPatchResponseData`

**Example Usage Code Snippet**

```typescript
import {
  PostmanApiSdk,
  UpdateWorkspaceUpdate,
  WorkspaceUpdateRelatedResourcesData,
} from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const workspaceUpdateCategoryData = 'improvement';

  const resource = 'collection';

  const workspaceUpdateRelatedResourcesData: WorkspaceUpdateRelatedResourcesData = {
    resource: resource,
    resourceId: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
  };

  const updateWorkspaceUpdate: UpdateWorkspaceUpdate = {
    description: "We've released the first version of our newest API!",
    topic: 'API v1.0 released',
    category: workspaceUpdateCategoryData,
    isPinned: true,
    relatedResources: [workspaceUpdateRelatedResourcesData],
  };

  const data = await postmanApiSdk.workspaces.patchWorkspaceUpdate(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    123,
    updateWorkspaceUpdate,
  );

  console.log(data);
})();
```

## deleteWorkspaceUpdate

Deletes a workspace update. On success, this returns an HTTP `204 No Content` response.

- HTTP Method: `DELETE`
- Endpoint: `/workspaces/{workspaceId}/updates/{updateId}`

**Parameters**

| Name        | Type   | Required | Description                |
| :---------- | :----- | :------- | :------------------------- |
| workspaceId | string | ✅       | The workspace's ID.        |
| updateId    | number | ✅       | The workspace update's ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.workspaces.deleteWorkspaceUpdate(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    123,
  );

  console.log(data);
})();
```
