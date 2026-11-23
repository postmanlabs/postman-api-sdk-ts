# ApiGovernanceService

A list of all methods in the `ApiGovernanceService` service. Click on the method name to view detailed information about that method.

| Methods                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getAllCustomFunctions](#getallcustomfunctions)                     | Gets a list of the team's custom functions. The response doesn't include function content.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [createCustomFunction](#createcustomfunction)                       | Creates a new custom function for the team.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [getCustomFunction](#getcustomfunction)                             | Gets information about a custom function. By default, the response only returns the custom function's metadata. To include custom function contents in the response, pass the `include` query parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [updateCustomFunction](#updatecustomfunction)                       | Updates a custom function. Only the fields present in the request body are updated. If `content` is provided, it replaces the entire contents of the custom function.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [deleteCustomFunction](#deletecustomfunction)                       | Deletes a custom function. On success, this returns a `204 No Content` response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [getAllGovernanceGroups](#getallgovernancegroups)                   | Gets a list of the team's governance groups.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [createGovernanceGroup](#creategovernancegroup)                     | Creates a custom governance group for the team.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [updateGovernanceGroup](#updategovernancegroup)                     | Updates a governance group's name or description. **Note:** Postman-managed governance groups (`type: system`) can't be updated and return an HTTP `403 Forbidden` response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [deleteGovernanceGroup](#deletegovernancegroup)                     | Deletes a governance group. This also removes the group's workspace assignments and any ruleset assignments targeting the group. Workspaces and rulesets aren't deleted. On success, this returns an HTTP `204 No Content` response. **Note:** Postman-managed governance groups (`type: system`) can't be deleted and return an HTTP `403 Forbidden` response.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [getGovernanceGroupAssignments](#getgovernancegroupassignments)     | Gets the rulesets assigned to a governance group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [getGovernanceGroupWorkspaces](#getgovernancegroupworkspaces)       | Gets all workspaces assigned to the governance group. **Note:** Postman-managed governance groups (`type: system`) are read-only through this API. Listing a system group's workspaces returns an HTTP `403 Forbidden` response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [updateGovernanceGroupWorkspaces](#updategovernancegroupworkspaces) | Assigns workspaces to and unassigns workspaces from a governance group. On success, this returns an empty object. **Note:** - Postman-managed governance groups (`type: system`) are read-only through this API. Bulk workspace assignments against a system group return an HTTP `403 Forbidden` response. - If any workspace in the batch can't be applied, no changes are made and the entire request fails with an HTTP `409 Conflict` response.                                                                                                                                                                                                                                                                                                                                                                       |
| [getAllRulesets](#getallrulesets)                                   | Gets a list of the team's rulesets. The response includes both team-owned rulesets (`custom`) and Postman-managed system rulesets (`system`). This endpoint doesn't include ruleset content.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [createRuleset](#createruleset)                                     | Creates a new ruleset for the team.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [getRuleset](#getruleset)                                           | Gets information about a ruleset. By default, the response only returns the ruleset's metadata. To include ruleset contents in the response, pass the `include` query parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [updateRuleset](#updateruleset)                                     | Updates a ruleset. Only the fields present in the request body are updated. If `content` is provided, it replaces the entire contents of the ruleset. **Note:** Postman-managed system rulesets (`type: system`) can't be updated and return an HTTP `403 Forbidden` response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [deleteRuleset](#deleteruleset)                                     | Deletes a ruleset. On success, this returns an HTTP `204 No Content` response. **Note:** Postman-managed system rulesets (`type: system`) can't be deleted and return an HTTP `403 Forbidden` response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [getRulesetAssignments](#getrulesetassignments)                     | Gets a ruleset's governance group assignments.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [createRulesetAssignment](#createrulesetassignment)                 | Assigns a ruleset to a governance group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [deleteRulesetAssignment](#deleterulesetassignment)                 | Unassigns a ruleset from a governance group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [schemaSecurityValidation](#schemasecurityvalidation)               | **This endpoint is deprecated.** Performs an analysis on the given definition and returns any issues based on your [predefined rulesets](https://learning.postman.com/docs/api-governance/configurable-rules/configurable-rules-overview/). This endpoint can help you understand the violations' impact and offers solutions to help you resolve any errors. You can include this endpoint to your CI/CD process to automate schema validation. **Note:** - The maximum allowed size of the definition is 10 MB. - You must [import and enable](https://learning.postman.com/docs/api-governance/configurable-rules/configuring-api-governance-rules/) Postman's [OWASP security rules](https://postman.postman.co/api-governance/libraries/postman_owasp/view) for this endpoint to return any security rule violations. |

## getAllCustomFunctions

Gets a list of the team's custom functions. The response doesn't include function content.

- HTTP Method: `GET`
- Endpoint: `/custom-functions`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                |
| :----- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| cursor | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| limit  | number | ❌       | The maximum number of results to return per page.                                                                                          |

**Return Type**

`CustomFunctionList`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.apiGovernance.getAllCustomFunctions({
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    limit: 10,
  });

  console.log(data);
})();
```

## createCustomFunction

Creates a new custom function for the team.

- HTTP Method: `POST`
- Endpoint: `/custom-functions`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | [CustomFunctionCreate](../models/CustomFunctionCreate.md) | ✅       | The request body. |

**Return Type**

`WriteResult`

**Example Usage Code Snippet**

```typescript
import { CustomFunctionCreate, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const customFunctionCreate: CustomFunctionCreate = {
    path: 'functions/checkResourceNesting.js',
    description: 'Custom Spectral function.',
    content: 'export default (input) => { return []; };',
  };

  const data = await postmanApi.apiGovernance.createCustomFunction(customFunctionCreate);

  console.log(data);
})();
```

## getCustomFunction

Gets information about a custom function. By default, the response only returns the custom function's metadata. To include custom function contents in the response, pass the `include` query parameter.

- HTTP Method: `GET`
- Endpoint: `/custom-functions/{customFunctionId}`

**Parameters**

| Name             | Type                                                      | Required | Description                                                                                                                                        |
| :--------------- | :-------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| customFunctionId | string                                                    | ✅       | The custom function's ID.                                                                                                                          |
| include          | [ApiGovernanceInclude](../models/ApiGovernanceInclude.md) | ❌       | The related fields to include in the response. Currently only `content` is supported. Omit this parameter to receive only the resource's metadata. |

**Return Type**

`CustomFunction`

**Example Usage Code Snippet**

```typescript
import { ApiGovernanceInclude, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const apiGovernanceInclude = ApiGovernanceInclude.CONTENT;

  const data = await postmanApi.apiGovernance.getCustomFunction('01JCUSTOMFN0123456789ABCDE', {
    include: apiGovernanceInclude,
  });

  console.log(data);
})();
```

## updateCustomFunction

Updates a custom function. Only the fields present in the request body are updated. If `content` is provided, it replaces the entire contents of the custom function.

- HTTP Method: `PATCH`
- Endpoint: `/custom-functions/{customFunctionId}`

**Parameters**

| Name             | Type                                                      | Required | Description               |
| :--------------- | :-------------------------------------------------------- | :------- | :------------------------ |
| body             | [CustomFunctionUpdate](../models/CustomFunctionUpdate.md) | ✅       | The request body.         |
| customFunctionId | string                                                    | ✅       | The custom function's ID. |

**Return Type**

`WriteResult`

**Example Usage Code Snippet**

```typescript
import { CustomFunctionUpdate, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const customFunctionUpdate: CustomFunctionUpdate = {
    path: 'functions/checkResourceNestingV2.js',
    description: 'Updated custom Spectral function.',
    content: 'export default (input) => { return []; };',
  };

  const data = await postmanApi.apiGovernance.updateCustomFunction(
    '01JCUSTOMFN0123456789ABCDE',
    customFunctionUpdate,
  );

  console.log(data);
})();
```

## deleteCustomFunction

Deletes a custom function. On success, this returns a `204 No Content` response.

- HTTP Method: `DELETE`
- Endpoint: `/custom-functions/{customFunctionId}`

**Parameters**

| Name             | Type   | Required | Description               |
| :--------------- | :----- | :------- | :------------------------ |
| customFunctionId | string | ✅       | The custom function's ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.apiGovernance.deleteCustomFunction('01JCUSTOMFN0123456789ABCDE');

  console.log(data);
})();
```

