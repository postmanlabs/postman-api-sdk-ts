import { z } from 'zod';

/**
 * Zod schema for the Location model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const location = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    model: z.string().optional().nullable(),
    position: z.string(),
  });
});

/**
 * The transferred items' placement in the target destination:
- For `start` or `end` — Do not include the `model` and `id` values.
- For `before` or `after` — Include the `model` and `id` properties.

 * @typedef {Location} location
 * @property {string} id - For `before` or `after` positions, the model's UID.
 * @property {string} model - For `before` or `after` positions, the type of item (model) that the transferred item will be positioned by. One of: `folder`, `request`, or `response.`

 * @property {Position} position - The transferred item's position within the destination object.
 */
export type Location = z.infer<typeof location>;

/**
 * Zod schema for mapping API responses to the Location application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const locationResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      model: z.string().optional().nullable(),
      position: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      model: data['model'],
      position: data['position'],
    }));
});

/**
 * Zod schema for mapping the Location application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const locationRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      model: z.string().optional().nullable(),
      position: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      model: data['model'],
      position: data['position'],
    }));
});
