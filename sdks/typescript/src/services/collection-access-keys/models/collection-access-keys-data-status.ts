import { z } from 'zod';

export const collectionAccessKeysDataStatus = z.union([z.literal('ACTIVE'), z.literal('INACTIVE')]);

export type CollectionAccessKeysDataStatus = z.infer<typeof collectionAccessKeysDataStatus>;
