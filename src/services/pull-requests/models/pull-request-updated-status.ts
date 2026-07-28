import { z } from 'zod';

export enum PullRequestUpdatedStatus {
  OPEN = 'open',
  APPROVED = 'approved',
  DECLINED = 'declined',
  MERGED = 'merged',
}
