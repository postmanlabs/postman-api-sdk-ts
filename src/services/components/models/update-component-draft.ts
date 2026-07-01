import { z } from 'zod';
import { ComponentContentFormat, componentContentFormat } from './component-content-format';

/**
 * Zod schema for the UpdateComponentDraft model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateComponentDraft = z.lazy(() => {
  return z.object({
    content: z.string().optional(),
    format: componentContentFormat.optional(),
  });
});

/**
 * Information about the component draft.
 * @typedef  {UpdateComponentDraft} updateComponentDraft - Information about the component draft. - Information about the component draft.
 * @property {string} - The component's contents, up to a maximum of 500 KB (UTF-8).
 * @property {ComponentContentFormat} - The component's content format.
 */
export type UpdateComponentDraft = z.infer<typeof updateComponentDraft>;

/**
 * Zod schema for mapping API responses to the UpdateComponentDraft application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateComponentDraftResponse1 = z.lazy(() => {
  return z
    .object({
      content: z.string().optional(),
      format: componentContentFormat.optional(),
    })
    .transform((data) => ({
      content: data['content'],
      format: data['format'],
    }));
});

/**
 * Zod schema for mapping the UpdateComponentDraft application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateComponentDraftRequest = z.lazy(() => {
  return z
    .object({
      content: z.string().optional(),
      format: componentContentFormat.optional(),
    })
    .transform((data) => ({
      content: data['content'],
      format: data['format'],
    }));
});
