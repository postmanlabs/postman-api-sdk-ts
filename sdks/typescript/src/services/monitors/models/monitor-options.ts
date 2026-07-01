import { z } from 'zod';

/**
 * Zod schema for the MonitorOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorOptions = z.lazy(() => {
  return z.object({
    followRedirects: z.boolean().optional(),
    requestDelay: z.number().gte(1).lte(900000).optional(),
    requestTimeout: z.number().gte(1).lte(900000).optional(),
    strictSsl: z.boolean().optional(),
  });
});

/**
 * Information about the monitor's option settings.
 * @typedef  {MonitorOptions} monitorOptions - Information about the monitor's option settings. - Information about the monitor's option settings.
 * @property {boolean} - If true, follow redirects enabled.
 * @property {number} - The monitor's request delay value, in milliseconds.
 * @property {number} - The monitor's request timeout value, in milliseconds.
 * @property {boolean} - If true, strict SSL enabled.
 */
export type MonitorOptions = z.infer<typeof monitorOptions>;

/**
 * Zod schema for mapping API responses to the MonitorOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorOptionsResponse = z.lazy(() => {
  return z
    .object({
      followRedirects: z.boolean().optional(),
      requestDelay: z.number().gte(1).lte(900000).optional(),
      requestTimeout: z.number().gte(1).lte(900000).optional(),
      strictSSL: z.boolean().optional(),
    })
    .transform((data) => ({
      followRedirects: data['followRedirects'],
      requestDelay: data['requestDelay'],
      requestTimeout: data['requestTimeout'],
      strictSsl: data['strictSSL'],
    }));
});

/**
 * Zod schema for mapping the MonitorOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorOptionsRequest = z.lazy(() => {
  return z
    .object({
      followRedirects: z.boolean().optional(),
      requestDelay: z.number().gte(1).lte(900000).optional(),
      requestTimeout: z.number().gte(1).lte(900000).optional(),
      strictSsl: z.boolean().optional(),
    })
    .transform((data) => ({
      followRedirects: data['followRedirects'],
      requestDelay: data['requestDelay'],
      requestTimeout: data['requestTimeout'],
      strictSSL: data['strictSsl'],
    }));
});
