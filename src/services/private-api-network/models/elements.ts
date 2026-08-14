import { z } from 'zod';

/**
 * Zod schema for the Elements model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const elements = z.lazy(() => {
  return z.object({
    createdAt: z.string().optional(),
    createdBy: z.number().optional(),
    updatedAt: z.string().optional(),
    updatedBy: z.number().optional(),
    addedAt: z.string().optional(),
    addedBy: z.number().optional(),
    description: z.string().optional().nullable(),
    id: z.string().optional(),
    name: z.string().optional(),
    summary: z.string().optional().nullable(),
    type: z.string().optional(),
    parentFolderId: z.number().optional(),
    href: z.string().optional(),
  });
});

/**
 * Information about the Private API Network element.
 * @typedef {Elements} elements
 * @property {string} createdAt - The date and time at which the element was created.
 * @property {number} createdBy - The user who created the element.
 * @property {string} updatedAt - The date and time at which the element was last updated.
 * @property {number} updatedBy - The user ID of the user who updated the element.
 * @property {string} addedAt - The date and time at which the element was published to your team's Private API Network. This value is the same as the `updatedAt` value.
 * @property {number} addedBy - The user ID of the user who published the element.
 * @property {string} description - The element's description.
 * @property {string} id - The element's ID.
 * @property {string} name - The element's name.
 * @property {string} summary - The element's summary.
 * @property {string} type - The `workspace` element type.
 * @property {number} parentFolderId - The `0` value.
 * @property {string} href - The element's HREF.
 */
export type Elements = z.infer<typeof elements>;

/**
 * Zod schema for mapping API responses to the Elements application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const elementsResponse = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.number().optional(),
      addedAt: z.string().optional(),
      addedBy: z.number().optional(),
      description: z.string().optional().nullable(),
      id: z.string().optional(),
      name: z.string().optional(),
      summary: z.string().optional().nullable(),
      type: z.string().optional(),
      parentFolderId: z.number().optional(),
      href: z.string().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
      addedAt: data['addedAt'],
      addedBy: data['addedBy'],
      description: data['description'],
      id: data['id'],
      name: data['name'],
      summary: data['summary'],
      type: data['type'],
      parentFolderId: data['parentFolderId'],
      href: data['href'],
    }));
});

/**
 * Zod schema for mapping the Elements application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const elementsRequest = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.number().optional(),
      addedAt: z.string().optional(),
      addedBy: z.number().optional(),
      description: z.string().optional().nullable(),
      id: z.string().optional(),
      name: z.string().optional(),
      summary: z.string().optional().nullable(),
      type: z.string().optional(),
      parentFolderId: z.number().optional(),
      href: z.string().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
      addedAt: data['addedAt'],
      addedBy: data['addedBy'],
      description: data['description'],
      id: data['id'],
      name: data['name'],
      summary: data['summary'],
      type: data['type'],
      parentFolderId: data['parentFolderId'],
      href: data['href'],
    }));
});
