import { z } from 'zod';

export const complianceCliRunStatus = z.union([z.literal('passed'), z.literal('failed')]);

export type ComplianceCliRunStatus = z.infer<typeof complianceCliRunStatus>;
