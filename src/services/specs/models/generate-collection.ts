import { z } from 'zod';
import {
  GenerateCollectionOptions,
  generateCollectionOptions,
  generateCollectionOptionsRequest,
  generateCollectionOptionsResponse,
} from '../../common/generate-collection-options';

/**
 * Zod schema for the GenerateCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const generateCollection = z.lazy(() => {
  return z.object({
    name: z.string(),
    options: generateCollectionOptions,
  });
});

/**
 * @typedef {GenerateCollection} generateCollection
 * @property {string} name - The generated collection's name.
 * @property {GenerateCollectionOptions} options - The advanced creation options and their values. For more details, see Postman's [OpenAPI to Postman Collection Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). These properties are case-sensitive.
 */
export type GenerateCollection = z.infer<typeof generateCollection>;

/**
 * Zod schema for mapping API responses to the GenerateCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateCollectionResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      options: generateCollectionOptionsResponse,
    })
    .transform((data) => ({
      name: data['name'],
      options: data['options'],
    }));
});

/**
 * Zod schema for mapping the GenerateCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateCollectionRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      options: generateCollectionOptionsRequest,
    })
    .transform((data) => ({
      name: data['name'],
      options: data['options'],
    }));
});
