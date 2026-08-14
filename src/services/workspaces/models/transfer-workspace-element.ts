import { z } from 'zod';
import { Id, id, idRequest, idResponse } from './id';

/**
 * Zod schema for the TransferWorkspaceElement model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const transferWorkspaceElement = z.lazy(() => {
  return z.object({
    id: id,
    type: z.string(),
    to: z.string(),
  });
});

/**
 * @typedef {TransferWorkspaceElement} transferWorkspaceElement
 * @property {Id} id - The workspace element's ID.
 * @property {TransferWorkspaceElementType} type - The type of element to transfer.
 * @property {string} to - The workspace ID to transfer the element into.
 */
export type TransferWorkspaceElement = z.infer<typeof transferWorkspaceElement>;

/**
 * Zod schema for mapping API responses to the TransferWorkspaceElement application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferWorkspaceElementResponse1 = z.lazy(() => {
  return z
    .object({
      id: idResponse,
      type: z.string(),
      to: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
      to: data['to'],
    }));
});

/**
 * Zod schema for mapping the TransferWorkspaceElement application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferWorkspaceElementRequest = z.lazy(() => {
  return z
    .object({
      id: idRequest,
      type: z.string(),
      to: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
      to: data['to'],
    }));
});
