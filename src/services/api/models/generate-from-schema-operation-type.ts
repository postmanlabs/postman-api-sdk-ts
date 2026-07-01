import { z } from 'zod';

export const generateFromSchemaOperationType = z.literal('GENERATE_FROM_SCHEMA');

export type GenerateFromSchemaOperationType = z.infer<typeof generateFromSchemaOperationType>;
