import { z } from 'zod';
import {
  ComplianceMonitorRunStatus,
  complianceMonitorRunStatus,
} from './compliance-monitor-run-status';

/**
 * Zod schema for the ComplianceMonitorRun model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const complianceMonitorRun = z.lazy(() => {
  return z.object({
    status: complianceMonitorRunStatus.nullable(),
  });
});

/**
 * The scheduled monitor run summary.
 * @typedef  {ComplianceMonitorRun} complianceMonitorRun - The scheduled monitor run summary. - The scheduled monitor run summary.
 * @property {ComplianceMonitorRunStatus} - Whether the monitor's latest runs passed or failed. If no runs exist, this returns a null value.
 */
export type ComplianceMonitorRun = z.infer<typeof complianceMonitorRun>;

/**
 * Zod schema for mapping API responses to the ComplianceMonitorRun application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const complianceMonitorRunResponse = z.lazy(() => {
  return z
    .object({
      status: complianceMonitorRunStatus.nullable(),
    })
    .transform((data) => ({
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the ComplianceMonitorRun application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const complianceMonitorRunRequest = z.lazy(() => {
  return z
    .object({
      status: complianceMonitorRunStatus.nullable(),
    })
    .transform((data) => ({
      status: data['status'],
    }));
});
