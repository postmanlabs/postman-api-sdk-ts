# CollectionItemsService

A list of all methods in the `CollectionItemsService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :---------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [createCollectionFolder](#createcollectionfolder)     | Creates a folder in a collection. For a complete list of properties, refer to the **Folder** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). You can use this endpoint to to import requests and responses into a newly-created folder. To do this, include the `requests` field and the list of request objects in the request body. For more information, see the provided example. **Note:** It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a folder with a blank name. |
| [createCollectionRequest](#createcollectionrequest)   | Creates a request in a collection. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). **Note:** It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a request with a blank name.                                                                                                                                                                                                                                       |
| [createCollectionResponse](#createcollectionresponse) | Creates a request response in a collection. For a complete list of request body properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). **Note:** It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a response with a blank name.                                                                                                                                                                                                               |
| [getCollectionFolder](#getcollectionfolder)           | Gets information about a folder in a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [updateCollectionFolder](#updatecollectionfolder)     | Updates a folder in a collection. For a complete list of properties, refer to the **Folder** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). **Note:** This endpoint acts like a PATCH method. It only updates the values that you pass in the request body (for example, the `name` property). The endpoint does not update the entire resource.                                                                                                                                                                                                                           |
| [deleteCollectionFolder](#deletecollectionfolder)     | Deletes a folder in a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [getCollectionRequest](#getcollectionrequest)         | Gets information about a request in a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [updateCollectionRequest](#updatecollectionrequest)   | Updates a request in a collection. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). **Note:** - You must pass a collection ID (`12ece9e1-2abf-4edc-8e34-de66e74114d2`), not a collection(`12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2`), in this endpoint. - This endpoint does not support changing the folder of a request.                                                                                                                                                                                  |
| [deleteCollectionRequest](#deletecollectionrequest)   | Deletes a request in a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [getCollectionResponse](#getcollectionresponse)       | Gets information about a response in a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [updateCollectionResponse](#updatecollectionresponse) | Updates a response in a collection. For a complete list of properties, see the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). **Note:** - You must pass a collection ID (`12ece9e1-2abf-4edc-8e34-de66e74114d2`), not a collection UID (`12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2`), in this endpoint. - This endpoint acts like a PATCH method. It only updates the values that you pass in the request body (for example, the `name` property). The endpoint does not update the entire resource.                                                                                |
| [deleteCollectionResponse](#deletecollectionresponse) | Deletes a response in a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## createCollectionFolder

Creates a folder in a collection. For a complete list of properties, refer to the **Folder** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). You can use this endpoint to to import requests and responses into a newly-created folder. To do this, include the `requests` field and the list of request objects in the request body. For more information, see the provided example. **Note:** It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a folder with a blank name.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionId}/folders`

**Parameters**

| Name         | Type                                      | Required | Description          |
| :----------- | :---------------------------------------- | :------- | :------------------- |
| body         | [CreateFolder](../models/CreateFolder.md) | ❌       | The request body.    |
| collectionId | string                                    | ✅       | The collection's ID. |

**Return Type**

`CollectionFolderCreated`

**Example Usage Code Snippet**

```typescript
import { CreateFolder, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const createFolder: CreateFolder = {
    name: 'Test Folder',
    folder: '12345678-65a99e60-8e0a-4b6e-b79c-7d8264cc5caa',
  };

  const data = await postmanApi.collectionItems.createCollectionFolder(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    createFolder,
  );

  console.log(data);
})();
```

## createCollectionRequest

