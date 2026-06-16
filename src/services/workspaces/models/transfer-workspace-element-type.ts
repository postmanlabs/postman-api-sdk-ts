import { z } from 'zod';

export const transferWorkspaceElementType = z.union([
  z.literal('collection'),
  z.literal('environment'),
  z.literal('api'),
  z.literal('flow'),
  z.literal('mock'),
  z.literal('monitor'),
]);

export type TransferWorkspaceElementType = z.infer<typeof transferWorkspaceElementType>;
