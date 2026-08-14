import { z } from 'zod';
import {
  MonitorOptions,
  monitorOptions,
  monitorOptionsRequest,
  monitorOptionsResponse,
} from './monitor-options';
import {
  MonitorNotifications,
  monitorNotifications,
  monitorNotificationsRequest,
  monitorNotificationsResponse,
} from './monitor-notifications';
import {
  MonitorDistribution,
  monitorDistribution,
  monitorDistributionRequest,
  monitorDistributionResponse,
} from './monitor-distribution';
import { Schedule, schedule, scheduleRequest, scheduleResponse } from './schedule';
import {
  MonitorRetrySettings,
  monitorRetrySettings,
  monitorRetrySettingsRequest,
  monitorRetrySettingsResponse,
} from './monitor-retry-settings';
import {
  MonitorLastRun,
  monitorLastRun,
  monitorLastRunRequest,
  monitorLastRunResponse,
} from './monitor-last-run';

/**
 * Zod schema for the SuccessfulResponseMonitor model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseMonitor = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    uid: z.string().optional(),
    owner: z.number().optional(),
    active: z.boolean().optional(),
    notificationLimit: z.number().gte(1).lte(99).optional(),
    collectionUid: z.string().optional(),
    environmentUid: z.string().optional(),
    jobId: z.string().optional(),
    options: monitorOptions.optional(),
    notifications: monitorNotifications.optional(),
    distribution: z.array(monitorDistribution).optional(),
    schedule: schedule.optional(),
    retry: monitorRetrySettings.optional(),
    lastRun: monitorLastRun.optional(),
  });
});

/**
 * Information about the monitor.
 * @typedef {SuccessfulResponseMonitor} successfulResponseMonitor
 * @property {string} id - The monitor's ID.
 * @property {string} name - The monitor's name.
 * @property {string} uid - The monitor's unique ID.
 * @property {number} owner - The ID of monitor's owner.
 * @property {boolean} active - If true, the monitor is active and makes calls to the specified URL.
 * @property {number} notificationLimit - Stop email notifications after the given number consecutive failures.
 * @property {string} collectionUid - The unique ID of the monitor's associated collection.
 * @property {string} environmentUid - The unique ID of the monitor's associated environment.
 * @property {string} jobId - The job ID of the monitor's latest run.
 * @property {MonitorOptions} options - Information about the monitor's option settings.
 * @property {MonitorNotifications} notifications - Information about the monitor's notification settings.
 * @property {MonitorDistribution[]} distribution - A list of the monitor's [geographic regions](https://learning.postman.com/docs/monitoring-your-api/setting-up-monitor/#add-regions).
 * @property {Schedule} schedule - Information about the monitor's schedule.
 * @property {MonitorRetrySettings} retry - Information about the monitor's retry settings.
 * @property {MonitorLastRun} lastRun - Information about the monitor's previous run.
 */
export type SuccessfulResponseMonitor = z.infer<typeof successfulResponseMonitor>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseMonitor application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMonitorResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      uid: z.string().optional(),
      owner: z.number().optional(),
      active: z.boolean().optional(),
      notificationLimit: z.number().gte(1).lte(99).optional(),
      collectionUid: z.string().optional(),
      environmentUid: z.string().optional(),
      jobId: z.string().optional(),
      options: monitorOptionsResponse.optional(),
      notifications: monitorNotificationsResponse.optional(),
      distribution: z.array(monitorDistributionResponse).optional(),
      schedule: scheduleResponse.optional(),
      retry: monitorRetrySettingsResponse.optional(),
      lastRun: monitorLastRunResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      uid: data['uid'],
      owner: data['owner'],
      active: data['active'],
      notificationLimit: data['notificationLimit'],
      collectionUid: data['collectionUid'],
      environmentUid: data['environmentUid'],
      jobId: data['jobId'],
      options: data['options'],
      notifications: data['notifications'],
      distribution: data['distribution'],
      schedule: data['schedule'],
      retry: data['retry'],
      lastRun: data['lastRun'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseMonitor application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMonitorRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      uid: z.string().optional(),
      owner: z.number().optional(),
      active: z.boolean().optional(),
      notificationLimit: z.number().gte(1).lte(99).optional(),
      collectionUid: z.string().optional(),
      environmentUid: z.string().optional(),
      jobId: z.string().optional(),
      options: monitorOptionsRequest.optional(),
      notifications: monitorNotificationsRequest.optional(),
      distribution: z.array(monitorDistributionRequest).optional(),
      schedule: scheduleRequest.optional(),
      retry: monitorRetrySettingsRequest.optional(),
      lastRun: monitorLastRunRequest.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      uid: data['uid'],
      owner: data['owner'],
      active: data['active'],
      notificationLimit: data['notificationLimit'],
      collectionUid: data['collectionUid'],
      environmentUid: data['environmentUid'],
      jobId: data['jobId'],
      options: data['options'],
      notifications: data['notifications'],
      distribution: data['distribution'],
      schedule: data['schedule'],
      retry: data['retry'],
      lastRun: data['lastRun'],
    }));
});