Creates a request in a collection. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). **Note:** It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a request with a blank name.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionId}/requests`

**Parameters**

| Name         | Type                                        | Required | Description                                                                                                       |
| :----------- | :------------------------------------------ | :------- | :---------------------------------------------------------------------------------------------------------------- |
| body         | [CreateRequest](../models/CreateRequest.md) | ❌       | The request body.                                                                                                 |
| collectionId | string                                      | ✅       | The collection's ID.                                                                                              |
| folder       | string                                      | ❌       | The folder ID in which to create the request. By default, the system creates the request at the collection level. |

**Return Type**

`CollectionRequestCreated`

**Example Usage Code Snippet**

```typescript
import {
  AuthAttributes,
  AuthAttributesType,
  CreateRequest,
  CreateRequestDataMode,
  PostmanApi,
  Raw,
  RequestAuth,
  RequestAuthType,
  RequestData,
  RequestDataOptions,
  RequestDataType,
  RequestEvents,
  RequestEventsListen,
  RequestEventsScript,
  RequestGraphqlModeData,
  RequestHeaderData,
  RequestMethod,
  RequestQueryParams,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const requestMethod = RequestMethod.GET_;

  const requestHeaderData: RequestHeaderData = {
    key: 'key',
    value: 'value',
    description: 'description',
  };

  const requestQueryParams: RequestQueryParams = {
    key: 'key',
    value: 'value',
    description: 'description',
    enabled: true,
  };

  const createRequestDataMode = CreateRequestDataMode.RAW;

  const requestDataType = RequestDataType.TEXT;

  const requestData: RequestData = {
    key: 'key',
    value: 'value',
    description: 'description',
    enabled: true,
    type: requestDataType,
    uuid: 'uuid',
  };

  const requestGraphqlModeData: RequestGraphqlModeData = {
    query: 'query',
    variables: 'variables',
  };

  const raw: Raw = {
    language: 'language',
  };

  const requestDataOptions: RequestDataOptions = {
    raw: raw,
    urlencoded: {},
    params: {},
    binary: {},
    graphql: {},
  };

  const requestAuthType = RequestAuthType.BASIC;

  const authAttributesValue = 'eu elit ex';

  const authAttributesType = AuthAttributesType.STRING_;

  const authAttributes: AuthAttributes = {
    key: 'algorithm',
    value: authAttributesValue,
    type: authAttributesType,
  };

  const requestAuth: RequestAuth = {
    type: requestAuthType,
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

  const requestEventsListen = RequestEventsListen.TEST;

  const requestEventsScript: RequestEventsScript = {
    id: '4981dd69-6138-45f6-990e-f122b267557f',
    type: 'text/javascript',
    exec: ['var data = JSON.parse(responseBody);'],
  };

  const requestEvents: RequestEvents = {
    listen: requestEventsListen,
    script: requestEventsScript,
  };

  const createRequest: CreateRequest = {
    name: 'Test Request',
    description: 'description',
    method: requestMethod,
    url: 'url',
    headerData: [requestHeaderData],
    queryParams: [requestQueryParams],
    dataMode: createRequestDataMode,
    data: [requestData],
    rawModeData: 'rawModeData',
    graphqlModeData: requestGraphqlModeData,
    dataOptions: requestDataOptions,
    auth: requestAuth,
    events: [requestEvents],
  };

  const data = await postmanApi.collectionItems.createCollectionRequest(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    createRequest,
    {
      folder: '65a99e60-8e0a-4b6e-b79c-7d8264cc5caa',
    },
  );

  console.log(data);
})();
```

## createCollectionResponse

Creates a request response in a collection. For a complete list of request body properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). **Note:** It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a response with a blank name.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionId}/responses`

**Parameters**

| Name         | Type                                                                            | Required | Description              |
| :----------- | :------------------------------------------------------------------------------ | :------- | :----------------------- |
| body         | [CreateCollectionResponseRequest](../models/CreateCollectionResponseRequest.md) | ❌       | The request body.        |
| collectionId | string                                                                          | ✅       | The collection's ID.     |
| request      | string                                                                          | ✅       | The parent request's ID. |

**Return Type**

`CreateCollectionResponseOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  CollectionResponseCreatedDataMode,
  CollectionResponseCreatedResponseCode,
  CreateCollectionResponseRequest,
  PostmanApi,
  Raw,
  RequestDataOptions,
  RequestMethod,
  ResponseHeader2_2,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const requestMethod = RequestMethod.GET_;

  const responseHeader2_2: ResponseHeader2_2 = {
    key: 'Content-Type',
    value: 'application/json',
    description: 'The content type of the request body.',
  };

  const collectionResponseCreatedDataMode = CollectionResponseCreatedDataMode.RAW;

  const raw: Raw = {
    language: 'language',
  };

  const requestDataOptions: RequestDataOptions = {
    raw: raw,
    urlencoded: {},
    params: {},
    binary: {},
    graphql: {},
  };

  const collectionResponseCreatedResponseCode: CollectionResponseCreatedResponseCode = {
    code: 200,
    name: 'OK',
  };

  const createCollectionResponseRequest: CreateCollectionResponseRequest = {
    name: 'Example POST Response',
    description: 'description',
    url: 'url',
    method: requestMethod,
    headers: [responseHeader2_2],
    dataMode: collectionResponseCreatedDataMode,
    rawModeData: 'rawModeData',
    dataOptions: requestDataOptions,
    responseCode: collectionResponseCreatedResponseCode,
    status: 'status',
    time: 'time',
    cookies: 'cookies',
    mime: 'mime',
    text: 'text',
    language: 'language',
    rawDataType: 'rawDataType',
    requestObject: 'requestObject',
  };

  const data = await postmanApi.collectionItems.createCollectionResponse(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    createCollectionResponseRequest,
    {
      request: 'c82dd02c-4870-4907-8fcb-593a876cf05b',
    },
  );

  console.log(data);
})();
```

## getCollectionFolder

Gets information about a folder in a collection.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/folders/{folderId}`

**Parameters**

| Name         | Type    | Required | Description                                                              |
| :----------- | :------ | :------- | :----------------------------------------------------------------------- |
| folderId     | string  | ✅       | The folder's ID.                                                         |
| collectionId | string  | ✅       | The collection's ID.                                                     |
| ids          | boolean | ❌       | If true, returns only properties that contain ID values in the response. |
| uid          | boolean | ❌       | If true, returns all IDs in UID format (`userId`-`id`).                  |
| populate     | boolean | ❌       | If true, returns all of the collection item's contents.                  |

**Return Type**

`CollectionFolderInfo`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collectionItems.getCollectionFolder(
    '65a99e60-8e0a-4b6e-b79c-7d8264cc5caa',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    {
      ids: true,
      uid: true,
      populate: true,
    },
  );

  console.log(data);
})();
```

## updateCollectionFolder

Updates a folder in a collection. For a complete list of properties, refer to the **Folder** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). **Note:** This endpoint acts like a PATCH method. It only updates the values that you pass in the request body (for example, the `name` property). The endpoint does not update the entire resource.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/folders/{folderId}`

**Parameters**

| Name         | Type                                      | Required | Description          |
| :----------- | :---------------------------------------- | :------- | :------------------- |
| body         | [UpdateFolder](../models/UpdateFolder.md) | ❌       | The request body.    |
| folderId     | string                                    | ✅       | The folder's ID.     |
| collectionId | string                                    | ✅       | The collection's ID. |

**Return Type**

`CollectionFolderUpdated`

**Example Usage Code Snippet**

```typescript
import { PostmanApi, UpdateFolder } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const updateFolder: UpdateFolder = {
    name: 'Test Folder',
    description: 'This is a test folder.',
  };

  const data = await postmanApi.collectionItems.updateCollectionFolder(
    '65a99e60-8e0a-4b6e-b79c-7d8264cc5caa',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    updateFolder,
  );

  console.log(data);
})();
```

## deleteCollectionFolder

Deletes a folder in a collection.

- HTTP Method: `DELETE`
- Endpoint: `/collections/{collectionId}/folders/{folderId}`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| folderId     | string | ✅       | The folder's ID.     |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`CollectionFolderDeleted`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collectionItems.deleteCollectionFolder(
    '65a99e60-8e0a-4b6e-b79c-7d8264cc5caa',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

## getCollectionRequest

Gets information about a request in a collection.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/requests/{requestId}`

**Parameters**

| Name         | Type    | Required | Description                                                              |
| :----------- | :------ | :------- | :----------------------------------------------------------------------- |
| requestId    | string  | ✅       | The request's ID.                                                        |
| collectionId | string  | ✅       | The collection's ID.                                                     |
| ids          | boolean | ❌       | If true, returns only properties that contain ID values in the response. |
| uid          | boolean | ❌       | If true, returns all IDs in UID format (`userId`-`id`).                  |
| populate     | boolean | ❌       | If true, returns all of the collection item's contents.                  |

