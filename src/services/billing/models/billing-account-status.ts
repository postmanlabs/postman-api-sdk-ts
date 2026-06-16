import { z } from 'zod';

export const billingAccountStatus = z.literal('PAID');

export type BillingAccountStatus = z.infer<typeof billingAccountStatus>;
