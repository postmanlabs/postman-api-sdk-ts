import { z } from 'zod';
import { MocksConfig, mocksConfig, mocksConfigRequest, mocksConfigResponse } from './mocks-config';

/**
 * Zod schema for the GetMockServersMocks model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getMockServersMocks = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    owner: z.string().optional(),
    uid: z.string().optional(),
    collection: z.string().optional(),
    mockUrl: z.string().optional(),
    config: mocksConfig.optional(),
    createdAt: z.string().optional(),
    environment: z.string().optional(),
    isPublic: z.boolean().optional(),
    name: z.string().optional(),
    deactivated: z.boolean().optional(),
    updatedAt: z.string().optional(),
  });
});

/**
 * Information about the mock server.
 * @typedef  {GetMockServersMocks} getMockServersMocks - Information about the mock server. - Information about the mock server.
 * @property {string} - The mock server's ID.
 * @property {string} - The ID of mock server's owner.
 * @property {string} - The mock server's unique ID.
 * @property {string} - The unique ID of the mock's associated collection.
 * @property {string} - The mock server URL.
 * @property {MocksConfig} - Information about the mock server's configuration.
 * @property {string} - The date and time at which the mock server was created.
 * @property {string} - The mock server's associated environment ID.
 * @property {boolean} - If true, the mock server is public and visible to all users. This field does not indicate the mock server's access control status.
 * @property {string} - The mock server's name.
 * @property {boolean} - If true, the mock server is not active. Mock servers deactivate when a linked collection or environment is deleted.
 * @property {string} - The date and time at which the mock server was last updated.
 */
export type GetMockServersMocks = z.infer<typeof getMockServersMocks>;

/**
 * Zod schema for mapping API responses to the GetMockServersMocks application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMockServersMocksResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      owner: z.string().optional(),
      uid: z.string().optional(),
      collection: z.string().optional(),
      mockUrl: z.string().optional(),
      config: mocksConfigResponse.optional(),
      createdAt: z.string().optional(),
      environment: z.string().optional(),
      isPublic: z.boolean().optional(),
      name: z.string().optional(),
      deactivated: z.boolean().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      owner: data['owner'],
      uid: data['uid'],
      collection: data['collection'],
      mockUrl: data['mockUrl'],
      config: data['config'],
      createdAt: data['createdAt'],
      environment: data['environment'],
      isPublic: data['isPublic'],
      name: data['name'],
      deactivated: data['deactivated'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the GetMockServersMocks application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMockServersMocksRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      owner: z.string().optional(),
      uid: z.string().optional(),
      collection: z.string().optional(),
      mockUrl: z.string().optional(),
      config: mocksConfigRequest.optional(),
      createdAt: z.string().optional(),
      environment: z.string().optional(),
      isPublic: z.boolean().optional(),
      name: z.string().optional(),
      deactivated: z.boolean().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      owner: data['owner'],
      uid: data['uid'],
      collection: data['collection'],
      mockUrl: data['mockUrl'],
      config: data['config'],
      createdAt: data['createdAt'],
      environment: data['environment'],
      isPublic: data['isPublic'],
      name: data['name'],
      deactivated: data['deactivated'],
      updatedAt: data['updatedAt'],
    }));
});
