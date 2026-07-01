import {
  DiscoveryServicesSource,
  discoveryServicesSource,
} from './models/discovery-services-source';
import {
  ApiCatalogServiceStatusFilter,
  apiCatalogServiceStatusFilter,
} from './models/api-catalog-service-status-filter';
import {
  ApiCatalogServiceSpecLintSeverityFilter,
  apiCatalogServiceSpecLintSeverityFilter,
} from './models/api-catalog-service-spec-lint-severity-filter';

export interface GetApiCatalogDiscoveryServicesParams {
  discoverySource?: DiscoveryServicesSource;
  status?: string;
  search?: string;
  limit?: number;
  cursor?: string;
}

export interface GetApiCatalogServicesParams {
  systemEnvironmentId: string;
  name?: string;
  tags?: string;
  governanceGroupId?: string;
  limit?: number;
  cursor?: string;
}

export interface GetApiCatalogServiceParams {
  systemEnvironmentId: string;
}

export interface GetApiCatalogServiceEndpointsParams {
  systemEnvironmentId: string;
  httpMethods?: string;
  hosts?: string;
  responseCodes?: string;
  search?: string;
  sort?: string;
  limit?: number;
  cursor?: string;
}

export interface GetApiCatalogServiceMonitorRunsParams {
  systemEnvironmentId: string;
  collectionId?: string;
  sort?: string;
  environmentId?: string;
  status?: ApiCatalogServiceStatusFilter;
  limit?: number;
  cursor?: string;
}

export interface GetApiCatalogServiceSpecificationLintsParams {
  specId?: string;
  severity?: ApiCatalogServiceSpecLintSeverityFilter;
  status?: ApiCatalogServiceStatusFilter;
  sort?: string;
  limit?: number;
  cursor?: string;
}

export interface GetApiCatalogServiceCiRunsParams {
  systemEnvironmentId: string;
  collectionId?: string;
  environmentId?: string;
  status?: ApiCatalogServiceStatusFilter;
  branch?: string;
  workflowName?: string;
  actor?: string;
  repoName?: string;
  repoOwner?: string;
  sort?: string;
  limit?: number;
  cursor?: string;
}

export interface GetApiCatalogSystemEnvironmentsParams {
  isProduction?: boolean;
  limit?: number;
  cursor?: string;
}

export interface GetApiCatalogSystemEnvironmentAssociationsParams {
  workspaceId?: string;
  limit?: number;
  cursor?: string;
}

export interface AddApiCatalogSystemEnvironmentAssociationsParams {
  allowPartial?: boolean;
}
