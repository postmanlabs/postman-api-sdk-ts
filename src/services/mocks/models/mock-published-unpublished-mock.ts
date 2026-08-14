import { z } from 'zod';

/**
 * Zod schema for the MockPublishedUnpublishedMock model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockPublishedUnpublishedMock = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
  });
});

/**
 * Information about the mock server.
 * @typedef {MockPublishedUnpublishedMock} mockPublishedUnpublishedMock
 * @property {string} id - The mock server's ID.
 */
export type MockPublishedUnpublishedMock = z.infer<typeof mockPublishedUnpublishedMock>;

/**
 * Zod schema for mapping API responses to the MockPublishedUnpublishedMock application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockPublishedUnpublishedMockResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the MockPublishedUnpublishedMock application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockPublishedUnpublishedMockRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
