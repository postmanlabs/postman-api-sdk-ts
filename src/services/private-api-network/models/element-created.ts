import { z } from 'zod';

/**
 * Zod schema for the ElementCreated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const elementCreated = z.lazy(() => {
  return z.object({
    addedAt: z.string().optional(),
    addedBy: z.number().optional(),
    createdBy: z.number().optional(),
    createdAt: z.string().optional(),
    updatedBy: z.number().optional(),
    updatedAt: z.string().optional(),
    type: z.string().optional(),
    id: z.string().optional(),
    name: z.string().optional(),
    summary: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    href: z.string().optional(),
    parentFolderId: z.number().optional().nullable(),
  });
});

/**
 * Information about the Private API Network element.
 * @typedef {ElementCreated} elementCreated
 * @property {string} addedAt - The date and time at which the element was added.
 * @property {number} addedBy - The user who added the element.
 * @property {number} createdBy - The user who created the element.
 * @property {string} createdAt - The date and time at which the element was created.
 * @property {number} updatedBy - The user who last updated the element.
 * @property {string} updatedAt - The date and time at which the element was last updated.
 * @property {ElementCreatedType} type - The `workspace` element.
 * @property {string} id - The element's ID
 * @property {string} name - The element's name.
 * @property {string} summary - The element's summary.
 * @property {string} description - The element's description.
 * @property {string} href - The element's Postman URL.
 * @property {number} parentFolderId - This property is deprecated.
 */
export type ElementCreated = z.infer<typeof elementCreated>;

/**
 * Zod schema for mapping API responses to the ElementCreated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const elementCreatedResponse = z.lazy(() => {
  return z
    .object({
      addedAt: z.string().optional(),
      addedBy: z.number().optional(),
      createdBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedBy: z.number().optional(),
      updatedAt: z.string().optional(),
      type: z.string().optional(),
      id: z.string().optional(),
      name: z.string().optional(),
      summary: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      href: z.string().optional(),
      parentFolderId: z.number().optional().nullable(),
    })
    .transform((data) => ({
      addedAt: data['addedAt'],
      addedBy: data['addedBy'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      updatedBy: data['updatedBy'],
      updatedAt: data['updatedAt'],
      type: data['type'],
      id: data['id'],
      name: data['name'],
      summary: data['summary'],
      description: data['description'],
      href: data['href'],
      parentFolderId: data['parentFolderId'],
    }));
});

/**
 * Zod schema for mapping the ElementCreated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const elementCreatedRequest = z.lazy(() => {
  return z
    .object({
      addedAt: z.string().optional(),
      addedBy: z.number().optional(),
      createdBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedBy: z.number().optional(),
      updatedAt: z.string().optional(),
      type: z.string().optional(),
      id: z.string().optional(),
      name: z.string().optional(),
      summary: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      href: z.string().optional(),
      parentFolderId: z.number().optional().nullable(),
    })
    .transform((data) => ({
      addedAt: data['addedAt'],
      addedBy: data['addedBy'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      updatedBy: data['updatedBy'],
      updatedAt: data['updatedAt'],
      type: data['type'],
      id: data['id'],
      name: data['name'],
      summary: data['summary'],
      description: data['description'],
      href: data['href'],
      parentFolderId: data['parentFolderId'],
    }));
});
