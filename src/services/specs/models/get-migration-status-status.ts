import { z } from 'zod';

export const getMigrationStatusStatus = z.union([z.literal('COMPLETED'), z.literal('FAILED')]);

export type GetMigrationStatusStatus = z.infer<typeof getMigrationStatusStatus>;
