# CollectionsService

A list of all methods in the `CollectionsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [asyncMergePullCollectionFork](#asyncmergepullcollectionfork)             | [Merges](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#merge-changes-from-a-fork) a forked (source) collection and its parent (destination) collection asynchronously. To pull changes into a fork, pass the forked collection's ID as the `destination` value and the parent collection ID as the `source` value. The response returns a task `id` value, which you can use to track the merge's status with the GET `/collection-merges-tasks/{taskId}` endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [asyncMergePullCollectionTaskStatus](#asyncmergepullcollectiontaskstatus) | Gets the status of a collection's merge or a pull changes task. **Note:** After a merge's success or failure, the task's status is only available for a period of 24 hours. Afterwards, this endpoint returns an HTTP `404 Not Found` response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [getCollections](#getcollections)                                         | Gets all of your [collections](https://www.postman.com/docs/collections). The response includes all of your subscribed collections. **Note:** - It's recommended that you use pagination with this endpoint. Pagination improves endpoint performance. Unpaginated calls are considered deprecated and are subject to change. - Filtering with the `name` parameter when you also pass the `limit` and `offset` parameters is not supported. - If you pass an invalid workspace ID for the `workspace` query parameter, this endpoint returns an HTTP `200 OK` response with an empty array.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [createCollection](#createcollection)                                     | Creates a collection using the [Postman Collection v2.1.0 schema format](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). **Note:** If you do not include the `workspace` query parameter, the system creates the collection in the oldest personal Internal workspace you own.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [getCollectionsForkedByUser](#getcollectionsforkedbyuser)                 | Gets a list of all the authenticated user's forked collections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [createCollectionFork](#createcollectionfork)                             | Creates a [fork](https://learning.postman.com/docs/collaborating-in-postman/version-control/#creating-a-fork) from an existing collection into a workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [mergeCollectionFork](#mergecollectionfork)                               | **This endpoint is deprecated.** Merges a forked collection back into its parent collection. You must have the [Editor role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) for the collection to merge a fork.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [getCollection](#getcollection)                                           | Gets information about a collection. For a complete list of this endpoint's possible values, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [putCollection](#putcollection)                                           | Replaces the contents of a collection using the [Postman Collection v2.1.0 schema format](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). Include the collection's ID values in the request body. If you do not, the endpoint removes the existing items and creates new items. - To perform an update asynchronously, use the `Prefer` header with the `respond-async` value. When performing an async update, this endpoint returns a HTTP `202 Accepted` response. - For a complete list of properties and information, see the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). - For protocol profile behavior, refer to Postman's [Protocol Profile Behavior documentation](https://github.com/postmanlabs/postman-runtime/blob/develop/docs/protocol-profile-behavior.md). **Note:** - The maximum collection size this endpoint accepts cannot exceed 100 MB. - Use the GET `/collection-updates-tasks/{taskId}` endpoint to get the collection's update status when performing an asynchronous update. - If you don't include the collection items' ID values from the request body, the endpoint **removes** the existing items and recreates the items with new ID values. - To copy another collection's contents to the given collection, remove all ID values before you pass it in this endpoint. If you do not, this endpoint returns an error. These values include the `id`, `uid`, and `postman_id` values. |
| [patchCollection](#patchcollection)                                       | Updates specific collection information, such as its name, events, or its variables. For more information, see the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [deleteCollection](#deletecollection)                                     | Deletes a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [getCollectionComments](#getcollectioncomments)                           | Gets all comments left by users in a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [createCollectionComment](#createcollectioncomment)                       | Creates a comment on a collection. To create a reply on an existing comment, include the `threadId` property in the request body. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [updateCollectionComment](#updatecollectioncomment)                       | Updates a comment on a collection. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [deleteCollectionComment](#deletecollectioncomment)                       | Deletes a comment from a collection. On success, this returns an HTTP `204 No Content` response. **Note:** Deleting the first comment of a thread deletes all the comments in the thread.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [duplicateCollection](#duplicatecollection)                               | Creates a duplicate of the given collection in another workspace. Use the GET `/collection-duplicate-tasks/{taskId}` endpoint to get the duplication task's current status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [getCollectionForks](#getcollectionforks)                                 | Gets a collection's forked collections. The response returns data for each fork, such as the fork's ID, the user who forked it, and the fork's creation date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [publishDocumentation](#publishdocumentation)                             | Publishes a collection's documentation. This makes it publicly available to anyone with the link to the documentation. **Note:** - Your [Postman plan](https://www.postman.com/pricing/) impacts your use of these endpoints: - For **Free** and **Solo** users, you must have permissions to edit the collection. - If [API Governance and Security](https://learning.postman.com/docs/api-governance/configurable-rules/configurable-rules-overview/) is enabled for your [**Enterprise**](https://www.postman.com/pricing/) team, only users with the [Community Manager role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can publish documentation. - Publishing is only supported for collections with HTTP requests. - You cannot publish a collection added to an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [unpublishDocumentation](#unpublishdocumentation)                         | Unpublishes a collection's documentation. On success, this returns an HTTP `204 No Content` response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [pullCollectionChanges](#pullcollectionchanges)                           | Pulls the changes from a parent (source) collection into the forked collection. In the endpoint's response: - The `destinationId` is the ID of the forked collection. - The `sourceId` is the ID of the source collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [getCollectionPullRequests](#getcollectionpullrequests)                   | Gets information about a collection's pull requests, such as the source and destination IDs, status of the pull requests, and a URL link to the pull requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [createCollectionPullRequest](#createcollectionpullrequest)               | Creates a pull request for a forked collection into its parent collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [getCollectionRoles](#getcollectionroles)                                 | Gets information about all roles in a collection. The response returns the IDs of all users, teams, and groups with access to view or edit the collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [updateCollectionRoles](#updatecollectionroles)                           | Updates the roles of users, groups, or teams in a collection. On success, this returns an HTTP `204 No Content` response. **Note:** - Only users assigned the Editor [role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) in the collection can use this endpoint. - This endpoint does not support the external [Partner or Guest roles](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [getSourceCollectionStatus](#getsourcecollectionstatus)                   | Checks whether there is a change between the forked collection and its parent (source) collection. If the value of the `isSourceAhead` property is `true` in the response, then there is a difference between the forked collection and its source collection. **Note:** This endpoint may take a few minutes to return an updated `isSourceAhead` status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [transformCollectionToOpenApi](#transformcollectiontoopenapi)             | Transforms an existing Postman Collection into a stringified OpenAPI definition. **Note:** This does not create an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [transferCollectionFolders](#transfercollectionfolders)                   | Copies or moves folders into a collection or folder.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [transferCollectionRequests](#transfercollectionrequests)                 | Copies or moves requests into a collection or folder.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [transferCollectionResponses](#transfercollectionresponses)               | Copies or moves responses into a request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [getDuplicateCollectionTaskStatus](#getduplicatecollectiontaskstatus)     | Gets the status of a collection duplication task.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [getCollectionUpdatesTasks](#getcollectionupdatestasks)                   | Gets the status of an asynchronous collection update task.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## asyncMergePullCollectionFork

[Merges](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#merge-changes-from-a-fork) a forked (source) collection and its parent (destination) collection asynchronously. To pull changes into a fork, pass the forked collection's ID as the `destination` value and the parent collection ID as the `source` value. The response returns a task `id` value, which you can use to track the merge's status with the GET `/collection-merges-tasks/{taskId}` endpoint.

- HTTP Method: `PUT`
- Endpoint: `/collection-merges`

**Parameters**

| Name | Type                                                                  | Required | Description       |
| :--- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body | [MergePullCollectionChanges](../models/MergePullCollectionChanges.md) | ❌       | The request body. |

**Return Type**

`AsyncMergePullCollectionForkOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  MergePullCollectionChanges,
  MergePullCollectionChangesStrategy,
  PostmanApi,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const mergePullCollectionChangesStrategy = MergePullCollectionChangesStrategy.DEFAULT_;

  const mergePullCollectionChanges: MergePullCollectionChanges = {
    strategy: mergePullCollectionChangesStrategy,
    source: '12345678-5a027c05-056b-49f5-ac9d-37c29f2d91c3',
    destination: '12345678-b04fa319-3e7e-4fa3-b6a2-f5b29ad67583',
  };

  const data = await postmanApi.collections.asyncMergePullCollectionFork(
    mergePullCollectionChanges,
  );

  console.log(data);
})();
```

## asyncMergePullCollectionTaskStatus

Gets the status of a collection's merge or a pull changes task. **Note:** After a merge's success or failure, the task's status is only available for a period of 24 hours. Afterwards, this endpoint returns an HTTP `404 Not Found` response.

- HTTP Method: `GET`
- Endpoint: `/collection-merges-tasks/{taskId}`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| taskId | string | ✅       | The task's ID. |

**Return Type**

`TaskStatusResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collections.asyncMergePullCollectionTaskStatus(
    'pm~vc:merge-workflow~12345678-5a027c05-056b-49f5-ac9d-37c29f2d91c3',
  );

  console.log(data);
})();
```

## getCollections

Gets all of your [collections](https://www.postman.com/docs/collections). The response includes all of your subscribed collections. **Note:** - It's recommended that you use pagination with this endpoint. Pagination improves endpoint performance. Unpaginated calls are considered deprecated and are subject to change. - Filtering with the `name` parameter when you also pass the `limit` and `offset` parameters is not supported. - If you pass an invalid workspace ID for the `workspace` query parameter, this endpoint returns an HTTP `200 OK` response with an empty array.

- HTTP Method: `GET`
- Endpoint: `/collections`

**Parameters**

| Name      | Type   | Required | Description                                                                                                               |
| :-------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------ |
| workspace | string | ❌       | The workspace's ID.                                                                                                       |
| name      | string | ❌       | Filter results by collections whose name exactly matches the given value. Partial or substring matches are not supported. |
| limit     | number | ❌       | The maximum number of rows to return in the response.                                                                     |
| offset    | number | ❌       | The zero-based offset of the first item to return.                                                                        |

**Return Type**

`CollectionsList`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collections.getCollections({
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    name: 'Test Collection',
    limit: 3,
    offset: 7,
  });

  console.log(data);
})();
```

