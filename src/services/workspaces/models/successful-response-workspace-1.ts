import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseWorkspace1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseWorkspace1 = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
  });
});

/**
 * Information about the created workspace.
 * @typedef  {SuccessfulResponseWorkspace1} successfulResponseWorkspace1 - Information about the created workspace. - Information about the created workspace.
 * @property {string} - The workspace's ID.
 * @property {string} - The workspace's name.
 */
export type SuccessfulResponseWorkspace1 = z.infer<typeof successfulResponseWorkspace1>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseWorkspace1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseWorkspace1Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseWorkspace1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseWorkspace1Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});
