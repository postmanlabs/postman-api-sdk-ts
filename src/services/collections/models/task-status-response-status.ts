import { z } from 'zod';

export enum TaskStatusResponseStatus {
  SUCCESSFUL = 'successful',
  IN_PROGRESS = 'in-progress',
  FAILED = 'failed',
}
