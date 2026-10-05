import { z } from 'zod';

/**
 * Zod schema for the ProvenanceStep model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const provenanceStep = z.lazy(() => {
  return z.object({
    tool: z.string(),
    type: z.string().optional(),
    rowCount: z.number().optional(),
    error: z.string().optional(),
  });
});

/**
 * A single read-only tool call the ask made while answering the question.
 * @typedef {ProvenanceStep} provenanceStep
 * @property {string} tool - The name of the read-only tool that was called.
 * @property {string} type - The preset query type the tool was called with. This property is only present if the tool was called with one.
 * @property {number} rowCount - The number of rows the tool returned.
 * @property {string} error - The error message for this step. This property is only present if the step failed.
 */
export type ProvenanceStep = z.infer<typeof provenanceStep>;

/**
 * Zod schema for mapping API responses to the ProvenanceStep application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const provenanceStepResponse = z.lazy(() => {
  return z
    .object({
      tool: z.string(),
      type: z.string().optional(),
      rowCount: z.number().optional(),
      error: z.string().optional(),
    })
    .transform((data) => ({
      tool: data['tool'],
      type: data['type'],
      rowCount: data['rowCount'],
      error: data['error'],
    }));
});

/**
 * Zod schema for mapping the ProvenanceStep application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const provenanceStepRequest = z.lazy(() => {
  return z
    .object({
      tool: z.string(),
      type: z.string().optional(),
      rowCount: z.number().optional(),
      error: z.string().optional(),
    })
    .transform((data) => ({
      tool: data['tool'],
      type: data['type'],
      rowCount: data['rowCount'],
      error: data['error'],
    }));
});
