import { z } from 'zod';
import { RunnerMeta, runnerMeta, runnerMetaRequest, runnerMetaResponse } from './runner-meta';
import {
  RunnerInstanceData,
  runnerInstanceData,
  runnerInstanceDataRequest,
  runnerInstanceDataResponse,
} from './runner-instance-data';

/**
 * Zod schema for the GetRunnerInstances model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getRunnerInstances = z.lazy(() => {
  return z.object({
    meta: runnerMeta.optional(),
    data: z.array(runnerInstanceData).optional(),
  });
});

/**
 * @typedef {GetRunnerInstances} getRunnerInstances
 * @property {RunnerMeta} meta - The response's meta information for paginated results.
 * @property {RunnerInstanceData[]} data - A list of all runner instances.
 */
export type GetRunnerInstances = z.infer<typeof getRunnerInstances>;

/**
 * Zod schema for mapping API responses to the GetRunnerInstances application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getRunnerInstancesResponse = z.lazy(() => {
  return z
    .object({
      meta: runnerMetaResponse.optional(),
      data: z.array(runnerInstanceDataResponse).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetRunnerInstances application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getRunnerInstancesRequest = z.lazy(() => {
  return z
    .object({
      meta: runnerMetaRequest.optional(),
      data: z.array(runnerInstanceDataRequest).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
