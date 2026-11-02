import { z } from 'zod';
import { Provenance, provenance, provenanceRequest, provenanceResponse } from './provenance';
import { Usage, usage, usageRequest, usageResponse } from './usage';

/**
 * Zod schema for the GetContextGraphAskResponseResult model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getContextGraphAskResponseResult = z.lazy(() => {
  return z.object({
    answer: z.string().optional().nullable(),
    structured: z.any().optional(),
    provenance: provenance,
    citations: z.array(z.any()),
    usage: usage,
  });
});

/**
 * The ask's result. This property is only present if `status` is `completed`.
 * @typedef {GetContextGraphAskResponseResult} getContextGraphAskResponseResult
 * @property {string} answer - The natural-language answer to the question. This value is `null` if `includeAnswer` was `false` in the request.
 * @property {any} structured - The graph data the answer rests on. The shape of this object varies with the question.
 * @property {Provenance} provenance - Information about how the ask reached its answer.
 * @property {any[]} citations - The graph entities the answer is grounded in. The shape of each item varies with the entity's kind.
 * @property {Usage} usage - A summary of the resources the ask consumed.
 */
export type GetContextGraphAskResponseResult = z.infer<typeof getContextGraphAskResponseResult>;

/**
 * Zod schema for mapping API responses to the GetContextGraphAskResponseResult application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getContextGraphAskResponseResultResponse = z.lazy(() => {
  return z
    .object({
      answer: z.string().optional().nullable(),
      structured: z.any().optional(),
      provenance: provenanceResponse,
      citations: z.array(z.any()),
      usage: usageResponse,
    })
    .transform((data) => ({
      answer: data['answer'],
      structured: data['structured'],
      provenance: data['provenance'],
      citations: data['citations'],
      usage: data['usage'],
    }));
});

/**
 * Zod schema for mapping the GetContextGraphAskResponseResult application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getContextGraphAskResponseResultRequest = z.lazy(() => {
  return z
    .object({
      answer: z.string().optional().nullable(),
      structured: z.any().optional(),
      provenance: provenanceRequest,
      citations: z.array(z.any()),
      usage: usageRequest,
    })
    .transform((data) => ({
      answer: data['answer'],
      structured: data['structured'],
      provenance: data['provenance'],
      citations: data['citations'],
      usage: data['usage'],
    }));
});
