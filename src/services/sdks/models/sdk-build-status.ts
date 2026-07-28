import { z } from 'zod';

export enum SdkBuildStatus {
  QUEUED = 'queued',
  IN_PROGRESS = 'in_progress',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}
