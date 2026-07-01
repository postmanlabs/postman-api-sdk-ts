import { z } from 'zod';
import {
  variableList2_1,
  variableList2_1Request,
  variableList2_1Response,
} from './variable-list-2-1';
import {
  secretVariableInfo,
  secretVariableInfoRequest,
  secretVariableInfoResponse,
} from './secret-variable-info';

/**
 * Zod schema for the VariableList2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const variableList2 = z.lazy(() => {
  return z.union([variableList2_1, secretVariableInfo]);
});

/**
 *
 * @typedef  {VariableList2} variableList2
 * @property {VariableList2_1} - Information about the variable.
 * @property {SecretVariableInfo} - Information about the secret variable.
 */
export type VariableList2 = z.infer<typeof variableList2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const variableList2Response = z.lazy(() => {
  return z.union([variableList2_1Response, secretVariableInfoResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const variableList2Request = z.lazy(() => {
  return z.union([variableList2_1Request, secretVariableInfoRequest]);
});
