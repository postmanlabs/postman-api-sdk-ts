import { z } from 'zod';

/**
 * Zod schema for the AsyncTaskFailedMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const asyncTaskFailedMeta = z.lazy(() => {
  return z.object({
    action: z.string().optional(),
    model: z.string().optional(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef {AsyncTaskFailedMeta} asyncTaskFailedMeta
 * @property {string} action - The task's action.
 * @property {AsyncTaskFailedMetaModel} model - The model for which the task is performing the operation.
 */
export type AsyncTaskFailedMeta = z.infer<typeof asyncTaskFailedMeta>;

/**
 * Zod schema for mapping API responses to the AsyncTaskFailedMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const asyncTaskFailedMetaResponse = z.lazy(() => {
  return z
    .object({
      action: z.string().optional(),
      model: z.string().optional(),
    })
    .transform((data) => ({
      action: data['action'],
      model: data['model'],
    }));
});

/**
 * Zod schema for mapping the AsyncTaskFailedMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const asyncTaskFailedMetaRequest = z.lazy(() => {
  return z
    .object({
      action: z.string().optional(),
      model: z.string().optional(),
    })
    .transform((data) => ({
      action: data['action'],
      model: data['model'],
    }));
});
