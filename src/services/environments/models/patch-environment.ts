import { z } from 'zod';
import {
  patchEnvironmentAdd,
  patchEnvironmentAddRequest,
  patchEnvironmentAddResponse,
} from './patch-environment-add';
import {
  patchEnvironmentName,
  patchEnvironmentNameRequest,
  patchEnvironmentNameResponse,
} from './patch-environment-name';
import {
  patchEnvironmentReplace,
  patchEnvironmentReplaceRequest,
  patchEnvironmentReplaceResponse,
} from './patch-environment-replace';
import {
  patchEnvironmentRemove,
  patchEnvironmentRemoveRequest,
  patchEnvironmentRemoveResponse,
} from './patch-environment-remove';

/**
 * Zod schema for the PatchEnvironment model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const patchEnvironment = z.lazy(() => {
  return z.union([
    z.array(patchEnvironmentAdd),
    z.array(patchEnvironmentName),
    z.array(patchEnvironmentReplace),
    z.array(patchEnvironmentRemove),
  ]);
});

/**
 *
 * @typedef  {PatchEnvironment} patchEnvironment
 * @property {PatchEnvironmentAdd[]}
 * @property {PatchEnvironmentName[]}
 * @property {PatchEnvironmentReplace[]}
 * @property {PatchEnvironmentRemove[]}
 */
export type PatchEnvironment = z.infer<typeof patchEnvironment>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const patchEnvironmentResponse = z.lazy(() => {
  return z.union([
    z.array(patchEnvironmentAdd),
    z.array(patchEnvironmentName),
    z.array(patchEnvironmentReplace),
    z.array(patchEnvironmentRemove),
  ]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const patchEnvironmentRequest = z.lazy(() => {
  return z.union([
    z.array(patchEnvironmentAdd),
    z.array(patchEnvironmentName),
    z.array(patchEnvironmentReplace),
    z.array(patchEnvironmentRemove),
  ]);
});
