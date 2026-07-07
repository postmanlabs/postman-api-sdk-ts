import { z } from 'zod';
import {
  GetApiCatalogServiceTrafficData,
  getApiCatalogServiceTrafficData,
  getApiCatalogServiceTrafficDataRequest,
  getApiCatalogServiceTrafficDataResponse,
} from './get-api-catalog-service-traffic-data';
import {
  GetApiCatalogServiceComplianceData,
  getApiCatalogServiceComplianceData,
  getApiCatalogServiceComplianceDataRequest,
  getApiCatalogServiceComplianceDataResponse,
} from './get-api-catalog-service-compliance-data';
import {
  GetApiCatalogServiceEntityCountData,
  getApiCatalogServiceEntityCountData,
  getApiCatalogServiceEntityCountDataRequest,
  getApiCatalogServiceEntityCountDataResponse,
} from './get-api-catalog-service-entity-count-data';
import {
  GetApiCatalogServiceOwnerData,
  getApiCatalogServiceOwnerData,
  getApiCatalogServiceOwnerDataRequest,
  getApiCatalogServiceOwnerDataResponse,
} from './get-api-catalog-service-owner-data';
import {
  DataGovernanceGroup,
  dataGovernanceGroup,
  dataGovernanceGroupRequest,
  dataGovernanceGroupResponse,
} from './data-governance-group';
import {
  Dependencies,
  dependencies,
  dependenciesRequest,
  dependenciesResponse,
} from './dependencies';

/**
 * Zod schema for the GetApiCatalogServiceData2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceData2 = z.lazy(() => {
  return z.object({
    id: z.string(),
    name: z.string(),
    status: z.string(),
    lastActivityAt: z.string().nullable(),
    traffic: getApiCatalogServiceTrafficData.nullable(),
    compliance: getApiCatalogServiceComplianceData,
    entityCounts: getApiCatalogServiceEntityCountData,
    createdAt: z.string().nullable(),
    gitRepo: z.string().nullable(),
    owner: getApiCatalogServiceOwnerData.nullable(),
    tags: z.array(z.string()),
    governanceGroup: dataGovernanceGroup.nullable(),
    dependencies: z.array(dependencies),
  });
});

/**
 * Information about the service.
 * @typedef  {GetApiCatalogServiceData2} getApiCatalogServiceData2 - Information about the service. - Information about the service.
 * @property {string} - The service's ID.
 * @property {string} - The service's name.
 * @property {GetApiCatalogServiceDataStatus} - The overall health status, derived from compliance signals.
 * @property {string} - The date and time of the last observed activity. If there's no activity in the time window, this returns a null value.
 * @property {GetApiCatalogServiceTrafficData} - Information about traffic and performance within the time window. If there's no traffic data, this returns a null value.
 * @property {GetApiCatalogServiceComplianceData} - Information about compliance and governance.
 * @property {GetApiCatalogServiceEntityCountData} - Information about the workspace's entities.
 * @property {string} - The date and time at which the workspace was created.
 * @property {string} - The URL of the linked Git repository. If the workspace isn't connected to a repository, this returns a null value.
 * @property {GetApiCatalogServiceOwnerData} - The service's owner. If no owner is assigned, this returns a null value.
 * @property {string[]} - A list of the workspace's tags.
 * @property {DataGovernanceGroup} - The governance group that the workspace belongs to. If no governance group is assigned, this returns a null value.
 * @property {Dependencies[]} - A list of inbound and outbound service dependencies from the service graph.
 */
export type GetApiCatalogServiceData2 = z.infer<typeof getApiCatalogServiceData2>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceData2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceData2Response = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string(),
      status: z.string(),
      lastActivityAt: z.string().nullable(),
      traffic: getApiCatalogServiceTrafficDataResponse.nullable(),
      compliance: getApiCatalogServiceComplianceDataResponse,
      entityCounts: getApiCatalogServiceEntityCountDataResponse,
      createdAt: z.string().nullable(),
      gitRepo: z.string().nullable(),
      owner: getApiCatalogServiceOwnerDataResponse.nullable(),
      tags: z.array(z.string()),
      governanceGroup: dataGovernanceGroupResponse.nullable(),
      dependencies: z.array(dependenciesResponse),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      status: data['status'],
      lastActivityAt: data['lastActivityAt'],
      traffic: data['traffic'],
      compliance: data['compliance'],
      entityCounts: data['entityCounts'],
      createdAt: data['createdAt'],
      gitRepo: data['gitRepo'],
      owner: data['owner'],
      tags: data['tags'],
      governanceGroup: data['governanceGroup'],
      dependencies: data['dependencies'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceData2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceData2Request = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string(),
      status: z.string(),
      lastActivityAt: z.string().nullable(),
      traffic: getApiCatalogServiceTrafficDataRequest.nullable(),
      compliance: getApiCatalogServiceComplianceDataRequest,
      entityCounts: getApiCatalogServiceEntityCountDataRequest,
      createdAt: z.string().nullable(),
      gitRepo: z.string().nullable(),
      owner: getApiCatalogServiceOwnerDataRequest.nullable(),
      tags: z.array(z.string()),
      governanceGroup: dataGovernanceGroupRequest.nullable(),
      dependencies: z.array(dependenciesRequest),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      status: data['status'],
      lastActivityAt: data['lastActivityAt'],
      traffic: data['traffic'],
      compliance: data['compliance'],
      entityCounts: data['entityCounts'],
      createdAt: data['createdAt'],
      gitRepo: data['gitRepo'],
      owner: data['owner'],
      tags: data['tags'],
      governanceGroup: data['governanceGroup'],
      dependencies: data['dependencies'],
    }));
});
