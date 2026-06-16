import { z } from 'zod';
import {
  PatchEnvironmentInfo,
  patchEnvironmentInfo,
  patchEnvironmentInfoRequest,
  patchEnvironmentInfoResponse,
} from './patch-environment-info';

/**
 * Zod schema for the PatchEnvironmentOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const patchEnvironmentOkResponse = z.lazy(() => {
  return z.object({
    environment: patchEnvironmentInfo.optional(),
  });
});

/**
 *
 * @typedef  {PatchEnvironmentOkResponse} patchEnvironmentOkResponse
 * @property {PatchEnvironmentInfo} - Information about the environment.
 */
export type PatchEnvironmentOkResponse = z.infer<typeof patchEnvironmentOkResponse>;

/**
 * Zod schema for mapping API responses to the PatchEnvironmentOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchEnvironmentOkResponseResponse = z.lazy(() => {
  return z
    .object({
      environment: patchEnvironmentInfoResponse.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});

/**
 * Zod schema for mapping the PatchEnvironmentOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchEnvironmentOkResponseRequest = z.lazy(() => {
  return z
    .object({
      environment: patchEnvironmentInfoRequest.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});
