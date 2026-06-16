import { z } from 'zod';

export const teamRoles = z.union([
  z.literal('TEAM_MANAGER'),
  z.literal('TEAM_DEVELOPER'),
  z.literal('TEAM_GUEST_DEVELOPER'),
  z.literal('TEAM_GUEST_VIEWER'),
  z.literal('TEAM_PARTNER_MANAGER'),
  z.literal('TEAM_PARTNER_LEAD'),
  z.literal('TEAM_GUEST'),
  z.literal('TEAM_PARTNER'),
  z.literal('TEAM_COMMUNITY_MANAGER'),
]);

export type TeamRoles = z.infer<typeof teamRoles>;
