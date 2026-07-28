import { z } from 'zod';
import {
  SearchResourceTeamData,
  searchResourceTeamData,
  searchResourceTeamDataRequest,
  searchResourceTeamDataResponse,
} from './search-resource-team-data';
import {
  SearchRequestsCollectionData,
  searchRequestsCollectionData,
  searchRequestsCollectionDataRequest,
  searchRequestsCollectionDataResponse,
} from './search-requests-collection-data';
import {
  SearchResourceWorkspacesData,
  searchResourceWorkspacesData,
  searchResourceWorkspacesDataRequest,
  searchResourceWorkspacesDataResponse,
} from './search-resource-workspaces-data';
import {
  SearchResourceOrganizationData,
  searchResourceOrganizationData,
  searchResourceOrganizationDataRequest,
  searchResourceOrganizationDataResponse,
} from './search-resource-organization-data';
import {
  SearchResourceLinksData,
  searchResourceLinksData,
  searchResourceLinksDataRequest,
  searchResourceLinksDataResponse,
} from './search-resource-links-data';

/**
 * Zod schema for the SearchPostmanResourcesResponseData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchPostmanResourcesResponseData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    method: z.string().optional(),
    type: z.string().optional(),
    description: z.string().optional(),
    summary: z.string().optional(),
    url: z.string().optional(),
    tags: z.array(z.string()).optional(),
    specificationId: z.string().optional(),
    specificationType: z.string().optional(),
    specificationName: z.string().optional(),
    isPrivateNetworkEntity: z.boolean().optional(),
    createdBy: z.string().optional(),
    team: searchResourceTeamData.optional().nullable(),
    isGitConnected: z.boolean().optional(),
    collection: searchRequestsCollectionData.optional(),
    workspace: searchResourceWorkspacesData.optional(),
    organization: searchResourceOrganizationData.optional().nullable(),
    links: searchResourceLinksData.optional(),
  });
});

/**
 * Information about the Postman resource.
 * @typedef  {SearchPostmanResourcesResponseData} searchPostmanResourcesResponseData - Information about the Postman resource. - Information about the Postman resource.
 * @property {string} - The resource's ID.
 * @property {string} - The resource's name.
 * @property {string} - The request's HTTP method. Returns only for requests.
 * @property {string} - The resource type variant, such as HTTP or gRPC. Returns only for requests.
 * @property {string} - A brief description of the resource, if available.
 * @property {string} - A brief summary of the resource, if available. Returns only for workspaces and collections.
 * @property {string} - The request URL of the resource. Returns only for requests.
 * @property {string[]} - A list of tags associated with the resource. Returns only for workspaces and collections.
 * @property {string} - The specification's ID. Returns only for specifications.
 * @property {string} - The specification's type. Returns only for specifications.
 * @property {string} - The specification's name. Returns only for specifications.
 * @property {boolean} - Whether the resource is part of a private API network.
 * @property {string} - The ID of the user who created the resource.
 * @property {SearchResourceTeamData} - Information about the team associated with the resource. This returns a null value for the `user` publisher type.
 * @property {boolean} - If true, the resource is connected to Git. Returns only for workspaces, collections, requests, specifications, and flows.
 * @property {SearchRequestsCollectionData} - Information about the collection containing the resource. Returns only for requests.
 * @property {SearchResourceWorkspacesData} - Information about the workspace containing the resource.
 * @property {SearchResourceOrganizationData} - Information about the organization that published the resource. This returns a null value for the `user` publisher type.
 * @property {SearchResourceLinksData} - Information about the resource's hypermedia links.
 */
export type SearchPostmanResourcesResponseData = z.infer<typeof searchPostmanResourcesResponseData>;

/**
 * Zod schema for mapping API responses to the SearchPostmanResourcesResponseData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchPostmanResourcesResponseDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      method: z.string().optional(),
      type: z.string().optional(),
      description: z.string().optional(),
      summary: z.string().optional(),
      url: z.string().optional(),
      tags: z.array(z.string()).optional(),
      specificationId: z.string().optional(),
      specificationType: z.string().optional(),
      specificationName: z.string().optional(),
      isPrivateNetworkEntity: z.boolean().optional(),
      createdBy: z.string().optional(),
      team: searchResourceTeamDataResponse.optional().nullable(),
      isGitConnected: z.boolean().optional(),
      collection: searchRequestsCollectionDataResponse.optional(),
      workspace: searchResourceWorkspacesDataResponse.optional(),
      organization: searchResourceOrganizationDataResponse.optional().nullable(),
      links: searchResourceLinksDataResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      method: data['method'],
      type: data['type'],
      description: data['description'],
      summary: data['summary'],
      url: data['url'],
      tags: data['tags'],
      specificationId: data['specificationId'],
      specificationType: data['specificationType'],
      specificationName: data['specificationName'],
      isPrivateNetworkEntity: data['isPrivateNetworkEntity'],
      createdBy: data['createdBy'],
      team: data['team'],
      isGitConnected: data['isGitConnected'],
      collection: data['collection'],
      workspace: data['workspace'],
      organization: data['organization'],
      links: data['links'],
    }));
});

/**
 * Zod schema for mapping the SearchPostmanResourcesResponseData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchPostmanResourcesResponseDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      method: z.string().optional(),
      type: z.string().optional(),
      description: z.string().optional(),
      summary: z.string().optional(),
      url: z.string().optional(),
      tags: z.array(z.string()).optional(),
      specificationId: z.string().optional(),
      specificationType: z.string().optional(),
      specificationName: z.string().optional(),
      isPrivateNetworkEntity: z.boolean().optional(),
      createdBy: z.string().optional(),
      team: searchResourceTeamDataRequest.optional().nullable(),
      isGitConnected: z.boolean().optional(),
      collection: searchRequestsCollectionDataRequest.optional(),
      workspace: searchResourceWorkspacesDataRequest.optional(),
      organization: searchResourceOrganizationDataRequest.optional().nullable(),
      links: searchResourceLinksDataRequest.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      method: data['method'],
      type: data['type'],
      description: data['description'],
      summary: data['summary'],
      url: data['url'],
      tags: data['tags'],
      specificationId: data['specificationId'],
      specificationType: data['specificationType'],
      specificationName: data['specificationName'],
      isPrivateNetworkEntity: data['isPrivateNetworkEntity'],
      createdBy: data['createdBy'],
      team: data['team'],
      isGitConnected: data['isGitConnected'],
      collection: data['collection'],
      workspace: data['workspace'],
      organization: data['organization'],
      links: data['links'],
    }));
});
