import { z } from 'zod';

export const environmentVariablesType = z.union([z.literal('secret'), z.literal('default')]);

export type EnvironmentVariablesType = z.infer<typeof environmentVariablesType>;
