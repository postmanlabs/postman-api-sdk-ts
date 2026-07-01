import { z } from 'zod';

export const createApiCollectionOperationType = z.literal('CREATE_NEW');

export type CreateApiCollectionOperationType = z.infer<typeof createApiCollectionOperationType>;
