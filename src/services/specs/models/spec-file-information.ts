import { z } from 'zod';

/**
 * Zod schema for the SpecFileInformation model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const specFileInformation = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    path: z.string().optional(),
    name: z.string().optional(),
    createdBy: z.number().optional(),
    updatedBy: z.number().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    type: z.string().optional(),
  });
});

/**
 * Information about the API specification file.
 * @typedef {SpecFileInformation} specFileInformation
 * @property {string} id - The file's ID.
 * @property {string} path - The file's path.
 * @property {string} name - The file's name.
 * @property {number} createdBy - The user ID of the user that created the file.
 * @property {number} updatedBy - The ID of the user who updated the file.
 * @property {string} createdAt - The date and time at which the file was created.
 * @property {string} updatedAt - The date and time at which the file was updated.
 * @property {SpecFileInformationType} type - The type of file:
- `ROOT` — A file containing the full OpenAPI structure and references other (DEFAULT) spec files.
- `DEFAULT` — A file referenced by the `ROOT` file.

 */
export type SpecFileInformation = z.infer<typeof specFileInformation>;

/**
 * Zod schema for mapping API responses to the SpecFileInformation application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const specFileInformationResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      path: z.string().optional(),
      name: z.string().optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      path: data['path'],
      name: data['name'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the SpecFileInformation application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const specFileInformationRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      path: z.string().optional(),
      name: z.string().optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      path: data['path'],
      name: data['name'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      type: data['type'],
    }));
});
