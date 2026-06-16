import { z } from 'zod';

/**
 * Zod schema for the GetEnvironmentsInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getEnvironmentsInfo = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    owner: z.string().optional(),
    uid: z.string().optional(),
    isPublic: z.boolean().optional(),
  });
});

/**
 * Information about the environment.
 * @typedef  {GetEnvironmentsInfo} getEnvironmentsInfo - Information about the environment. - Information about the environment.
 * @property {string} - The environment's ID.
 * @property {string} - The environment's name.
 * @property {string} - The date and time at which the environment was created.
 * @property {string} - The date and time at which the environment was last updated.
 * @property {string} - The environment owner's ID.
 * @property {string} - The environment's unique ID.
 * @property {boolean} - If true, the environment is public and visible to all users.
 */
export type GetEnvironmentsInfo = z.infer<typeof getEnvironmentsInfo>;

/**
 * Zod schema for mapping API responses to the GetEnvironmentsInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEnvironmentsInfoResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      owner: z.string().optional(),
      uid: z.string().optional(),
      isPublic: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      owner: data['owner'],
      uid: data['uid'],
      isPublic: data['isPublic'],
    }));
});

/**
 * Zod schema for mapping the GetEnvironmentsInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEnvironmentsInfoRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      owner: z.string().optional(),
      uid: z.string().optional(),
      isPublic: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      owner: data['owner'],
      uid: data['uid'],
      isPublic: data['isPublic'],
    }));
});
