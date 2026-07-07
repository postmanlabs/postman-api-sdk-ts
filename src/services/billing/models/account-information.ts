import { z } from 'zod';
import {
  InvoicesSlots,
  invoicesSlots,
  invoicesSlotsRequest,
  invoicesSlotsResponse,
} from './invoices-slots';

/**
 * Zod schema for the AccountInformation model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const accountInformation = z.lazy(() => {
  return z.object({
    billingEmail: z.string().optional(),
    id: z.number().optional(),
    state: z.string().optional(),
    teamId: z.number().optional(),
    salesChannel: z.string().optional(),
    slots: invoicesSlots.optional(),
  });
});

/**
 * Information about the account.
 * @typedef  {AccountInformation} accountInformation - Information about the account. - Information about the account.
 * @property {string} - The email address to which invoices are sent.
 * @property {number} - The account's ID.
 * @property {string} - The account's current state:
- `FREE`
- `PAID`
- `EXPIRED_TRIAL`
- `OVERDUE`
- `SUSPENDED`
- `BLOCKED`
- `PAYMENT_DISPUTED`

 * @property {number} - The team's ID associated with the account.
 * @property {SalesChannel} - The sales channel from which the account was created:
- `SELF_SERVE` — The user purchased the account plan.
- `SALES_SERVE` — The account was purchased through the Postman sales team process.

 * @property {InvoicesSlots} - Information about the team's slots.
 */
export type AccountInformation = z.infer<typeof accountInformation>;

/**
 * Zod schema for mapping API responses to the AccountInformation application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const accountInformationResponse = z.lazy(() => {
  return z
    .object({
      billingEmail: z.string().optional(),
      id: z.number().optional(),
      state: z.string().optional(),
      teamId: z.number().optional(),
      salesChannel: z.string().optional(),
      slots: invoicesSlotsResponse.optional(),
    })
    .transform((data) => ({
      billingEmail: data['billingEmail'],
      id: data['id'],
      state: data['state'],
      teamId: data['teamId'],
      salesChannel: data['salesChannel'],
      slots: data['slots'],
    }));
});

/**
 * Zod schema for mapping the AccountInformation application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const accountInformationRequest = z.lazy(() => {
  return z
    .object({
      billingEmail: z.string().optional(),
      id: z.number().optional(),
      state: z.string().optional(),
      teamId: z.number().optional(),
      salesChannel: z.string().optional(),
      slots: invoicesSlotsRequest.optional(),
    })
    .transform((data) => ({
      billingEmail: data['billingEmail'],
      id: data['id'],
      state: data['state'],
      teamId: data['teamId'],
      salesChannel: data['salesChannel'],
      slots: data['slots'],
    }));
});
