import { z } from 'zod';
import {
  DeleteMonitorData,
  deleteMonitorData,
  deleteMonitorDataRequest,
  deleteMonitorDataResponse,
} from './delete-monitor-data';

/**
 * Zod schema for the MonitorDeleted model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorDeleted = z.lazy(() => {
  return z.object({
    monitor: deleteMonitorData.optional(),
  });
});

/**
 * @typedef {MonitorDeleted} monitorDeleted
 * @property {DeleteMonitorData} monitor - Information about the monitor.
 */
export type MonitorDeleted = z.infer<typeof monitorDeleted>;

/**
 * Zod schema for mapping API responses to the MonitorDeleted application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorDeletedResponse = z.lazy(() => {
  return z
    .object({
      monitor: deleteMonitorDataResponse.optional(),
    })
    .transform((data) => ({
      monitor: data['monitor'],
    }));
});

/**
 * Zod schema for mapping the MonitorDeleted application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorDeletedRequest = z.lazy(() => {
  return z
    .object({
      monitor: deleteMonitorDataRequest.optional(),
    })
    .transform((data) => ({
      monitor: data['monitor'],
    }));
});
