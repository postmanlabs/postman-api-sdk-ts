import { ElementTypeQuery } from './models/element-type-query';
import { SortCreatedUpdatedAt } from './models/sort-created-updated-at';
import { AscDesc } from '../common/asc-desc';
import { PanRequestStatus } from './models/pan-request-status';

export interface ListPrivateNetworkWorkspacesParams {
  type?: ElementTypeQuery;
  name?: string;
  summary?: string;
  description?: string;
  since?: string;
  until?: string;
  addedBy?: number;
  sort?: SortCreatedUpdatedAt;
  direction?: AscDesc;
  createdBy?: number;
  offset?: number;
  limit?: number;
  parentFolderId?: number;
}

export interface ListPrivateNetworkAddRequestsParams {
  since?: string;
  until?: string;
  requestedBy?: number;
  type?: ElementTypeQuery;
  status?: PanRequestStatus;
  name?: string;
  sort?: SortCreatedUpdatedAt;
  direction?: AscDesc;
  offset?: number;
  limit?: number;
}
