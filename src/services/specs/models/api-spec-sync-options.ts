import { z } from 'zod';
import { SyncOptions, syncOptions, syncOptionsRequest, syncOptionsResponse } from './sync-options';

/**
 * Zod schema for the ApiSpecSyncOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiSpecSyncOptions = z.lazy(() => {
  return z.object({
    syncOptions: syncOptions.optional(),
  });
});

/**
 * @typedef {ApiSpecSyncOptions} apiSpecSyncOptions
 * @property {SyncOptions} syncOptions - Information about the specification sync options.
 */
export type ApiSpecSyncOptions = z.infer<typeof apiSpecSyncOptions>;

/**
 * Zod schema for mapping API responses to the ApiSpecSyncOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiSpecSyncOptionsResponse = z.lazy(() => {
  return z
    .object({
      syncOptions: syncOptionsResponse.optional(),
    })
    .transform((data) => ({
      syncOptions: data['syncOptions'],
    }));
});

/**
 * Zod schema for mapping the ApiSpecSyncOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiSpecSyncOptionsRequest = z.lazy(() => {
  return z
    .object({
      syncOptions: syncOptionsRequest.optional(),
    })
    .transform((data) => ({
      syncOptions: data['syncOptions'],
    }));
});
