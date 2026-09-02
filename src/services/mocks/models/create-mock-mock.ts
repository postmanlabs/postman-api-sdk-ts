import { z } from 'zod';

/**
 * Zod schema for the CreateMockMock model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createMockMock = z.lazy(() => {
  return z.object({
    collection: z.string(),
    environment: z.string().optional(),
    name: z.string().optional(),
    private: z.boolean().optional(),
  });
});

/**
 * Information about the mock server to create.
 * @typedef {CreateMockMock} createMockMock
 * @property {string} collection - The unique ID of the mock's associated collection.
 * @property {string} environment - The unique ID of the mock's associated environment.
 * @property {string} name - The mock server's name.
 * @property {boolean} private - If true, the mock server is set private. By default, mock servers are public and can receive requests from anyone and anywhere.
 */
export type CreateMockMock = z.infer<typeof createMockMock>;

/**
 * Zod schema for mapping API responses to the CreateMockMock application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createMockMockResponse = z.lazy(() => {
  return z
    .object({
      collection: z.string(),
      environment: z.string().optional(),
      name: z.string().optional(),
      private: z.boolean().optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
      environment: data['environment'],
      name: data['name'],
      private: data['private'],
    }));
});

/**
 * Zod schema for mapping the CreateMockMock application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createMockMockRequest = z.lazy(() => {
  return z
    .object({
      collection: z.string(),
      environment: z.string().optional(),
      name: z.string().optional(),
      private: z.boolean().optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
      environment: data['environment'],
      name: data['name'],
      private: data['private'],
    }));
});
