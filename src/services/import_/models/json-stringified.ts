import { z } from 'zod';
import {
  GenerateCollectionOptions,
  generateCollectionOptions,
  generateCollectionOptionsRequest,
  generateCollectionOptionsResponse,
} from '../../common/generate-collection-options';

/**
 * Zod schema for the JsonStringified model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const jsonStringified = z.lazy(() => {
  return z.object({
    type: z.string(),
    input: z.string(),
    options: generateCollectionOptions.optional(),
  });
});

/**
 * @typedef {JsonStringified} jsonStringified
 * @property {JsonStringifiedType} type - The `string` type value.
 * @property {string} input - The stringified OpenAPI definition.
 * @property {GenerateCollectionOptions} options - The advanced creation options and their values. For more details, see Postman's [OpenAPI to Postman Collection Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). These properties are case-sensitive.
 */
export type JsonStringified = z.infer<typeof jsonStringified>;

/**
 * Zod schema for mapping API responses to the JsonStringified application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const jsonStringifiedResponse = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      input: z.string(),
      options: generateCollectionOptionsResponse.optional(),
    })
    .transform((data) => ({
      type: data['type'],
      input: data['input'],
      options: data['options'],
    }));
});

/**
 * Zod schema for mapping the JsonStringified application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const jsonStringifiedRequest = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      input: z.string(),
      options: generateCollectionOptionsRequest.optional(),
    })
    .transform((data) => ({
      type: data['type'],
      input: data['input'],
      options: data['options'],
    }));
});
