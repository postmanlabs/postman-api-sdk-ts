import { z } from 'zod';

/**
 * Zod schema for the CreateUpdateSpecFileResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createUpdateSpecFileResponse = z.lazy(() => {
  return z.object({
    createdAt: z.string().optional(),
    createdBy: z.number().optional(),
    id: z.string().optional(),
    path: z.string().optional(),
    updatedAt: z.string().optional(),
    updatedBy: z.number().optional(),
    type: z.string().optional(),
  });
});

/**
 * Information about the API specification file.
 * @typedef  {CreateUpdateSpecFileResponse} createUpdateSpecFileResponse - Information about the API specification file. - Information about the API specification file.
 * @property {string} - The date and time at which the file was created.
 * @property {number} - The user ID of the user that created the file.
 * @property {string} - The file's ID.
 * @property {string} - The file's path.
 * @property {string} - The date and time at which the file was updated.
 * @property {number} - The ID of the user who updated the file.
 * @property {CreateUpdateSpecFileResponseType} - The type of file:
- `ROOT` — The file containing the full OpenAPI structure. This serves as the entry point for the API spec and references other (`DEFAULT`) spec files. Multi-file specs can only have one root file.
- `DEFAULT` — A file referenced by the `ROOT` file.

 */
export type CreateUpdateSpecFileResponse = z.infer<typeof createUpdateSpecFileResponse>;

/**
 * Zod schema for mapping API responses to the CreateUpdateSpecFileResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateSpecFileResponseResponse = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      id: z.string().optional(),
      path: z.string().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.number().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      id: data['id'],
      path: data['path'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the CreateUpdateSpecFileResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateSpecFileResponseRequest = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      id: z.string().optional(),
      path: z.string().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.number().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      id: data['id'],
      path: data['path'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
      type: data['type'],
    }));
});
