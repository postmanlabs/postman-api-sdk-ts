import { z } from 'zod';

/**
 * Zod schema for the KotlinOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const kotlinOptions = z.lazy(() => {
  return z.object({
    groupId: z.string().optional(),
    artifactId: z.string().optional(),
  });
});

/**
 * Kotlin-specific SDK generation options.
 * @typedef {KotlinOptions} kotlinOptions
 * @property {string} groupId - The Maven group ID written into the `pom.xml` dependencies file.
 * @property {string} artifactId - The Maven artifact ID written into the `pom.xml` dependencies file.
 */
export type KotlinOptions = z.infer<typeof kotlinOptions>;

/**
 * Zod schema for mapping API responses to the KotlinOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const kotlinOptionsResponse = z.lazy(() => {
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
 * Zod schema for mapping the KotlinOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const kotlinOptionsRequest = z.lazy(() => {
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
