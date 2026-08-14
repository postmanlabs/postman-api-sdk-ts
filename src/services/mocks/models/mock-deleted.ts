import { z } from 'zod';
import {
  MockDeletedMock,
  mockDeletedMock,
  mockDeletedMockRequest,
  mockDeletedMockResponse,
} from './mock-deleted-mock';

/**
 * Zod schema for the MockDeleted model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockDeleted = z.lazy(() => {
  return z.object({
    mock: mockDeletedMock.optional(),
  });
});

/**
 * @typedef {MockDeleted} mockDeleted
 * @property {MockDeletedMock} mock - Information about the mock server.
 */
export type MockDeleted = z.infer<typeof mockDeleted>;

/**
 * Zod schema for mapping API responses to the MockDeleted application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockDeletedResponse = z.lazy(() => {
  return z
    .object({
      mock: mockDeletedMockResponse.optional(),
    })
    .transform((data) => ({
      mock: data['mock'],
    }));
});

/**
 * Zod schema for mapping the MockDeleted application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockDeletedRequest = z.lazy(() => {
  return z
    .object({
      mock: mockDeletedMockRequest.optional(),
    })
    .transform((data) => ({
      mock: data['mock'],
    }));
});
