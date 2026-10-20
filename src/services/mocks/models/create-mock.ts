import { z } from 'zod';
import {
  CreateMockMock,
  createMockMock,
  createMockMockRequest,
  createMockMockResponse,
} from './create-mock-mock';

/**
 * Zod schema for the CreateMock model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createMock = z.lazy(() => {
  return z.object({
    mock: createMockMock.optional(),
  });
});

/**
 * @typedef {CreateMock} createMock
 * @property {CreateMockMock} mock - Information about the mock server to create.
 */
export type CreateMock = z.infer<typeof createMock>;

/**
 * Zod schema for mapping API responses to the CreateMock application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createMockResponse = z.lazy(() => {
  return z
    .object({
      mock: createMockMockResponse.optional(),
    })
    .transform((data) => ({
      mock: data['mock'],
    }));
});

/**
 * Zod schema for mapping the CreateMock application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createMockRequest = z.lazy(() => {
  return z
    .object({
      mock: createMockMockRequest.optional(),
    })
    .transform((data) => ({
      mock: data['mock'],
    }));
});
