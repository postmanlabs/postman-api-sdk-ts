import { z } from 'zod';
import {
  ProvenanceStep,
  provenanceStep,
  provenanceStepRequest,
  provenanceStepResponse,
} from './provenance-step';

/**
 * Zod schema for the Provenance model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const provenance = z.lazy(() => {
  return z.object({
    revision: z.number(),
    truncated: z.boolean().optional(),
    steps: z.array(provenanceStep),
  });
});

/**
 * Information about how the ask reached its answer.
 * @typedef {Provenance} provenance
 * @property {number} revision - The graph revision the ask ran against.
 * @property {boolean} truncated - Whether the ask reached its deadline and returned a partial result.
 * @property {ProvenanceStep[]} steps - The ordered tool calls the ask made to reach its answer.
 */
export type Provenance = z.infer<typeof provenance>;

/**
 * Zod schema for mapping API responses to the Provenance application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const provenanceResponse = z.lazy(() => {
  return z
    .object({
      revision: z.number(),
      truncated: z.boolean().optional(),
      steps: z.array(provenanceStepResponse),
    })
    .transform((data) => ({
      revision: data['revision'],
      truncated: data['truncated'],
      steps: data['steps'],
    }));
});

/**
 * Zod schema for mapping the Provenance application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const provenanceRequest = z.lazy(() => {
  return z
    .object({
      revision: z.number(),
      truncated: z.boolean().optional(),
      steps: z.array(provenanceStepRequest),
    })
    .transform((data) => ({
      revision: data['revision'],
      truncated: data['truncated'],
      steps: data['steps'],
    }));
});
