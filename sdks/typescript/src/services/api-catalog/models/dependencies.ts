import { z } from 'zod';
import { Direction, direction } from './direction';

/**
 * Zod schema for the Dependencies model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const dependencies = z.lazy(() => {
  return z.object({
    id: z.string(),
    name: z.string(),
    direction: direction,
  });
});

/**
 *
 * @typedef  {Dependencies} dependencies
 * @property {string} - The dependent service's ID.
 * @property {string} - The dependent service's name.
 * @property {Direction} - Whether traffic flows into (inbound) or out of (outbound) the service.
 */
export type Dependencies = z.infer<typeof dependencies>;

/**
 * Zod schema for mapping API responses to the Dependencies application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const dependenciesResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string(),
      direction: direction,
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      direction: data['direction'],
    }));
});

/**
 * Zod schema for mapping the Dependencies application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const dependenciesRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string(),
      direction: direction,
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      direction: data['direction'],
    }));
});