## getAllGovernanceGroups

Gets a list of the team's governance groups.

- HTTP Method: `GET`
- Endpoint: `/governance-groups`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                |
| :----- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| cursor | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| limit  | number | ❌       | The maximum number of results to return per page.                                                                                          |

**Return Type**

`GovernanceGroupList`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.apiGovernance.getAllGovernanceGroups({
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    limit: 10,
  });

  console.log(data);
})();
```

## createGovernanceGroup

Creates a custom governance group for the team.

- HTTP Method: `POST`
- Endpoint: `/governance-groups`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [GovernanceGroupCreate](../models/GovernanceGroupCreate.md) | ✅       | The request body. |

**Return Type**

`WriteResult`

**Example Usage Code Snippet**

```typescript
import { GovernanceGroupCreate, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const governanceGroupCreate: GovernanceGroupCreate = {
    name: 'Payments workspaces',
    description: 'All payments-related workspaces.',
  };

  const data = await postmanApi.apiGovernance.createGovernanceGroup(governanceGroupCreate);

  console.log(data);
})();
```

## updateGovernanceGroup

Updates a governance group's name or description. **Note:** Postman-managed governance groups (`type: system`) can't be updated and return an HTTP `403 Forbidden` response.

- HTTP Method: `PATCH`
- Endpoint: `/governance-groups/{groupId}`

**Parameters**

| Name    | Type                                                        | Required | Description                |
| :------ | :---------------------------------------------------------- | :------- | :------------------------- |
| body    | [GovernanceGroupUpdate](../models/GovernanceGroupUpdate.md) | ✅       | The request body.          |
| groupId | string                                                      | ✅       | The governance group's ID. |

**Return Type**

`WriteResult`

**Example Usage Code Snippet**

```typescript
import { GovernanceGroupUpdate, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const governanceGroupUpdate: GovernanceGroupUpdate = {
    name: 'Payments workspaces (v2)',
    description: 'Updated description.',
  };

  const data = await postmanApi.apiGovernance.updateGovernanceGroup(
    '01JWSGROUP0123456789ABCDEF',
    governanceGroupUpdate,
  );

  console.log(data);
})();
```

## deleteGovernanceGroup

Deletes a governance group. This also removes the group's workspace assignments and any ruleset assignments targeting the group. Workspaces and rulesets aren't deleted. On success, this returns an HTTP `204 No Content` response. **Note:** Postman-managed governance groups (`type: system`) can't be deleted and return an HTTP `403 Forbidden` response.

- HTTP Method: `DELETE`
- Endpoint: `/governance-groups/{groupId}`

**Parameters**

| Name    | Type   | Required | Description                |
| :------ | :----- | :------- | :------------------------- |
| groupId | string | ✅       | The governance group's ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.apiGovernance.deleteGovernanceGroup('01JWSGROUP0123456789ABCDEF');

  console.log(data);
})();
```

