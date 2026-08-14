import { z } from 'zod';
import {
  MonitorRetrySettings,
  monitorRetrySettings,
  monitorRetrySettingsRequest,
  monitorRetrySettingsResponse,
} from './monitor-retry-settings';
import {
  MonitorOptions,
  monitorOptions,
  monitorOptionsRequest,
  monitorOptionsResponse,
} from './monitor-options';
import {
  MonitorSchedule,
  monitorSchedule,
  monitorScheduleRequest,
  monitorScheduleResponse,
} from './monitor-schedule';
import {
  MonitorDistribution,
  monitorDistribution,
  monitorDistributionRequest,
  monitorDistributionResponse,
} from './monitor-distribution';
import {
  MonitorNotifications,
  monitorNotifications,
  monitorNotificationsRequest,
  monitorNotificationsResponse,
} from './monitor-notifications';

/**
 * Zod schema for the UpdateMonitorMonitor model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateMonitorMonitor = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    active: z.boolean().optional(),
    notificationLimit: z.number().gte(1).lte(99).optional(),
    retry: monitorRetrySettings.optional(),
    options: monitorOptions.optional(),
    schedule: monitorSchedule.optional(),
    distribution: z.array(monitorDistribution).optional(),
    notifications: monitorNotifications.optional(),
  });
});

/**
 * Information about the monitor.
 * @typedef {UpdateMonitorMonitor} updateMonitorMonitor
 * @property {string} name - The monitor's name.
 * @property {boolean} active - If true, the monitor is active and makes calls to the specified URL.
 * @property {number} notificationLimit - Stop email notifications after the given number consecutive failures.
 * @property {MonitorRetrySettings} retry - Information about the monitor's retry settings.
 * @property {MonitorOptions} options - Information about the monitor's option settings.
 * @property {MonitorSchedule} schedule - Information about the monitor's schedule.
 * @property {MonitorDistribution[]} distribution - A list of the monitor's [geographic regions](https://learning.postman.com/docs/monitoring-your-api/setting-up-monitor/#add-regions).
 * @property {MonitorNotifications} notifications - Information about the monitor's notification settings.
 */
export type UpdateMonitorMonitor = z.infer<typeof updateMonitorMonitor>;

/**
 * Zod schema for mapping API responses to the UpdateMonitorMonitor application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMonitorMonitorResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      active: z.boolean().optional(),
      notificationLimit: z.number().gte(1).lte(99).optional(),
      retry: monitorRetrySettingsResponse.optional(),
      options: monitorOptionsResponse.optional(),
      schedule: monitorScheduleResponse.optional(),
      distribution: z.array(monitorDistributionResponse).optional(),
      notifications: monitorNotificationsResponse.optional(),
    })
    .transform((data) => ({
      name: data['name'],
      active: data['active'],
      notificationLimit: data['notificationLimit'],
      retry: data['retry'],
      options: data['options'],
      schedule: data['schedule'],
      distribution: data['distribution'],
      notifications: data['notifications'],
    }));
});

/**
 * Zod schema for mapping the UpdateMonitorMonitor application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMonitorMonitorRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      active: z.boolean().optional(),
      notificationLimit: z.number().gte(1).lte(99).optional(),
      retry: monitorRetrySettingsRequest.optional(),
      options: monitorOptionsRequest.optional(),
      schedule: monitorScheduleRequest.optional(),
      distribution: z.array(monitorDistributionRequest).optional(),
      notifications: monitorNotificationsRequest.optional(),
    })
    .transform((data) => ({
      name: data['name'],
      active: data['active'],
      notificationLimit: data['notificationLimit'],
      retry: data['retry'],
      options: data['options'],
      schedule: data['schedule'],
      distribution: data['distribution'],
      notifications: data['notifications'],
    }));
});
