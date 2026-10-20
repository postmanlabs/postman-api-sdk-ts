import { z } from 'zod';

/**
 * Zod schema for the MonitorRequestSelectionPayloadSelectedItems model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRequestSelectionPayloadSelectedItems = z.lazy(() => {
  return z.object({
    id: z
      .string()
      .max(60)
      .regex(
        /^(?:[0-9]{1,23}-)?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^[0-9a-f]{24}$/,
      ),
  });
});

/**
 * @typedef {MonitorRequestSelectionPayloadSelectedItems} monitorRequestSelectionPayloadSelectedItems
 * @property {string} id - The collection item's ID:

- For a collection that contains only HTTP requests, use the item's UID in `<ownerId>-<id>` format (for example, `12345678-5daabc50-8451-45f6-922d-96b403b4f28e`). An ID without the `ownerId` prefix is also accepted.
- For a collection that contains GraphQL or gRPC requests, use the item's 24 character hexadecimal ID (for example, `66f1c0e2a1b2c3d4e5f60718`). Letters must be lowercase.

 */
export type MonitorRequestSelectionPayloadSelectedItems = z.infer<
  typeof monitorRequestSelectionPayloadSelectedItems
>;

/**
 * Zod schema for mapping API responses to the MonitorRequestSelectionPayloadSelectedItems application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRequestSelectionPayloadSelectedItemsResponse = z.lazy(() => {
  return z
    .object({
      id: z
        .string()
        .max(60)
        .regex(
          /^(?:[0-9]{1,23}-)?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^[0-9a-f]{24}$/,
        ),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the MonitorRequestSelectionPayloadSelectedItems application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRequestSelectionPayloadSelectedItemsRequest = z.lazy(() => {
  return z
    .object({
      id: z
        .string()
        .max(60)
        .regex(
          /^(?:[0-9]{1,23}-)?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^[0-9a-f]{24}$/,
        ),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
