import { z } from 'zod';

/**
 * Zod schema for the MonitorCollectionStructureItem model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorCollectionStructureItem = z.lazy(() => {
  return z.object({
    id: z
      .string()
      .max(60)
      .regex(
        /^(?:[0-9]{1,23}-)?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^[0-9a-f]{24}$/,
      ),
    name: z.string().max(255).optional(),
    method: z.string().max(10).optional(),
    item: z.array(z.any()).optional(),
  });
});

/**
 * A folder or request in the collection's item tree:

- A folder has an `id` and an `item` array.
- A request has an `id` and no `item` array, and can include its `name` and `method`.

 * @typedef {MonitorCollectionStructureItem} monitorCollectionStructureItem
 * @property {string} id - The collection item's ID:

- For a collection that contains only HTTP requests, use the item's UID in `<ownerId>-<id>` format (for example, `12345678-5daabc50-8451-45f6-922d-96b403b4f28e`). An ID without the `ownerId` prefix is also accepted.
- For a collection that contains GraphQL or gRPC requests, use the item's 24 character hexadecimal ID (for example, `66f1c0e2a1b2c3d4e5f60718`). Letters must be lowercase.

 * @property {string} name - If the item is a request, the request's name.
 * @property {string} method - If the item is a request, the request's HTTP method.
 * @property {any[]} item - If the item is a folder, the folder's items, in collection order. Can be empty. Folders can be nested up to 50 levels deep.
 */
export type MonitorCollectionStructureItem = z.infer<typeof monitorCollectionStructureItem>;

/**
 * Zod schema for mapping API responses to the MonitorCollectionStructureItem application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorCollectionStructureItemResponse = z.lazy(() => {
  return z
    .object({
      id: z
        .string()
        .max(60)
        .regex(
          /^(?:[0-9]{1,23}-)?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^[0-9a-f]{24}$/,
        ),
      name: z.string().max(255).optional(),
      method: z.string().max(10).optional(),
      item: z.array(z.any()).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      method: data['method'],
      item: data['item'],
    }));
});

/**
 * Zod schema for mapping the MonitorCollectionStructureItem application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorCollectionStructureItemRequest = z.lazy(() => {
  return z
    .object({
      id: z
        .string()
        .max(60)
        .regex(
          /^(?:[0-9]{1,23}-)?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^[0-9a-f]{24}$/,
        ),
      name: z.string().max(255).optional(),
      method: z.string().max(10).optional(),
      item: z.array(z.any()).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      method: data['method'],
      item: data['item'],
    }));
});
