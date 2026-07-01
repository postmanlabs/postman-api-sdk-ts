import { z } from 'zod';

export const copyCollectionToApiOperationType = z.literal('COPY_COLLECTION');

export type CopyCollectionToApiOperationType = z.infer<typeof copyCollectionToApiOperationType>;
