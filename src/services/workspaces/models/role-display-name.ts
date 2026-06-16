import { z } from 'zod';

export const roleDisplayName = z.union([
  z.literal('Viewer'),
  z.literal('Editor'),
  z.literal('Viewer and Partner Lead'),
  z.literal('Editor and Partner Lead'),
]);

export type RoleDisplayName = z.infer<typeof roleDisplayName>;