## getGovernanceGroupAssignments

Gets the rulesets assigned to a governance group.

- HTTP Method: `GET`
- Endpoint: `/governance-groups/{groupId}/assignments`

**Parameters**

| Name    | Type   | Required | Description                |
| :------ | :----- | :------- | :------------------------- |
| groupId | string | ✅       | The governance group's ID. |

**Return Type**

`RulesetAssignmentList`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.apiGovernance.getGovernanceGroupAssignments(
    '01JWSGROUP0123456789ABCDEF',
  );

  console.log(data);
})();
```

## getGovernanceGroupWorkspaces

Gets all workspaces assigned to the governance group. **Note:** Postman-managed governance groups (`type: system`) are read-only through this API. Listing a system group's workspaces returns an HTTP `403 Forbidden` response.

- HTTP Method: `GET`
- Endpoint: `/governance-groups/{groupId}/workspaces`

**Parameters**

| Name    | Type   | Required | Description                                                                                                                                |
| :------ | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| groupId | string | ✅       | The governance group's ID.                                                                                                                 |
| cursor  | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| limit   | number | ❌       | The maximum number of results to return per page.                                                                                          |

**Return Type**

`WorkspaceAssignmentList`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.apiGovernance.getGovernanceGroupWorkspaces(
    '01JWSGROUP0123456789ABCDEF',
    {
      cursor:
        'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
      limit: 10,
    },
  );

  console.log(data);
})();
```

