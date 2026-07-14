import { z } from 'zod';
import {
  EnvironmentVariableSource,
  environmentVariableSource,
  environmentVariableSourceRequest,
  environmentVariableSourceResponse,
} from '../../common/environment-variable-source';

/**
 * Zod schema for the AddSecretVariable model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addSecretVariable = z.lazy(() => {
  return z.object({
    enabled: z.boolean().optional(),
    key: z.string().optional(),
    value: z.string().optional(),
    type: z.string().optional(),
    secret: z.boolean().optional(),
    source: environmentVariableSource.optional(),
    description: z.string().max(512).optional(),
  });
});

/**
 * Information about the variable stored in the Postman Vault. This property only returns when a variable is defined as secret.
 * @typedef  {AddSecretVariable} addSecretVariable - Information about the variable stored in the Postman Vault. This property only returns when a variable is defined as secret. - Information about the variable stored in the Postman Vault. This property only returns when a variable is defined as secret.
 * @property {boolean} - If true, the variable is enabled.
 * @property {string} - The variable's name.
 * @property {string} - The variable's value.
 * @property {AddSecretVariableType} - The variable's type:
- `secret` — The variable value is masked.
- `default` — The variable value is visible in plain text.

 * @property {boolean} - If true, the variable is marked as secret and its value is retrieved from the mentioned provider in the source field.
 * @property {EnvironmentVariableSource} - Information about the source of the variable's value.
 * @property {string} - The variable's description.
 */
export type AddSecretVariable = z.infer<typeof addSecretVariable>;

/**
 * Zod schema for mapping API responses to the AddSecretVariable application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addSecretVariableResponse = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
      key: z.string().optional(),
      value: z.string().optional(),
      type: z.string().optional(),
      secret: z.boolean().optional(),
      source: environmentVariableSourceResponse.optional(),
      description: z.string().max(512).optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
      key: data['key'],
      value: data['value'],
      type: data['type'],
      secret: data['secret'],
      source: data['source'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the AddSecretVariable application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addSecretVariableRequest = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
      key: z.string().optional(),
      value: z.string().optional(),
      type: z.string().optional(),
      secret: z.boolean().optional(),
      source: environmentVariableSourceRequest.optional(),
      description: z.string().max(512).optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
      key: data['key'],
      value: data['value'],
      type: data['type'],
      secret: data['secret'],
      source: data['source'],
      description: data['description'],
    }));
});
