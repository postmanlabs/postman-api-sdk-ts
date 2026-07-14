# SearchService

A list of all methods in the `SearchService` service. Click on the method name to view detailed information about that method.

| Methods                                           | Description                                                                                                                                                                                                                                                                                    |
| :------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [searchPostmanResources](#searchpostmanresources) | Searches Postman for resources such as workspaces, collections, requests, and other resource types. You can filter results by ownership, visibility, tags, and other criteria. **Note:** If you call this endpoint without an API key, the response only returns publicly-available resources. |

## searchPostmanResources

Searches Postman for resources such as workspaces, collections, requests, and other resource types. You can filter results by ownership, visibility, tags, and other criteria. **Note:** If you call this endpoint without an API key, the response only returns publicly-available resources.

- HTTP Method: `POST`
- Endpoint: `/search`

**Parameters**

| Name   | Type                                                          | Required | Description                                                                                                                                |
| :----- | :------------------------------------------------------------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| body   | [SearchPostmanResources](../models/SearchPostmanResources.md) | ❌       | The request body.                                                                                                                          |
| limit  | number                                                        | ❌       | The maximum number of results to return per page.                                                                                          |
| cursor | string                                                        | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |

**Return Type**

`SearchPostmanResourcesResponse`

**Example Usage Code Snippet**

```typescript
import {
  Eq,
  Filters,
  Ne,
  Ownership,
  PostmanApi,
  SearchFilterCollectionId,
  SearchFilterCreatedBy,
  SearchFilterEnvironmentId,
  SearchFilterFlowId,
  SearchFilterGitConnected,
  SearchFilterOrgId,
  SearchFilterPrivateApiNetwork,
  SearchFilterPublisherIsVerified,
  SearchFilterRequestHttpMethod,
  SearchFilterRequestId,
  SearchFilterRequestResourceType,
  SearchFilterSpecId,
  SearchFilterTags,
  SearchFilterTeamId,
  SearchFilterVisibility,
  SearchFilterWorkspaceId,
  SearchFilters,
  SearchPostmanResources,
  SearchPostmanResourcesElementType,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const searchPostmanResourcesElementType = SearchPostmanResourcesElementType.REQUESTS;

  const ownership = Ownership.ORGANIZATION;

  const searchFilterPrivateApiNetwork: SearchFilterPrivateApiNetwork = {
    _eq: true,
    _ne: true,
  };

  const searchFilterPublisherIsVerified: SearchFilterPublisherIsVerified = {
    _eq: true,
    _ne: true,
  };

  const eq = Eq.INTERNAL;

  const ne = Ne.INTERNAL;

  const searchFilterVisibility: SearchFilterVisibility = {
    _eq: eq,
    _ne: ne,
  };

  const searchFilterWorkspaceId: SearchFilterWorkspaceId = {
    _eq: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    _ne: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    _in: ['1f0df51a-8658-4ee8-a2a1-d2567dfa09a9'],
    _nin: ['1f0df51a-8658-4ee8-a2a1-d2567dfa09a9'],
  };

  const searchFilterCollectionId: SearchFilterCollectionId = {
    _eq: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    _ne: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    _in: ['12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2'],
    _nin: ['12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2'],
  };

  const searchFilterTags: SearchFilterTags = {
    _eq: 'FEATURE',
    _ne: 'FEATURE',
    _in: ['FEATURE'],
    _nin: ['FEATURE'],
  };

  const searchFilterRequestHttpMethod: SearchFilterRequestHttpMethod = {
    _eq: 'POST',
    _ne: 'POST',
    _in: ['POST'],
    _nin: ['POST'],
  };

  const searchFilterRequestId: SearchFilterRequestId = {
    _eq: 'c82dd02c-4870-4907-8fcb-593a876cf05b',
    _ne: 'c82dd02c-4870-4907-8fcb-593a876cf05b',
    _in: ['c82dd02c-4870-4907-8fcb-593a876cf05b'],
    _nin: ['c82dd02c-4870-4907-8fcb-593a876cf05b'],
  };

  const searchFilterSpecId: SearchFilterSpecId = {
    _eq: '73e15000-bc7a-4802-b80e-05fff18fd7f8',
    _ne: '73e15000-bc7a-4802-b80e-05fff18fd7f8',
    _in: ['73e15000-bc7a-4802-b80e-05fff18fd7f8'],
    _nin: ['73e15000-bc7a-4802-b80e-05fff18fd7f8'],
  };

  const searchFilterFlowId: SearchFilterFlowId = {
    _eq: '66e05eb68905ca003d6f57d4',
    _ne: '66e05eb68905ca003d6f57d4',
    _in: ['66e05eb68905ca003d6f57d4'],
    _nin: ['66e05eb68905ca003d6f57d4'],
  };

  const searchFilterEnvironmentId: SearchFilterEnvironmentId = {
    _eq: '5daabc50-8451-43f6-922d-96b403b4f28e',
    _ne: '5daabc50-8451-43f6-922d-96b403b4f28e',
    _in: ['5daabc50-8451-43f6-922d-96b403b4f28e'],
    _nin: ['5daabc50-8451-43f6-922d-96b403b4f28e'],
  };

  const searchFilterCreatedBy: SearchFilterCreatedBy = {
    _eq: '12345678',
    _ne: '12345678',
    _in: ['12345678'],
    _nin: ['12345678'],
  };

  const searchFilterOrgId: SearchFilterOrgId = {
    _eq: '1',
    _ne: '1',
    _in: ['1'],
    _nin: ['1'],
  };

  const searchFilterTeamId: SearchFilterTeamId = {
    _eq: '123',
    _ne: '123',
    _in: ['123'],
    _nin: ['123'],
  };

  const searchFilterGitConnected: SearchFilterGitConnected = {
    _eq: true,
    _ne: true,
  };

  const searchFilterRequestResourceType: SearchFilterRequestResourceType = {
    _eq: 'http',
    _ne: 'http',
    _in: ['http'],
    _nin: ['http'],
  };

  const searchFilters: SearchFilters = {
    privateNetwork: searchFilterPrivateApiNetwork,
    publisherIsVerified: searchFilterPublisherIsVerified,
    visibility: searchFilterVisibility,
    workspaceId: searchFilterWorkspaceId,
    collectionId: searchFilterCollectionId,
    tags: searchFilterTags,
    method: searchFilterRequestHttpMethod,
    requestId: searchFilterRequestId,
    specificationId: searchFilterSpecId,
    flowId: searchFilterFlowId,
    environmentId: searchFilterEnvironmentId,
    createdBy: searchFilterCreatedBy,
    organizationId: searchFilterOrgId,
    teamId: searchFilterTeamId,
    isGitConnected: searchFilterGitConnected,
    type: searchFilterRequestResourceType,
  };

  const filters: Filters = {
    _and: [searchFilters],
  };

  const searchPostmanResources: SearchPostmanResources = {
    q: 'postman',
    elementType: searchPostmanResourcesElementType,
    ownership: ownership,
    filters: filters,
  };

  const data = await postmanApi.search.searchPostmanResources(searchPostmanResources, {
    limit: 10,
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
  });

  console.log(data);
})();
```
