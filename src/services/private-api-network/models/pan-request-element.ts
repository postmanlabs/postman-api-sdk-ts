import { z } from 'zod';

/**
 * Zod schema for the PanRequestElement model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const panRequestElement = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    type: z.string().optional(),
    name: z.string().optional(),
    summary: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
  });
});

/**
 * Information about the requested element.
 * @typedef  {PanRequestElement} panRequestElement - Information about the requested element. - Information about the requested element.
 * @property {string} - The element's ID.
 * @property {PanRequestElementType} - The `workspace` element type.
 * @property {string} - The element's name.
 * @property {string} - The element's short summary.
 * @property {string} - The element's description.
 */
export type PanRequestElement = z.infer<typeof panRequestElement>;

/**
 * Zod schema for mapping API responses to the PanRequestElement application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const panRequestElementResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
      name: z.string().optional(),
      summary: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
      name: data['name'],
      summary: data['summary'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the PanRequestElement application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const panRequestElementRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
      name: z.string().optional(),
      summary: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
      name: data['name'],
      summary: data['summary'],
      description: data['description'],
    }));
});
