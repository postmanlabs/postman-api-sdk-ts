import { z } from 'zod';
import {
  ComplianceMonitorRun,
  complianceMonitorRun,
  complianceMonitorRunRequest,
  complianceMonitorRunResponse,
} from './compliance-monitor-run';
import {
  ComplianceCliRun,
  complianceCliRun,
  complianceCliRunRequest,
  complianceCliRunResponse,
} from './compliance-cli-run';
import {
  ComplianceSpecLint,
  complianceSpecLint,
  complianceSpecLintRequest,
  complianceSpecLintResponse,
} from './compliance-spec-lint';

/**
 * Zod schema for the Compliance model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const compliance = z.lazy(() => {
  return z.object({
    monitorRun: complianceMonitorRun,
    cliRun: complianceCliRun,
    specLint: complianceSpecLint,
  });
});

/**
 * Information about compliance and governance.
 * @typedef  {Compliance} compliance - Information about compliance and governance. - Information about compliance and governance.
 * @property {ComplianceMonitorRun} - The scheduled monitor run summary.
 * @property {ComplianceCliRun} - Information about the CI/CD pipeline.
 * @property {ComplianceSpecLint} - Information about the API specification lint.
 */
export type Compliance = z.infer<typeof compliance>;

/**
 * Zod schema for mapping API responses to the Compliance application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const complianceResponse = z.lazy(() => {
  return z
    .object({
      monitorRun: complianceMonitorRunResponse,
      cliRun: complianceCliRunResponse,
      specLint: complianceSpecLintResponse,
    })
    .transform((data) => ({
      monitorRun: data['monitorRun'],
      cliRun: data['cliRun'],
      specLint: data['specLint'],
    }));
});

/**
 * Zod schema for mapping the Compliance application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const complianceRequest = z.lazy(() => {
  return z
    .object({
      monitorRun: complianceMonitorRunRequest,
      cliRun: complianceCliRunRequest,
      specLint: complianceSpecLintRequest,
    })
    .transform((data) => ({
      monitorRun: data['monitorRun'],
      cliRun: data['cliRun'],
      specLint: data['specLint'],
    }));
});
