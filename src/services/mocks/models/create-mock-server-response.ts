import { z } from 'zod';
import {
  CreateMockServerResponseServerResponse,
  createMockServerResponseServerResponse,
  createMockServerResponseServerResponseRequest,
  createMockServerResponseServerResponseResponse,
} from './create-mock-server-response-server-response';

/**
 * Zod schema for the CreateMockServerResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createMockServerResponse = z.lazy(() => {
  return z.object({
    serverResponse: createMockServerResponseServerResponse.optional(),
  });
});

/**
 * @typedef {CreateMockServerResponse} createMockServerResponse
 * @property {CreateMockServerResponseServerResponse} serverResponse
 */
export type CreateMockServerResponse = z.infer<typeof createMockServerResponse>;

/**
 * Zod schema for mapping API responses to the CreateMockServerResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createMockServerResponseResponse = z.lazy(() => {
  return z
    .object({
      serverResponse: createMockServerResponseServerResponseResponse.optional(),
    })
    .transform((data) => ({
      serverResponse: data['serverResponse'],
    }));
});

/**
 * Zod schema for mapping the CreateMockServerResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createMockServerResponseRequest = z.lazy(() => {
  return z
    .object({
      serverResponse: createMockServerResponseServerResponseRequest.optional(),
    })
    .transform((data) => ({
      serverResponse: data['serverResponse'],
    }));
});
