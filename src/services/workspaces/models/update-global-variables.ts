import { z } from 'zod';
import {
  GlobalVariableInfo,
  globalVariableInfo,
  globalVariableInfoRequest,
  globalVariableInfoResponse,
} from './global-variable-info';

/**
 * Zod schema for the UpdateGlobalVariables model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateGlobalVariables = z.lazy(() => {
  return z.object({
    values: z.array(globalVariableInfo).optional(),
  });
});

/**
 *
 * @typedef  {UpdateGlobalVariables} updateGlobalVariables
 * @property {GlobalVariableInfo[]} - A list of the workspace's global variables.
 */
export type UpdateGlobalVariables = z.infer<typeof updateGlobalVariables>;

/**
 * Zod schema for mapping API responses to the UpdateGlobalVariables application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateGlobalVariablesResponse = z.lazy(() => {
  return z
    .object({
      values: z.array(globalVariableInfoResponse).optional(),
    })
    .transform((data) => ({
      values: data['values'],
    }));
});

/**
 * Zod schema for mapping the UpdateGlobalVariables application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateGlobalVariablesRequest = z.lazy(() => {
  return z
    .object({
      values: z.array(globalVariableInfoRequest).optional(),
    })
    .transform((data) => ({
      values: data['values'],
    }));
});
