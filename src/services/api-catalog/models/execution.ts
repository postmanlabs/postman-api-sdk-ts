import { z } from 'zod';
import { System, system, systemRequest, systemResponse } from './system';

/**
 * Zod schema for the Execution model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const execution = z.lazy(() => {
  return z.object({
    cliVersion: z.string().nullable(),
    system: system,
  });
});

/**
 * Information about the environment run.
 * @typedef  {Execution} execution - Information about the environment run. - Information about the environment run.
 * @property {string} - The Postman CLI version.
 * @property {System} - The system information about the execution run. This returns as null if unavailable.
 */
export type Execution = z.infer<typeof execution>;

/**
 * Zod schema for mapping API responses to the Execution application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const executionResponse = z.lazy(() => {
  return z
    .object({
      cliVersion: z.string().nullable(),
      system: systemResponse,
    })
    .transform((data) => ({
      cliVersion: data['cliVersion'],
      system: data['system'],
    }));
});

/**
 * Zod schema for mapping the Execution application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const executionRequest = z.lazy(() => {
  return z
    .object({
      cliVersion: z.string().nullable(),
      system: systemRequest,
    })
    .transform((data) => ({
      cliVersion: data['cliVersion'],
      system: data['system'],
    }));
});
