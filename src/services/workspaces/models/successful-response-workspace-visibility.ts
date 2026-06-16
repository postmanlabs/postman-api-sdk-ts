import { z } from 'zod';

export const successfulResponseWorkspaceVisibility = z.union([
  z.literal('personal'),
  z.literal('team'),
  z.literal('private'),
  z.literal('public'),
  z.literal('partner'),
]);

export type SuccessfulResponseWorkspaceVisibility = z.infer<
  typeof successfulResponseWorkspaceVisibility
>;
