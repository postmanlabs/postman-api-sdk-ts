import { z } from 'zod';
import {
  MockServerConfigData,
  mockServerConfigData,
  mockServerConfigDataRequest,
  mockServerConfigDataResponse,
} from './mock-server-config-data';

/**
 * Zod schema for the MockCreateUpdateData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockCreateUpdateData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    owner: z.string().optional(),
    uid: z.string().optional(),
    collection: z.string().optional(),
    mockUrl: z.string().optional(),
    name: z.string().optional(),
    config: mockServerConfigData.optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    environment: z.string().optional(),
  });
});

/**
 * Information about the mock server.
 * @typedef {MockCreateUpdateData} mockCreateUpdateData
 * @property {string} id - The mock server's ID.
 * @property {string} owner - The ID of mock server's owner.
 * @property {string} uid - The mock server's unique ID.
 * @property {string} collection - The unique ID of the mock's associated collection.
 * @property {string} mockUrl - The mock server URL.
 * @property {string} name - The mock server's name.
 * @property {MockServerConfigData} config - Information about the mock server's configuration.
 * @property {string} createdAt - The date and time at which the mock server was created.
 * @property {string} updatedAt - The date and time at which the mock server was last updated.
 * @property {string} environment - The unique ID of the mock's associated environment.
 */
export type MockCreateUpdateData = z.infer<typeof mockCreateUpdateData>;

/**
 * Zod schema for mapping API responses to the MockCreateUpdateData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCreateUpdateDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      owner: z.string().optional(),
      uid: z.string().optional(),
      collection: z.string().optional(),
      mockUrl: z.string().optional(),
      name: z.string().optional(),
      config: mockServerConfigDataResponse.optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      environment: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      owner: data['owner'],
      uid: data['uid'],
      collection: data['collection'],
      mockUrl: data['mockUrl'],
      name: data['name'],
      config: data['config'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      environment: data['environment'],
    }));
});

/**
 * Zod schema for mapping the MockCreateUpdateData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCreateUpdateDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      owner: z.string().optional(),
      uid: z.string().optional(),
      collection: z.string().optional(),
      mockUrl: z.string().optional(),
      name: z.string().optional(),
      config: mockServerConfigDataRequest.optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      environment: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      owner: data['owner'],
      uid: data['uid'],
      collection: data['collection'],
      mockUrl: data['mockUrl'],
      name: data['name'],
      config: data['config'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      environment: data['environment'],
    }));
});
