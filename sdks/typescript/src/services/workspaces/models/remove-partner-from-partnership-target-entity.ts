import { z } from 'zod';

export const removePartnerFromPartnershipTargetEntity = z.literal('team');

export type RemovePartnerFromPartnershipTargetEntity = z.infer<
  typeof removePartnerFromPartnershipTargetEntity
>;
