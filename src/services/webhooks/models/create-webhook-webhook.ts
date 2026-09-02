import { z } from 'zod';

/**
 * Zod schema for the CreateWebhookWebhook model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createWebhookWebhook = z.lazy(() => {
  return z.object({
    collection: z.string(),
    environment: z.string().optional(),
    name: z.string(),
  });
});

/**
 * Information about the webhook to create.
 * @typedef {CreateWebhookWebhook} createWebhookWebhook
 * @property {string} collection - The unique ID of the collection to trigger when calling this webhook.
 * @property {string} environment - The unique ID of the environment to trigger when calling this webhook.
 * @property {string} name - The webhook's name. On success, the system creates a new monitor with this name in the ``Monitors`` tab.
 */
export type CreateWebhookWebhook = z.infer<typeof createWebhookWebhook>;

/**
 * Zod schema for mapping API responses to the CreateWebhookWebhook application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWebhookWebhookResponse = z.lazy(() => {
  return z
    .object({
      collection: z.string(),
      environment: z.string().optional(),
      name: z.string(),
    })
    .transform((data) => ({
      collection: data['collection'],
      environment: data['environment'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the CreateWebhookWebhook application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWebhookWebhookRequest = z.lazy(() => {
  return z
    .object({
      collection: z.string(),
      environment: z.string().optional(),
      name: z.string(),
    })
    .transform((data) => ({
      collection: data['collection'],
      environment: data['environment'],
      name: data['name'],
    }));
});
