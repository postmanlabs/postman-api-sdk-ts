import { AscDescDefaultDesc, ascDescDefaultDesc } from '../common/asc-desc-default-desc';
import { TagsEntityType, tagsEntityType } from './models/tags-entity-type';

export interface GetTaggedEntitiesParams {
  limit?: number;
  direction?: AscDescDefaultDesc;
  cursor?: string;
  entityType?: TagsEntityType;
}
