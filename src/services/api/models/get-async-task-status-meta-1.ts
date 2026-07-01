import { z } from 'zod';
import {
  GetAsyncTaskStatusMetaModel1,
  getAsyncTaskStatusMetaModel1,
} from './get-async-task-status-meta-model-1';
import { MetaAction, metaAction } from './meta-action';

/**
 * Zod schema for the GetAsyncTaskStatusMeta1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAsyncTaskStatusMeta1 = z.lazy(() => {
  return z.object({
    url: z.string().optional(),
    model: getAsyncTaskStatusMetaModel1.optional(),
    action: metaAction.optional(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef  {GetAsyncTaskStatusMeta1} getAsyncTaskStatusMeta1 - The response's non-standard meta information. - The response's non-standard meta information.
 * @property {string} - The endpoint URL that created the task.
 * @property {GetAsyncTaskStatusMetaModel1} - The model for which the task is performing the operation.
 * @property {MetaAction} - The task's action.
 */
export type GetAsyncTaskStatusMeta1 = z.infer<typeof getAsyncTaskStatusMeta1>;

/**
 * Zod schema for mapping API responses to the GetAsyncTaskStatusMeta1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAsyncTaskStatusMeta1Response = z.lazy(() => {
  return z
    .object({
      url: z.string().optional(),
      model: getAsyncTaskStatusMetaModel1.optional(),
      action: metaAction.optional(),
    })
    .transform((data) => ({
      url: data['url'],
      model: data['model'],
      action: data['action'],
    }));
});

/**
 * Zod schema for mapping the GetAsyncTaskStatusMeta1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAsyncTaskStatusMeta1Request = z.lazy(() => {
  return z
    .object({
      url: z.string().optional(),
      model: getAsyncTaskStatusMetaModel1.optional(),
      action: metaAction.optional(),
    })
    .transform((data) => ({
      url: data['url'],
      model: data['model'],
      action: data['action'],
    }));
});
