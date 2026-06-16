import { z } from 'zod';
import {
  GetAsyncTaskStatusMetaModel,
  getAsyncTaskStatusMetaModel,
} from './get-async-task-status-meta-model';

/**
 * Zod schema for the GetAsyncTaskStatusMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAsyncTaskStatusMeta = z.lazy(() => {
  return z.object({
    action: z.string().optional(),
    model: getAsyncTaskStatusMetaModel.optional(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef  {GetAsyncTaskStatusMeta} getAsyncTaskStatusMeta - The response's non-standard meta information. - The response's non-standard meta information.
 * @property {string} - The task's action.
 * @property {GetAsyncTaskStatusMetaModel} - The model for which the task is performing the operation.
 */
export type GetAsyncTaskStatusMeta = z.infer<typeof getAsyncTaskStatusMeta>;

/**
 * Zod schema for mapping API responses to the GetAsyncTaskStatusMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAsyncTaskStatusMetaResponse = z.lazy(() => {
  return z
    .object({
      action: z.string().optional(),
      model: getAsyncTaskStatusMetaModel.optional(),
    })
    .transform((data) => ({
      action: data['action'],
      model: data['model'],
    }));
});

/**
 * Zod schema for mapping the GetAsyncTaskStatusMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAsyncTaskStatusMetaRequest = z.lazy(() => {
  return z
    .object({
      action: z.string().optional(),
      model: getAsyncTaskStatusMetaModel.optional(),
    })
    .transform((data) => ({
      action: data['action'],
      model: data['model'],
    }));
});
