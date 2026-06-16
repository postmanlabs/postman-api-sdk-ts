import { z } from 'zod';
import {
  MockCreateUpdateResponseMock,
  mockCreateUpdateResponseMock,
  mockCreateUpdateResponseMockRequest,
  mockCreateUpdateResponseMockResponse,
} from './mock-create-update-response-mock';

/**
 * Zod schema for the MockCreateUpdateResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockCreateUpdateResponse = z.lazy(() => {
  return z.object({
    mock: mockCreateUpdateResponseMock.optional(),
  });
});

/**
 *
 * @typedef  {MockCreateUpdateResponse} mockCreateUpdateResponse
 * @property {MockCreateUpdateResponseMock} - Information about the mock server.
 */
export type MockCreateUpdateResponse = z.infer<typeof mockCreateUpdateResponse>;

/**
 * Zod schema for mapping API responses to the MockCreateUpdateResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCreateUpdateResponseResponse = z.lazy(() => {
  return z
    .object({
      mock: mockCreateUpdateResponseMockResponse.optional(),
    })
    .transform((data) => ({
      mock: data['mock'],
    }));
});

/**
 * Zod schema for mapping the MockCreateUpdateResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCreateUpdateResponseRequest = z.lazy(() => {
  return z
    .object({
      mock: mockCreateUpdateResponseMockRequest.optional(),
    })
    .transform((data) => ({
      mock: data['mock'],
    }));
});
