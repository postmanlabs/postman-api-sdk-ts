import { z } from 'zod';

export const teamsInclude = z.union([z.literal('members'), z.literal('userRoles')]);

export type TeamsInclude = z.infer<typeof teamsInclude>;
