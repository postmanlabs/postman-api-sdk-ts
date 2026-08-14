import { z } from 'zod';

/**
 * Zod schema for the MonitorRunInformation model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRunInformation = z.lazy(() => {
  return z.object({
    jobId: z.string().optional(),
    collectionUid: z.string().optional(),
    environmentUid: z.string().optional(),
    monitorId: z.string().optional(),
    name: z.string().optional(),
    status: z.string().optional(),
    startedAt: z.string().optional(),
    finishedAt: z.string().optional(),
  });
});

/**
 * Information about the monitor.
 * @typedef {MonitorRunInformation} monitorRunInformation
 * @property {string} jobId - The monitor's run job ID.
 * @property {string} collectionUid - The unique ID of the monitor's associated collection.
 * @property {string} environmentUid - The unique ID of the monitor's associated environment.
 * @property {string} monitorId - The monitor's ID.
 * @property {string} name - The monitor's name.
 * @property {string} status - The monitor run's status.
 * @property {string} startedAt - The date and time at which the monitor run began.
 * @property {string} finishedAt - The date and time at which the monitor's run completed.
 */
export type MonitorRunInformation = z.infer<typeof monitorRunInformation>;

/**
 * Zod schema for mapping API responses to the MonitorRunInformation application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunInformationResponse = z.lazy(() => {
  return z
    .object({
      jobId: z.string().optional(),
      collectionUid: z.string().optional(),
      environmentUid: z.string().optional(),
      monitorId: z.string().optional(),
      name: z.string().optional(),
      status: z.string().optional(),
      startedAt: z.string().optional(),
      finishedAt: z.string().optional(),
    })
    .transform((data) => ({
      jobId: data['jobId'],
      collectionUid: data['collectionUid'],
      environmentUid: data['environmentUid'],
      monitorId: data['monitorId'],
      name: data['name'],
      status: data['status'],
      startedAt: data['startedAt'],
      finishedAt: data['finishedAt'],
    }));
});

/**
 * Zod schema for mapping the MonitorRunInformation application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunInformationRequest = z.lazy(() => {
  return z
    .object({
      jobId: z.string().optional(),
      collectionUid: z.string().optional(),
      environmentUid: z.string().optional(),
      monitorId: z.string().optional(),
      name: z.string().optional(),
      status: z.string().optional(),
      startedAt: z.string().optional(),
      finishedAt: z.string().optional(),
    })
    .transform((data) => ({
      jobId: data['jobId'],
      collectionUid: data['collectionUid'],
      environmentUid: data['environmentUid'],
      monitorId: data['monitorId'],
      name: data['name'],
      status: data['status'],
      startedAt: data['startedAt'],
      finishedAt: data['finishedAt'],
    }));
});
