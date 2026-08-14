import { z } from 'zod';
import {
  PatchEnvironmentInfoValues,
  patchEnvironmentInfoValues,
  patchEnvironmentInfoValuesRequest,
  patchEnvironmentInfoValuesResponse,
} from './patch-environment-info-values';

/**
 * Zod schema for the PatchEnvironmentInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const patchEnvironmentInfo = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    owner: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    values: z.array(patchEnvironmentInfoValues).optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the environment.
 * @typedef {PatchEnvironmentInfo} patchEnvironmentInfo
 * @property {string} id - The environment's ID.
 * @property {string} name - The environment's name.
 * @property {string} owner - The ID of environment's owner.
 * @property {string} createdAt - The date and time at which the environment was created.
 * @property {string} updatedAt - The date and time at which the environment was last updated.
 * @property {PatchEnvironmentInfoValues[]} values - Information about the environment's variables.
 * @property {string} uid - The environment's unique ID.
 */
export type PatchEnvironmentInfo = z.infer<typeof patchEnvironmentInfo>;

/**
 * Zod schema for mapping API responses to the PatchEnvironmentInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchEnvironmentInfoResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      owner: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      values: z.array(patchEnvironmentInfoValuesResponse).optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      owner: data['owner'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      values: data['values'],
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the PatchEnvironmentInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchEnvironmentInfoRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      owner: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      values: z.array(patchEnvironmentInfoValuesRequest).optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      owner: data['owner'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      values: data['values'],
      uid: data['uid'],
    }));
});
