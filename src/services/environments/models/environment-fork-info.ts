import { z } from 'zod';

/**
 * Zod schema for the EnvironmentForkInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const environmentForkInfo = z.lazy(() => {
  return z.object({
    forkId: z.string().optional(),
    forkName: z.string().optional(),
    createdAt: z.string().optional(),
    createdBy: z.string().optional(),
    updatedAt: z.string().optional(),
  });
});

/**
 * Information about the forked environment.
 * @typedef  {EnvironmentForkInfo} environmentForkInfo - Information about the forked environment. - Information about the forked environment.
 * @property {string} - The forked environment's unique ID.
 * @property {string} - The forked environment's label.
 * @property {string} - The date and time at which the fork was created.
 * @property {string} - The user who created the environment fork.
 * @property {string} - The date and time at which the fork was last updated.
 */
export type EnvironmentForkInfo = z.infer<typeof environmentForkInfo>;

/**
 * Zod schema for mapping API responses to the EnvironmentForkInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentForkInfoResponse = z.lazy(() => {
  return z
    .object({
      forkId: z.string().optional(),
      forkName: z.string().optional(),
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      forkId: data['forkId'],
      forkName: data['forkName'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the EnvironmentForkInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentForkInfoRequest = z.lazy(() => {
  return z
    .object({
      forkId: z.string().optional(),
      forkName: z.string().optional(),
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      forkId: data['forkId'],
      forkName: data['forkName'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
    }));
});
