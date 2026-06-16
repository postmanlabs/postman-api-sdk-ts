import { z } from 'zod';

export const schemaLanguage = z.union([z.literal('json'), z.literal('yaml')]);

export type SchemaLanguage = z.infer<typeof schemaLanguage>;
