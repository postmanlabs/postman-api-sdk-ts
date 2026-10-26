import { z } from 'zod';
import {
  SuccessfulResponseCollections,
  successfulResponseCollections,
  successfulResponseCollectionsRequest,
  successfulResponseCollectionsResponse,
} from './successful-response-collections';

/**
 * Zod schema for the ImportOpenApiDefinitionOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const importOpenApiDefinitionOkResponse = z.lazy(() => {
  return z.object({
    collections: z.array(successfulResponseCollections).optional(),
  });
});

/**
 * @typedef {ImportOpenApiDefinitionOkResponse} importOpenApiDefinitionOkResponse
 * @property {SuccessfulResponseCollections[]} collections - A list of the collections created from the imported OpenAPI definition.
 */
export type ImportOpenApiDefinitionOkResponse = z.infer<typeof importOpenApiDefinitionOkResponse>;

/**
 * Zod schema for mapping API responses to the ImportOpenApiDefinitionOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const importOpenApiDefinitionOkResponseResponse = z.lazy(() => {
  return z
    .object({
      collections: z.array(successfulResponseCollectionsResponse).optional(),
    })
    .transform((data) => ({
      collections: data['collections'],
    }));
});

/**
 * Zod schema for mapping the ImportOpenApiDefinitionOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const importOpenApiDefinitionOkResponseRequest = z.lazy(() => {
  return z
    .object({
      collections: z.array(successfulResponseCollectionsRequest).optional(),
    })
    .transform((data) => ({
      collections: data['collections'],
    }));
});
