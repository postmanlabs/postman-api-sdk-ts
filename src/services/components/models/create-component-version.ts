import { z } from 'zod';
import {
  CreateComponentVersionSource,
  createComponentVersionSource,
  createComponentVersionSourceRequest,
  createComponentVersionSourceResponse,
} from './create-component-version-source';

/**
 * Zod schema for the CreateComponentVersion model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createComponentVersion = z.lazy(() => {
  return z.object({
    label: z
      .string()
      .min(1)
      .max(60)
      .regex(/^[a-zA-Z0-9]([a-zA-Z0-9._+-]{0,58}[a-zA-Z0-9])?$/),
    source: createComponentVersionSource.optional(),
  });
});

/**
 * @typedef {CreateComponentVersion} createComponentVersion
 * @property {string} label - The component version's label. This must begin and end with an alphanumeric character and may only contain letters, digits, dots, underscores, plus signs, and hyphens and cannot exceed 60 characters.
 * @property {CreateComponentVersionSource} source - The source to publish the version from. Defaults to the component's current draft.
 */
export type CreateComponentVersion = z.infer<typeof createComponentVersion>;

/**
 * Zod schema for mapping API responses to the CreateComponentVersion application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createComponentVersionResponse1 = z.lazy(() => {
  return z
    .object({
      label: z
        .string()
        .min(1)
        .max(60)
        .regex(/^[a-zA-Z0-9]([a-zA-Z0-9._+-]{0,58}[a-zA-Z0-9])?$/),
      source: createComponentVersionSourceResponse.optional(),
    })
    .transform((data) => ({
      label: data['label'],
      source: data['source'],
    }));
});

/**
 * Zod schema for mapping the CreateComponentVersion application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createComponentVersionRequest = z.lazy(() => {
  return z
    .object({
      label: z
        .string()
        .min(1)
        .max(60)
        .regex(/^[a-zA-Z0-9]([a-zA-Z0-9._+-]{0,58}[a-zA-Z0-9])?$/),
      source: createComponentVersionSourceRequest.optional(),
    })
    .transform((data) => ({
      label: data['label'],
      source: data['source'],
    }));
});
