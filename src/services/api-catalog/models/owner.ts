import { z } from 'zod';

/**
 * Zod schema for the Owner model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const owner = z.lazy(() => {
  return z.object({
    type: z.string(),
    id: z.string(),
    name: z.string().nullable(),
    profilePicUrl: z.string().nullable(),
    publicHandle: z.string().nullable(),
  });
});

/**
 * The service's owner. If no owner is assigned, this returns a null value.
 * @typedef  {Owner} owner - The service's owner. If no owner is assigned, this returns a null value. - The service's owner. If no owner is assigned, this returns a null value.
 * @property {OwnerType} - The type of owner.
 * @property {string} - The owner's ID.
 * @property {string} - The owner's display name.
 * @property {string} - The URL of the owner's profile picture.
 * @property {string} - The URL of the owner's public profile.
 */
export type Owner = z.infer<typeof owner>;

/**
 * Zod schema for mapping API responses to the Owner application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const ownerResponse = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      id: z.string(),
      name: z.string().nullable(),
      profilePicUrl: z.string().nullable(),
      publicHandle: z.string().nullable(),
    })
    .transform((data) => ({
      type: data['type'],
      id: data['id'],
      name: data['name'],
      profilePicUrl: data['profilePicUrl'],
      publicHandle: data['publicHandle'],
    }));
});

/**
 * Zod schema for mapping the Owner application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const ownerRequest = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      id: z.string(),
      name: z.string().nullable(),
      profilePicUrl: z.string().nullable(),
      publicHandle: z.string().nullable(),
    })
    .transform((data) => ({
      type: data['type'],
      id: data['id'],
      name: data['name'],
      profilePicUrl: data['profilePicUrl'],
      publicHandle: data['publicHandle'],
    }));
});
