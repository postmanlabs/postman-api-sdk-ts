import { z } from 'zod';
import {
  RequestDeniedRequest1,
  requestDeniedRequest1,
  requestDeniedRequest1Request,
  requestDeniedRequest1Response,
} from './request-denied-request-1';

/**
 * Zod schema for the RequestDenied model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestDenied = z.lazy(() => {
  return z.object({
    request: z.array(requestDeniedRequest1).optional(),
  });
});

/**
 * @typedef {RequestDenied} requestDenied
 * @property {RequestDeniedRequest1[]} request - A list of Private API Network requests.
 */
export type RequestDenied = z.infer<typeof requestDenied>;

/**
 * Zod schema for mapping API responses to the RequestDenied application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestDeniedResponse = z.lazy(() => {
  return z
    .object({
      request: z.array(requestDeniedRequest1Response).optional(),
    })
    .transform((data) => ({
      request: data['request'],
    }));
});

/**
 * Zod schema for mapping the RequestDenied application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestDeniedRequest = z.lazy(() => {
  return z
    .object({
      request: z.array(requestDeniedRequest1Request).optional(),
    })
    .transform((data) => ({
      request: data['request'],
    }));
});
