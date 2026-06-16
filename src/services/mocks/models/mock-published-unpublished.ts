import { z } from 'zod';
import {
  MockPublishedUnpublishedMock,
  mockPublishedUnpublishedMock,
  mockPublishedUnpublishedMockRequest,
  mockPublishedUnpublishedMockResponse,
} from './mock-published-unpublished-mock';

/**
 * Zod schema for the MockPublishedUnpublished model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockPublishedUnpublished = z.lazy(() => {
  return z.object({
    mock: mockPublishedUnpublishedMock.optional(),
  });
});

/**
 *
 * @typedef  {MockPublishedUnpublished} mockPublishedUnpublished
 * @property {MockPublishedUnpublishedMock} - Information about the mock server.
 */
export type MockPublishedUnpublished = z.infer<typeof mockPublishedUnpublished>;

/**
 * Zod schema for mapping API responses to the MockPublishedUnpublished application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockPublishedUnpublishedResponse = z.lazy(() => {
  return z
    .object({
      mock: mockPublishedUnpublishedMockResponse.optional(),
    })
    .transform((data) => ({
      mock: data['mock'],
    }));
});

/**
 * Zod schema for mapping the MockPublishedUnpublished application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockPublishedUnpublishedRequest = z.lazy(() => {
  return z
    .object({
      mock: mockPublishedUnpublishedMockRequest.optional(),
    })
    .transform((data) => ({
      mock: data['mock'],
    }));
});
