# TeamsService

A list of all methods in the `TeamsService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                                                                                                                                                                                                                                                                                    |
| :---------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getTeams](#getteams)                                 | Gets all Postman teams in your organization.                                                                                                                                                                                                                                                   |
| [createTeam](#createteam)                             | [Creates](https://learning.postman.com/docs/administration/managing-your-team/create-teams/) a Postman team in your organization.                                                                                                                                                              |
| [getTeam](#getteam)                                   | Gets information about a Postman team.                                                                                                                                                                                                                                                         |
| [getTeamAccessRequests](#getteamaccessrequests)       | Gets a team's pending access requests.                                                                                                                                                                                                                                                         |
| [createAccessRequest](#createaccessrequest)           | Creates an access request for a team. Access requests include actions such as request to join a team, upgrading a user's role, adding members, and requesting team role access to another team. **Note:** If a team discovery is enabled, the team's access request is automatically approved. |
| [approveDenyAccessRequest](#approvedenyaccessrequest) | Approve or deny a team's access request.                                                                                                                                                                                                                                                       |
| [manageTeamMemberRoles](#manageteammemberroles)       | Adds or removes member roles in groups, teams, organizations, as well as individual users' roles. **Note:** If you remove a role from a group or team, then all members lose the that role's permissions.                                                                                      |
| [removeTeamMembers](#removeteammembers)               | Removes entities, such as users or organizations, from your Postman team. On success, this returns an HTTP `204 No Content` response.                                                                                                                                                          |
| [getTeamSettings](#getteamsettings)                   | Gets a team's settings.                                                                                                                                                                                                                                                                        |
| [updateTeamSettings](#updateteamsettings)             | Updates a team's settings.                                                                                                                                                                                                                                                                     |

## getTeams

Gets all Postman teams in your organization.

- HTTP Method: `GET`
- Endpoint: `/teams`

**Parameters**

| Name           | Type    | Required | Description                                                                                                                                |
| :------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| cursor         | string  | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| limit          | number  | ❌       | The maximum number of rows to return in the response.                                                                                      |
| settings       | boolean | ❌       | If true, returns team settings in the response.                                                                                            |
| userRoles      | boolean | ❌       | If true, returns the team's assigned user roles in the response.                                                                           |
| identifierType | string  | ❌       | Use SCIM user and group IDs instead of Postman user IDs.                                                                                   |

**Return Type**

`GetTeams`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.teams.getTeams({
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    limit: 2,
    settings: true,
    userRoles: true,
    identifierType: 'scim',
  });

  console.log(data);
})();
```

## createTeam

