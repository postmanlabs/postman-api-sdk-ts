import { z } from 'zod';
import { MergeStatus, mergeStatus } from './merge-status';

/**
 * Zod schema for the Merge model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const merge = z.lazy(() => {
  return z.object({
    status: mergeStatus.optional(),
  });
});

/**
 * Information about the current progress of the pull request's merge.
 * @typedef  {Merge} merge - Information about the current progress of the pull request's merge. - Information about the current progress of the pull request's merge.
 * @property {MergeStatus} - The pull request's current merge status:
- `inactive` — There is no merge in progress.
- `inprogress` — The pull request is currently merging.
- `failed` — The pull request's merge failed.

 */
export type Merge = z.infer<typeof merge>;

/**
 * Zod schema for mapping API responses to the Merge application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mergeResponse = z.lazy(() => {
  return z
    .object({
      status: mergeStatus.optional(),
    })
    .transform((data) => ({
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the Merge application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mergeRequest = z.lazy(() => {
  return z
    .object({
      status: mergeStatus.optional(),
    })
    .transform((data) => ({
      status: data['status'],
    }));
});
