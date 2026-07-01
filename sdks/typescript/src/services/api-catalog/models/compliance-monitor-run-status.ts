import { z } from 'zod';

export const complianceMonitorRunStatus = z.union([z.literal('passed'), z.literal('failed')]);

export type ComplianceMonitorRunStatus = z.infer<typeof complianceMonitorRunStatus>;
