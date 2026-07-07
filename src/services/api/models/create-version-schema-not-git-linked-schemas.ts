import { z } from 'zod';

/**
 * Zod schema for the CreateVersionSchemaNotGitLinkedSchemas model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createVersionSchemaNotGitLinkedSchemas = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
  });
});

/**
 * Information about the schema.
 * @typedef  {CreateVersionSchemaNotGitLinkedSchemas} createVersionSchemaNotGitLinkedSchemas - Information about the schema. - Information about the schema.
 * @property {string} - The schema's ID.
 */
export type CreateVersionSchemaNotGitLinkedSchemas = z.infer<
  typeof createVersionSchemaNotGitLinkedSchemas
>;

/**
 * Zod schema for mapping API responses to the CreateVersionSchemaNotGitLinkedSchemas application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaNotGitLinkedSchemasResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the CreateVersionSchemaNotGitLinkedSchemas application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaNotGitLinkedSchemasRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
