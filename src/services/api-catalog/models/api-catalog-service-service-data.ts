import { z } from 'zod';
import { Traffic, traffic, trafficRequest, trafficResponse } from './traffic';
import { Compliance, compliance, complianceRequest, complianceResponse } from './compliance';
import { Owner, owner, ownerRequest, ownerResponse } from './owner';
import {
  ApiCatalogServiceServiceDataGovernanceGroup,
  apiCatalogServiceServiceDataGovernanceGroup,
  apiCatalogServiceServiceDataGovernanceGroupRequest,
  apiCatalogServiceServiceDataGovernanceGroupResponse,
} from './api-catalog-service-service-data-governance-group';

/**
 * Zod schema for the ApiCatalogServiceServiceData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiCatalogServiceServiceData = z.lazy(() => {
  return z.object({
    id: z.string(),
    name: z.string(),
    status: z.string(),
    lastActivityAt: z.string().nullable(),
    traffic: traffic.nullable(),
    compliance: compliance,
    createdAt: z.string().nullable(),
    gitRepo: z.string().nullable(),
    owner: owner.nullable(),
    tags: z.array(z.string()),
    governanceGroup: apiCatalogServiceServiceDataGovernanceGroup.nullable(),
  });
});

/**
 * Information about the service.
 * @typedef  {ApiCatalogServiceServiceData} apiCatalogServiceServiceData - Information about the service. - Information about the service.
 * @property {string} - The service's ID.
 * @property {string} - The service's name.
 * @property {ApiCatalogServiceServiceDataStatus} - The overall health status, derived from compliance signals.
 * @property {string} - The date and time of the last observed activity. If there's no activity in the time window, this returns a null value.
 * @property {Traffic} - Information about traffic and performance within the time window. If there's no traffic data, this returns a null value.
 * @property {Compliance} - Information about compliance and governance.
 * @property {string} - The date and time at which the workspace was created.
 * @property {string} - The URL of the linked Git repository. If the workspace isn't connected to a repository, this returns a null value.
 * @property {Owner} - The service's owner. If no owner is assigned, this returns a null value.
 * @property {string[]} - A list of the workspace's tags.
 * @property {ApiCatalogServiceServiceDataGovernanceGroup} - The governance group that the workspace belongs to. If no governance group is assigned, this returns a null value.
 */
export type ApiCatalogServiceServiceData = z.infer<typeof apiCatalogServiceServiceData>;

/**
 * Zod schema for mapping API responses to the ApiCatalogServiceServiceData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogServiceServiceDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string(),
      status: z.string(),
      lastActivityAt: z.string().nullable(),
      traffic: trafficResponse.nullable(),
      compliance: complianceResponse,
      createdAt: z.string().nullable(),
      gitRepo: z.string().nullable(),
      owner: ownerResponse.nullable(),
      tags: z.array(z.string()),
      governanceGroup: apiCatalogServiceServiceDataGovernanceGroupResponse.nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      status: data['status'],
      lastActivityAt: data['lastActivityAt'],
      traffic: data['traffic'],
      compliance: data['compliance'],
      createdAt: data['createdAt'],
      gitRepo: data['gitRepo'],
      owner: data['owner'],
      tags: data['tags'],
      governanceGroup: data['governanceGroup'],
    }));
});

/**
 * Zod schema for mapping the ApiCatalogServiceServiceData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogServiceServiceDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string(),
      status: z.string(),
      lastActivityAt: z.string().nullable(),
      traffic: trafficRequest.nullable(),
      compliance: complianceRequest,
      createdAt: z.string().nullable(),
      gitRepo: z.string().nullable(),
      owner: ownerRequest.nullable(),
      tags: z.array(z.string()),
      governanceGroup: apiCatalogServiceServiceDataGovernanceGroupRequest.nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      status: data['status'],
      lastActivityAt: data['lastActivityAt'],
      traffic: data['traffic'],
      compliance: data['compliance'],
      createdAt: data['createdAt'],
      gitRepo: data['gitRepo'],
      owner: data['owner'],
      tags: data['tags'],
      governanceGroup: data['governanceGroup'],
    }));
});
