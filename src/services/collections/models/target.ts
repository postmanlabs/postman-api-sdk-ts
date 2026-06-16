import { z } from 'zod';
import { TargetModel, targetModel } from './target-model';

/**
 * Zod schema for the Target model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const target = z.lazy(() => {
  return z.object({
    id: z.string(),
    model: targetModel,
  });
});

/**
 * Information about the item transfer's destination location.
 * @typedef  {Target} target - Information about the item transfer's destination location. - Information about the item transfer's destination location.
 * @property {string} - The UID of the destination collection, folder, or request.
 * @property {TargetModel} - The collection, folder, or request that the items will be transferred to. For response transfers, use the `request` value.
 */
export type Target = z.infer<typeof target>;

/**
 * Zod schema for mapping API responses to the Target application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const targetResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      model: targetModel,
    })
    .transform((data) => ({
      id: data['id'],
      model: data['model'],
    }));
});

/**
 * Zod schema for mapping the Target application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const targetRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      model: targetModel,
    })
    .transform((data) => ({
      id: data['id'],
      model: data['model'],
    }));
});
