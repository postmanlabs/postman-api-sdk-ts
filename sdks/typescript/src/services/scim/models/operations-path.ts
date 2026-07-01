import { z } from 'zod';

export const operationsPath = z.literal('userName');

export type OperationsPath = z.infer<typeof operationsPath>;
