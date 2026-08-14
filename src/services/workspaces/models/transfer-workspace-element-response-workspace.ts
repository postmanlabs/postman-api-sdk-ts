import { z } from 'zod';
import {
  ElementTransfers,
  elementTransfers,
  elementTransfersRequest,
  elementTransfersResponse,
} from './element-transfers';

/**
 * Zod schema for the TransferWorkspaceElementResponseWorkspace model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const transferWorkspaceElementResponseWorkspace = z.lazy(() => {
  return z.object({
    elementTransfers: elementTransfers.optional(),
  });
});

/**
 * @typedef {TransferWorkspaceElementResponseWorkspace} transferWorkspaceElementResponseWorkspace
 * @property {ElementTransfers} elementTransfers - Information about the element transfer.
 */
export type TransferWorkspaceElementResponseWorkspace = z.infer<
  typeof transferWorkspaceElementResponseWorkspace
>;

/**
 * Zod schema for mapping API responses to the TransferWorkspaceElementResponseWorkspace application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferWorkspaceElementResponseWorkspaceResponse = z.lazy(() => {
  return z
    .object({
      'element-transfers': elementTransfersResponse.optional(),
    })
    .transform((data) => ({
      elementTransfers: data['element-transfers'],
    }));
});

/**
 * Zod schema for mapping the TransferWorkspaceElementResponseWorkspace application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferWorkspaceElementResponseWorkspaceRequest = z.lazy(() => {
  return z
    .object({
      elementTransfers: elementTransfersRequest.optional(),
    })
    .transform((data) => ({
      'element-transfers': data['elementTransfers'],
    }));
});
