import { z } from 'zod';

/**
 * Zod schema for the DocumentationMetaTags model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const documentationMetaTags = z.lazy(() => {
  return z.object({
    name: z.string(),
    value: z.string(),
  });
});

/**
 * @typedef {DocumentationMetaTags} documentationMetaTags
 * @property {string} name - The key's name:
  - `title` — The title of your documentation. This value appears in relevant search queries and browser tabs. By default, the system uses the collection's name for the documentation title.
  - `description` — The documentation's description. This provides brief information about your document and lets users know what it contains. By default, the system uses the collection's description content.

 * @property {string} value - The `name` key's value.
 */
export type DocumentationMetaTags = z.infer<typeof documentationMetaTags>;

/**
 * Zod schema for mapping API responses to the DocumentationMetaTags application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const documentationMetaTagsResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      value: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the DocumentationMetaTags application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const documentationMetaTagsRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      value: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
      value: data['value'],
    }));
});
