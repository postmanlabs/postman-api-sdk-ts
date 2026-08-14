import { z } from 'zod';

/**
 * Zod schema for the RunnerInstanceData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const runnerInstanceData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    hostname: z.string().optional(),
    uniqueId: z.string().optional(),
    cliVersion: z.string().optional(),
    osType: z.string().optional(),
    runnerId: z.string().optional(),
    lastPingedAt: z.string().optional(),
  });
});

/**
 * Information about the runner instance.
 * @typedef {RunnerInstanceData} runnerInstanceData
 * @property {string} id - The runner instance's ID.
 * @property {string} hostname - The hostname of the machine where the runner instance is running.
 * @property {string} uniqueId - The runner instance's unique ID.
 * @property {string} cliVersion - The version of the [Postman CLI](https://learning.postman.com/docs/postman-cli/postman-cli-overview/) used to start the runner instance.
 * @property {string} osType - The operating system of the machine where the runner instance is running.
 * @property {string} runnerId - The runner's ID.
 * @property {string} lastPingedAt - The last date and time the runner instance sent results to the Postman cloud.
 */
export type RunnerInstanceData = z.infer<typeof runnerInstanceData>;

/**
 * Zod schema for mapping API responses to the RunnerInstanceData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const runnerInstanceDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      hostname: z.string().optional(),
      uniqueId: z.string().optional(),
      cliVersion: z.string().optional(),
      osType: z.string().optional(),
      runnerId: z.string().optional(),
      lastPingedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      hostname: data['hostname'],
      uniqueId: data['uniqueId'],
      cliVersion: data['cliVersion'],
      osType: data['osType'],
      runnerId: data['runnerId'],
      lastPingedAt: data['lastPingedAt'],
    }));
});

/**
 * Zod schema for mapping the RunnerInstanceData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const runnerInstanceDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      hostname: z.string().optional(),
      uniqueId: z.string().optional(),
      cliVersion: z.string().optional(),
      osType: z.string().optional(),
      runnerId: z.string().optional(),
      lastPingedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      hostname: data['hostname'],
      uniqueId: data['uniqueId'],
      cliVersion: data['cliVersion'],
      osType: data['osType'],
      runnerId: data['runnerId'],
      lastPingedAt: data['lastPingedAt'],
    }));
});
