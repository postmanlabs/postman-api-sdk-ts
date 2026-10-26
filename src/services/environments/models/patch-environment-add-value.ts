import { z } from 'zod';
import { addVariable, addVariableRequest, addVariableResponse } from './add-variable';
import {
  addSecretVariable,
  addSecretVariableRequest,
  addSecretVariableResponse,
} from './add-secret-variable';

/**
 * Zod schema for the PatchEnvironmentAddValue model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const patchEnvironmentAddValue = z.lazy(() => {
  return z.union([addVariable, addSecretVariable]);
});

/**
 * The environment variable to add.
 * @typedef {PatchEnvironmentAddValue} patchEnvironmentAddValue
 */
export type PatchEnvironmentAddValue = z.infer<typeof patchEnvironmentAddValue>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const patchEnvironmentAddValueResponse = z.lazy(() => {
  return z.union([addVariableResponse, addSecretVariableResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const patchEnvironmentAddValueRequest = z.lazy(() => {
  return z.union([addVariableRequest, addSecretVariableRequest]);
});