## createCollection

Creates a collection using the [Postman Collection v2.1.0 schema format](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). **Note:** If you do not include the `workspace` query parameter, the system creates the collection in the oldest personal Internal workspace you own.

- HTTP Method: `POST`
- Endpoint: `/collections`

**Parameters**

| Name      | Type                                              | Required | Description         |
| :-------- | :------------------------------------------------ | :------- | :------------------ |
| body      | [CreateCollection](../models/CreateCollection.md) | ❌       | The request body.   |
| workspace | string                                            | ✅       | The workspace's ID. |

**Return Type**

`CollectionCreated`

**Example Usage Code Snippet**

```typescript
import {
  AuthAttributes,
  AuthAttributesType,
  AuthMethodType1,
  CollectionRequestBody1,
  CollectionRequestBodyFile1,
  CollectionRequestBodyGraphql1,
  CollectionRequestBodyUrlencoded1,
  CreateCollection,
  CreateCollectionSchema,
  CreateCollectionSchemaAuth,
  CreateCollectionSchemaEvent,
  CreateCollectionSchemaInfo,
  CreateCollectionSchemaItem,
  DisabledSystemHeaders,
  EventListen1,
  EventScript,
  InformationSchema1,
  ItemResponse1,
  PostmanApi,
  ProtocolProfileBehavior,
  ProtocolVersion,
  ResponseHeader2_1,
  ResponseOriginalRequest1,
  Variable,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const informationSchema1 =
    InformationSchema1.HTTPS_SCHEMA_POSTMAN_COM_JSON_COLLECTION_V2_1_0_COLLECTION_JSON;

  const createCollectionSchemaInfo: CreateCollectionSchemaInfo = {
    name: 'Test Collection',
    description: 'This is a test collection.',
    schema: informationSchema1,
  };

  const variableInfoValue1 = 'consequat ';

  const variable: Variable = {
    key: 'username',
    value: variableInfoValue1,
    description: 'description',
    disabled: true,
  };

  const eventListen1 = EventListen1.TEST;

  const eventScript: EventScript = {
    type: 'text/javascript',
    exec: ['var data = JSON.parse(responseBody);'],
  };

  const createCollectionSchemaEvent: CreateCollectionSchemaEvent = {
    listen: eventListen1,
    script: eventScript,
  };

  const url = 'https://88209df5-f1f9-4f29-82b2-9bb8bad11bdd.mock.pstmn.io';

  const authMethodType1 = AuthMethodType1.NOAUTH;

  const authAttributesValue = 'culpa Ut';

  const authAttributesType = AuthAttributesType.STRING_;

  const authAttributes: AuthAttributes = {
    key: 'algorithm',
    value: authAttributesValue,
    type: authAttributesType,
  };

  const createCollectionSchemaAuth: CreateCollectionSchemaAuth = {
    type: authMethodType1,
    noauth: [],
    apikey: [authAttributes],
    awsv4: [authAttributes],
    basic: [authAttributes],
    bearer: [authAttributes],
    digest: [authAttributes],
    edgegrid: [authAttributes],
    hawk: [authAttributes],
    ntlm: [authAttributes],
    oauth1: [authAttributes],
    oauth2: [authAttributes],
  };

  const responseHeader2_1: ResponseHeader2_1 = {
    key: 'Content-Type',
    value: 'application/json',
    disabled: true,
    description: 'This is a custom header.',
  };

  const collectionRequestBodyUrlencoded1: CollectionRequestBodyUrlencoded1 = {
    key: 'userId',
    value: '123',
    description: 'This is a custom key.',
  };

  const collectionRequestBodyFile1: CollectionRequestBodyFile1 = {
    src: 'postman-cloud:///2g041r86-4dfc-4e50-82b4-c756d83a5bec',
  };

  const collectionRequestBodyGraphql1: CollectionRequestBodyGraphql1 = {
    query:
      'mutation CreateTweet {\n    createTweet(body: null) {\n        id\n        body\n        date\n    }\n    markTweetRead(id: "123")\n}\n',
    variables: '{\n    "id": "string"\n}',
  };

  const collectionRequestBody1: CollectionRequestBody1 = {
    mode: [],
    raw: 'Test',
    urlencoded: [collectionRequestBodyUrlencoded1],
    formdata: [{}],
    file: collectionRequestBodyFile1,
    graphql: collectionRequestBodyGraphql1,
    options: {},
  };

  const responseOriginalRequest1: ResponseOriginalRequest1 = {
    url: url,
    auth: createCollectionSchemaAuth,
    method: 'method',
    description: 'This is a test request.',
    header: [responseHeader2_1],
    body: collectionRequestBody1,
  };

  const responseHeader1 = 'minim ve';

  const itemResponse1: ItemResponse1 = {
    originalRequest: responseOriginalRequest1,
    responseTime: 6.83,
    header: responseHeader1,
    body: '{\n    "field": {}\n}',
    status: 'OK',
    code: 200,
  };

  const disabledSystemHeaders: DisabledSystemHeaders = {
    cacheControl: true,
    postmanToken: true,
    contentType: true,
    contentLength: true,
    acceptEncoding: true,
    connection: true,
    host: true,
  };

  const protocolVersion = ProtocolVersion.HTTP1;

  const protocolProfileBehavior: ProtocolProfileBehavior = {
    strictSsl: true,
    followRedirects: true,
    maxRedirects: 7.89,
    disableBodyPruning: true,
    disableUrlEncoding: true,
    disabledSystemHeaders: disabledSystemHeaders,
    insecureHttpParser: true,
    followOriginalHttpMethod: true,
    followAuthorizationHeader: true,
    protocolVersion: protocolVersion,
    removeRefererHeaderOnRedirect: true,
    tlsPreferServerCiphers: true,
    tlsDisabledProtocols: ['tlsDisabledProtocols'],
    tlsCipherSelection: ['tlsCipherSelection'],
  };

  const createCollectionSchemaItem: CreateCollectionSchemaItem = {
    name: 'Test Request',
    description: 'This is a test request.',
    variable: [variable],
    event: [createCollectionSchemaEvent],
    request: responseOriginalRequest1,
    response: [itemResponse1],
    protocolProfileBehavior: protocolProfileBehavior,
  };

  const createCollectionSchema: CreateCollectionSchema = {
    info: createCollectionSchemaInfo,
    item: [createCollectionSchemaItem],
    event: [createCollectionSchemaEvent],
    variable: [variable],
    auth: createCollectionSchemaAuth,
    protocolProfileBehavior: protocolProfileBehavior,
  };

  const createCollection: CreateCollection = {
    collection: createCollectionSchema,
  };

  const data = await postmanApi.collections.createCollection(createCollection, {
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

## getCollectionsForkedByUser

Gets a list of all the authenticated user's forked collections.

- HTTP Method: `GET`
- Endpoint: `/collections/collection-forks`

**Parameters**

| Name      | Type                            | Required | Description                                                                                                                                |
| :-------- | :------------------------------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| cursor    | string                          | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| limit     | number                          | ❌       | The maximum number of rows to return in the response.                                                                                      |
| direction | [AscDesc](../models/AscDesc.md) | ❌       | Sort the results by creation date in ascending (`asc`) or descending (`desc`) order.                                                       |

**Return Type**

`UsersForkedCollections`

**Example Usage Code Snippet**

```typescript
import { AscDesc, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const ascDesc = AscDesc.ASC;

  const data = await postmanApi.collections.getCollectionsForkedByUser({
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    limit: 10,
    direction: ascDesc,
  });

  console.log(data);
})();
```

## createCollectionFork

Creates a [fork](https://learning.postman.com/docs/collaborating-in-postman/version-control/#creating-a-fork) from an existing collection into a workspace.

- HTTP Method: `POST`
- Endpoint: `/collections/fork/{collectionId}`

**Parameters**

| Name         | Type                                                      | Required | Description                                   |
| :----------- | :-------------------------------------------------------- | :------- | :-------------------------------------------- |
| body         | [CreateCollectionFork](../models/CreateCollectionFork.md) | ❌       | The request body.                             |
| collectionId | string                                                    | ✅       | The collection's ID.                          |
| workspace    | string                                                    | ✅       | The workspace ID in which to create the fork. |

**Return Type**

`CollectionForkCreated`

**Example Usage Code Snippet**

```typescript
import { CreateCollectionFork, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const createCollectionFork: CreateCollectionFork = {
    label: 'Test Fork',
  };

  const data = await postmanApi.collections.createCollectionFork(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    createCollectionFork,
    {
      workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    },
  );

  console.log(data);
})();
```

## mergeCollectionFork

**This endpoint is deprecated.** Merges a forked collection back into its parent collection. You must have the [Editor role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) for the collection to merge a fork.

- HTTP Method: `POST`
- Endpoint: `/collections/merge`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [MergeCollectionFork](../models/MergeCollectionFork.md) | ❌       | The request body. |

**Return Type**

`CollectionForkMerged`

**Example Usage Code Snippet**

```typescript
import { MergeCollectionFork, MergeCollectionForkStrategy, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const mergeCollectionForkStrategy = MergeCollectionForkStrategy.DELETE_SOURCE;

  const mergeCollectionFork: MergeCollectionFork = {
    destination: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    source: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    strategy: mergeCollectionForkStrategy,
  };

  const data = await postmanApi.collections.mergeCollectionFork(mergeCollectionFork);

  console.log(data);
})();
```

## getCollection

Gets information about a collection. For a complete list of this endpoint's possible values, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}`

