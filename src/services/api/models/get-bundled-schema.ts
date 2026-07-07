import { z } from 'zod';

/**
 * Zod schema for the GetBundledSchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getBundledSchema = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    type: z.string().optional(),
    createdBy: z.string().optional(),
    updatedBy: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    content: z.string().optional(),
  });
});

/**
 * Information about the schema.
 * @typedef  {GetBundledSchema} getBundledSchema - Information about the schema. - Information about the schema.
 * @property {string} - The schema's ID.
 * @property {string} - The schema's type.
 * @property {string} - The user ID of the user that created the schema.
 * @property {string} - The user ID of the user that last updated the schema.
 * @property {string} - The date and time at which the schema was created.
 * @property {string} - The date and time at which the schema was last updated.
 * @property {string} - The schema file, in a bundled format.
 */
export type GetBundledSchema = z.infer<typeof getBundledSchema>;

/**
 * Zod schema for mapping API responses to the GetBundledSchema application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getBundledSchemaResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      content: data['content'],
    }));
});

/**
 * Zod schema for mapping the GetBundledSchema application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getBundledSchemaRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      content: data['content'],
    }));
});