**Return Type**

`CollectionRequestInfo`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collectionItems.getCollectionRequest(
    'c82dd02c-4870-4907-8fcb-593a876cf05b',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    {
      ids: true,
      uid: true,
      populate: true,
    },
  );

  console.log(data);
})();
```

## updateCollectionRequest

Updates a request in a collection. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). **Note:** - You must pass a collection ID (`12ece9e1-2abf-4edc-8e34-de66e74114d2`), not a collection(`12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2`), in this endpoint. - This endpoint does not support changing the folder of a request.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/requests/{requestId}`

**Parameters**

| Name         | Type                                        | Required | Description          |
| :----------- | :------------------------------------------ | :------- | :------------------- |
| body         | [UpdateRequest](../models/UpdateRequest.md) | ❌       | The request body.    |
| requestId    | string                                      | ✅       | The request's ID.    |
| collectionId | string                                      | ✅       | The collection's ID. |

**Return Type**

`CollectionRequestUpdated`

**Example Usage Code Snippet**

```typescript
import {
  AuthAttributes,
  AuthAttributesType,
  PostmanApi,
  Raw,
  RequestAuth,
  RequestAuthType,
  RequestData,
  RequestDataOptions,
  RequestDataType,
  RequestEvents,
  RequestEventsListen,
  RequestEventsScript,
  RequestGraphqlModeData,
  RequestHeaderData,
  RequestMethod,
  RequestQueryParams,
  UpdateRequest,
  UpdateRequestDataMode,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const requestMethod = RequestMethod.GET_;

  const requestHeaderData: RequestHeaderData = {
    key: 'key',
    value: 'value',
    description: 'description',
  };

  const requestQueryParams: RequestQueryParams = {
    key: 'key',
    value: 'value',
    description: 'description',
    enabled: true,
  };

  const updateRequestDataMode = UpdateRequestDataMode.RAW;

  const requestDataType = RequestDataType.TEXT;

  const requestData: RequestData = {
    key: 'key',
    value: 'value',
    description: 'description',
    enabled: true,
    type: requestDataType,
    uuid: 'uuid',
  };

  const requestGraphqlModeData: RequestGraphqlModeData = {
    query: 'query',
    variables: 'variables',
  };

  const raw: Raw = {
    language: 'language',
  };

  const requestDataOptions: RequestDataOptions = {
    raw: raw,
    urlencoded: {},
    params: {},
    binary: {},
    graphql: {},
  };

  const requestAuthType = RequestAuthType.BASIC;

  const authAttributesValue = 'eu elit ex';

  const authAttributesType = AuthAttributesType.STRING_;

  const authAttributes: AuthAttributes = {
    key: 'algorithm',
    value: authAttributesValue,
    type: authAttributesType,
  };

  const requestAuth: RequestAuth = {
    type: requestAuthType,
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

  const requestEventsListen = RequestEventsListen.TEST;

  const requestEventsScript: RequestEventsScript = {
    id: '4981dd69-6138-45f6-990e-f122b267557f',
    type: 'text/javascript',
    exec: ['var data = JSON.parse(responseBody);'],
  };

  const requestEvents: RequestEvents = {
    listen: requestEventsListen,
    script: requestEventsScript,
  };

  const updateRequest: UpdateRequest = {
    name: 'Example GET request',
    description: 'description',
    method: requestMethod,
    url: 'url',
    headerData: [requestHeaderData],
    queryParams: [requestQueryParams],
    dataMode: updateRequestDataMode,
    data: [requestData],
    rawModeData: 'rawModeData',
    graphqlModeData: requestGraphqlModeData,
    dataOptions: requestDataOptions,
    auth: requestAuth,
    events: [requestEvents],
  };

  const data = await postmanApi.collectionItems.updateCollectionRequest(
    'c82dd02c-4870-4907-8fcb-593a876cf05b',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    updateRequest,
  );

  console.log(data);
})();
```

## deleteCollectionRequest

Deletes a request in a collection.

