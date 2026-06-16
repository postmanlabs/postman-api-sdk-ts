import { z } from 'zod';

export const schemaType = z.union([z.literal('openapi3'), z.literal('openapi2')]);

export type SchemaType = z.infer<typeof schemaType>;
