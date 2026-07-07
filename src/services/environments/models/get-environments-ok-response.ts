import { z } from 'zod';
import {
  GetEnvironmentsInfo,
  getEnvironmentsInfo,
  getEnvironmentsInfoRequest,
  getEnvironmentsInfoResponse,
} from './get-environments-info';

/**
 * Zod schema for the GetEnvironmentsOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getEnvironmentsOkResponse = z.lazy(() => {
  return z.object({
    environments: z.array(getEnvironmentsInfo).optional(),
  });
});

/**
 *
 * @typedef  {GetEnvironmentsOkResponse} getEnvironmentsOkResponse
 * @property {GetEnvironmentsInfo[]} - A list of environments.
 */
export type GetEnvironmentsOkResponse = z.infer<typeof getEnvironmentsOkResponse>;

/**
 * Zod schema for mapping API responses to the GetEnvironmentsOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEnvironmentsOkResponseResponse = z.lazy(() => {
  return z
    .object({
      environments: z.array(getEnvironmentsInfoResponse).optional(),
    })
    .transform((data) => ({
      environments: data['environments'],
    }));
});

/**
 * Zod schema for mapping the GetEnvironmentsOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEnvironmentsOkResponseRequest = z.lazy(() => {
  return z
    .object({
      environments: z.array(getEnvironmentsInfoRequest).optional(),
    })
    .transform((data) => ({
      environments: data['environments'],
    }));
});
