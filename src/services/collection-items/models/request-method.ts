import { z } from 'zod';

export const requestMethod = z.union([
  z.literal('GET'),
  z.literal('PUT'),
  z.literal('POST'),
  z.literal('PATCH'),
  z.literal('DELETE'),
  z.literal('COPY'),
  z.literal('HEAD'),
  z.literal('OPTIONS'),
  z.literal('LINK'),
  z.literal('UNLINK'),
  z.literal('PURGE'),
  z.literal('LOCK'),
  z.literal('UNLOCK'),
  z.literal('PROPFIND'),
  z.literal('VIEW'),
]);

export type RequestMethod = z.infer<typeof requestMethod>;
