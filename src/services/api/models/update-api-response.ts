import { z } from 'zod';

/**
 * Zod schema for the UpdateApiResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateApiResponse = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string(),
    summary: z.string().optional(),
    createdAt: z.string().optional(),
    createdBy: z.string().optional(),
    updatedAt: z.string().optional(),
    updatedBy: z.string().optional(),
    description: z.string().optional(),
  });
});

/**
 *
 * @typedef  {UpdateApiResponse} updateApiResponse
 * @property {string} - The API's ID.
 * @property {string} - The API's name.
 * @property {string} - The API's summary.
 * @property {string} - The date and time at which the API was created.
 * @property {string} - The user ID of the user that created the API.
 * @property {string} - The date and time at which the API was last updated.
 * @property {string} - The user ID of the user that updated the API.
 * @property {string} - The API's description. This supports Markdown formatting.
 */
export type UpdateApiResponse = z.infer<typeof updateApiResponse>;

/**
 * Zod schema for mapping API responses to the UpdateApiResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateApiResponseResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string(),
      summary: z.string().optional(),
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      summary: data['summary'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the UpdateApiResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateApiResponseRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string(),
      summary: z.string().optional(),
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      summary: data['summary'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
      description: data['description'],
    }));
});
