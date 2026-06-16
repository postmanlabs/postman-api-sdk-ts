import { z } from 'zod';

export const updateCollectionRolesRolesPath = z.union([
  z.literal('/user'),
  z.literal('/group'),
  z.literal('/team'),
]);

export type UpdateCollectionRolesRolesPath = z.infer<typeof updateCollectionRolesRolesPath>;
