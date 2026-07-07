import { z } from 'zod';
import {
  WebhookCreatedWebhook,
  webhookCreatedWebhook,
  webhookCreatedWebhookRequest,
  webhookCreatedWebhookResponse,
} from './webhook-created-webhook';

/**
 * Zod schema for the WebhookCreated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const webhookCreated = z.lazy(() => {
  return z.object({
    webhook: webhookCreatedWebhook.optional(),
  });
});

/**
 *
 * @typedef  {WebhookCreated} webhookCreated
 * @property {WebhookCreatedWebhook}
 */
export type WebhookCreated = z.infer<typeof webhookCreated>;

/**
 * Zod schema for mapping API responses to the WebhookCreated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const webhookCreatedResponse = z.lazy(() => {
  return z
    .object({
      webhook: webhookCreatedWebhookResponse.optional(),
    })
    .transform((data) => ({
      webhook: data['webhook'],
    }));
});

/**
 * Zod schema for mapping the WebhookCreated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const webhookCreatedRequest = z.lazy(() => {
  return z
    .object({
      webhook: webhookCreatedWebhookRequest.optional(),
    })
    .transform((data) => ({
      webhook: data['webhook'],
    }));
});
