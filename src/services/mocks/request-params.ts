import { MockSortServedAt, mockSortServedAt } from './models/mock-sort-served-at';
import { AscDesc, ascDesc } from '../common/asc-desc';

export interface GetMocksParams {
  teamId?: string;
  workspace?: string;
}

export interface CreateMockParams {
  workspace: string;
}

export interface GetMockCallLogsParams {
  limit?: number;
  cursor?: string;
  until?: string;
  since?: string;
  responseStatusCode?: number;
  responseType?: string;
  requestMethod?: string;
  requestPath?: string;
  sort?: MockSortServedAt;
  direction?: AscDesc;
  include?: string;
}
