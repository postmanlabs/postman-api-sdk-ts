import { z } from 'zod';
import { Web, web, webRequest, webResponse } from './web';

/**
 * Zod schema for the InvoicesLinks model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const invoicesLinks = z.lazy(() => {
  return z.object({
    web: web.optional(),
  });
});

/**
 * A [JSON API spec](https://jsonapi.org/format/#document-links) object containing hypermedia links.
 * @typedef {InvoicesLinks} invoicesLinks
 * @property {Web} web - An object containing web-based account references.
 */
export type InvoicesLinks = z.infer<typeof invoicesLinks>;

/**
 * Zod schema for mapping API responses to the InvoicesLinks application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invoicesLinksResponse = z.lazy(() => {
  return z
    .object({
      web: webResponse.optional(),
    })
    .transform((data) => ({
      web: data['web'],
    }));
});

/**
 * Zod schema for mapping the InvoicesLinks application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invoicesLinksRequest = z.lazy(() => {
  return z
    .object({
      web: webRequest.optional(),
    })
    .transform((data) => ({
      web: data['web'],
    }));
});
