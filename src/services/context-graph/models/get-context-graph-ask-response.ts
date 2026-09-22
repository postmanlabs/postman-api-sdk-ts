import { z } from 'zod';
import {
  GetContextGraphAskResponseResult,
  getContextGraphAskResponseResult,
  getContextGraphAskResponseResultRequest,
  getContextGraphAskResponseResultResponse,
} from './get-context-graph-ask-response-result';

/**
 * Zod schema for the GetContextGraphAskResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getContextGraphAskResponse = z.lazy(() => {
  return z.object({
    askId: z.string(),
    status: z.string(),
    question: z.string(),
    revision: z.number().nullable(),
    createdAt: z.string(),
    completedAt: z.string().optional().nullable(),
    error: z.string().optional().nullable(),
    result: getContextGraphAskResponseResult.optional(),
  });
});

/**
 * @typedef {GetContextGraphAskResponse} getContextGraphAskResponse
 * @property {string} askId - The ask's ID.
 * @property {ContextGraphAskStatus} status - The ask's lifecycle state.
 * @property {string} question - The natural-language question that was asked.
 * @property {number} revision - The graph revision the ask was evaluated against.
 * @property {string} createdAt - The date and time the ask was submitted, in ISO 8601 format.
 * @property {string} completedAt - The date and time the ask reached a terminal state, in ISO 8601 format. This value is `null` until the ask is `completed` or `failed`.
 * @property {string} error - A short reason the ask failed, such as the ask having timed out. This property is only present if `status` is `failed`.
 * @property {GetContextGraphAskResponseResult} result - The ask's result. This property is only present if `status` is `completed`.
 */
export type GetContextGraphAskResponse = z.infer<typeof getContextGraphAskResponse>;

/**
 * Zod schema for mapping API responses to the GetContextGraphAskResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getContextGraphAskResponseResponse = z.lazy(() => {
  return z
    .object({
      askId: z.string(),
      status: z.string(),
      question: z.string(),
      revision: z.number().nullable(),
      createdAt: z.string(),
      completedAt: z.string().optional().nullable(),
      error: z.string().optional().nullable(),
      result: getContextGraphAskResponseResultResponse.optional(),
    })
    .transform((data) => ({
      askId: data['askId'],
      status: data['status'],
      question: data['question'],
      revision: data['revision'],
      createdAt: data['createdAt'],
      completedAt: data['completedAt'],
      error: data['error'],
      result: data['result'],
    }));
});

/**
 * Zod schema for mapping the GetContextGraphAskResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getContextGraphAskResponseRequest = z.lazy(() => {
  return z
    .object({
      askId: z.string(),
      status: z.string(),
      question: z.string(),
      revision: z.number().nullable(),
      createdAt: z.string(),
      completedAt: z.string().optional().nullable(),
      error: z.string().optional().nullable(),
      result: getContextGraphAskResponseResultRequest.optional(),
    })
    .transform((data) => ({
      askId: data['askId'],
      status: data['status'],
      question: data['question'],
      revision: data['revision'],
      createdAt: data['createdAt'],
      completedAt: data['completedAt'],
      error: data['error'],
      result: data['result'],
    }));
});
