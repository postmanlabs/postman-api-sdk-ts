import { z } from 'zod';
import {
  MonitorRequestSelection,
  monitorRequestSelection,
  monitorRequestSelectionRequest,
  monitorRequestSelectionResponse,
} from './monitor-request-selection';

/**
 * Zod schema for the MonitorOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorOptions = z.lazy(() => {
  return z.object({
    followRedirects: z.boolean().optional(),
    requestDelay: z.number().gte(0).lte(900000).optional(),
    requestTimeout: z.number().gte(1).lte(900000).optional().nullable(),
    strictSsl: z.boolean().optional(),
    requestSelection: monitorRequestSelection.optional().nullable(),
  });
});

/**
 * Information about the monitor's option settings.
 * @typedef {MonitorOptions} monitorOptions
 * @property {boolean} followRedirects - If true, follow redirects enabled.
 * @property {number} requestDelay - The monitor's delay between requests, in milliseconds, as a whole number. A `0` value means no delay. The maximum value is `600000` (10 minutes) on free plans and `900000` (15 minutes) on paid plans. This value is checked only when the value changes.
 * @property {number} requestTimeout - The monitor's request timeout, in milliseconds, as a whole number. A `null` value means no timeout, and so does omitting it when creating a monitor. A monitor with no timeout returns a `null` value. The maximum value is `600000` (10 minutes) on free plans and `900000` (15 minutes) on paid plans, checked only when the value changes.
 * @property {boolean} strictSsl - If true, strict SSL enabled.
 * @property {MonitorRequestSelection} requestSelection - The ordered subset of the monitor's collection that the monitor runs, in run order, instead of the full collection.
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
      requestDelay: z.number().gte(0).lte(900000).optional(),
      requestTimeout: z.number().gte(1).lte(900000).optional().nullable(),
      strictSSL: z.boolean().optional(),
      requestSelection: monitorRequestSelectionResponse.optional().nullable(),
    })
    .transform((data) => ({
      followRedirects: data['followRedirects'],
      requestDelay: data['requestDelay'],
      requestTimeout: data['requestTimeout'],
      strictSsl: data['strictSSL'],
      requestSelection: data['requestSelection'],
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
      requestDelay: z.number().gte(0).lte(900000).optional(),
      requestTimeout: z.number().gte(1).lte(900000).optional().nullable(),
      strictSsl: z.boolean().optional(),
      requestSelection: monitorRequestSelectionRequest.optional().nullable(),
    })
    .transform((data) => ({
      followRedirects: data['followRedirects'],
      requestDelay: data['requestDelay'],
      requestTimeout: data['requestTimeout'],
      strictSSL: data['strictSsl'],
      requestSelection: data['requestSelection'],
    }));
});
