import { z } from 'zod';

/**
 * Zod schema for the UpdateComponentDraftResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateComponentDraftResponse = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
  });
});

/**
 * Information about the component draft.
 * @typedef  {UpdateComponentDraftResponse} updateComponentDraftResponse - Information about the component draft. - Information about the component draft.
 * @property {string} - The component draft's ID.
 */
export type UpdateComponentDraftResponse = z.infer<typeof updateComponentDraftResponse>;

/**
 * Zod schema for mapping API responses to the UpdateComponentDraftResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateComponentDraftResponseResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the UpdateComponentDraftResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateComponentDraftResponseRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