[Creates](https://learning.postman.com/docs/administration/managing-your-team/create-teams/) a Postman team in your organization.

- HTTP Method: `POST`
- Endpoint: `/teams`

**Parameters**

| Name           | Type                                  | Required | Description                                              |
| :------------- | :------------------------------------ | :------- | :------------------------------------------------------- |
| body           | [CreateTeam](../models/CreateTeam.md) | ❌       | The request body.                                        |
| identifierType | string                                | ❌       | Use SCIM user and group IDs instead of Postman user IDs. |

**Return Type**

`CreateGetTeamResponse`

**Example Usage Code Snippet**

```typescript
import { CreateTeam, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const createTeam: CreateTeam = {
    name: 'Testing Team',
    description: 'API testing team.',
  };

  const data = await postmanApi.teams.createTeam(createTeam, {
    identifierType: 'scim',
  });

  console.log(data);
})();
```

## getTeam

Gets information about a Postman team.

- HTTP Method: `GET`
- Endpoint: `/teams/{teamId}`

**Parameters**

| Name           | Type                                      | Required | Description                                                                                                                                                                                                                                                                                                                                                              |
| :------------- | :---------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| teamId         | number                                    | ✅       | The team's ID.                                                                                                                                                                                                                                                                                                                                                           |
| include        | [TeamsInclude](../models/TeamsInclude.md) | ❌       | Include additional information in the request's response: - `members` — Include all users and groups, including groups that represent other teams or the entire organization, with access to the team's entities. This includes team managers, members, and persons invited to collaborate as guests. - `userRoles` — Include all the team's user roles in the response. |
| identifierType | string                                    | ❌       | Use SCIM user and group IDs instead of Postman user IDs.                                                                                                                                                                                                                                                                                                                 |

**Return Type**

`CreateGetTeamResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApi, TeamsInclude } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const teamsInclude = TeamsInclude.MEMBERS;

  const data = await postmanApi.teams.getTeam(123, {
    include: teamsInclude,
    identifierType: 'scim',
  });

  console.log(data);
})();
```

## getTeamAccessRequests

Gets a team's pending access requests.

- HTTP Method: `GET`
- Endpoint: `/teams/{teamId}/access-requests`

**Parameters**

| Name           | Type   | Required | Description                                                                                                                                |
| :------------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| teamId         | number | ✅       | The team's ID.                                                                                                                             |
| cursor         | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| limit          | number | ❌       | The maximum number of rows to return in the response.                                                                                      |
| identifierType | string | ❌       | Use SCIM user and group IDs instead of Postman user IDs.                                                                                   |

**Return Type**

`GetTeamAccessRequests`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.teams.getTeamAccessRequests(123, {
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    limit: 2,
    identifierType: 'scim',
  });

  console.log(data);
})();
```

## createAccessRequest

Creates an access request for a team. Access requests include actions such as request to join a team, upgrading a user's role, adding members, and requesting team role access to another team. **Note:** If a team discovery is enabled, the team's access request is automatically approved.

- HTTP Method: `POST`
- Endpoint: `/teams/{teamId}/access-requests`

**Parameters**

| Name           | Type                                                    | Required | Description                                              |
| :------------- | :------------------------------------------------------ | :------- | :------------------------------------------------------- |
| body           | [CreateAccessRequest](../models/CreateAccessRequest.md) | ❌       | The request body.                                        |
| teamId         | number                                                  | ✅       | The team's ID.                                           |
| identifierType | string                                                  | ❌       | Use SCIM user and group IDs instead of Postman user IDs. |

**Return Type**

`CreateAccessRequestResponse`

**Example Usage Code Snippet**

```typescript
import {
  CreateAccessRequest,
  CreateAccessRequestRole,
  PostmanApi,
  RequestType,
  TeamEntityInfo,
  TeamEntityInfoEntityType,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const teamEntityInfoEntityType = TeamEntityInfoEntityType.USER;

  const teamEntityInfoEntityId = 4;

  const teamEntityInfo: TeamEntityInfo = {
    entityType: teamEntityInfoEntityType,
    entityId: teamEntityInfoEntityId,
  };

  const createAccessRequestRole = CreateAccessRequestRole.TEAM_MANAGER;

  const requestType = RequestType.REQUEST_TO_ADD_MEMBERS;

  const createAccessRequest: CreateAccessRequest = {
    entityList: [teamEntityInfo],
    role: createAccessRequestRole,
    reason: 'Needs the developer role.',
    requestType: requestType,
  };

  const data = await postmanApi.teams.createAccessRequest(123, createAccessRequest, {
    identifierType: 'scim',
  });

  console.log(data);
})();
```

## approveDenyAccessRequest

Approve or deny a team's access request.

- HTTP Method: `POST`
- Endpoint: `/teams/{teamId}/access-requests/{requestId}`

**Parameters**

| Name           | Type                                                              | Required | Description                                              |
| :------------- | :---------------------------------------------------------------- | :------- | :------------------------------------------------------- |
| body           | [ApproveDenyAccessRequest](../models/ApproveDenyAccessRequest.md) | ❌       | The request body.                                        |
| teamId         | number                                                            | ✅       | The team's ID.                                           |
| requestId      | number                                                            | ✅       | The access request's ID.                                 |
| identifierType | string                                                            | ❌       | Use SCIM user and group IDs instead of Postman user IDs. |

**Return Type**

`ApproveDenyAccessRequestResponse`

**Example Usage Code Snippet**

```typescript
import {
  ApproveDenyAccessRequest,
  ApproveDenyAccessRequestAction,
  PostmanApi,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const approveDenyAccessRequestAction = ApproveDenyAccessRequestAction.APPROVE;

  const approveDenyAccessRequest: ApproveDenyAccessRequest = {
    action: approveDenyAccessRequestAction,
  };

  const data = await postmanApi.teams.approveDenyAccessRequest(
    123,
    12345,
    approveDenyAccessRequest,
    {
      identifierType: 'scim',
    },
  );

  console.log(data);
})();
```

## manageTeamMemberRoles

Adds or removes member roles in groups, teams, organizations, as well as individual users' roles. **Note:** If you remove a role from a group or team, then all members lose the that role's permissions.

- HTTP Method: `POST`
- Endpoint: `/teams/{teamId}/bulk-members`

**Parameters**

| Name           | Type                                                        | Required | Description                                              |
| :------------- | :---------------------------------------------------------- | :------- | :------------------------------------------------------- |
| body           | [ManageTeamMemberRoles](../models/ManageTeamMemberRoles.md) | ❌       | The request body.                                        |
| teamId         | number                                                      | ✅       | The team's ID.                                           |
| identifierType | string                                                      | ❌       | Use SCIM user and group IDs instead of Postman user IDs. |

**Return Type**

`ManageTeamMemberRolesResponse`

**Example Usage Code Snippet**

```typescript
import {
  ManageTeamMemberRoles,
  ManageTeamMemberRolesAdd,
  ManageTeamMemberRolesRemove,
  OrgsInfo,
  PostmanApi,
  TeamRoles,
  TeamsInfo,
  UserGroupsInfo,
  UsersInfo,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const teamRoles = TeamRoles.TEAM_MANAGER;

  const usersInfo: UsersInfo = {
    _userId_: [teamRoles],
  };

  const userGroupsInfo: UserGroupsInfo = {
    _userGroupId_: [teamRoles],
  };

  const orgsInfo: OrgsInfo = {
    _orgId_: [teamRoles],
  };

  const teamsInfo: TeamsInfo = {
    _teamId_: [teamRoles],
  };

  const manageTeamMemberRolesAdd: ManageTeamMemberRolesAdd = {
    users: usersInfo,
    groups: userGroupsInfo,
    orgs: orgsInfo,
    teams: teamsInfo,
  };

  const manageTeamMemberRolesRemove: ManageTeamMemberRolesRemove = {
    users: usersInfo,
    groups: userGroupsInfo,
    orgs: orgsInfo,
    teams: teamsInfo,
  };

  const manageTeamMemberRoles: ManageTeamMemberRoles = {
    add: manageTeamMemberRolesAdd,
    remove: manageTeamMemberRolesRemove,
  };

  const data = await postmanApi.teams.manageTeamMemberRoles(123, manageTeamMemberRoles, {
    identifierType: 'scim',
  });

  console.log(data);
})();
```

## removeTeamMembers

Removes entities, such as users or organizations, from your Postman team. On success, this returns an HTTP `204 No Content` response.

- HTTP Method: `DELETE`
- Endpoint: `/teams/{teamId}/bulk-members`

**Parameters**

| Name           | Type                                                | Required | Description                                              |
| :------------- | :-------------------------------------------------- | :------- | :------------------------------------------------------- |
| body           | [RemoveTeamMembers](../models/RemoveTeamMembers.md) | ❌       | The request body.                                        |
| teamId         | number                                              | ✅       | The team's ID.                                           |
| identifierType | string                                              | ❌       | Use SCIM user and group IDs instead of Postman user IDs. |

**Example Usage Code Snippet**

```typescript
import {
  PostmanApi,
  RemoveTeamMembers,
  TeamEntityInfo,
  TeamEntityInfoEntityType,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const teamEntityInfoEntityType = TeamEntityInfoEntityType.USER;

  const teamEntityInfoEntityId = 4;

  const teamEntityInfo: TeamEntityInfo = {
    entityType: teamEntityInfoEntityType,
    entityId: teamEntityInfoEntityId,
  };

  const removeTeamMembers: RemoveTeamMembers = {
    entities: [teamEntityInfo],
  };

  const data = await postmanApi.teams.removeTeamMembers(123, removeTeamMembers, {
    identifierType: 'scim',
  });

  console.log(data);
})();
```

## getTeamSettings

Gets a team's settings.

- HTTP Method: `GET`
- Endpoint: `/teams/{teamId}/settings`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| teamId | number | ✅       | The team's ID. |

**Return Type**

`CreateGetTeamSettingsResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.teams.getTeamSettings(123);

  console.log(data);
})();
```

## updateTeamSettings

Updates a team's settings.

- HTTP Method: `PUT`
- Endpoint: `/teams/{teamId}/settings`

**Parameters**

| Name   | Type                                                  | Required | Description       |
| :----- | :---------------------------------------------------- | :------- | :---------------- |
| body   | [UpdateTeamSettings](../models/UpdateTeamSettings.md) | ❌       | The request body. |
| teamId | number                                                | ✅       | The team's ID.    |

**Return Type**

`CreateGetTeamSettingsResponse`

**Example Usage Code Snippet**

```typescript
import {
  PostmanApi,
  RfaForAddCollaborator,
  RfaForAddMember,
  UpdateTeamSettings,
  UpdateTeamSettingsSettings,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const rfaForAddMember = RfaForAddMember.ENABLED;

  const rfaForAddCollaborator = RfaForAddCollaborator.ENABLED;

  const updateTeamSettingsSettings: UpdateTeamSettingsSettings = {
    rfaForAddMember: rfaForAddMember,
    rfaForAddCollaborator: rfaForAddCollaborator,
  };

  const updateTeamSettings: UpdateTeamSettings = {
    settings: updateTeamSettingsSettings,
  };

  const data = await postmanApi.teams.updateTeamSettings(123, updateTeamSettings);

  console.log(data);
})();
```
