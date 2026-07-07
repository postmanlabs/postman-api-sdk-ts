import { z } from 'zod';
import {
  GetMockServerMockConfig,
  getMockServerMockConfig,
  getMockServerMockConfigRequest,
  getMockServerMockConfigResponse,
} from './get-mock-server-mock-config';

/**
 * Zod schema for the GetMockServerMock model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getMockServerMock = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    owner: z.string().optional(),
    uid: z.string().optional(),
    collection: z.string().optional(),
    mockUrl: z.string().optional(),
    name: z.string().optional(),
    config: getMockServerMockConfig.optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    isPublic: z.boolean().optional(),
    deactivated: z.boolean().optional(),
    environment: z.string().optional(),
  });
});

/**
 * Information about the mock server.
 * @typedef  {GetMockServerMock} getMockServerMock - Information about the mock server. - Information about the mock server.
 * @property {string} - The mock server's ID.
 * @property {string} - The ID of mock server's owner.
 * @property {string} - The mock server's unique ID.
 * @property {string} - The unique ID of the mock's associated collection.
 * @property {string} - The mock server URL.
 * @property {string} - The mock server's name.
 * @property {GetMockServerMockConfig} - Information about the mock server's configuration.
 * @property {string} - The date and time at which the mock server was created.
 * @property {string} - The date and time at which the mock server was last updated.
 * @property {boolean} - If true, the mock server is public and visible to all users. This field does not indicate the mock server's access control status.
 * @property {boolean} - If true, the mock server is not active. Mock servers deactivate when a linked collection or environment is deleted.
 * @property {string} - The mock server's associated environment ID.
 */
export type GetMockServerMock = z.infer<typeof getMockServerMock>;

/**
 * Zod schema for mapping API responses to the GetMockServerMock application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMockServerMockResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      owner: z.string().optional(),
      uid: z.string().optional(),
      collection: z.string().optional(),
      mockUrl: z.string().optional(),
      name: z.string().optional(),
      config: getMockServerMockConfigResponse.optional(),
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
 * Zod schema for mapping the GetMockServerMock application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMockServerMockRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      owner: z.string().optional(),
      uid: z.string().optional(),
      collection: z.string().optional(),
      mockUrl: z.string().optional(),
      name: z.string().optional(),
      config: getMockServerMockConfigRequest.optional(),
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
