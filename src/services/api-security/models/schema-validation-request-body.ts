import { z } from 'zod';
import {
  SchemaValidationRequestBodySchema,
  schemaValidationRequestBodySchema,
  schemaValidationRequestBodySchemaRequest,
  schemaValidationRequestBodySchemaResponse,
} from './schema-validation-request-body-schema';

/**
 * Zod schema for the SchemaValidationRequestBody model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const schemaValidationRequestBody = z.lazy(() => {
  return z.object({
    schema: schemaValidationRequestBodySchema.optional(),
  });
});

/**
 *
 * @typedef  {SchemaValidationRequestBody} schemaValidationRequestBody
 * @property {SchemaValidationRequestBodySchema}
 */
export type SchemaValidationRequestBody = z.infer<typeof schemaValidationRequestBody>;

/**
 * Zod schema for mapping API responses to the SchemaValidationRequestBody application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const schemaValidationRequestBodyResponse = z.lazy(() => {
  return z
    .object({
      schema: schemaValidationRequestBodySchemaResponse.optional(),
    })
    .transform((data) => ({
      schema: data['schema'],
    }));
});

/**
 * Zod schema for mapping the SchemaValidationRequestBody application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const schemaValidationRequestBodyRequest = z.lazy(() => {
  return z
    .object({
      schema: schemaValidationRequestBodySchemaRequest.optional(),
    })
    .transform((data) => ({
      schema: data['schema'],
    }));
});
