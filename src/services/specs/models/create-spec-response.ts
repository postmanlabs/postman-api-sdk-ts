import { z } from 'zod';

/**
 * Zod schema for the CreateSpecResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createSpecResponse = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    type: z.string().optional(),
    id: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    createdBy: z.number().optional(),
    updatedBy: z.number().optional(),
  });
});

/**
 * @typedef {CreateSpecResponse} createSpecResponse
 * @property {string} name - The API specification's name.
 * @property {SpecType} type - The type of API specification.
 * @property {string} id - The specification's ID.
 * @property {string} createdAt - The date and time at which the specification file was created.
 * @property {string} updatedAt - The date and time at which the file was last updated.
 * @property {number} createdBy - The user ID of the user that created the file.
 * @property {number} updatedBy - The user ID of the user that last updated the specification file.
 */
export type CreateSpecResponse = z.infer<typeof createSpecResponse>;

/**
 * Zod schema for mapping API responses to the CreateSpecResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSpecResponseResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      type: z.string().optional(),
      id: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      id: data['id'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
    }));
});

/**
 * Zod schema for mapping the CreateSpecResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSpecResponseRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      type: z.string().optional(),
      id: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      id: data['id'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
    }));
});
