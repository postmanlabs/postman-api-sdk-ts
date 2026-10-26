import { z } from 'zod';

export enum PullRequestMergeDataStatus {
  INACTIVE = 'inactive',
  INPROGRESS = 'inprogress',
  FAILED = 'failed',
}