## updateGovernanceGroupWorkspaces

Assigns workspaces to and unassigns workspaces from a governance group. On success, this returns an empty object. **Note:** - Postman-managed governance groups (`type: system`) are read-only through this API. Bulk workspace assignments against a system group return an HTTP `403 Forbidden` response. - If any workspace in the batch can't be applied, no changes are made and the entire request fails with an HTTP `409 Conflict` response.

- HTTP Method: `POST`
- Endpoint: `/governance-groups/{groupId}/bulk-workspaces`

**Parameters**

| Name    | Type                                                        | Required | Description                |
| :------ | :---------------------------------------------------------- | :------- | :------------------------- |
| body    | [BulkWorkspacesRequest](../models/BulkWorkspacesRequest.md) | ✅       | The request body.          |
| groupId | string                                                      | ✅       | The governance group's ID. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { BulkWorkspacesRequest, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const bulkWorkspacesRequest: BulkWorkspacesRequest = {
    create: ['create'],
    delete: ['delete'],
  };

  const data = await postmanApi.apiGovernance.updateGovernanceGroupWorkspaces(
    '01JWSGROUP0123456789ABCDEF',
    bulkWorkspacesRequest,
  );

  console.log(data);
})();
```

## getAllRulesets

Gets a list of the team's rulesets. The response includes both team-owned rulesets (`custom`) and Postman-managed system rulesets (`system`). This endpoint doesn't include ruleset content.

- HTTP Method: `GET`
- Endpoint: `/rulesets`

**Parameters**

| Name   | Type   | Required | Description                                                                                                                                |
| :----- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| cursor | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| limit  | number | ❌       | The maximum number of results to return per page.                                                                                          |

**Return Type**

`RulesetList`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.apiGovernance.getAllRulesets({
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    limit: 10,
  });

  console.log(data);
})();
```

## createRuleset

Creates a new ruleset for the team.

- HTTP Method: `POST`
- Endpoint: `/rulesets`

**Parameters**

| Name | Type                                        | Required | Description       |
| :--- | :------------------------------------------ | :------- | :---------------- |
| body | [RulesetCreate](../models/RulesetCreate.md) | ✅       | The request body. |

**Return Type**

`WriteResult`

**Example Usage Code Snippet**

```typescript
import {
  PostmanApi,
  RulesetCreate,
  RulesetCreateEngine,
  RulesetCreateFormat,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const rulesetCreateEngine = RulesetCreateEngine.SPECTRAL;

  const rulesetCreateFormat = RulesetCreateFormat.SPECTRAL;

  const rulesetCreate: RulesetCreate = {
    name: 'api-style-guide',
    description: 'Company-wide rules for API specifications.',
    engine: rulesetCreateEngine,
    format: rulesetCreateFormat,
    content:
      'formats:\n  - oas2\n  - oas3\n  - aas2\n  - aas3\nrules:\n  operation-operationId: true',
  };

  const data = await postmanApi.apiGovernance.createRuleset(rulesetCreate);

  console.log(data);
})();
```

## getRuleset

Gets information about a ruleset. By default, the response only returns the ruleset's metadata. To include ruleset contents in the response, pass the `include` query parameter.

- HTTP Method: `GET`
- Endpoint: `/rulesets/{rulesetId}`

**Parameters**

