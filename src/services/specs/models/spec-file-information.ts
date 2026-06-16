import { z } from 'zod';
import { SpecFileInformationType, specFileInformationType } from './spec-file-information-type';

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
    type: specFileInformationType.optional(),
  });
});

/**
 * Information about the API specification file.
 * @typedef  {SpecFileInformation} specFileInformation - Information about the API specification file. - Information about the API specification file.
 * @property {string} - The file's ID.
 * @property {string} - The file's path.
 * @property {string} - The file's name.
 * @property {number} - The user ID of the user that created the file.
 * @property {number} - The ID of the user who updated the file.
 * @property {string} - The date and time at which the file was created.
 * @property {string} - The date and time at which the file was updated.
 * @property {SpecFileInformationType} - The type of file:
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
      type: specFileInformationType.optional(),
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
      type: specFileInformationType.optional(),
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
