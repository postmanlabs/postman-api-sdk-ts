import { z } from 'zod';

export const ownerType = z.union([z.literal('user'), z.literal('group')]);

export type OwnerType = z.infer<typeof ownerType>;
