import { AscDesc, ascDesc } from '../common/asc-desc';
import { SortByCreatedAt, sortByCreatedAt } from './models/sort-by-created-at';

export interface GetEnvironmentsParams {
  workspace?: string;
}

export interface CreateEnvironmentParams {
  workspace: string;
}

export interface GetEnvironmentForksParams {
  cursor?: string;
  direction?: AscDesc;
  limit?: number;
  sort?: SortByCreatedAt;
}

export interface ForkEnvironmentParams {
  workspaceId: string;
}
