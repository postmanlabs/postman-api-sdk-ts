import { z } from 'zod';

export const method = z.union([
  z.literal('GET'),
  z.literal('POST'),
  z.literal('PUT'),
  z.literal('PATCH'),
  z.literal('DELETE'),
  z.literal('HEAD'),
  z.literal('OPTIONS'),
  z.literal('TRACE'),
]);

export type Method = z.infer<typeof method>;
