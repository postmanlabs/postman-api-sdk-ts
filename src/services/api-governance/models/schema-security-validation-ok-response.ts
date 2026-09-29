import { z } from 'zod';

/**
 * Zod schema for the SchemaSecurityValidationOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const schemaSecurityValidationOkResponse = z.lazy(() => {
  return z.object({
    warnings: z.array(z.any()).optional(),
  });
});

/**
 * @typedef {SchemaSecurityValidationOkResponse} schemaSecurityValidationOkResponse
 * @property {any[]} warnings - Information about each issue discovered in the analysis. Each object includes the violation's severity and category, the location of the issue, data paths, and other information. This returns an empty object if there are no issues present in the schema.

If there are issues, this returns the `possibleFixUrl` response in each warning object. This provides a link to documentation you can use to resolve the warning.

 */
export type SchemaSecurityValidationOkResponse = z.infer<typeof schemaSecurityValidationOkResponse>;

/**
 * Zod schema for mapping API responses to the SchemaSecurityValidationOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const schemaSecurityValidationOkResponseResponse = z.lazy(() => {
  return z
    .object({
      warnings: z.array(z.any()).optional(),
    })
    .transform((data) => ({
      warnings: data['warnings'],
    }));
});

/**
 * Zod schema for mapping the SchemaSecurityValidationOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const schemaSecurityValidationOkResponseRequest = z.lazy(() => {
  return z
    .object({
      warnings: z.array(z.any()).optional(),
    })
    .transform((data) => ({
      warnings: data['warnings'],
    }));
});
