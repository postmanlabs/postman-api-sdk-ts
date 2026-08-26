# ComponentsService

A list of all methods in the `ComponentsService` service. Click on the method name to view detailed information about that method.

| Methods                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getAllComponents](#getallcomponents)             | Gets a list of all components in the team's component library.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [createComponent](#createcomponent)               | Creates a new component. The component is created in an active state with an initial draft. Use the POST `/components/{componentId}/versions` endpoint to publish a version.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [getComponent](#getcomponent)                     | Gets information about a component. Use the `include` and `expand` query parameters to return additional information, such as `hasVersions` and the latest published version.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [updateComponent](#updatecomponent)               | Updates a component: - `name` — Rename the component. The new name must be unique within the team. Archived components can't be renamed. - `status` — Changes the component's lifecycle state: - `archive` — Marks the component as read-only. Archived components aren't deleted and can't be edited or published, but their existing versions remain accessible. - `active` — Restores the component. Only active components can be edited and published. **Note:** You can't update a name and archived state in a single call. To change both properties, make separate calls to update the name and status. |
| [getComponentDraft](#getcomponentdraft)           | Gets information about the current working draft of a component, including its content and format. Drafts represent the latest unpublished edits of a component, which may be different from the most recently published version.                                                                                                                                                                                                                                                                                                                                                                                |
| [updateComponentDraft](#updatecomponentdraft)     | Updates a component's draft. Component drafts contain unpublished edits to a component, which may be different from a recently published version. **Note:** You can't update archived components.                                                                                                                                                                                                                                                                                                                                                                                                                |
| [getComponentVersions](#getcomponentversions)     | Gets a list of a component's published versions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [createComponentVersion](#createcomponentversion) | Publishes a new version of a component from the current draft. **Note:** You can't publish a new version of an archived component. Reactivate the component before publishing a new version.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [getComponentVersion](#getcomponentversion)       | Gets a published version of a component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## getAllComponents

Gets a list of all components in the team's component library.

- HTTP Method: `GET`
- Endpoint: `/components`

**Parameters**

| Name        | Type                                            | Required | Description                                                                                                                         |
| :---------- | :---------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| type        | [ComponentType](../models/ComponentType.md)     | ❌       | Filter results by component type.                                                                                                   |
| status      | [ComponentStatus](../models/ComponentStatus.md) | ❌       | Filter results by the component's status.                                                                                           |
| hasVersions | [boolean](../models/boolean.md)                 | ❌       | If true, return only components with published versions.                                                                            |
| include     | string                                          | ❌       | A comma-separated list of additional fields to include. Accepts the `hasVersions`, `latestVersion`, `latestVersion.content` values. |
| expand      | string                                          | ❌       | A comma-separated list of fields to expand. Accepts the `latestVersion` value.                                                      |

**Return Type**

`GetAllComponents`

**Example Usage Code Snippet**

```typescript
import { ComponentHasVersions, ComponentStatus, ComponentType, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const componentType = ComponentType.OAS2;
  const componentStatus = ComponentStatus.ACTIVE;
  const componentHasVersions = true;

  const data = await postmanApi.components.getAllComponents({
    type: componentType,
    status: componentStatus,
    hasVersions: componentHasVersions,
    include: 'hasVersions,latestVersion',
    expand: 'latestVersion',
  });

  console.log(data);
})();
```

## createComponent

Creates a new component. The component is created in an active state with an initial draft. Use the POST `/components/{componentId}/versions` endpoint to publish a version.

- HTTP Method: `POST`
- Endpoint: `/components`

**Parameters**

| Name | Type                                            | Required | Description       |
| :--- | :---------------------------------------------- | :------- | :---------------- |
| body | [CreateComponent](../models/CreateComponent.md) | ✅       | The request body. |

**Return Type**

`CreateComponentResponse`

**Example Usage Code Snippet**

```typescript
import {
  ComponentContentFormat,
  ComponentType,
  CreateComponent,
  PostmanApi,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const componentType = ComponentType.OAS2;

  const componentContentFormat = ComponentContentFormat.JSON;

  const createComponent: CreateComponent = {
    name: 'example-component',
    type: componentType,
    content: 'openapi: 3.0.0\ninfo:\n  title: Example API\n  version: 1.0.0',
    format: componentContentFormat,
  };

  const data = await postmanApi.components.createComponent(createComponent);

  console.log(data);
})();
```

## getComponent

Gets information about a component. Use the `include` and `expand` query parameters to return additional information, such as `hasVersions` and the latest published version.

- HTTP Method: `GET`
- Endpoint: `/components/{componentId}`

**Parameters**

| Name        | Type   | Required | Description                                                                                                                         |
| :---------- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| componentId | string | ✅       | The component's ID.                                                                                                                 |
| include     | string | ❌       | A comma-separated list of additional fields to include. Accepts the `hasVersions`, `latestVersion`, `latestVersion.content` values. |
| expand      | string | ❌       | A comma-separated list of fields to expand. Accepts the `latestVersion` value.                                                      |

**Return Type**

`GetComponent`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.components.getComponent('01KT964C30J3DPJQKEACZH39N8', {
    include: 'hasVersions,latestVersion',
    expand: 'latestVersion',
  });

  console.log(data);
})();
```

## updateComponent

Updates a component: - `name` — Rename the component. The new name must be unique within the team. Archived components can't be renamed. - `status` — Changes the component's lifecycle state: - `archive` — Marks the component as read-only. Archived components aren't deleted and can't be edited or published, but their existing versions remain accessible. - `active` — Restores the component. Only active components can be edited and published. **Note:** You can't update a name and archived state in a single call. To change both properties, make separate calls to update the name and status.

- HTTP Method: `PATCH`
- Endpoint: `/components/{componentId}`

**Parameters**

| Name        | Type                                            | Required | Description         |
| :---------- | :---------------------------------------------- | :------- | :------------------ |
| body        | [UpdateComponent](../models/UpdateComponent.md) | ❌       | The request body.   |
| componentId | string                                          | ✅       | The component's ID. |

**Return Type**

`UpdateComponentResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApi, UpdateComponent } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const updateComponent = [];

  const data = await postmanApi.components.updateComponent(
    '01KT964C30J3DPJQKEACZH39N8',
    updateComponent,
  );

  console.log(data);
})();
```

## getComponentDraft

Gets information about the current working draft of a component, including its content and format. Drafts represent the latest unpublished edits of a component, which may be different from the most recently published version.

- HTTP Method: `GET`
- Endpoint: `/components/{componentId}/drafts`

**Parameters**

| Name        | Type   | Required | Description         |
| :---------- | :----- | :------- | :------------------ |
| componentId | string | ✅       | The component's ID. |

**Return Type**

`GetComponentDraft`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.components.getComponentDraft('01KT964C30J3DPJQKEACZH39N8');

  console.log(data);
})();
```

