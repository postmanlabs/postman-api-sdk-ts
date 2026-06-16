import { z } from 'zod';

export const jsonSchemaType = z.literal('json');

export type JsonSchemaType = z.infer<typeof jsonSchemaType>;
