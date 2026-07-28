import { z } from 'zod';

/**
 * Zod schema for the GetComponentDraft model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getComponentDraft = z.lazy(() => {
  return z.object({
    content: z.string().optional(),
    format: z.string().optional(),
  });
});

/**
 *
 * @typedef  {GetComponentDraft} getComponentDraft
 * @property {string} - The component's draft content.
 * @property {string} - The component draft's content format.
 */
export type GetComponentDraft = z.infer<typeof getComponentDraft>;

/**
 * Zod schema for mapping API responses to the GetComponentDraft application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getComponentDraftResponse = z.lazy(() => {
  return z
    .object({
      content: z.string().optional(),
      format: z.string().optional(),
    })
    .transform((data) => ({
      content: data['content'],
      format: data['format'],
    }));
});

/**
 * Zod schema for mapping the GetComponentDraft application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getComponentDraftRequest = z.lazy(() => {
  return z
    .object({
      content: z.string().optional(),
      format: z.string().optional(),
    })
    .transform((data) => ({
      content: data['content'],
      format: data['format'],
    }));
});
