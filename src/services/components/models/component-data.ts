import { z } from 'zod';
import {
  LatestVersion,
  latestVersion,
  latestVersionRequest,
  latestVersionResponse,
} from './latest-version';

/**
 * Zod schema for the ComponentData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const componentData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    type: z.string().optional(),
    status: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    createdBy: z.string().optional(),
    updatedBy: z.string().optional(),
    hasVersions: z.boolean().optional(),
    latestVersion: latestVersion.optional(),
  });
});

/**
 * Information about the component.
 * @typedef {ComponentData} componentData
 * @property {string} id - The component's ID.
 * @property {string} name - The component's name.
 * @property {ComponentType} type - The component's type. Corresponds to the specification that the component's content adheres to.
 * @property {ComponentStatus} status - The component's lifecycle state:
- `active` — The component is active and can be edited and published.
- `archived` — The component is archived and read-only. Archived components can't be edited or published, but their existing versions remain accessible.

 * @property {string} createdAt - The date and time at which the component was created.
 * @property {string} updatedAt - The date and time at which the component was last updated.
 * @property {string} createdBy - The ID of the user who created the component.
 * @property {string} updatedBy - The ID of the user who last updated the component.
 * @property {boolean} hasVersions - Whether the component has versions. Returns only when you pass the `hasVersions` value for the `include` parameter.
 * @property {LatestVersion} latestVersion - Information about the component's latest version. This property only returns only when you pass the `latestVersion` value for the `include` parameter.

To return detailed information about the component's latest version, pass the `latestVersion` value for the `expand` parameter.

 */
export type ComponentData = z.infer<typeof componentData>;

/**
 * Zod schema for mapping API responses to the ComponentData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const componentDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      type: z.string().optional(),
      status: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      hasVersions: z.boolean().optional(),
      latestVersion: latestVersionResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      type: data['type'],
      status: data['status'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      hasVersions: data['hasVersions'],
      latestVersion: data['latestVersion'],
    }));
});

/**
 * Zod schema for mapping the ComponentData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const componentDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      type: z.string().optional(),
      status: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      hasVersions: z.boolean().optional(),
      latestVersion: latestVersionRequest.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      type: data['type'],
      status: data['status'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      hasVersions: data['hasVersions'],
      latestVersion: data['latestVersion'],
    }));
});
