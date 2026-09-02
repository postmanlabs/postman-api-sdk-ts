import { z } from 'zod';

/**
 * Zod schema for the SchemaExtensionsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const schemaExtensionsData = z.lazy(() => {
  return z.object({
    schema: z.string().optional(),
    required: z.boolean().optional(),
  });
});

/**
 * @typedef {SchemaExtensionsData} schemaExtensionsData
 * @property {string} schema - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {boolean} required - If true, the resource must include this schema extension.
 */
export type SchemaExtensionsData = z.infer<typeof schemaExtensionsData>;

/**
 * Zod schema for mapping API responses to the SchemaExtensionsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const schemaExtensionsDataResponse = z.lazy(() => {
  return z
    .object({
      schema: z.string().optional(),
      required: z.boolean().optional(),
    })
    .transform((data) => ({
      schema: data['schema'],
      required: data['required'],
    }));
});

/**
 * Zod schema for mapping the SchemaExtensionsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const schemaExtensionsDataRequest = z.lazy(() => {
  return z
    .object({
      schema: z.string().optional(),
      required: z.boolean().optional(),
    })
    .transform((data) => ({
      schema: data['schema'],
      required: data['required'],
    }));
});
