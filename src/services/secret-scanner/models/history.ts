import { z } from 'zod';
import { HistoryResolution, historyResolution } from './history-resolution';

/**
 * Zod schema for the History model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const history = z.lazy(() => {
  return z.object({
    actor: z.number().optional(),
    createdAt: z.string().optional(),
    resolution: historyResolution.optional(),
  });
});

/**
 * 
 * @typedef  {History} history   
 * @property {number} - The ID of the user that updated the secret's resolution status.
 * @property {string} - The date and time at which the resolution status was updated.
 * @property {HistoryResolution} - The secret's updated resolution status:
- `ACTIVE` — The secret is active.
- `FALSE_POSITIVE` — The discovered secret is not an actual secret.
- `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue.
- `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.

 */
export type History = z.infer<typeof history>;

/**
 * Zod schema for mapping API responses to the History application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const historyResponse = z.lazy(() => {
  return z
    .object({
      actor: z.number().optional(),
      createdAt: z.string().optional(),
      resolution: historyResolution.optional(),
    })
    .transform((data) => ({
      actor: data['actor'],
      createdAt: data['createdAt'],
      resolution: data['resolution'],
    }));
});

/**
 * Zod schema for mapping the History application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const historyRequest = z.lazy(() => {
  return z
    .object({
      actor: z.number().optional(),
      createdAt: z.string().optional(),
      resolution: historyResolution.optional(),
    })
    .transform((data) => ({
      actor: data['actor'],
      createdAt: data['createdAt'],
      resolution: data['resolution'],
    }));
});
