import { z } from 'zod';
import {
  UpdateMockServerResponseServerResponse,
  updateMockServerResponseServerResponse,
  updateMockServerResponseServerResponseRequest,
  updateMockServerResponseServerResponseResponse,
} from './update-mock-server-response-server-response';

/**
 * Zod schema for the UpdateMockServerResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateMockServerResponse = z.lazy(() => {
  return z.object({
    serverResponse: updateMockServerResponseServerResponse.optional(),
  });
});

/**
 * @typedef {UpdateMockServerResponse} updateMockServerResponse
 * @property {UpdateMockServerResponseServerResponse} serverResponse - The server response fields to update.
 */
export type UpdateMockServerResponse = z.infer<typeof updateMockServerResponse>;

/**
 * Zod schema for mapping API responses to the UpdateMockServerResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMockServerResponseResponse = z.lazy(() => {
  return z
    .object({
      serverResponse: updateMockServerResponseServerResponseResponse.optional(),
    })
    .transform((data) => ({
      serverResponse: data['serverResponse'],
    }));
});

/**
 * Zod schema for mapping the UpdateMockServerResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMockServerResponseRequest = z.lazy(() => {
  return z
    .object({
      serverResponse: updateMockServerResponseServerResponseRequest.optional(),
    })
    .transform((data) => ({
      serverResponse: data['serverResponse'],
    }));
});
