import { z } from 'zod';

/**
 * Zod schema for the JavaOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const javaOptions = z.lazy(() => {
  return z.object({
    groupId: z.string().optional(),
    artifactId: z.string().optional(),
  });
});

/**
 * Java-specific SDK generation options.
 * @typedef {JavaOptions} javaOptions
 * @property {string} groupId - The Maven group ID written into the `pom.xml` dependencies file.
 * @property {string} artifactId - The Maven artifact ID written into the `pom.xml` dependencies file.
 */
export type JavaOptions = z.infer<typeof javaOptions>;

/**
 * Zod schema for mapping API responses to the JavaOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const javaOptionsResponse = z.lazy(() => {
  return z
    .object({
      groupId: z.string().optional(),
      artifactId: z.string().optional(),
    })
    .transform((data) => ({
      groupId: data['groupId'],
      artifactId: data['artifactId'],
    }));
});

/**
 * Zod schema for mapping the JavaOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const javaOptionsRequest = z.lazy(() => {
  return z
    .object({
      groupId: z.string().optional(),
      artifactId: z.string().optional(),
    })
    .transform((data) => ({
      groupId: data['groupId'],
      artifactId: data['artifactId'],
    }));
});
