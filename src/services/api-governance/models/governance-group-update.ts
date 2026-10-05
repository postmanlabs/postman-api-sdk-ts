import { z } from 'zod';

/**
 * Zod schema for the GovernanceGroupUpdate model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const governanceGroupUpdate = z.lazy(() => {
  return z.object({
    name: z.string().min(1).max(255).optional(),
    description: z.string().max(255).optional(),
  });
});

/**
 * Information about the governance group.
 * @typedef {GovernanceGroupUpdate} governanceGroupUpdate
 * @property {string} name - The governance group's name.
 * @property {string} description - The governance group's description.
 */
export type GovernanceGroupUpdate = z.infer<typeof governanceGroupUpdate>;

/**
 * Zod schema for mapping API responses to the GovernanceGroupUpdate application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const governanceGroupUpdateResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().min(1).max(255).optional(),
      description: z.string().max(255).optional(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the GovernanceGroupUpdate application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const governanceGroupUpdateRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().min(1).max(255).optional(),
      description: z.string().max(255).optional(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
    }));
});
