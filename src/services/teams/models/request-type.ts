import { z } from 'zod';

export const requestType = z.union([
  z.literal('REQUEST_TO_ADD_MEMBERS'),
  z.literal('REQUEST_TO_JOIN'),
  z.literal('UPGRADE_ROLE'),
]);

export type RequestType = z.infer<typeof requestType>;
