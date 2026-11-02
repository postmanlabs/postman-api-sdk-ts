import { z } from 'zod';
import {
  CreateWebhookWebhook,
  createWebhookWebhook,
  createWebhookWebhookRequest,
  createWebhookWebhookResponse,
} from './create-webhook-webhook';

/**
 * Zod schema for the CreateWebhook model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createWebhook = z.lazy(() => {
  return z.object({
    webhook: createWebhookWebhook.optional(),
  });
});

/**
 * @typedef {CreateWebhook} createWebhook
 * @property {CreateWebhookWebhook} webhook - Information about the webhook to create.
 */
export type CreateWebhook = z.infer<typeof createWebhook>;

/**
 * Zod schema for mapping API responses to the CreateWebhook application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWebhookResponse = z.lazy(() => {
  return z
    .object({
      webhook: createWebhookWebhookResponse.optional(),
    })
    .transform((data) => ({
      webhook: data['webhook'],
    }));
});

/**
 * Zod schema for mapping the CreateWebhook application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWebhookRequest = z.lazy(() => {
  return z
    .object({
      webhook: createWebhookWebhookRequest.optional(),
    })
    .transform((data) => ({
      webhook: data['webhook'],
    }));
});
