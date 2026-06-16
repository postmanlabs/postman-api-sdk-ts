import { z } from 'zod';

export const createUpdateSpecFileResponseType = z.union([z.literal('DEFAULT'), z.literal('ROOT')]);

export type CreateUpdateSpecFileResponseType = z.infer<typeof createUpdateSpecFileResponseType>;