| Name      | Type                                                      | Required | Description                                                                                                                                        |
| :-------- | :-------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| rulesetId | string                                                    | ✅       | The ruleset's ID.                                                                                                                                  |
| include   | [ApiGovernanceInclude](../models/ApiGovernanceInclude.md) | ❌       | The related fields to include in the response. Currently only `content` is supported. Omit this parameter to receive only the resource's metadata. |

**Return Type**

`Ruleset`

**Example Usage Code Snippet**

```typescript
import { ApiGovernanceInclude, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const apiGovernanceInclude = ApiGovernanceInclude.CONTENT;

  const data = await postmanApi.apiGovernance.getRuleset('01JABCDEF0123456789ABCDEFG', {
    include: apiGovernanceInclude,
  });

  console.log(data);
})();
```

## updateRuleset

Updates a ruleset. Only the fields present in the request body are updated. If `content` is provided, it replaces the entire contents of the ruleset. **Note:** Postman-managed system rulesets (`type: system`) can't be updated and return an HTTP `403 Forbidden` response.

- HTTP Method: `PATCH`
- Endpoint: `/rulesets/{rulesetId}`

**Parameters**

| Name      | Type                                        | Required | Description       |
| :-------- | :------------------------------------------ | :------- | :---------------- |
| body      | [RulesetUpdate](../models/RulesetUpdate.md) | ✅       | The request body. |
| rulesetId | string                                      | ✅       | The ruleset's ID. |

**Return Type**

`WriteResult`

**Example Usage Code Snippet**

```typescript
import { PostmanApi, RulesetUpdate } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const rulesetUpdate: RulesetUpdate = {
    name: 'API_Style_Guide_v2',
    description: 'Updated company-wide rules for API specifications.',
    content: 'rules:\n  operation-operationId: true',
  };

  const data = await postmanApi.apiGovernance.updateRuleset(
    '01JABCDEF0123456789ABCDEFG',
    rulesetUpdate,
  );

  console.log(data);
})();
```

## deleteRuleset

Deletes a ruleset. On success, this returns an HTTP `204 No Content` response. **Note:** Postman-managed system rulesets (`type: system`) can't be deleted and return an HTTP `403 Forbidden` response.

- HTTP Method: `DELETE`
- Endpoint: `/rulesets/{rulesetId}`

**Parameters**

| Name      | Type   | Required | Description       |
| :-------- | :----- | :------- | :---------------- |
| rulesetId | string | ✅       | The ruleset's ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.apiGovernance.deleteRuleset('01JABCDEF0123456789ABCDEFG');

  console.log(data);
})();
```

## getRulesetAssignments

Gets a ruleset's governance group assignments.

- HTTP Method: `GET`
- Endpoint: `/rulesets/{rulesetId}/assignments`

**Parameters**

| Name      | Type   | Required | Description       |
| :-------- | :----- | :------- | :---------------- |
| rulesetId | string | ✅       | The ruleset's ID. |

**Return Type**

`RulesetAssignmentList`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.apiGovernance.getRulesetAssignments('01JABCDEF0123456789ABCDEFG');

  console.log(data);
})();
```

## createRulesetAssignment

Assigns a ruleset to a governance group.

- HTTP Method: `POST`
- Endpoint: `/rulesets/{rulesetId}/assignments`

**Parameters**

| Name      | Type                                                            | Required | Description       |
| :-------- | :-------------------------------------------------------------- | :------- | :---------------- |
| body      | [RulesetAssignmentCreate](../models/RulesetAssignmentCreate.md) | ✅       | The request body. |
| rulesetId | string                                                          | ✅       | The ruleset's ID. |

**Return Type**

`RulesetAssignmentSummary`

**Example Usage Code Snippet**

```typescript
import {
  PostmanApi,
  RulesetAssignmentCreate,
  RulesetAssignmentCreateTargetType,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const rulesetAssignmentCreateTargetType = RulesetAssignmentCreateTargetType.GOVERNANCE_GROUP;

  const rulesetAssignmentCreate: RulesetAssignmentCreate = {
    targetType: rulesetAssignmentCreateTargetType,
    targetId: '01JWSGROUP0123456789ABCDEF',
  };

  const data = await postmanApi.apiGovernance.createRulesetAssignment(
    '01JABCDEF0123456789ABCDEFG',
    rulesetAssignmentCreate,
  );

  console.log(data);
})();
```

