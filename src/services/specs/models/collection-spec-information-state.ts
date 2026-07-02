import { z } from 'zod';

export enum CollectionSpecInformationState {
  IN_SYNC = 'in-sync',
  OUT_OF_SYNC = 'out-of-sync',
  SYNC_IN_PROGRESS = 'sync-in-progress',
}
