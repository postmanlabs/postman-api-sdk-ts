import { z } from 'zod';
import {
  GenerateCollectionOptions,
  generateCollectionOptions,
  generateCollectionOptionsRequest,
  generateCollectionOptionsResponse,
} from '../../common/generate-collection-options';

/**
 * Zod schema for the JsonSchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const jsonSchema = z.lazy(() => {
  return z.object({
    type: z.string(),
    input: z.any(),
    options: generateCollectionOptions.optional(),
  });
});

/**
 * @typedef {JsonSchema} jsonSchema
 * @property {JsonSchemaType} type - The `json` type value.
 * @property {any} input - An object that contains a valid JSON OpenAPI definition. For more information, read the [OpenAPI documentation](https://swagger.io/docs/specification/basic-structure/).
 * @property {GenerateCollectionOptions} options - The advanced creation options and their values. For more details, see Postman's [OpenAPI to Postman Collection Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). These properties are case-sensitive.
 */
export type JsonSchema = z.infer<typeof jsonSchema>;

/**
 * Zod schema for mapping API responses to the JsonSchema application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const jsonSchemaResponse = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      input: z.any(),
      options: generateCollectionOptionsResponse.optional(),
    })
    .transform((data) => ({
      type: data['type'],
      input: data['input'],
      options: data['options'],
    }));
});

/**
 * Zod schema for mapping the JsonSchema application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const jsonSchemaRequest = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      input: z.any(),
      options: generateCollectionOptionsRequest.optional(),
    })
    .transform((data) => ({
      type: data['type'],
      input: data['input'],
      options: data['options'],
    }));
});
