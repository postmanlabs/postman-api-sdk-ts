import { z } from 'zod';
import { SchemaLanguage, schemaLanguage } from './schema-language';
import { SchemaType, schemaType } from './schema-type';

/**
 * Zod schema for the SchemaValidationRequestBodySchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const schemaValidationRequestBodySchema = z.lazy(() => {
  return z.object({
    language: schemaLanguage,
    schema: z.string(),
    type: schemaType,
  });
});

/**
 *
 * @typedef  {SchemaValidationRequestBodySchema} schemaValidationRequestBodySchema
 * @property {SchemaLanguage} - The definition format.
 * @property {string} - The stringified API definition.
 * @property {SchemaType} - The definition type.
 */
export type SchemaValidationRequestBodySchema = z.infer<typeof schemaValidationRequestBodySchema>;

/**
 * Zod schema for mapping API responses to the SchemaValidationRequestBodySchema application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const schemaValidationRequestBodySchemaResponse = z.lazy(() => {
  return z
    .object({
      language: schemaLanguage,
      schema: z.string(),
      type: schemaType,
    })
    .transform((data) => ({
      language: data['language'],
      schema: data['schema'],
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the SchemaValidationRequestBodySchema application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const schemaValidationRequestBodySchemaRequest = z.lazy(() => {
  return z
    .object({
      language: schemaLanguage,
      schema: z.string(),
      type: schemaType,
    })
    .transform((data) => ({
      language: data['language'],
      schema: data['schema'],
      type: data['type'],
    }));
});