## deleteRulesetAssignment

Unassigns a ruleset from a governance group.

- HTTP Method: `DELETE`
- Endpoint: `/rulesets/{rulesetId}/assignments`

**Parameters**

| Name       | Type                                  | Required | Description                                                                 |
| :--------- | :------------------------------------ | :------- | :-------------------------------------------------------------------------- |
| rulesetId  | string                                | ✅       | The ruleset's ID.                                                           |
| targetType | [TargetType](../models/TargetType.md) | ✅       | The assignment target type. Currently only `governance_group` is supported. |
| targetId   | string                                | ✅       | The target governance group's ID.                                           |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { PostmanApi, TargetType } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const targetType = TargetType.GOVERNANCE_GROUP;

  const data = await postmanApi.apiGovernance.deleteRulesetAssignment(
    '01JABCDEF0123456789ABCDEFG',
    {
      targetType: targetType,
      targetId: '01JWSGROUP0123456789ABCDEF',
    },
  );

  console.log(data);
})();
```

## schemaSecurityValidation

**This endpoint is deprecated.** Performs an analysis on the given definition and returns any issues based on your [predefined rulesets](https://learning.postman.com/docs/api-governance/configurable-rules/configurable-rules-overview/). This endpoint can help you understand the violations' impact and offers solutions to help you resolve any errors. You can include this endpoint to your CI/CD process to automate schema validation. **Note:** - The maximum allowed size of the definition is 10 MB. - You must [import and enable](https://learning.postman.com/docs/api-governance/configurable-rules/configuring-api-governance-rules/) Postman's [OWASP security rules](https://postman.postman.co/api-governance/libraries/postman_owasp/view) for this endpoint to return any security rule violations.

- HTTP Method: `POST`
- Endpoint: `/security/api-validation`

**Parameters**

| Name | Type                                                                    | Required | Description       |
| :--- | :---------------------------------------------------------------------- | :------- | :---------------- |
| body | [SchemaValidationRequestBody](../models/SchemaValidationRequestBody.md) | ❌       | The request body. |

**Return Type**

`SchemaSecurityValidationOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  PostmanApi,
  SchemaLanguage,
  SchemaType,
  SchemaValidationRequestBody,
  SchemaValidationRequestBodySchema,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const schemaLanguage = SchemaLanguage.JSON;

  const schemaType = SchemaType.OPENAPI3;

  const schemaValidationRequestBodySchema: SchemaValidationRequestBodySchema = {
    language: schemaLanguage,
    schema:
      '{"openapi":"3.0.0","info":{"version":"1","title":"temp","license":{"name":"MIT"}},"servers":[{"url":"https://petstore.swagger.io/v1"}],"paths":{"/user":{"get":{"summary":"Details about a user","operationId":"listUser","tags":["user"],"parameters":[{"name":"id","in":"query","description":"ID of the user","required":true,"schema":{"type":"integer","format":"int32"}}],"responses":{"200":{"description":"Details about a user","headers":{"x-next":{"description":"A link to the next page of responses","schema":{"type":"string"}}},"content":{"application/json":{"schema":{$ref:"#/components/schemas/User"}}}},"default":{"description":"unexpected error","content":{"application/json":{"schema":{$ref:"#/components/schemas/Error"}}}}}}}},"components":{"schemas":{"User":{"type":"object","required":["id","name"],"properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"},"tag":{"type":"string"}}},"Error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"integer","format":"int32"},"message":{"type":"string"}}}},"securitySchemes":{"BasicAuth":{"type":"http","scheme":"basic"}}},"security":[{"BasicAuth":[]}]}',
    type: schemaType,
  };

  const schemaValidationRequestBody: SchemaValidationRequestBody = {
    schema: schemaValidationRequestBodySchema,
  };

  const data = await postmanApi.apiGovernance.schemaSecurityValidation(schemaValidationRequestBody);

  console.log(data);
})();
```
