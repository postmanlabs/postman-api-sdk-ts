import { ApiInclude, apiInclude } from './models/api-include';

export interface GetApisParams {
  workspaceId: string;
  createdBy?: number;
  cursor?: string;
  description?: string;
  limit?: number;
}

export interface CreateApiParams {
  workspaceId: string;
}

export interface GetApiParams {
  include?: ApiInclude[];
}

export interface GetApiCollectionParams {
  versionId?: string;
}

export interface GetApiSchemaParams {
  versionId?: string;
  bundled?: boolean;
}

export interface GetApiSchemaFilesParams {
  versionId?: string;
  limit?: number;
  cursor?: string;
}

export interface GetApiSchemaFileContentsParams {
  versionId?: string;
}

export interface GetApiVersionsParams {
  cursor?: string;
  limit?: number;
}
