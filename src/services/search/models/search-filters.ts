import { z } from 'zod';
import {
  SearchFilterPrivateApiNetwork,
  searchFilterPrivateApiNetwork,
  searchFilterPrivateApiNetworkRequest,
  searchFilterPrivateApiNetworkResponse,
} from './search-filter-private-api-network';
import {
  SearchFilterPublisherIsVerified,
  searchFilterPublisherIsVerified,
  searchFilterPublisherIsVerifiedRequest,
  searchFilterPublisherIsVerifiedResponse,
} from './search-filter-publisher-is-verified';
import {
  SearchFilterVisibility,
  searchFilterVisibility,
  searchFilterVisibilityRequest,
  searchFilterVisibilityResponse,
} from './search-filter-visibility';
import {
  SearchFilterWorkspaceId,
  searchFilterWorkspaceId,
  searchFilterWorkspaceIdRequest,
  searchFilterWorkspaceIdResponse,
} from './search-filter-workspace-id';
import {
  SearchFilterCollectionId,
  searchFilterCollectionId,
  searchFilterCollectionIdRequest,
  searchFilterCollectionIdResponse,
} from './search-filter-collection-id';
import {
  SearchFilterTags,
  searchFilterTags,
  searchFilterTagsRequest,
  searchFilterTagsResponse,
} from './search-filter-tags';
import {
  SearchFilterRequestHttpMethod,
  searchFilterRequestHttpMethod,
  searchFilterRequestHttpMethodRequest,
  searchFilterRequestHttpMethodResponse,
} from './search-filter-request-http-method';
import {
  SearchFilterRequestId,
  searchFilterRequestId,
  searchFilterRequestIdRequest,
  searchFilterRequestIdResponse,
} from './search-filter-request-id';
import {
  SearchFilterSpecId,
  searchFilterSpecId,
  searchFilterSpecIdRequest,
  searchFilterSpecIdResponse,
} from './search-filter-spec-id';
import {
  SearchFilterFlowId,
  searchFilterFlowId,
  searchFilterFlowIdRequest,
  searchFilterFlowIdResponse,
} from './search-filter-flow-id';
import {
  SearchFilterWorkspaceDocuments,
  searchFilterWorkspaceDocuments,
  searchFilterWorkspaceDocumentsRequest,
  searchFilterWorkspaceDocumentsResponse,
} from './search-filter-workspace-documents';
import {
  SearchFilterEnvironmentId,
  searchFilterEnvironmentId,
  searchFilterEnvironmentIdRequest,
  searchFilterEnvironmentIdResponse,
} from './search-filter-environment-id';
import {
  SearchFilterCreatedBy,
  searchFilterCreatedBy,
  searchFilterCreatedByRequest,
  searchFilterCreatedByResponse,
} from './search-filter-created-by';
import {
  SearchFilterOrgId,
  searchFilterOrgId,
  searchFilterOrgIdRequest,
  searchFilterOrgIdResponse,
} from './search-filter-org-id';
import {
  SearchFilterTeamId,
  searchFilterTeamId,
  searchFilterTeamIdRequest,
  searchFilterTeamIdResponse,
} from './search-filter-team-id';
import {
  SearchFilterGitConnected,
  searchFilterGitConnected,
  searchFilterGitConnectedRequest,
  searchFilterGitConnectedResponse,
} from './search-filter-git-connected';
import {
  SearchFilterRequestResourceType,
  searchFilterRequestResourceType,
  searchFilterRequestResourceTypeRequest,
  searchFilterRequestResourceTypeResponse,
} from './search-filter-request-resource-type';

/**
 * Zod schema for the SearchFilters model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchFilters = z.lazy(() => {
  return z.object({
    privateNetwork: searchFilterPrivateApiNetwork.optional(),
    publisherIsVerified: searchFilterPublisherIsVerified.optional(),
    visibility: searchFilterVisibility.optional(),
    workspaceId: searchFilterWorkspaceId.optional(),
    collectionId: searchFilterCollectionId.optional(),
    tags: searchFilterTags.optional(),
    method: searchFilterRequestHttpMethod.optional(),
    requestId: searchFilterRequestId.optional(),
    specificationId: searchFilterSpecId.optional(),
    flowId: searchFilterFlowId.optional(),
    documentId: searchFilterWorkspaceDocuments.optional(),
    environmentId: searchFilterEnvironmentId.optional(),
    createdBy: searchFilterCreatedBy.optional(),
    organizationId: searchFilterOrgId.optional(),
    teamId: searchFilterTeamId.optional(),
    isGitConnected: searchFilterGitConnected.optional(),
    type: searchFilterRequestResourceType.optional(),
  });
});

/**
 * A single filter condition.
 * @typedef {SearchFilters} searchFilters
 * @property {SearchFilterPrivateApiNetwork} privateNetwork - Filters by private API network membership. Supported for all element types.
 * @property {SearchFilterPublisherIsVerified} publisherIsVerified - Filters by publisher verification status. Supported for all element types.
 * @property {SearchFilterVisibility} visibility - Filters by workspace visibility. Supported for all element types. One of:
- `internal` — Only visible to the organization's team members.
- `public` — Visible to all Postman users.
- `partner` — Visible to assigned external partner users.

 * @property {SearchFilterWorkspaceId} workspaceId - Filters by workspace ID. Supported for all element types.
 * @property {SearchFilterCollectionId} collectionId - Filters by collection ID. Supported for `requests` and `collections` only.
 * @property {SearchFilterTags} tags - Filters by tags. Supported for `workspaces` and `collections`.
 * @property {SearchFilterRequestHttpMethod} method - Filters by HTTP method (for example, `GET` or `POST`). Supported for `requests` only.
 * @property {SearchFilterRequestId} requestId - Filters by request ID. Supported for `requests` only.
 * @property {SearchFilterSpecId} specificationId - Filters by specification ID. Supported for `specs` only.
 * @property {SearchFilterFlowId} flowId - Filters by flow ID. Supported for `flows` only.
 * @property {SearchFilterWorkspaceDocuments} documentId - Filters by workspace document ID. Supported for workspace documents.
 * @property {SearchFilterEnvironmentId} environmentId - Filters by environment ID. Supported for `environments` only.
 * @property {SearchFilterCreatedBy} createdBy - Filters by the resource creator's user ID. Supported for all element types.
 * @property {SearchFilterOrgId} organizationId - Filters by organization ID. Supported for all element types.
 * @property {SearchFilterTeamId} teamId - Filters by team ID. Supported for all element types.
 * @property {SearchFilterGitConnected} isGitConnected - Filters by Git connection status. Supported for `workspaces`, `collections`, `requests`, `environments`, `specs`, `flows`, and `documents`.
 * @property {SearchFilterRequestResourceType} type - Filters by resource type variant (for example, `http` or `grpc`). Supported for `requests` only.
 */
