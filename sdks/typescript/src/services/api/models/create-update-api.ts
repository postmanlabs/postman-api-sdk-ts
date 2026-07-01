import { z } from 'zod';

/**
 * Zod schema for the CreateUpdateApi model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createUpdateApi = z.lazy(() => {
  return z.object({
    name: z.string(),
    summary: z.string().optional(),
    description: z.string().optional(),
  });
});

/**
 * Information about the API.
 * @typedef  {CreateUpdateApi} createUpdateApi - Information about the API. - Information about the API.
 * @property {string} - The API's name.
 * @property {string} - The API's short summary.
 * @property {string} - The API's description. This supports Markdown formatting.
 */
export type CreateUpdateApi = z.infer<typeof createUpdateApi>;

/**
 * Zod schema for mapping API responses to the CreateUpdateApi application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateApiResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      summary: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      summary: data['summary'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the CreateUpdateApi application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateApiRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      summary: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      summary: data['summary'],
      description: data['description'],
    }));
});
