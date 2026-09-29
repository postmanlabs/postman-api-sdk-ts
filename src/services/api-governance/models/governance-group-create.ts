import { z } from 'zod';

/**
 * Zod schema for the GovernanceGroupCreate model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const governanceGroupCreate = z.lazy(() => {
  return z.object({
    name: z.string().min(1).max(255),
    description: z.string().max(255).optional(),
  });
});

/**
 * Information about the governance group.
 * @typedef {GovernanceGroupCreate} governanceGroupCreate
 * @property {string} name - The governance group's name. Must be unique within the team.
 * @property {string} description - The governance group's description.
 */
export type GovernanceGroupCreate = z.infer<typeof governanceGroupCreate>;

/**
 * Zod schema for mapping API responses to the GovernanceGroupCreate application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const governanceGroupCreateResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().min(1).max(255),
      description: z.string().max(255).optional(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the GovernanceGroupCreate application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const governanceGroupCreateRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().min(1).max(255),
      description: z.string().max(255).optional(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
    }));
});
