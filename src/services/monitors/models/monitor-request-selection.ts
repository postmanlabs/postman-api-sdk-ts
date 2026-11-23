import { z } from 'zod';
import {
  MonitorRequestSelectionSelectedItems,
  monitorRequestSelectionSelectedItems,
  monitorRequestSelectionSelectedItemsRequest,
  monitorRequestSelectionSelectedItemsResponse,
} from './monitor-request-selection-selected-items';
import {
  MonitorRequestSelectionMeta,
  monitorRequestSelectionMeta,
  monitorRequestSelectionMetaRequest,
  monitorRequestSelectionMetaResponse,
} from './monitor-request-selection-meta';

/**
 * Zod schema for the MonitorRequestSelection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRequestSelection = z.lazy(() => {
  return z.object({
    selectedItems: z.array(monitorRequestSelectionSelectedItems).min(1),
    meta: monitorRequestSelectionMeta,
  });
});

/**
 * The ordered subset of the monitor's collection that the monitor runs, in run order, instead of the full collection.
 * @typedef {MonitorRequestSelection} monitorRequestSelection
 * @property {MonitorRequestSelectionSelectedItems[]} selectedItems - The collection items the monitor runs, in run order. Each entry's position in this array is its position in the run, not the collection's ordering.
 * @property {MonitorRequestSelectionMeta} meta - Additional request-selection metadata, including the collection's structure at the time the selection was made.
 */
export type MonitorRequestSelection = z.infer<typeof monitorRequestSelection>;

/**
 * Zod schema for mapping API responses to the MonitorRequestSelection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRequestSelectionResponse = z.lazy(() => {
  return z
    .object({
      selectedItems: z.array(monitorRequestSelectionSelectedItemsResponse).min(1),
      meta: monitorRequestSelectionMetaResponse,
    })
    .transform((data) => ({
      selectedItems: data['selectedItems'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the MonitorRequestSelection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRequestSelectionRequest = z.lazy(() => {
  return z
    .object({
      selectedItems: z.array(monitorRequestSelectionSelectedItemsRequest).min(1),
      meta: monitorRequestSelectionMetaRequest,
    })
    .transform((data) => ({
      selectedItems: data['selectedItems'],
      meta: data['meta'],
    }));
});