**Parameters**

| Name         | Type                                                      | Required | Description                                                                                                                                                      |
| :----------- | :-------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| collectionId | string                                                    | ✅       | The collection's ID.                                                                                                                                             |
| accessKey    | string                                                    | ❌       | A collection's read-only access key. Using this query parameter does not require an API key to call the endpoint.                                                |
| model        | [CollectionModelQuery](../models/CollectionModelQuery.md) | ❌       | Return a list of only the collection's root-level request (`rootLevelRequests`) and folder (`rootLevelFolders`) IDs instead of the full collection element data. |

**Return Type**

`CollectionInformation`

**Example Usage Code Snippet**

```typescript
import { CollectionModelQuery, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const collectionModelQuery = CollectionModelQuery.MINIMAL;

  const data = await postmanApi.collections.getCollection('12ece9e1-2abf-4edc-8e34-de66e74114d2', {
    accessKey: 'PMAT-**************************',
    model: collectionModelQuery,
  });

  console.log(data);
})();
```

## putCollection

Replaces the contents of a collection using the [Postman Collection v2.1.0 schema format](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). Include the collection's ID values in the request body. If you do not, the endpoint removes the existing items and creates new items. - To perform an update asynchronously, use the `Prefer` header with the `respond-async` value. When performing an async update, this endpoint returns a HTTP `202 Accepted` response. - For a complete list of properties and information, see the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). - For protocol profile behavior, refer to Postman's [Protocol Profile Behavior documentation](https://github.com/postmanlabs/postman-runtime/blob/develop/docs/protocol-profile-behavior.md). **Note:** - The maximum collection size this endpoint accepts cannot exceed 100 MB. - Use the GET `/collection-updates-tasks/{taskId}` endpoint to get the collection's update status when performing an asynchronous update. - If you don't include the collection items' ID values from the request body, the endpoint **removes** the existing items and recreates the items with new ID values. - To copy another collection's contents to the given collection, remove all ID values before you pass it in this endpoint. If you do not, this endpoint returns an error. These values include the `id`, `uid`, and `postman_id` values.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}`

**Parameters**

| Name         | Type                                                        | Required | Description                                                      |
| :----------- | :---------------------------------------------------------- | :------- | :--------------------------------------------------------------- |
| body         | [ReplaceCollectionData](../models/ReplaceCollectionData.md) | ❌       | The request body.                                                |
| collectionId | string                                                      | ✅       | The collection's ID.                                             |
| prefer       | [Prefer](../models/Prefer.md)                               | ❌       | The `respond-async` header to perform the update asynchronously. |

**Return Type**

`PutCollectionOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  AuthAttributes,
  AuthAttributesType,
  AuthMethodType2,
  CollectionAuth,
  CollectionEvent,
  CollectionItem,
  CollectionRequestBody2,
  CollectionRequestBodyFile2,
  CollectionRequestBodyGraphql2,
  CollectionRequestBodyUrlencoded2,
  DisabledSystemHeaders,
  EventListen2,
  InformationSchema2,
  ItemResponse2,
  ModifyCollectionSchema,
  ModifyCollectionSchemaInfo,
  PostmanApi,
  Prefer,
  ProtocolProfileBehavior,
  ProtocolVersion,
  ReplaceCollectionData,
  RequestEventsScript,
  ResponseHeader2_2,
  ResponseOriginalRequest2,
  VariableList2_1,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const prefer = Prefer.RESPOND_ASYNC;

  const informationSchema2 =
    InformationSchema2.HTTPS_SCHEMA_POSTMAN_COM_JSON_COLLECTION_V2_1_0_COLLECTION_JSON;

  const modifyCollectionSchemaInfo: ModifyCollectionSchemaInfo = {
    name: 'Test Collection',
    _postmanId: '64264c93-3a2c-49e3-8e3f-16568dd8fb83',
    description: 'This is a test collection.',
    schema: informationSchema2,
    updatedAt: '2025-05-28T08:56:07.000Z',
    createdat: '2025-05-28T08:56:07.000Z',
    lastUpdatedBy: '12345678',
    uid: '12345678-eb0c6a21-2625-4860-ace2-64d6ad91c551',
  };

  const variableInfoValue2 = 'eiusmod esse n';

  const variableList2_1: VariableList2_1 = {
    id: '1561db76-bc21-48d1-a9f3-5d70c07b9d87',
    key: 'userId',
    description: "The user's ID.",
    value: variableInfoValue2,
    enabled: true,
    disabled: true,
  };

  const eventListen2 = EventListen2.TEST;

  const requestEventsScript: RequestEventsScript = {
    id: '4981dd69-6138-45f6-990e-f122b267557f',
    type: 'text/javascript',
    exec: ['var data = JSON.parse(responseBody);'],
  };

  const collectionEvent: CollectionEvent = {
    id: '4981dd69-6138-45f6-990e-f122b267557f',
    listen: eventListen2,
    script: requestEventsScript,
  };

  const url = 'https://88209df5-f1f9-4f29-82b2-9bb8bad11bdd.mock.pstmn.io';

  const authMethodType2 = AuthMethodType2.BASIC;

  const authAttributesValue = 'culpa Ut';

  const authAttributesType = AuthAttributesType.STRING_;

  const authAttributes: AuthAttributes = {
    key: 'algorithm',
    value: authAttributesValue,
    type: authAttributesType,
  };

  const collectionAuth: CollectionAuth = {
    type: authMethodType2,
    apikey: [authAttributes],
    awsv4: [authAttributes],
    basic: [authAttributes],
    bearer: [authAttributes],
    digest: [authAttributes],
    edgegrid: [authAttributes],
    hawk: [authAttributes],
    ntlm: [authAttributes],
    oauth1: [authAttributes],
    oauth2: [authAttributes],
    jwt: [authAttributes],
    asap: [authAttributes],
  };

  const responseHeader2_2: ResponseHeader2_2 = {
    key: 'Content-Type',
    value: 'application/json',
    description: 'The content type of the request body.',
  };

  const collectionRequestBodyUrlencoded2: CollectionRequestBodyUrlencoded2 = {
    key: 'userId',
    value: '123',
    description: 'This is a custom key.',
  };

  const collectionRequestBodyFile2: CollectionRequestBodyFile2 = {
    src: 'postman-cloud:///2g041r86-4dfc-4e50-82b4-c756d83a5bec',
  };

  const collectionRequestBodyGraphql2: CollectionRequestBodyGraphql2 = {
    query:
      'mutation CreateTweet {\n    createTweet(body: null) {\n        id\n        body\n        date\n    }\n    markTweetRead(id: "123")\n}\n',
    variables: '{\n    "id": "string"\n}',
  };

  const collectionRequestBody2: CollectionRequestBody2 = {
    mode: [],
    raw: 'Test',
    urlencoded: [collectionRequestBodyUrlencoded2],
    formdata: [{}],
    file: collectionRequestBodyFile2,
    graphql: collectionRequestBodyGraphql2,
    options: {},
  };

  const responseOriginalRequest2: ResponseOriginalRequest2 = {
    url: url,
    auth: collectionAuth,
    method: 'GET',
    description: 'This is a test request.',
    header: [responseHeader2_2],
    body: collectionRequestBody2,
  };

  const responseHeader2_3 = 'in pariatur n';

  const itemResponse2: ItemResponse2 = {
    id: '33ffd2e3-59a8-4dfe-84fa-0a571984487b',
    originalRequest: responseOriginalRequest2,
    responseTime: 5.76,
    header: responseHeader2_3,
    body: 'body',
    status: 'OK',
    code: 200,
    createdAt: '2023-08-22T12:52:01.000Z',
    updatedAt: '2023-09-13T14:31:25.000Z',
    uid: '12345678-eb0c6a21-2625-4860-ace2-64d6ad91c551',
  };

  const disabledSystemHeaders: DisabledSystemHeaders = {
    cacheControl: true,
    postmanToken: true,
    contentType: true,
    contentLength: true,
    acceptEncoding: true,
    connection: true,
    host: true,
  };

  const protocolVersion = ProtocolVersion.HTTP1;

  const protocolProfileBehavior: ProtocolProfileBehavior = {
    strictSsl: true,
    followRedirects: true,
    maxRedirects: 7.89,
    disableBodyPruning: true,
    disableUrlEncoding: true,
    disabledSystemHeaders: disabledSystemHeaders,
    insecureHttpParser: true,
    followOriginalHttpMethod: true,
    followAuthorizationHeader: true,
    protocolVersion: protocolVersion,
    removeRefererHeaderOnRedirect: true,
    tlsPreferServerCiphers: true,
    tlsDisabledProtocols: ['tlsDisabledProtocols'],
    tlsCipherSelection: ['tlsCipherSelection'],
  };

  const collectionItem: CollectionItem = {
    id: '8d021b74-ecb5-460d-ac52-0d1e496d43d1',
    name: 'Test Request',
    description: 'This is a test request.',
    variable: [variableList2_1],
    event: [collectionEvent],
    request: responseOriginalRequest2,
    response: [itemResponse2],
    protocolProfileBehavior: protocolProfileBehavior,
    createdAt: '2023-08-22T12:52:01.000Z',
    updatedAt: '2023-09-13T14:31:25.000Z',
    uid: '12345678-eb0c6a21-2625-4860-ace2-64d6ad91c551',
  };

  const modifyCollectionSchema: ModifyCollectionSchema = {
    info: modifyCollectionSchemaInfo,
    item: [collectionItem],
    event: [collectionEvent],
    variable: [variableList2_1],
    auth: collectionAuth,
    protocolProfileBehavior: protocolProfileBehavior,
  };

  const replaceCollectionData: ReplaceCollectionData = {
    collection: modifyCollectionSchema,
  };

  const data = await postmanApi.collections.putCollection(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    replaceCollectionData,
    {
      prefer: prefer,
    },
  );

  console.log(data);
})();
```

## patchCollection

Updates specific collection information, such as its name, events, or its variables. For more information, see the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

- HTTP Method: `PATCH`
- Endpoint: `/collections/{collectionId}`

**Parameters**

| Name         | Type                                              | Required | Description          |
| :----------- | :------------------------------------------------ | :------- | :------------------- |
| body         | [UpdateCollection](../models/UpdateCollection.md) | ❌       | The request body.    |
| collectionId | string                                            | ✅       | The collection's ID. |

**Return Type**

`PatchCollectionOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  AuthAttributes,
  AuthAttributesType,
  AuthMethodType2,
  CollectionAuth,
  CollectionEvent,
  EventListen2,
  PostmanApi,
  RequestEventsScript,
  UpdateCollection,
  UpdateCollectionCollection,
  UpdateCollectionCollectionInfo,
  VariableList2_1,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const updateCollectionCollectionInfo: UpdateCollectionCollectionInfo = {
    name: 'Test Collection v2',
    description:
      'This collection makes a request to the Postman Echo service to get a list of request headers sent by an HTTP client.',
  };

  const variableInfoValue2 = 'eiusmod esse n';

  const variableList2_1: VariableList2_1 = {
    id: '1561db76-bc21-48d1-a9f3-5d70c07b9d87',
    key: 'userId',
    description: "The user's ID.",
    value: variableInfoValue2,
    enabled: true,
    disabled: true,
  };

  const authMethodType2 = AuthMethodType2.BASIC;

  const authAttributesValue = 'culpa Ut';

  const authAttributesType = AuthAttributesType.STRING_;

  const authAttributes: AuthAttributes = {
    key: 'algorithm',
    value: authAttributesValue,
    type: authAttributesType,
  };

  const collectionAuth: CollectionAuth = {
    type: authMethodType2,
    apikey: [authAttributes],
    awsv4: [authAttributes],
    basic: [authAttributes],
    bearer: [authAttributes],
    digest: [authAttributes],
    edgegrid: [authAttributes],
    hawk: [authAttributes],
    ntlm: [authAttributes],
    oauth1: [authAttributes],
    oauth2: [authAttributes],
    jwt: [authAttributes],
    asap: [authAttributes],
  };

  const eventListen2 = EventListen2.TEST;

  const requestEventsScript: RequestEventsScript = {
    id: '4981dd69-6138-45f6-990e-f122b267557f',
    type: 'text/javascript',
    exec: ['var data = JSON.parse(responseBody);'],
  };

  const collectionEvent: CollectionEvent = {
    id: '4981dd69-6138-45f6-990e-f122b267557f',
    listen: eventListen2,
    script: requestEventsScript,
  };

  const updateCollectionCollection: UpdateCollectionCollection = {
    info: updateCollectionCollectionInfo,
    variable: [variableList2_1],
    auth: collectionAuth,
    events: [collectionEvent],
  };

  const updateCollection: UpdateCollection = {
    collection: updateCollectionCollection,
  };

  const data = await postmanApi.collections.patchCollection(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    updateCollection,
  );

  console.log(data);
})();
```

## deleteCollection

Deletes a collection.

- HTTP Method: `DELETE`
- Endpoint: `/collections/{collectionId}`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`CollectionDeleted`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collections.deleteCollection(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

## getCollectionComments

Gets all comments left by users in a collection.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/comments`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |

**Return Type**

`CommentResponseObject`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collections.getCollectionComments(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

## createCollectionComment

Creates a comment on a collection. To create a reply on an existing comment, include the `threadId` property in the request body. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionId}/comments`

**Parameters**

| Name         | Type                                        | Required | Description                 |
| :----------- | :------------------------------------------ | :------- | :-------------------------- |
| body         | [CommentCreate](../models/CommentCreate.md) | ✅       | The request body.           |
| collectionId | string                                      | ✅       | The collection's unique ID. |

**Return Type**

`CommentUpdatedCreatedObject`

**Example Usage Code Snippet**

```typescript
import { CommentCreate, PostmanApi, TaggedUsers, UserName, UserNameType } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const userNameType = UserNameType.USER;

  const userName: UserName = {
    type: userNameType,
    id: '87654321',
  };

  const taggedUsers: TaggedUsers = {
    _userName_: userName,
  };

  const commentCreate: CommentCreate = {
    body: 'This is an example.',
    threadId: 12345,
    tags: taggedUsers,
  };

  const data = await postmanApi.collections.createCollectionComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    commentCreate,
  );

  console.log(data);
})();
```

## updateCollectionComment

Updates a comment on a collection. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/comments/{commentId}`

**Parameters**

| Name         | Type                                        | Required | Description                 |
| :----------- | :------------------------------------------ | :------- | :-------------------------- |
| body         | [CommentUpdate](../models/CommentUpdate.md) | ✅       | The request body.           |
| collectionId | string                                      | ✅       | The collection's unique ID. |
| commentId    | number                                      | ✅       | The comment's ID.           |

**Return Type**

`CommentUpdatedCreatedObject`

**Example Usage Code Snippet**

```typescript
import { CommentUpdate, PostmanApi, TaggedUsers, UserName, UserNameType } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const userNameType = UserNameType.USER;

  const userName: UserName = {
    type: userNameType,
    id: '87654321',
  };

  const taggedUsers: TaggedUsers = {
    _userName_: userName,
  };

  const commentUpdate: CommentUpdate = {
    body: 'This is an example.',
    tags: taggedUsers,
  };

  const data = await postmanApi.collections.updateCollectionComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    46814,
    commentUpdate,
  );

  console.log(data);
})();
```

## deleteCollectionComment

Deletes a comment from a collection. On success, this returns an HTTP `204 No Content` response. **Note:** Deleting the first comment of a thread deletes all the comments in the thread.

- HTTP Method: `DELETE`
- Endpoint: `/collections/{collectionId}/comments/{commentId}`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |
| commentId    | number | ✅       | The comment's ID.           |

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collections.deleteCollectionComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    46814,
  );

  console.log(data);
})();
```

