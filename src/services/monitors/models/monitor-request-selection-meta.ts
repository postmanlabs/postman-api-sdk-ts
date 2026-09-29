import { z } from 'zod';
import {
  MonitorCollectionStructureItem,
  monitorCollectionStructureItem,
  monitorCollectionStructureItemRequest,
  monitorCollectionStructureItemResponse,
} from './monitor-collection-structure-item';

/**
 * Zod schema for the MonitorRequestSelectionMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRequestSelectionMeta = z.lazy(() => {
  return z.object({
    collectionStructure: z.array(monitorCollectionStructureItem).min(1),
  });
});

/**
 * Additional request-selection metadata, including the collection's structure at the time the selection was made.
 * @typedef {MonitorRequestSelectionMeta} monitorRequestSelectionMeta
 * @property {MonitorCollectionStructureItem[]} collectionStructure - A snapshot of the collection's complete item tree, in collection order and minimal collection format, that Postman takes each time the selection is set or changed. Later changes to the collection are compared against it, so the monitor's notifications can report requests added to or removed from the collection since the selection was set.
 */
export type MonitorRequestSelectionMeta = z.infer<typeof monitorRequestSelectionMeta>;

/**
 * Zod schema for mapping API responses to the MonitorRequestSelectionMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRequestSelectionMetaResponse = z.lazy(() => {
  return z
    .object({
      collectionStructure: z.array(monitorCollectionStructureItemResponse).min(1),
    })
    .transform((data) => ({
      collectionStructure: data['collectionStructure'],
    }));
});

/**
 * Zod schema for mapping the MonitorRequestSelectionMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRequestSelectionMetaRequest = z.lazy(() => {
  return z
    .object({
      collectionStructure: z.array(monitorCollectionStructureItemRequest).min(1),
    })
    .transform((data) => ({
      collectionStructure: data['collectionStructure'],
    }));
});
