import { z } from 'zod';

export const complianceSpecLintStatus = z.union([z.literal('passed'), z.literal('failed')]);

export type ComplianceSpecLintStatus = z.infer<typeof complianceSpecLintStatus>;
