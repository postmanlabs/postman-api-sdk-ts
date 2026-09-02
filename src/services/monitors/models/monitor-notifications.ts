import { z } from 'zod';
import { OnError, onError, onErrorRequest, onErrorResponse } from './on-error';
import { OnFailure, onFailure, onFailureRequest, onFailureResponse } from './on-failure';

/**
 * Zod schema for the MonitorNotifications model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorNotifications = z.lazy(() => {
  return z.object({
    onError: z.array(onError).optional(),
    onFailure: z.array(onFailure).optional(),
  });
});

/**
 * Information about the monitor's notification settings.
 * @typedef {MonitorNotifications} monitorNotifications
 * @property {OnError[]} onError - A list of recipients to notify when the monitor errors.
 * @property {OnFailure[]} onFailure - A list of recipients to notify when the monitor fails.
 */
export type MonitorNotifications = z.infer<typeof monitorNotifications>;

/**
 * Zod schema for mapping API responses to the MonitorNotifications application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorNotificationsResponse = z.lazy(() => {
  return z
    .object({
      onError: z.array(onErrorResponse).optional(),
      onFailure: z.array(onFailureResponse).optional(),
    })
    .transform((data) => ({
      onError: data['onError'],
      onFailure: data['onFailure'],
    }));
});

/**
 * Zod schema for mapping the MonitorNotifications application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorNotificationsRequest = z.lazy(() => {
  return z
    .object({
      onError: z.array(onErrorRequest).optional(),
      onFailure: z.array(onFailureRequest).optional(),
    })
    .transform((data) => ({
      onError: data['onError'],
      onFailure: data['onFailure'],
    }));
});
