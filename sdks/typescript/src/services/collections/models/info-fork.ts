import { z } from 'zod';

/**
 * Zod schema for the InfoFork model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const infoFork = z.lazy(() => {
  return z.object({
    label: z.string().optional(),
    createdAt: z.string().optional(),
    from: z.string().optional(),
  });
});

/**
 * If the collection was forked from another collection, this object contains information about the fork.
 * @typedef  {InfoFork} infoFork - If the collection was forked from another collection, this object contains information about the fork. - If the collection was forked from another collection, this object contains information about the fork.
 * @property {string} - The fork's label.
 * @property {string} - The date and time at which the collection was forked.
 * @property {string} - The source (parent) collection's unique ID.
 */
export type InfoFork = z.infer<typeof infoFork>;

/**
 * Zod schema for mapping API responses to the InfoFork application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const infoForkResponse = z.lazy(() => {
  return z
    .object({
      label: z.string().optional(),
      createdAt: z.string().optional(),
      from: z.string().optional(),
    })
    .transform((data) => ({
      label: data['label'],
      createdAt: data['createdAt'],
      from: data['from'],
    }));
});

/**
 * Zod schema for mapping the InfoFork application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const infoForkRequest = z.lazy(() => {
  return z
    .object({
      label: z.string().optional(),
      createdAt: z.string().optional(),
      from: z.string().optional(),
    })
    .transform((data) => ({
      label: data['label'],
      createdAt: data['createdAt'],
      from: data['from'],
    }));
});