## duplicateCollection

Creates a duplicate of the given collection in another workspace. Use the GET `/collection-duplicate-tasks/{taskId}` endpoint to get the duplication task's current status.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionId}/duplicates`

**Parameters**

| Name         | Type                                                    | Required | Description                 |
| :----------- | :------------------------------------------------------ | :------- | :-------------------------- |
| body         | [DuplicateCollection](../models/DuplicateCollection.md) | ❌       | The request body.           |
| collectionId | string                                                  | ✅       | The collection's unique ID. |

**Return Type**

`DuplicateCollectionResponse`

**Example Usage Code Snippet**

```typescript
import { DuplicateCollection, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const duplicateCollection: DuplicateCollection = {
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    suffix: 'Copy',
  };

  const data = await postmanApi.collections.duplicateCollection(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    duplicateCollection,
  );

  console.log(data);
})();
```

## getCollectionForks

Gets a collection's forked collections. The response returns data for each fork, such as the fork's ID, the user who forked it, and the fork's creation date.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/forks`

**Parameters**

| Name         | Type                            | Required | Description                                                                                                                                |
| :----------- | :------------------------------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| collectionId | string                          | ✅       | The collection's ID.                                                                                                                       |
| cursor       | string                          | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| limit        | number                          | ❌       | The maximum number of rows to return in the response.                                                                                      |
| direction    | [AscDesc](../models/AscDesc.md) | ❌       | Sort the results by creation date in ascending (`asc`) or descending (`desc`) order.                                                       |

