import { z } from 'zod';
import {
  InvoicesTotal,
  invoicesTotal,
  invoicesTotalRequest,
  invoicesTotalResponse,
} from './invoices-total';
import {
  InvoicesLinks,
  invoicesLinks,
  invoicesLinksRequest,
  invoicesLinksResponse,
} from './invoices-links';

/**
 * Zod schema for the AccountInvoice model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const accountInvoice = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    status: z.string().optional(),
    issuedAt: z.string().optional(),
    totalAmount: invoicesTotal.optional(),
    links: invoicesLinks.optional(),
  });
});

/**
 * Information about the invoice.
 * @typedef {AccountInvoice} accountInvoice
 * @property {string} id - The invoice's ID.
 * @property {string} status - The invoice's status.
 * @property {string} issuedAt - The date on which the invoice was issued.
 * @property {InvoicesTotal} totalAmount - Information about the invoice's total billed amount.
 * @property {InvoicesLinks} links - A [JSON API spec](https://jsonapi.org/format/#document-links) object containing hypermedia links.
 */
export type AccountInvoice = z.infer<typeof accountInvoice>;

/**
 * Zod schema for mapping API responses to the AccountInvoice application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const accountInvoiceResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      status: z.string().optional(),
      issuedAt: z.string().optional(),
      totalAmount: invoicesTotalResponse.optional(),
      links: invoicesLinksResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
      issuedAt: data['issuedAt'],
      totalAmount: data['totalAmount'],
      links: data['links'],
    }));
});

/**
 * Zod schema for mapping the AccountInvoice application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const accountInvoiceRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      status: z.string().optional(),
      issuedAt: z.string().optional(),
      totalAmount: invoicesTotalRequest.optional(),
      links: invoicesLinksRequest.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
      issuedAt: data['issuedAt'],
      totalAmount: data['totalAmount'],
      links: data['links'],
    }));
});
