import { z } from 'zod';

export enum CollectionPullRequestsDataStatus {
  OPEN = 'open',
  APPROVED = 'approved',
  DECLINED = 'declined',
  MERGED = 'merged',
}