- HTTP Method: `DELETE`
- Endpoint: `/collections/{collectionId}/requests/{requestId}`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| requestId    | string | ✅       | The request's ID.    |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`CollectionRequestDeleted`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collectionItems.deleteCollectionRequest(
    'c82dd02c-4870-4907-8fcb-593a876cf05b',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

## getCollectionResponse

Gets information about a response in a collection.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/responses/{responseId}`

**Parameters**

| Name         | Type    | Required | Description                                                              |
| :----------- | :------ | :------- | :----------------------------------------------------------------------- |
| responseId   | string  | ✅       | The response's ID.                                                       |
| collectionId | string  | ✅       | The collection's ID.                                                     |
| ids          | boolean | ❌       | If true, returns only properties that contain ID values in the response. |
| uid          | boolean | ❌       | If true, returns all IDs in UID format (`userId`-`id`).                  |
| populate     | boolean | ❌       | If true, returns all of the collection item's contents.                  |

**Return Type**

`CollectionResponseInfo`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collectionItems.getCollectionResponse(
    'cc364734-7dfd-4bfc-897d-be763dcdbb07',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    {
      ids: true,
      uid: true,
      populate: true,
    },
  );

  console.log(data);
})();
```

## updateCollectionResponse

Updates a response in a collection. For a complete list of properties, see the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). **Note:** - You must pass a collection ID (`12ece9e1-2abf-4edc-8e34-de66e74114d2`), not a collection UID (`12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2`), in this endpoint. - This endpoint acts like a PATCH method. It only updates the values that you pass in the request body (for example, the `name` property). The endpoint does not update the entire resource.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/responses/{responseId}`

**Parameters**

| Name         | Type                                                                | Required | Description          |
| :----------- | :------------------------------------------------------------------ | :------- | :------------------- |
| body         | [UpdateCollectionResponse1](../models/UpdateCollectionResponse1.md) | ❌       | The request body.    |
| responseId   | string                                                              | ✅       | The response's ID.   |
| collectionId | string                                                              | ✅       | The collection's ID. |

**Return Type**

`CollectionResponseUpdated`

**Example Usage Code Snippet**

```typescript
import {
  PostmanApi,
  Raw,
  RequestDataOptions,
  RequestMethod,
  ResponseHeader2_2,
  UpdateCollectionResponse1,
  UpdateCollectionResponseDataMode,
  UpdateCollectionResponseResponseCode,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const requestMethod = RequestMethod.GET_;

  const responseHeader2_2: ResponseHeader2_2 = {
    key: 'Content-Type',
    value: 'application/json',
    description: 'The content type of the request body.',
  };

  const updateCollectionResponseDataMode = UpdateCollectionResponseDataMode.RAW;

  const raw: Raw = {
    language: 'language',
  };

  const requestDataOptions: RequestDataOptions = {
    raw: raw,
    urlencoded: {},
    params: {},
    binary: {},
    graphql: {},
  };

  const updateCollectionResponseResponseCode: UpdateCollectionResponseResponseCode = {
    code: 400,
    name: 'Bad Request',
  };

  const updateCollectionResponse1: UpdateCollectionResponse1 = {
    name: 'Bad Request',
    description: 'description',
    url: 'url',
    method: requestMethod,
    headers: [responseHeader2_2],
    dataMode: updateCollectionResponseDataMode,
    rawModeData: 'rawModeData',
    dataOptions: requestDataOptions,
    responseCode: updateCollectionResponseResponseCode,
    status: 'status',
    time: 'time',
    cookies: 'cookies',
    mime: 'mime',
    text: 'text',
    language: 'language',
    rawDataType: 'rawDataType',
    requestObject: 'requestObject',
  };

  const data = await postmanApi.collectionItems.updateCollectionResponse(
    'cc364734-7dfd-4bfc-897d-be763dcdbb07',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    updateCollectionResponse1,
  );

  console.log(data);
})();
```

## deleteCollectionResponse

Deletes a response in a collection.

- HTTP Method: `DELETE`
- Endpoint: `/collections/{collectionId}/responses/{responseId}`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| responseId   | string | ✅       | The response's ID.   |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`CollectionResponseDeleted`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collectionItems.deleteCollectionResponse(
    'cc364734-7dfd-4bfc-897d-be763dcdbb07',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```
