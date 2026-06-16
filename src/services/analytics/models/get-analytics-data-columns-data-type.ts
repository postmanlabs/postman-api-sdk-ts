import { z } from 'zod';

export const getAnalyticsDataColumnsDataType = z.union([
  z.literal('DATE'),
  z.literal('STRING'),
  z.literal('INTEGER'),
  z.literal('TIMESTAMP'),
  z.literal('BOOLEAN'),
  z.literal('NUMBER'),
  z.literal('FLOAT'),
]);

export type GetAnalyticsDataColumnsDataType = z.infer<typeof getAnalyticsDataColumnsDataType>;
