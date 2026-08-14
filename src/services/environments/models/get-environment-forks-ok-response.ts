import { z } from 'zod';
import {
  EnvironmentForkInfo,
  environmentForkInfo,
  environmentForkInfoRequest,
  environmentForkInfoResponse,
} from './environment-fork-info';
import {
  EnvironmentForksMeta,
  environmentForksMeta,
  environmentForksMetaRequest,
  environmentForksMetaResponse,
} from './environment-forks-meta';

/**
 * Zod schema for the GetEnvironmentForksOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getEnvironmentForksOkResponse = z.lazy(() => {
  return z.object({
    data: z.array(environmentForkInfo).optional(),
    meta: environmentForksMeta.optional(),
  });
});

/**
 * @typedef {GetEnvironmentForksOkResponse} getEnvironmentForksOkResponse
 * @property {EnvironmentForkInfo[]} data - A list of the environment's forks.
 * @property {EnvironmentForksMeta} meta - The response's meta information for paginated results.
 */
export type GetEnvironmentForksOkResponse = z.infer<typeof getEnvironmentForksOkResponse>;

/**
 * Zod schema for mapping API responses to the GetEnvironmentForksOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEnvironmentForksOkResponseResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(environmentForkInfoResponse).optional(),
      meta: environmentForksMetaResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetEnvironmentForksOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEnvironmentForksOkResponseRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(environmentForkInfoRequest).optional(),
      meta: environmentForksMetaRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
