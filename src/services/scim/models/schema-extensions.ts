import { z } from 'zod';

/**
 * Zod schema for the SchemaExtensions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const schemaExtensions = z.lazy(() => {
  return z.object({
    schema: z.string().optional(),
    required: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {SchemaExtensions} schemaExtensions
 * @property {string} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {boolean} - If true, the resource must include this schema extension.
 */
export type SchemaExtensions = z.infer<typeof schemaExtensions>;

/**
 * Zod schema for mapping API responses to the SchemaExtensions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const schemaExtensionsResponse = z.lazy(() => {
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
 * Zod schema for mapping the SchemaExtensions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const schemaExtensionsRequest = z.lazy(() => {
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
