import { z } from 'zod';

/**
 * Zod schema for the WebhookCreatedWebhook model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const webhookCreatedWebhook = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    collection: z.string().optional(),
    webhookUrl: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * @typedef {WebhookCreatedWebhook} webhookCreatedWebhook
 * @property {string} id - The webhook's ID.
 * @property {string} name - The webhook's name.
 * @property {string} collection - The unique ID of the collection that triggers when calling this webhook.
 * @property {string} webhookUrl - The webhook's URL.
 * @property {string} uid - The webhook's unique ID.
 */
export type WebhookCreatedWebhook = z.infer<typeof webhookCreatedWebhook>;

/**
 * Zod schema for mapping API responses to the WebhookCreatedWebhook application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const webhookCreatedWebhookResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      collection: z.string().optional(),
      webhookUrl: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      collection: data['collection'],
      webhookUrl: data['webhookUrl'],
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the WebhookCreatedWebhook application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const webhookCreatedWebhookRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      collection: z.string().optional(),
      webhookUrl: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      collection: data['collection'],
      webhookUrl: data['webhookUrl'],
      uid: data['uid'],
    }));
});