## updateComponentDraft

Updates a component's draft. Component drafts contain unpublished edits to a component, which may be different from a recently published version. **Note:** You can't update archived components.

- HTTP Method: `PATCH`
- Endpoint: `/components/{componentId}/drafts`

**Parameters**

| Name        | Type                                                      | Required | Description         |
| :---------- | :-------------------------------------------------------- | :------- | :------------------ |
| body        | [UpdateComponentDraft](../models/UpdateComponentDraft.md) | ❌       | The request body.   |
| componentId | string                                                    | ✅       | The component's ID. |

**Return Type**

`UpdateComponentDraftResponse`

**Example Usage Code Snippet**

```typescript
import { ComponentContentFormat, PostmanApi, UpdateComponentDraft } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const componentContentFormat = ComponentContentFormat.JSON;

  const updateComponentDraft: UpdateComponentDraft = {
    content: 'openapi: 3.0.0\ninfo:\n  title: Example API\n  version: 1.0.0',
    format: componentContentFormat,
  };

  const data = await postmanApi.components.updateComponentDraft(
    '01KT964C30J3DPJQKEACZH39N8',
    updateComponentDraft,
  );

  console.log(data);
})();
```

## getComponentVersions

Gets a list of a component's published versions.

- HTTP Method: `GET`
- Endpoint: `/components/{componentId}/versions`

**Parameters**

| Name        | Type   | Required | Description                                                                          |
| :---------- | :----- | :------- | :----------------------------------------------------------------------------------- |
| componentId | string | ✅       | The component's ID.                                                                  |
| include     | string | ❌       | A comma-separated list of additional fields to include. Accepts the `content` value. |

**Return Type**

`GetComponentVersions`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.components.getComponentVersions('01KT964C30J3DPJQKEACZH39N8', {
    include: 'content',
  });

  console.log(data);
})();
```

## createComponentVersion

Publishes a new version of a component from the current draft. **Note:** You can't publish a new version of an archived component. Reactivate the component before publishing a new version.

- HTTP Method: `POST`
- Endpoint: `/components/{componentId}/versions`

**Parameters**

| Name        | Type                                                          | Required | Description         |
| :---------- | :------------------------------------------------------------ | :------- | :------------------ |
| body        | [CreateComponentVersion](../models/CreateComponentVersion.md) | ✅       | The request body.   |
| componentId | string                                                        | ✅       | The component's ID. |

**Return Type**

`CreateComponentVersionResponse`

**Example Usage Code Snippet**

```typescript
import {
  CreateComponentVersion,
  CreateComponentVersionSource,
  PostmanApi,
  SourceType,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const sourceType = SourceType.DRAFT;

  const createComponentVersionSource: CreateComponentVersionSource = {
    type: sourceType,
  };

  const createComponentVersion: CreateComponentVersion = {
    label: '1.0.0',
    source: createComponentVersionSource,
  };

  const data = await postmanApi.components.createComponentVersion(
    '01KT964C30J3DPJQKEACZH39N8',
    createComponentVersion,
  );

  console.log(data);
})();
```

## getComponentVersion

Gets a published version of a component.

- HTTP Method: `GET`
- Endpoint: `/components/{componentId}/versions/{versionId}`

**Parameters**

| Name        | Type   | Required | Description                                                                          |
| :---------- | :----- | :------- | :----------------------------------------------------------------------------------- |
| componentId | string | ✅       | The component's ID.                                                                  |
| versionId   | string | ✅       | The component version's ID.                                                          |
| include     | string | ❌       | A comma-separated list of additional fields to include. Accepts the `content` value. |

**Return Type**

`ComponentVersionData`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.components.getComponentVersion(
    '01KT964C30J3DPJQKEACZH39N8',
    '01KT9NBTW5GYETHG6V0HNPAPYV',
    {
      include: 'content',
    },
  );

  console.log(data);
})();
```
