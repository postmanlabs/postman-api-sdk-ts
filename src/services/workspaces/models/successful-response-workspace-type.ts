import { z } from 'zod';

export const successfulResponseWorkspaceType = z.union([
  z.literal('personal'),
  z.literal('team'),
  z.literal('private'),
  z.literal('public'),
  z.literal('partner'),
]);

export type SuccessfulResponseWorkspaceType = z.infer<typeof successfulResponseWorkspaceType>;
