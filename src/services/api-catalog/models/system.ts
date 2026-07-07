import { z } from 'zod';

/**
 * Zod schema for the System model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const system = z.lazy(() => {
  return z.object({
    os: z.string().optional(),
    cpus: z.number().optional(),
    memoryMb: z.number().optional(),
  });
});

/**
 * The system information about the execution run. This returns as null if unavailable.
 * @typedef  {System} system - The system information about the execution run. This returns as null if unavailable. - The system information about the execution run. This returns as null if unavailable.
 * @property {string} - The operating system and kernel version.
 * @property {number} - The number of CPU cores.
 * @property {number} - The available memory, in megabytes.
 */
export type System = z.infer<typeof system>;

/**
 * Zod schema for mapping API responses to the System application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const systemResponse = z.lazy(() => {
  return z
    .object({
      os: z.string().optional(),
      cpus: z.number().optional(),
      memoryMb: z.number().optional(),
    })
    .transform((data) => ({
      os: data['os'],
      cpus: data['cpus'],
      memoryMb: data['memoryMb'],
    }));
});

/**
 * Zod schema for mapping the System application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const systemRequest = z.lazy(() => {
  return z
    .object({
      os: z.string().optional(),
      cpus: z.number().optional(),
      memoryMb: z.number().optional(),
    })
    .transform((data) => ({
      os: data['os'],
      cpus: data['cpus'],
      memoryMb: data['memoryMb'],
    }));
});
