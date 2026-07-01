import { z } from 'zod';
import {
  AccountInvoice,
  accountInvoice,
  accountInvoiceRequest,
  accountInvoiceResponse,
} from './account-invoice';

/**
 * Zod schema for the GetAccountInvoices model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAccountInvoices = z.lazy(() => {
  return z.object({
    data: z.array(accountInvoice),
  });
});

/**
 *
 * @typedef  {GetAccountInvoices} getAccountInvoices
 * @property {AccountInvoice[]} - A list of account invoices.
 */
export type GetAccountInvoices = z.infer<typeof getAccountInvoices>;

/**
 * Zod schema for mapping API responses to the GetAccountInvoices application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAccountInvoicesResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(accountInvoiceResponse),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetAccountInvoices application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAccountInvoicesRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(accountInvoiceRequest),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
