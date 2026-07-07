import { ResourceType } from './models/resource-type';

export interface DetectedSecretsQueriesParams {
  limit?: number;
  cursor?: string;
  include?: string;
  since?: string;
  until?: string;
}

export interface GetDetectedSecretsLocationsParams {
  workspaceId: string;
  limit?: number;
  cursor?: string;
  since?: string;
  until?: string;
  resourceType?: ResourceType;
}
