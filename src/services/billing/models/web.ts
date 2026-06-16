import { z } from 'zod';

/**
 * Zod schema for the Web model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const web = z.lazy(() => {
  return z.object({
    href: z.string().optional(),
  });
});

/**
 * An object containing web-based account references.
 * @typedef  {Web} web - An object containing web-based account references. - An object containing web-based account references.
 * @property {string} - A URL where you can download the invoice in PDF and view details.
 */
export type Web = z.infer<typeof web>;

/**
 * Zod schema for mapping API responses to the Web application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const webResponse = z.lazy(() => {
  return z
    .object({
      href: z.string().optional(),
    })
    .transform((data) => ({
      href: data['href'],
    }));
});

/**
 * Zod schema for mapping the Web application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const webRequest = z.lazy(() => {
  return z
    .object({
      href: z.string().optional(),
    })
    .transform((data) => ({
      href: data['href'],
    }));
});
