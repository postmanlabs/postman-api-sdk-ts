import { z } from 'zod';

/**
 * Zod schema for the GetAsyncTaskStatusMeta2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAsyncTaskStatusMeta2 = z.lazy(() => {
  return z.object({
    action: z.string().optional(),
    model: z.string().optional(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef  {GetAsyncTaskStatusMeta2} getAsyncTaskStatusMeta2 - The response's non-standard meta information. - The response's non-standard meta information.
 * @property {string} - The task's action.
 * @property {GetAsyncTaskStatusMetaModel2} - The model for which the task is performing the operation.
 */
export type GetAsyncTaskStatusMeta2 = z.infer<typeof getAsyncTaskStatusMeta2>;

/**
 * Zod schema for mapping API responses to the GetAsyncTaskStatusMeta2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAsyncTaskStatusMeta2Response = z.lazy(() => {
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
 * Zod schema for mapping the GetAsyncTaskStatusMeta2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAsyncTaskStatusMeta2Request = z.lazy(() => {
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
