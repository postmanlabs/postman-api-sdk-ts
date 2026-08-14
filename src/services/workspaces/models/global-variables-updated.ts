import { z } from 'zod';
import {
  GlobalVariableInfo,
  globalVariableInfo,
  globalVariableInfoRequest,
  globalVariableInfoResponse,
} from './global-variable-info';

/**
 * Zod schema for the GlobalVariablesUpdated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const globalVariablesUpdated = z.lazy(() => {
  return z.object({
    values: z.array(globalVariableInfo).optional(),
  });
});

/**
 * Information about the workspace's updated global variables.
 * @typedef {GlobalVariablesUpdated} globalVariablesUpdated
 * @property {GlobalVariableInfo[]} values - A list of the workspace's global variables.
 */
export type GlobalVariablesUpdated = z.infer<typeof globalVariablesUpdated>;

/**
 * Zod schema for mapping API responses to the GlobalVariablesUpdated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const globalVariablesUpdatedResponse = z.lazy(() => {
  return z
    .object({
      values: z.array(globalVariableInfoResponse).optional(),
    })
    .transform((data) => ({
      values: data['values'],
    }));
});

/**
 * Zod schema for mapping the GlobalVariablesUpdated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const globalVariablesUpdatedRequest = z.lazy(() => {
  return z
    .object({
      values: z.array(globalVariableInfoRequest).optional(),
    })
    .transform((data) => ({
      values: data['values'],
    }));
});
