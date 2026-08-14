import { z } from 'zod';
import {
  UpdateMockMockConfig,
  updateMockMockConfig,
  updateMockMockConfigRequest,
  updateMockMockConfigResponse,
} from './update-mock-mock-config';

/**
 * Zod schema for the UpdateMockMock model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateMockMock = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    environment: z.string().optional(),
    description: z.string().optional(),
    private: z.boolean().optional(),
    versionTag: z.string().optional(),
    collection: z.string().optional(),
    config: updateMockMockConfig.optional(),
  });
});

/**
 * @typedef {UpdateMockMock} updateMockMock
 * @property {string} name - The mock server's name.
 * @property {string} environment - The associated environment's unique ID.
 * @property {string} description - The mock server's description.
 * @property {boolean} private - If true, the mock server is set private. By default, mock servers are public and can receive requests from anyone and anywhere.
 * @property {string} versionTag - The API's version tag ID.
 * @property {string} collection - The ID of the collection associated with the mock server.
 * @property {UpdateMockMockConfig} config - The mock server's configuration settings.
 */
export type UpdateMockMock = z.infer<typeof updateMockMock>;

/**
 * Zod schema for mapping API responses to the UpdateMockMock application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMockMockResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      environment: z.string().optional(),
      description: z.string().optional(),
      private: z.boolean().optional(),
      versionTag: z.string().optional(),
      collection: z.string().optional(),
      config: updateMockMockConfigResponse.optional(),
    })
    .transform((data) => ({
      name: data['name'],
      environment: data['environment'],
      description: data['description'],
      private: data['private'],
      versionTag: data['versionTag'],
      collection: data['collection'],
      config: data['config'],
    }));
});

/**
 * Zod schema for mapping the UpdateMockMock application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMockMockRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      environment: z.string().optional(),
      description: z.string().optional(),
      private: z.boolean().optional(),
      versionTag: z.string().optional(),
      collection: z.string().optional(),
      config: updateMockMockConfigRequest.optional(),
    })
    .transform((data) => ({
      name: data['name'],
      environment: data['environment'],
      description: data['description'],
      private: data['private'],
      versionTag: data['versionTag'],
      collection: data['collection'],
      config: data['config'],
    }));
});
