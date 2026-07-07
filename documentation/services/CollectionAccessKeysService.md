# CollectionAccessKeysService

A list of all methods in the `CollectionAccessKeysService` service. Click on the method name to view detailed information about that method.

| Methods                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getCollectionAccessKeys](#getcollectionaccesskeys)     | Gets the authenticated user's personal and team [collection access keys](https://learning.postman.com/docs/developer/postman-api/authentication/#generate-a-collection-access-key). **Note:** - The `expiresAfter` property in the response represents the date and time at which the access key expires. Collection access keys are valid for 60 days. If unused, the access key expires after 60 days. If someone uses the access key, then its expiration date increases by another 60 days. - If the collection key is unused, the `lastUsedAt` property in the response returns an empty string. |
| [deleteCollectionAccessKey](#deletecollectionaccesskey) | Deletes a collection access key. To get a collection access key's ID, use the GET `/collection-access-key` endpoint. On success, this returns an HTTP `204 No Content` response.                                                                                                                                                                                                                                                                                                                                                                                                                      |

## getCollectionAccessKeys

Gets the authenticated user's personal and team [collection access keys](https://learning.postman.com/docs/developer/postman-api/authentication/#generate-a-collection-access-key). **Note:** - The `expiresAfter` property in the response represents the date and time at which the access key expires. Collection access keys are valid for 60 days. If unused, the access key expires after 60 days. If someone uses the access key, then its expiration date increases by another 60 days. - If the collection key is unused, the `lastUsedAt` property in the response returns an empty string.

- HTTP Method: `GET`
- Endpoint: `/collection-access-keys`

**Parameters**

| Name         | Type   | Required | Description                                                                                                                                |
| :----------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| collectionId | string | ❌       | Filter the results by a collection's unique ID.                                                                                            |
| cursor       | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |

**Return Type**

`CollectionAccessKeys`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collectionAccessKeys.getCollectionAccessKeys({
    collectionId: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
  });

  console.log(data);
})();
```

## deleteCollectionAccessKey

Deletes a collection access key. To get a collection access key's ID, use the GET `/collection-access-key` endpoint. On success, this returns an HTTP `204 No Content` response.

- HTTP Method: `DELETE`
- Endpoint: `/collection-access-keys/{keyId}`

**Parameters**

| Name  | Type   | Required | Description                     |
| :---- | :----- | :------- | :------------------------------ |
| keyId | string | ✅       | The collection access key's ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.collectionAccessKeys.deleteCollectionAccessKey(
    'Njg5OjU3MDQ1NjYtYmQxZDU3NzktMWVkNS00ZDhjLWI0ZmQtZWRhOGY2Mzg1NTY0',
  );

  console.log(data);
})();
```
