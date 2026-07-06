import { z } from 'zod';

export enum MergeStatus {
  INACTIVE = 'inactive',
  INPROGRESS = 'inprogress',
  FAILED = 'failed',
}
