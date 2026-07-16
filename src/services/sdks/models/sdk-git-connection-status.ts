import { z } from 'zod';

export enum SdkGitConnectionStatus {
  ACTIVE = 'active',
  DISCONNECTED = 'disconnected',
  INACCESSIBLE = 'inaccessible',
}
