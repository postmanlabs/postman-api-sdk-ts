import { z } from 'zod';

/**
 * Zod schema for the UpdateComponentResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateComponentResponse = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    status: z.string().optional(),
  });
});

/**
 * Information about the component.
 * @typedef {UpdateComponentResponse} updateComponentResponse
 * @property {string} id - The component's ID.
 * @property {string} name - The component's name.
 * @property {ComponentStatus} status - The component's lifecycle state:
- `active` — The component is active and can be edited and published.
- `archive` — The component is archived and read-only. Archived components can't be edited or published, but their existing versions remain accessible.

 */
export type UpdateComponentResponse = z.infer<typeof updateComponentResponse>;

/**
 * Zod schema for mapping API responses to the UpdateComponentResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateComponentResponseResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the UpdateComponentResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateComponentResponseRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      status: data['status'],
    }));
});
