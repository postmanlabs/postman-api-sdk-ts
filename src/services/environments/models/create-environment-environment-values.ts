import { z } from 'zod';
import { addVariable, addVariableRequest, addVariableResponse } from './add-variable';
import {
  addSecretVariable,
  addSecretVariableRequest,
  addSecretVariableResponse,
} from './add-secret-variable';

/**
 * Zod schema for the CreateEnvironmentEnvironmentValues model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createEnvironmentEnvironmentValues = z.lazy(() => {
  return z.union([addVariable, addSecretVariable]);
});

/**
 *
 * @typedef  {CreateEnvironmentEnvironmentValues} createEnvironmentEnvironmentValues
 * @property {AddVariable} - Information about the variable.
 * @property {AddSecretVariable} - Information about the variable stored in the Postman Vault. This property only returns when a variable is defined as secret.
 */
export type CreateEnvironmentEnvironmentValues = z.infer<typeof createEnvironmentEnvironmentValues>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createEnvironmentEnvironmentValuesResponse = z.lazy(() => {
  return z.union([addVariableResponse, addSecretVariableResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createEnvironmentEnvironmentValuesRequest = z.lazy(() => {
  return z.union([addVariableRequest, addSecretVariableRequest]);
});
