import { z } from 'zod';
import { ElementCreatedType, elementCreatedType } from './element-created-type';

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
    type: elementCreatedType.optional(),
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
 * @typedef  {ElementCreated} elementCreated - Information about the Private API Network element. - Information about the Private API Network element.
 * @property {string} - The date and time at which the element was added.
 * @property {number} - The user who added the element.
 * @property {number} - The user who created the element.
 * @property {string} - The date and time at which the element was created.
 * @property {number} - The user who last updated the element.
 * @property {string} - The date and time at which the element was last updated.
 * @property {ElementCreatedType} - The `workspace` element.
 * @property {string} - The element's ID
 * @property {string} - The element's name.
 * @property {string} - The element's summary.
 * @property {string} - The element's description.
 * @property {string} - The element's Postman URL.
 * @property {number} - This property is deprecated.
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
      type: elementCreatedType.optional(),
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
      type: elementCreatedType.optional(),
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
