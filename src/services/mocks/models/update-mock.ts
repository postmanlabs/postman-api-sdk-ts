import { z } from 'zod';
import {
  UpdateMockMock,
  updateMockMock,
  updateMockMockRequest,
  updateMockMockResponse,
} from './update-mock-mock';

/**
 * Zod schema for the UpdateMock model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateMock = z.lazy(() => {
  return z.object({
    mock: updateMockMock.optional(),
  });
});

/**
 *
 * @typedef  {UpdateMock} updateMock
 * @property {UpdateMockMock}
 */
export type UpdateMock = z.infer<typeof updateMock>;

/**
 * Zod schema for mapping API responses to the UpdateMock application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMockResponse = z.lazy(() => {
  return z
    .object({
      mock: updateMockMockResponse.optional(),
    })
    .transform((data) => ({
      mock: data['mock'],
    }));
});

/**
 * Zod schema for mapping the UpdateMock application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMockRequest = z.lazy(() => {
  return z
    .object({
      mock: updateMockMockRequest.optional(),
    })
    .transform((data) => ({
      mock: data['mock'],
    }));
});
