import { z } from 'zod';
import {
  EnvironmentVariableSource,
  environmentVariableSource,
  environmentVariableSourceRequest,
  environmentVariableSourceResponse,
} from '../../common/environment-variable-source';

/**
 * Zod schema for the SecretVariableInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const secretVariableInfo = z.lazy(() => {
  return z.object({
    enabled: z.boolean().optional(),
    key: z.string().optional(),
    secret: z.boolean().optional(),
    source: environmentVariableSource.optional(),
    id: z.string().optional(),
    description: z.string().max(512).optional(),
  });
});

/**
 * Information about the secret variable.
 * @typedef  {SecretVariableInfo} secretVariableInfo - Information about the secret variable. - Information about the secret variable.
 * @property {boolean} - If true, the variable is enabled.
 * @property {string} - The variable's key (name).
 * @property {boolean} - If true, the variable is marked as secret and its value is retrieved from the mentioned provider in the source field.
 * @property {EnvironmentVariableSource} - Information about the source of the variable's value.
 * @property {string} - The variable's ID. Doesn't apply to collection-level variables.
 * @property {string} - The variable's description.
 */
export type SecretVariableInfo = z.infer<typeof secretVariableInfo>;

/**
 * Zod schema for mapping API responses to the SecretVariableInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const secretVariableInfoResponse = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
      key: z.string().optional(),
      secret: z.boolean().optional(),
      source: environmentVariableSourceResponse.optional(),
      id: z.string().optional(),
      description: z.string().max(512).optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
      key: data['key'],
      secret: data['secret'],
      source: data['source'],
      id: data['id'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the SecretVariableInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const secretVariableInfoRequest = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
      key: z.string().optional(),
      secret: z.boolean().optional(),
      source: environmentVariableSourceRequest.optional(),
      id: z.string().optional(),
      description: z.string().max(512).optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
      key: data['key'],
      secret: data['secret'],
      source: data['source'],
      id: data['id'],
      description: data['description'],
    }));
});
