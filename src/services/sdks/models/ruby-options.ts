import { z } from 'zod';

/**
 * Zod schema for the RubyOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const rubyOptions = z.lazy(() => {
  return z.object({
    gemName: z.string().optional(),
  });
});

/**
 * Ruby-specific generation options.
 * @typedef  {RubyOptions} rubyOptions - Ruby-specific generation options. - Ruby-specific generation options.
 * @property {string} - The RubyGems gem's name.
 */
export type RubyOptions = z.infer<typeof rubyOptions>;

/**
 * Zod schema for mapping API responses to the RubyOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rubyOptionsResponse = z.lazy(() => {
  return z
    .object({
      gemName: z.string().optional(),
    })
    .transform((data) => ({
      gemName: data['gemName'],
    }));
});

/**
 * Zod schema for mapping the RubyOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rubyOptionsRequest = z.lazy(() => {
  return z
    .object({
      gemName: z.string().optional(),
    })
    .transform((data) => ({
      gemName: data['gemName'],
    }));
});
