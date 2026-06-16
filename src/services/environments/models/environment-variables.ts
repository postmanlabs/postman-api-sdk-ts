import { z } from 'zod';
import { EnvironmentVariablesType, environmentVariablesType } from './environment-variables-type';

/**
 * Zod schema for the EnvironmentVariables model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const environmentVariables = z.lazy(() => {
  return z.object({
    enabled: z.boolean().optional(),
    key: z.string().optional(),
    value: z.string().optional(),
    type: environmentVariablesType.optional(),
    description: z.string().max(512).optional(),
  });
});

/**
 * Information about the environment's variables.
 * @typedef  {EnvironmentVariables} environmentVariables - Information about the environment's variables. - Information about the environment's variables.
 * @property {boolean} - If true, the variable is enabled.
 * @property {string} - The variable's name.
 * @property {string} - The variable's value.
 * @property {EnvironmentVariablesType} - The variable's type:
- `secret` — The variable value is masked.
- `default` — The variable value is visible in plain text.

 * @property {string} - The variable's description.
 */
export type EnvironmentVariables = z.infer<typeof environmentVariables>;

/**
 * Zod schema for mapping API responses to the EnvironmentVariables application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentVariablesResponse = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
      key: z.string().optional(),
      value: z.string().optional(),
      type: environmentVariablesType.optional(),
      description: z.string().max(512).optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
      key: data['key'],
      value: data['value'],
      type: data['type'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the EnvironmentVariables application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentVariablesRequest = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
      key: z.string().optional(),
      value: z.string().optional(),
      type: environmentVariablesType.optional(),
      description: z.string().max(512).optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
      key: data['key'],
      value: data['value'],
      type: data['type'],
      description: data['description'],
    }));
});
