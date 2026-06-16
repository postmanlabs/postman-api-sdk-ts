import { z } from 'zod';

export const teamEntityInfoEntityType = z.union([
  z.literal('user'),
  z.literal('group'),
  z.literal('team'),
  z.literal('organization'),
]);

export type TeamEntityInfoEntityType = z.infer<typeof teamEntityInfoEntityType>;
