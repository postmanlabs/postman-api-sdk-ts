import { z } from 'zod';

/**
 * Zod schema for the SearchResourceLinksSelfData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchResourceLinksSelfData = z.lazy(() => {
  return z.object({
    href: z.string().optional(),
  });
});

/**
 * The link to the resource through the Postman API.
 * @typedef {SearchResourceLinksSelfData} searchResourceLinksSelfData
 * @property {string} href - The URL to access the resource through the Postman API.
 */
export type SearchResourceLinksSelfData = z.infer<typeof searchResourceLinksSelfData>;

/**
 * Zod schema for mapping API responses to the SearchResourceLinksSelfData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchResourceLinksSelfDataResponse = z.lazy(() => {
  return z
    .object({
      href: z.string().optional(),
    })
    .transform((data) => ({
      href: data['href'],
    }));
});

/**
 * Zod schema for mapping the SearchResourceLinksSelfData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchResourceLinksSelfDataRequest = z.lazy(() => {
  return z
    .object({
      href: z.string().optional(),
    })
    .transform((data) => ({
      href: data['href'],
    }));
});
