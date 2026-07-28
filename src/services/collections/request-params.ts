import { AscDesc } from '../common/asc-desc';
import { CollectionModelQuery } from './models/collection-model-query';
import { Prefer } from './models/prefer';
import { CollectionTransformFormat } from './models/collection-transform-format';

export interface GetCollectionsParams {
  workspace?: string;
  name?: string;
  limit?: number;
  offset?: number;
}

export interface CreateCollectionParams {
  workspace: string;
}

export interface GetCollectionsForkedByUserParams {
  cursor?: string;
  limit?: number;
  direction?: AscDesc;
}

export interface CreateCollectionForkParams {
  workspace: string;
}

export interface GetCollectionParams {
  accessKey?: string;
  model?: CollectionModelQuery;
}

export interface PutCollectionParams {
  prefer?: Prefer;
}

export interface GetCollectionForksParams {
  cursor?: string;
  limit?: number;
  direction?: AscDesc;
}

export interface TransformCollectionToOpenApiParams {
  format?: CollectionTransformFormat;
}