**Return Type**

`CollectionForksInfo`

**Example Usage Code Snippet**

```typescript
import { AscDesc, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const ascDesc = AscDesc.ASC;

  const data = await postmanApi.collections.getCollectionForks(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    {
      cursor:
        'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
      limit: 10,
      direction: ascDesc,
    },
  );

  console.log(data);
})();
```

## publishDocumentation

Publishes a collection's documentation. This makes it publicly available to anyone with the link to the documentation. **Note:** - Your [Postman plan](https://www.postman.com/pricing/) impacts your use of these endpoints: - For **Free** and **Solo** users, you must have permissions to edit the collection. - If [API Governance and Security](https://learning.postman.com/docs/api-governance/configurable-rules/configurable-rules-overview/) is enabled for your [**Enterprise**](https://www.postman.com/pricing/) team, only users with the [Community Manager role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can publish documentation. - Publishing is only supported for collections with HTTP requests. - You cannot publish a collection added to an API.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/public-documentations`

**Parameters**

| Name         | Type                                                      | Required | Description                 |
| :----------- | :-------------------------------------------------------- | :------- | :-------------------------- |
| body         | [PublishDocumentation](../models/PublishDocumentation.md) | ❌       | The request body.           |
| collectionId | string                                                    | ✅       | The collection's unique ID. |

