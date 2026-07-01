import { z } from 'zod';

/**
 * Zod schema for the Reviewers model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const reviewers = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    status: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {Reviewers} reviewers   
 * @property {string} - The reviewer's user ID.
 * @property {string} - The reviewer's review status response. One of:
- `approved`
- `declined`

 */
export type Reviewers = z.infer<typeof reviewers>;

/**
 * Zod schema for mapping API responses to the Reviewers application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const reviewersResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the Reviewers application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const reviewersRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
    }));
});
