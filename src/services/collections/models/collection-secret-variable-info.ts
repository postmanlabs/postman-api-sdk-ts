import { z } from 'zod';
import {
  EnvironmentVariableSource,
  environmentVariableSource,
  environmentVariableSourceRequest,
  environmentVariableSourceResponse,
} from '../../common/environment-variable-source';

/**
 * Zod schema for the CollectionSecretVariableInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionSecretVariableInfo = z.lazy(() => {
  return z.object({
    enabled: z.boolean().optional(),
    key: z.string().optional(),
    secret: z.boolean().optional(),
    source: environmentVariableSource.optional(),
    description: z.string().max(512).optional(),
  });
});

/**
 * Information about a collection-level secret variable. Collection variables don't have an `id` field.
 * @typedef {CollectionSecretVariableInfo} collectionSecretVariableInfo
 * @property {boolean} enabled - If true, the variable is enabled.
 * @property {string} key - The variable's key (name).
 * @property {boolean} secret - If true, the variable is marked as secret and its value is retrieved from the mentioned provider in the source field.
 * @property {EnvironmentVariableSource} source - Information about the source of the variable's value.
 * @property {string} description - The variable's description.
 */
export type CollectionSecretVariableInfo = z.infer<typeof collectionSecretVariableInfo>;

/**
 * Zod schema for mapping API responses to the CollectionSecretVariableInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionSecretVariableInfoResponse = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
      key: z.string().optional(),
      secret: z.boolean().optional(),
      source: environmentVariableSourceResponse.optional(),
      description: z.string().max(512).optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
      key: data['key'],
      secret: data['secret'],
      source: data['source'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the CollectionSecretVariableInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionSecretVariableInfoRequest = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
      key: z.string().optional(),
      secret: z.boolean().optional(),
      source: environmentVariableSourceRequest.optional(),
      description: z.string().max(512).optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
      key: data['key'],
      secret: data['secret'],
      source: data['source'],
      description: data['description'],
    }));
});
