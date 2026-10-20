import { z } from 'zod';
import {
  MockServerConfigData,
  mockServerConfigData,
  mockServerConfigDataRequest,
  mockServerConfigDataResponse,
} from './mock-server-config-data';

/**
 * Zod schema for the MockServerData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockServerData = z.lazy(() => {
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
    isPublic: z.boolean().optional(),
    deactivated: z.boolean().optional(),
    environment: z.string().optional(),
  });
});

/**
 * Information about the mock server.
 * @typedef {MockServerData} mockServerData
 * @property {string} id - The mock server's ID.
 * @property {string} owner - The ID of mock server's owner.
 * @property {string} uid - The mock server's unique ID.
 * @property {string} collection - The unique ID of the mock's associated collection.
 * @property {string} mockUrl - The mock server URL.
 * @property {string} name - The mock server's name.
 * @property {MockServerConfigData} config - Information about the mock server's configuration.
 * @property {string} createdAt - The date and time at which the mock server was created.
 * @property {string} updatedAt - The date and time at which the mock server was last updated.
 * @property {boolean} isPublic - If true, the mock server is public and visible to all users. This field does not indicate the mock server's access control status.
 * @property {boolean} deactivated - If true, the mock server is not active. Mock servers deactivate when a linked collection or environment is deleted.
 * @property {string} environment - The mock server's associated environment ID.
 */
export type MockServerData = z.infer<typeof mockServerData>;

/**
 * Zod schema for mapping API responses to the MockServerData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockServerDataResponse = z.lazy(() => {
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
      isPublic: z.boolean().optional(),
      deactivated: z.boolean().optional(),
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
      isPublic: data['isPublic'],
      deactivated: data['deactivated'],
      environment: data['environment'],
    }));
});

/**
 * Zod schema for mapping the MockServerData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockServerDataRequest = z.lazy(() => {
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
      isPublic: z.boolean().optional(),
      deactivated: z.boolean().optional(),
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
      isPublic: data['isPublic'],
      deactivated: data['deactivated'],
      environment: data['environment'],
    }));
});
