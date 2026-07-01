import { z } from 'zod';

/**
 * Zod schema for the ApiCreated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiCreated = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    summary: z.string().optional(),
    createdAt: z.string().optional(),
    createdBy: z.number().optional(),
    updatedAt: z.string().optional(),
    updatedBy: z.number().optional(),
    description: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ApiCreated} apiCreated
 * @property {string} - The API's ID.
 * @property {string} - The API's name.
 * @property {string} - The API's short summary.
 * @property {string} - The date and time at which the API was created.
 * @property {number} - The Postman ID of the user that created the API.
 * @property {string} - The date and time at which the API was updated.
 * @property {number} - The Postman ID of the user that updated the API.
 * @property {string} - The API's description.
 */
export type ApiCreated = z.infer<typeof apiCreated>;

/**
 * Zod schema for mapping API responses to the ApiCreated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCreatedResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      summary: z.string().optional(),
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.number().optional(),
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
 * Zod schema for mapping the ApiCreated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCreatedRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      summary: z.string().optional(),
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.number().optional(),
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
