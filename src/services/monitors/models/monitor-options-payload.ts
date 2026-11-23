import { z } from 'zod';
import {
  MonitorRequestSelectionPayload,
  monitorRequestSelectionPayload,
  monitorRequestSelectionPayloadRequest,
  monitorRequestSelectionPayloadResponse,
} from './monitor-request-selection-payload';

/**
 * Zod schema for the MonitorOptionsPayload model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorOptionsPayload = z.lazy(() => {
  return z.object({
    followRedirects: z.boolean().optional(),
    requestDelay: z.number().gte(0).lte(900000).optional(),
    requestTimeout: z.number().gte(1).lte(900000).optional().nullable(),
    strictSsl: z.boolean().optional(),
    requestSelection: monitorRequestSelectionPayload.optional().nullable(),
  });
});

/**
 * Information about the monitor's option settings.
 * @typedef {MonitorOptionsPayload} monitorOptionsPayload
 * @property {boolean} followRedirects - If true, follow redirects enabled.
 * @property {number} requestDelay - The monitor's delay between requests, in milliseconds, as a whole number. A `0` value means no delay. The maximum value is `600000` (10 minutes) on free plans and `900000` (15 minutes) on paid plans. This value is checked only when the value changes.
 * @property {number} requestTimeout - The monitor's request timeout, in milliseconds, as a whole number. A `null` value means no timeout, and so does omitting it when creating a monitor. A monitor with no timeout returns a `null` value. The maximum value is `600000` (10 minutes) on free plans and `900000` (15 minutes) on paid plans, checked only when the value changes.
 * @property {boolean} strictSsl - If true, strict SSL enabled.
 * @property {MonitorRequestSelectionPayload} requestSelection - The ordered subset of the monitor's collection to run. If set, the monitor runs exactly these items in the given order instead of the full collection. Pass a `null` value to clear the selection and run the full collection again.
 */
export type MonitorOptionsPayload = z.infer<typeof monitorOptionsPayload>;

/**
 * Zod schema for mapping API responses to the MonitorOptionsPayload application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorOptionsPayloadResponse = z.lazy(() => {
  return z
    .object({
      followRedirects: z.boolean().optional(),
      requestDelay: z.number().gte(0).lte(900000).optional(),
      requestTimeout: z.number().gte(1).lte(900000).optional().nullable(),
      strictSSL: z.boolean().optional(),
      requestSelection: monitorRequestSelectionPayloadResponse.optional().nullable(),
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
 * Zod schema for mapping the MonitorOptionsPayload application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorOptionsPayloadRequest = z.lazy(() => {
  return z
    .object({
      followRedirects: z.boolean().optional(),
      requestDelay: z.number().gte(0).lte(900000).optional(),
      requestTimeout: z.number().gte(1).lte(900000).optional().nullable(),
      strictSsl: z.boolean().optional(),
      requestSelection: monitorRequestSelectionPayloadRequest.optional().nullable(),
    })
    .transform((data) => ({
      followRedirects: data['followRedirects'],
      requestDelay: data['requestDelay'],
      requestTimeout: data['requestTimeout'],
      strictSSL: data['strictSsl'],
      requestSelection: data['requestSelection'],
    }));
});
