import { z } from 'zod';

/**
 * Zod schema for the Element model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const element = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    summary: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    type: z.string().optional(),
    createdBy: z.number().optional(),
    createdAt: z.string().optional(),
  });
});

/**
 * Information about the requested element.
 * @typedef  {Element} element - Information about the requested element. - Information about the requested element.
 * @property {string} - The element's ID.
 * @property {string} - The element's name.
 * @property {string} - The element's short summary.
 * @property {string} - The element's description.
 * @property {RequestElementType} - The `workspace` element type.
 * @property {number} - The ID of the user who added the element to the Private API Network.
 * @property {string} - The date and time the element was added to the Private API Network.
 */
export type Element = z.infer<typeof element>;

/**
 * Zod schema for mapping API responses to the Element application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const elementResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      summary: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      type: z.string().optional(),
      createdBy: z.number().optional(),
      createdAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      summary: data['summary'],
      description: data['description'],
      type: data['type'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
    }));
});

/**
 * Zod schema for mapping the Element application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const elementRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      summary: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      type: z.string().optional(),
      createdBy: z.number().optional(),
      createdAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      summary: data['summary'],
      description: data['description'],
      type: data['type'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
    }));
});
