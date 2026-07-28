import { z } from 'zod';
import {
  componentVersionData,
  componentVersionDataRequest,
  componentVersionDataResponse,
} from './component-version-data';

/**
 * Zod schema for the LatestVersion model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const latestVersion = z.lazy(() => {
  return z.union([z.string(), componentVersionData]);
});

/**
 * Information about the component's latest version. This property only returns only when you pass the `latestVersion` value for the `include` parameter.

To return detailed information about the component's latest version, pass the `latestVersion` value for the `expand` parameter.

 * @typedef  {LatestVersion} latestVersion - Information about the component's latest version. This property only returns only when you pass the `latestVersion` value for the `include` parameter.

To return detailed information about the component's latest version, pass the `latestVersion` value for the `expand` parameter.
 - Information about the component's latest version. This property only returns only when you pass the `latestVersion` value for the `include` parameter.

To return detailed information about the component's latest version, pass the `latestVersion` value for the `expand` parameter.

 * @property {string} 
 * @property {ComponentVersionData} - Information about a component's version.
 */
export type LatestVersion = z.infer<typeof latestVersion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const latestVersionResponse = z.lazy(() => {
  return z.union([z.string(), componentVersionDataResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const latestVersionRequest = z.lazy(() => {
  return z.union([z.string(), componentVersionDataRequest]);
});
