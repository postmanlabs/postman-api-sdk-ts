import { z } from 'zod';
import {
  GetEnvironmentInfoValues,
  getEnvironmentInfoValues,
  getEnvironmentInfoValuesRequest,
  getEnvironmentInfoValuesResponse,
} from './get-environment-info-values';

/**
 * Zod schema for the GetEnvironmentInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getEnvironmentInfo = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    owner: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    values: z.array(getEnvironmentInfoValues).optional(),
    isPublic: z.boolean().optional(),
  });
});

/**
 * Information about the environment.
 * @typedef  {GetEnvironmentInfo} getEnvironmentInfo - Information about the environment. - Information about the environment.
 * @property {string} - The environment's ID.
 * @property {string} - The environment's name.
 * @property {string} - The ID of environment's owner.
 * @property {string} - The date and time at which the environment was created.
 * @property {string} - The date and time at which the environment was last updated.
 * @property {GetEnvironmentInfoValues[]} - Information about the environment's variables.
 * @property {boolean} - If true, the environment is public and visible to all users.
 */
export type GetEnvironmentInfo = z.infer<typeof getEnvironmentInfo>;

/**
 * Zod schema for mapping API responses to the GetEnvironmentInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEnvironmentInfoResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      owner: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      values: z.array(getEnvironmentInfoValuesResponse).optional(),
      isPublic: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      owner: data['owner'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      values: data['values'],
      isPublic: data['isPublic'],
    }));
});

/**
 * Zod schema for mapping the GetEnvironmentInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEnvironmentInfoRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      owner: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      values: z.array(getEnvironmentInfoValuesRequest).optional(),
      isPublic: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      owner: data['owner'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      values: data['values'],
      isPublic: data['isPublic'],
    }));
});
