import { z } from 'zod';
import {
  MockCreateUpdateData,
  mockCreateUpdateData,
  mockCreateUpdateDataRequest,
  mockCreateUpdateDataResponse,
} from './mock-create-update-data';

/**
 * Zod schema for the MockCreateUpdateResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockCreateUpdateResponse = z.lazy(() => {
  return z.object({
    mock: mockCreateUpdateData.optional(),
  });
});

/**
 * @typedef {MockCreateUpdateResponse} mockCreateUpdateResponse
 * @property {MockCreateUpdateData} mock - Information about the mock server.
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
      mock: mockCreateUpdateDataResponse.optional(),
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
      mock: mockCreateUpdateDataRequest.optional(),
    })
    .transform((data) => ({
      mock: data['mock'],
    }));
});
