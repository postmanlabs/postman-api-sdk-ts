import { z } from 'zod';

/**
 * Zod schema for the Files model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const files = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    path: z.string().optional(),
    createdAt: z.string().optional(),
    createdBy: z.number().optional(),
    updatedAt: z.string().optional(),
    updatedBy: z.number().optional(),
  });
});

/**
 * Information about the schema file.
 * @typedef  {Files} files - Information about the schema file. - Information about the schema file.
 * @property {string} - The schema file's ID.
 * @property {string} - The schema file's name.
 * @property {string} - The file system path to the schema file.
 * @property {string} - The date and time at which the file was created.
 * @property {number} - The user ID of the user that created the file.
 * @property {string} - The date and time at which the file was last updated.
 * @property {number} - The user ID of the user that last updated the file.
 */
export type Files = z.infer<typeof files>;

/**
 * Zod schema for mapping API responses to the Files application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const filesResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      path: z.string().optional(),
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.number().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      path: data['path'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
    }));
});

/**
 * Zod schema for mapping the Files application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const filesRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      path: z.string().optional(),
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.number().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      path: data['path'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
    }));
});
