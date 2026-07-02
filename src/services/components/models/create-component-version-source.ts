import { z } from 'zod';

/**
 * Zod schema for the CreateComponentVersionSource model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createComponentVersionSource = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
  });
});

/**
 * The source to publish the version from. Defaults to the component's current draft.
 * @typedef  {CreateComponentVersionSource} createComponentVersionSource - The source to publish the version from. Defaults to the component's current draft. - The source to publish the version from. Defaults to the component's current draft.
 * @property {SourceType} - The `draft` value.
 */
export type CreateComponentVersionSource = z.infer<typeof createComponentVersionSource>;

/**
 * Zod schema for mapping API responses to the CreateComponentVersionSource application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createComponentVersionSourceResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the CreateComponentVersionSource application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createComponentVersionSourceRequest = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
    }));
});
