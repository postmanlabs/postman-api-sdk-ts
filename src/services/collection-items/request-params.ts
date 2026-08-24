export interface CreateCollectionRequestParams {
  folder?: string;
}

export interface CreateCollectionResponseParams {
  request: string;
}

export interface GetCollectionFolderParams {
  ids?: boolean;
  uid?: boolean;
  populate?: boolean;
}

export interface GetCollectionRequestParams {
  ids?: boolean;
  uid?: boolean;
  populate?: boolean;
}

export interface GetCollectionResponseParams {
  ids?: boolean;
  uid?: boolean;
  populate?: boolean;
}