export type SearchFilters = z.infer<typeof searchFilters>;

/**
 * Zod schema for mapping API responses to the SearchFilters application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFiltersResponse = z.lazy(() => {
  return z
    .object({
      privateNetwork: searchFilterPrivateApiNetworkResponse.optional(),
      publisherIsVerified: searchFilterPublisherIsVerifiedResponse.optional(),
      visibility: searchFilterVisibilityResponse.optional(),
      workspaceId: searchFilterWorkspaceIdResponse.optional(),
      collectionId: searchFilterCollectionIdResponse.optional(),
      tags: searchFilterTagsResponse.optional(),
      method: searchFilterRequestHttpMethodResponse.optional(),
      requestId: searchFilterRequestIdResponse.optional(),
      specificationId: searchFilterSpecIdResponse.optional(),
      flowId: searchFilterFlowIdResponse.optional(),
      documentId: searchFilterWorkspaceDocumentsResponse.optional(),
      environmentId: searchFilterEnvironmentIdResponse.optional(),
      createdBy: searchFilterCreatedByResponse.optional(),
      organizationId: searchFilterOrgIdResponse.optional(),
      teamId: searchFilterTeamIdResponse.optional(),
      isGitConnected: searchFilterGitConnectedResponse.optional(),
      type: searchFilterRequestResourceTypeResponse.optional(),
    })
    .transform((data) => ({
      privateNetwork: data['privateNetwork'],
      publisherIsVerified: data['publisherIsVerified'],
      visibility: data['visibility'],
      workspaceId: data['workspaceId'],
      collectionId: data['collectionId'],
      tags: data['tags'],
      method: data['method'],
      requestId: data['requestId'],
      specificationId: data['specificationId'],
      flowId: data['flowId'],
      documentId: data['documentId'],
      environmentId: data['environmentId'],
      createdBy: data['createdBy'],
      organizationId: data['organizationId'],
      teamId: data['teamId'],
      isGitConnected: data['isGitConnected'],
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the SearchFilters application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFiltersRequest = z.lazy(() => {
  return z
    .object({
      privateNetwork: searchFilterPrivateApiNetworkRequest.optional(),
      publisherIsVerified: searchFilterPublisherIsVerifiedRequest.optional(),
      visibility: searchFilterVisibilityRequest.optional(),
      workspaceId: searchFilterWorkspaceIdRequest.optional(),
      collectionId: searchFilterCollectionIdRequest.optional(),
      tags: searchFilterTagsRequest.optional(),
      method: searchFilterRequestHttpMethodRequest.optional(),
      requestId: searchFilterRequestIdRequest.optional(),
      specificationId: searchFilterSpecIdRequest.optional(),
      flowId: searchFilterFlowIdRequest.optional(),
      documentId: searchFilterWorkspaceDocumentsRequest.optional(),
      environmentId: searchFilterEnvironmentIdRequest.optional(),
      createdBy: searchFilterCreatedByRequest.optional(),
      organizationId: searchFilterOrgIdRequest.optional(),
      teamId: searchFilterTeamIdRequest.optional(),
      isGitConnected: searchFilterGitConnectedRequest.optional(),
      type: searchFilterRequestResourceTypeRequest.optional(),
    })
    .transform((data) => ({
      privateNetwork: data['privateNetwork'],
      publisherIsVerified: data['publisherIsVerified'],
      visibility: data['visibility'],
      workspaceId: data['workspaceId'],
      collectionId: data['collectionId'],
      tags: data['tags'],
      method: data['method'],
      requestId: data['requestId'],
      specificationId: data['specificationId'],
      flowId: data['flowId'],
      documentId: data['documentId'],
      environmentId: data['environmentId'],
      createdBy: data['createdBy'],
      organizationId: data['organizationId'],
      teamId: data['teamId'],
      isGitConnected: data['isGitConnected'],
      type: data['type'],
    }));
});