**Return Type**

`PublishDocumentationResponse`

**Example Usage Code Snippet**

```typescript
import {
  Default_,
  DocumentationApperanceSettings,
  DocumentationColorSettings,
  DocumentationCustomizationSettings,
  DocumentationLayout,
  DocumentationMetaTags,
  DocumentationThemeSettings,
  DocumentationThemeSettingsName,
  PostmanApi,
  PublishDocumentation,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const documentationColorSettings: DocumentationColorSettings = {
    highlight: 'EF5B25',
    rightSidebar: '303030',
    topBar: 'FFFFFF',
  };

  const documentationLayout = DocumentationLayout.CLASSIC_SINGLE_COLUMN;

  const documentationMetaTags: DocumentationMetaTags = {
    name: 'title',
    value: 'Billing API',
  };

  const default_ = Default_.LIGHT;

  const documentationThemeSettingsName = DocumentationThemeSettingsName.DARK;

  const documentationThemeSettings: DocumentationThemeSettings = {
    name: documentationThemeSettingsName,
    colors: documentationColorSettings,
    logo: '<s3_url>/<cloudfront_url>',
  };

  const documentationApperanceSettings: DocumentationApperanceSettings = {
    default: default_,
    themes: [documentationThemeSettings],
  };

  const documentationCustomizationSettings: DocumentationCustomizationSettings = {
    metaTags: [documentationMetaTags],
    appearance: documentationApperanceSettings,
  };

  const publishDocumentation: PublishDocumentation = {
    environmentUid: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    customColor: documentationColorSettings,
    documentationLayout: documentationLayout,
    customization: documentationCustomizationSettings,
  };

  const data = await postmanApi.collections.publishDocumentation(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    publishDocumentation,
  );

  console.log(data);
})();
```

