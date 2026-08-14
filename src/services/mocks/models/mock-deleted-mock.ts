import { z } from 'zod';

/**
 * Zod schema for the MockDeletedMock model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockDeletedMock = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the mock server.
 * @typedef {MockDeletedMock} mockDeletedMock
 * @property {string} id - The mock server's ID.
 * @property {string} uid - The mock server's unique ID.
 */
export type MockDeletedMock = z.infer<typeof mockDeletedMock>;

/**
 * Zod schema for mapping API responses to the MockDeletedMock application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockDeletedMockResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the MockDeletedMock application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockDeletedMockRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      uid: data['uid'],
    }));
});
