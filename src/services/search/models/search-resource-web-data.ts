import { z } from 'zod';

/**
 * Zod schema for the SearchResourceWebData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchResourceWebData = z.lazy(() => {
  return z.object({
    href: z.string().optional(),
  });
});

/**
 * The link to view the resource in the Postman web app.
 * @typedef {SearchResourceWebData} searchResourceWebData
 * @property {string} href - The URL to view the resource in the Postman web app.
 */
export type SearchResourceWebData = z.infer<typeof searchResourceWebData>;

/**
 * Zod schema for mapping API responses to the SearchResourceWebData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchResourceWebDataResponse = z.lazy(() => {
  return z
    .object({
      href: z.string().optional(),
    })
    .transform((data) => ({
      href: data['href'],
    }));
});

/**
 * Zod schema for mapping the SearchResourceWebData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchResourceWebDataRequest = z.lazy(() => {
  return z
    .object({
      href: z.string().optional(),
    })
    .transform((data) => ({
      href: data['href'],
    }));
});
