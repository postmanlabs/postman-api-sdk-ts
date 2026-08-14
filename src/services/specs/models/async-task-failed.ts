import { z } from 'zod';
import {
  AsyncTaskFailedMeta,
  asyncTaskFailedMeta,
  asyncTaskFailedMetaRequest,
  asyncTaskFailedMetaResponse,
} from './async-task-failed-meta';

/**
 * Zod schema for the AsyncTaskFailed model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const asyncTaskFailed = z.lazy(() => {
  return z.object({
    details: z.string().optional(),
    meta: asyncTaskFailedMeta.optional(),
    status: z.string().optional(),
  });
});

/**
 * @typedef {AsyncTaskFailed} asyncTaskFailed
 * @property {string} details - Details about the generation error.
 * @property {AsyncTaskFailedMeta} meta - The response's non-standard meta information.
 * @property {AsyncTaskFailedStatus} status - The task's current status.
 */
export type AsyncTaskFailed = z.infer<typeof asyncTaskFailed>;

/**
 * Zod schema for mapping API responses to the AsyncTaskFailed application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const asyncTaskFailedResponse = z.lazy(() => {
  return z
    .object({
      details: z.string().optional(),
      meta: asyncTaskFailedMetaResponse.optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      details: data['details'],
      meta: data['meta'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the AsyncTaskFailed application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const asyncTaskFailedRequest = z.lazy(() => {
  return z
    .object({
      details: z.string().optional(),
      meta: asyncTaskFailedMetaRequest.optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      details: data['details'],
      meta: data['meta'],
      status: data['status'],
    }));
});
