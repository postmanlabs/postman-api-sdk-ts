import { z } from 'zod';

export const dataWorkspaceVisibility = z.union([
  z.literal('personal'),
  z.literal('private'),
  z.literal('team'),
  z.literal('public'),
]);

export type DataWorkspaceVisibility = z.infer<typeof dataWorkspaceVisibility>;
