import { z } from 'zod';
import {
  MonitorRequestSelectionPayloadSelectedItems,
  monitorRequestSelectionPayloadSelectedItems,
  monitorRequestSelectionPayloadSelectedItemsRequest,
  monitorRequestSelectionPayloadSelectedItemsResponse,
} from './monitor-request-selection-payload-selected-items';

/**
 * Zod schema for the MonitorRequestSelectionPayload model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRequestSelectionPayload = z.lazy(() => {
  return z.object({
    selectedItems: z.array(monitorRequestSelectionPayloadSelectedItems).min(1),
  });
});

/**
 * The ordered subset of the monitor's collection to run. If set, the monitor runs exactly these items in the given order instead of the full collection. Pass a `null` value to clear the selection and run the full collection again.
 * @typedef {MonitorRequestSelectionPayload} monitorRequestSelectionPayload
 * @property {MonitorRequestSelectionPayloadSelectedItems[]} selectedItems - The collection items to run, in run order. Each entry's position in this array is its position in the run, not the collection's ordering. Each item must exist in the monitor's collection, or the request returns an HTTP `400 Bad Request` error.
 */
export type MonitorRequestSelectionPayload = z.infer<typeof monitorRequestSelectionPayload>;

/**
 * Zod schema for mapping API responses to the MonitorRequestSelectionPayload application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRequestSelectionPayloadResponse = z.lazy(() => {
  return z
    .object({
      selectedItems: z.array(monitorRequestSelectionPayloadSelectedItemsResponse).min(1),
    })
    .transform((data) => ({
      selectedItems: data['selectedItems'],
    }));
});

/**
 * Zod schema for mapping the MonitorRequestSelectionPayload application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRequestSelectionPayloadRequest = z.lazy(() => {
  return z
    .object({
      selectedItems: z.array(monitorRequestSelectionPayloadSelectedItemsRequest).min(1),
    })
    .transform((data) => ({
      selectedItems: data['selectedItems'],
    }));
});
