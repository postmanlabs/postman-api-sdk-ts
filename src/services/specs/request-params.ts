export interface SyncCollectionWithSpecParams {
  specId: string;
}

export interface GetAllSpecsParams {
  workspaceId: string;
  cursor?: string;
  limit?: number;
}

export interface CreateSpecParams {
  workspaceId: string;
}

export interface GetSpecCollectionsParams {
  limit?: number;
  cursor?: string;
}

export interface SyncSpecWithCollectionParams {
  collectionUid: string;
}

export interface GetSpecVersionTagsParams {
  cursor?: string;
  limit?: number;
}
