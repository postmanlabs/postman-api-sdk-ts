import { z } from 'zod';

export const removePartnersTargetEntity = z.literal('workspace');

export type RemovePartnersTargetEntity = z.infer<typeof removePartnersTargetEntity>;
