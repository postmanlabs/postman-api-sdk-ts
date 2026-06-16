import { z } from 'zod';
import {
  MockCreateUpdateResponseMockConfig,
  mockCreateUpdateResponseMockConfig,
  mockCreateUpdateResponseMockConfigRequest,
  mockCreateUpdateResponseMockConfigResponse,
} from './mock-create-update-response-mock-config';

/**
 * Zod schema for the MockCreateUpdateResponseMock model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockCreateUpdateResponseMock = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    owner: z.string().optional(),
    uid: z.string().optional(),
    collection: z.string().optional(),
    mockUrl: z.string().optional(),
    name: z.string().optional(),
    config: mockCreateUpdateResponseMockConfig.optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    environment: z.string().optional(),
  });
});

/**
 * Information about the mock server.
 * @typedef  {MockCreateUpdateResponseMock} mockCreateUpdateResponseMock - Information about the mock server. - Information about the mock server.
 * @property {string} - The mock server's ID.
 * @property {string} - The ID of mock server's owner.
 * @property {string} - The mock server's unique ID.
 * @property {string} - The unique ID of the mock's associated collection.
 * @property {string} - The mock server URL.
 * @property {string} - The mock server's name.
 * @property {MockCreateUpdateResponseMockConfig} - Information about the mock server's configuration.
 * @property {string} - The date and time at which the mock server was created.
 * @property {string} - The date and time at which the mock server was last updated.
 * @property {string} - The unique ID of the mock's associated environment.
 */
export type MockCreateUpdateResponseMock = z.infer<typeof mockCreateUpdateResponseMock>;

/**
 * Zod schema for mapping API responses to the MockCreateUpdateResponseMock application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCreateUpdateResponseMockResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      owner: z.string().optional(),
      uid: z.string().optional(),
      collection: z.string().optional(),
      mockUrl: z.string().optional(),
      name: z.string().optional(),
      config: mockCreateUpdateResponseMockConfigResponse.optional(),
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
 * Zod schema for mapping the MockCreateUpdateResponseMock application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCreateUpdateResponseMockRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      owner: z.string().optional(),
      uid: z.string().optional(),
      collection: z.string().optional(),
      mockUrl: z.string().optional(),
      name: z.string().optional(),
      config: mockCreateUpdateResponseMockConfigRequest.optional(),
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