## unpublishDocumentation

Unpublishes a collection's documentation. On success, this returns an HTTP `204 No Content` response.

- HTTP Method: `DELETE`
- Endpoint: `/collections/{collectionId}/public-documentations`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collections.unpublishDocumentation(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

## pullCollectionChanges

Pulls the changes from a parent (source) collection into the forked collection. In the endpoint's response: - The `destinationId` is the ID of the forked collection. - The `sourceId` is the ID of the source collection.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/pulls`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The forked collection's ID. |

**Return Type**

`CollectionChangesPulled`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collections.pullCollectionChanges(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

## getCollectionPullRequests

Gets information about a collection's pull requests, such as the source and destination IDs, status of the pull requests, and a URL link to the pull requests.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/pull-requests`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |

**Return Type**

`CollectionPullRequests`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collections.getCollectionPullRequests(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

## createCollectionPullRequest

Creates a pull request for a forked collection into its parent collection.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionId}/pull-requests`

**Parameters**

| Name         | Type                                                | Required | Description                 |
| :----------- | :-------------------------------------------------- | :------- | :-------------------------- |
| body         | [CreatePullRequest](../models/CreatePullRequest.md) | ❌       | The request body.           |
| collectionId | string                                              | ✅       | The collection's unique ID. |

**Return Type**

`PullRequestCreated`

**Example Usage Code Snippet**

```typescript
import { CreatePullRequest, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const createPullRequest: CreatePullRequest = {
    title: 'Test PR',
    description: 'This is a test pull request.',
    reviewers: ['87654321'],
    destinationId: '12345678-ec548788-unftw-rgn8-83b8-0b59798648e4',
  };

  const data = await postmanApi.collections.createCollectionPullRequest(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    createPullRequest,
  );

  console.log(data);
})();
```

## getCollectionRoles

Gets information about all roles in a collection. The response returns the IDs of all users, teams, and groups with access to view or edit the collection.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/roles`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`CollectionRolesInfo`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collections.getCollectionRoles(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

## updateCollectionRoles

Updates the roles of users, groups, or teams in a collection. On success, this returns an HTTP `204 No Content` response. **Note:** - Only users assigned the Editor [role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) in the collection can use this endpoint. - This endpoint does not support the external [Partner or Guest roles](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles).

- HTTP Method: `PATCH`
- Endpoint: `/collections/{collectionId}/roles`

**Parameters**

| Name         | Type                                                        | Required | Description          |
| :----------- | :---------------------------------------------------------- | :------- | :------------------- |
| body         | [UpdateCollectionRoles](../models/UpdateCollectionRoles.md) | ❌       | The request body.    |
| collectionId | string                                                      | ✅       | The collection's ID. |

**Example Usage Code Snippet**

```typescript
import {
  PostmanApi,
  RolesOp,
  UpdateCollectionRoles,
  UpdateCollectionRolesRoles,
  UpdateCollectionRolesRolesPath,
  UpdateCollectionRolesRolesValue,
  ValueRole,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const rolesOp = RolesOp.UPDATE;

  const updateCollectionRolesRolesPath = UpdateCollectionRolesRolesPath._USER;

  const valueRole = ValueRole.VIEWER;

  const updateCollectionRolesRolesValue: UpdateCollectionRolesRolesValue = {
    id: 12345678,
    role: valueRole,
  };

  const updateCollectionRolesRoles: UpdateCollectionRolesRoles = {
    op: rolesOp,
    path: updateCollectionRolesRolesPath,
    value: [updateCollectionRolesRolesValue],
  };

  const updateCollectionRoles: UpdateCollectionRoles = {
    roles: [updateCollectionRolesRoles],
  };

  const data = await postmanApi.collections.updateCollectionRoles(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    updateCollectionRoles,
  );

  console.log(data);
})();
```

## getSourceCollectionStatus

Checks whether there is a change between the forked collection and its parent (source) collection. If the value of the `isSourceAhead` property is `true` in the response, then there is a difference between the forked collection and its source collection. **Note:** This endpoint may take a few minutes to return an updated `isSourceAhead` status.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/source-status`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`SourceCollectionStatus`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collections.getSourceCollectionStatus(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

## transformCollectionToOpenApi

Transforms an existing Postman Collection into a stringified OpenAPI definition. **Note:** This does not create an API.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/transformations`

**Parameters**

| Name         | Type                                                                | Required | Description                                        |
| :----------- | :------------------------------------------------------------------ | :------- | :------------------------------------------------- |
| collectionId | string                                                              | ✅       | The collection's ID.                               |
| format       | [CollectionTransformFormat](../models/CollectionTransformFormat.md) | ❌       | Return the OpenAPI definition in the given format. |

**Return Type**

`CollectionTransformed`

**Example Usage Code Snippet**

```typescript
import { CollectionTransformFormat, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const collectionTransformFormat = CollectionTransformFormat.JSON;

  const data = await postmanApi.collections.transformCollectionToOpenApi(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    {
      format: collectionTransformFormat,
    },
  );

  console.log(data);
})();
```

## transferCollectionFolders

Copies or moves folders into a collection or folder.

- HTTP Method: `POST`
- Endpoint: `/collection-folders-transfers`

**Parameters**

| Name | Type                                                            | Required | Description       |
| :--- | :-------------------------------------------------------------- | :------- | :---------------- |
| body | [TransferCollectionItems](../models/TransferCollectionItems.md) | ❌       | The request body. |

**Return Type**

`CollectionItemsTransferred`

**Example Usage Code Snippet**

```typescript
import {
  Location,
  Mode,
  Position,
  PostmanApi,
  Target,
  TargetModel,
  TransferCollectionItems,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const mode = Mode.COPY;

  const targetModel = TargetModel.COLLECTION;

  const target: Target = {
    id: '12345678-b91270fa-048d-4f5f-a033-8b5523bf053f',
    model: targetModel,
  };

  const position = Position.START;

  const location: Location = {
    id: '12345678-80812b16-ac27-45b3-b3eb-793f78530d32',
    model: 'response',
    position: position,
  };

  const transferCollectionItems: TransferCollectionItems = {
    ids: ['12345678-a9b481c1-3e78-4af7-8db0-dce3f3f3c105'],
    mode: mode,
    target: target,
    location: location,
  };

  const data = await postmanApi.collections.transferCollectionFolders(transferCollectionItems);

  console.log(data);
})();
```

## transferCollectionRequests

Copies or moves requests into a collection or folder.

- HTTP Method: `POST`
- Endpoint: `/collection-requests-transfers`

**Parameters**

| Name | Type                                                            | Required | Description       |
| :--- | :-------------------------------------------------------------- | :------- | :---------------- |
| body | [TransferCollectionItems](../models/TransferCollectionItems.md) | ❌       | The request body. |

**Return Type**

`CollectionItemsTransferred`

**Example Usage Code Snippet**

```typescript
import {
  Location,
  Mode,
  Position,
  PostmanApi,
  Target,
  TargetModel,
  TransferCollectionItems,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const mode = Mode.COPY;

  const targetModel = TargetModel.COLLECTION;

  const target: Target = {
    id: '12345678-b91270fa-048d-4f5f-a033-8b5523bf053f',
    model: targetModel,
  };

  const position = Position.START;

  const location: Location = {
    id: '12345678-80812b16-ac27-45b3-b3eb-793f78530d32',
    model: 'response',
    position: position,
  };

  const transferCollectionItems: TransferCollectionItems = {
    ids: ['12345678-a9b481c1-3e78-4af7-8db0-dce3f3f3c105'],
    mode: mode,
    target: target,
    location: location,
  };

  const data = await postmanApi.collections.transferCollectionRequests(transferCollectionItems);

  console.log(data);
})();
```

## transferCollectionResponses

Copies or moves responses into a request.

- HTTP Method: `POST`
- Endpoint: `/collection-responses-transfers`

**Parameters**

| Name | Type                                                            | Required | Description       |
| :--- | :-------------------------------------------------------------- | :------- | :---------------- |
| body | [TransferCollectionItems](../models/TransferCollectionItems.md) | ❌       | The request body. |

**Return Type**

`CollectionItemsTransferred`

**Example Usage Code Snippet**

```typescript
import {
  Location,
  Mode,
  Position,
  PostmanApi,
  Target,
  TargetModel,
  TransferCollectionItems,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const mode = Mode.COPY;

  const targetModel = TargetModel.COLLECTION;

  const target: Target = {
    id: '12345678-b91270fa-048d-4f5f-a033-8b5523bf053f',
    model: targetModel,
  };

  const position = Position.START;

  const location: Location = {
    id: '12345678-80812b16-ac27-45b3-b3eb-793f78530d32',
    model: 'response',
    position: position,
  };

  const transferCollectionItems: TransferCollectionItems = {
    ids: ['12345678-a9b481c1-3e78-4af7-8db0-dce3f3f3c105'],
    mode: mode,
    target: target,
    location: location,
  };

  const data = await postmanApi.collections.transferCollectionResponses(transferCollectionItems);

  console.log(data);
})();
```

## getDuplicateCollectionTaskStatus

Gets the status of a collection duplication task.

- HTTP Method: `GET`
- Endpoint: `/collection-duplicate-tasks/{taskId}`

**Parameters**

| Name   | Type   | Required | Description           |
| :----- | :----- | :------- | :-------------------- |
| taskId | string | ✅       | The task's unique ID. |

**Return Type**

`DuplicateCollectionResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collections.getDuplicateCollectionTaskStatus(
    '12345678-66ae9950-0869-4e65-96b0-1e0e47e771af',
  );

  console.log(data);
})();
```

## getCollectionUpdatesTasks

Gets the status of an asynchronous collection update task.

- HTTP Method: `GET`
- Endpoint: `/collection-updates-tasks/{taskId}`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| taskId | string | ✅       | The task's ID. |

**Return Type**

`GetCollectionUpdateStatus`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collections.getCollectionUpdatesTasks(
    '66ae9950-0869-4e65-96b0-1e0e47e771af',
  );

  console.log(data);
})();
```
