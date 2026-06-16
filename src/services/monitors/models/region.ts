import { z } from 'zod';

export const region = z.union([
  z.literal('us-east'),
  z.literal('us-west'),
  z.literal('ap-southeast'),
  z.literal('ca-central'),
  z.literal('eu-central'),
  z.literal('sa-east'),
  z.literal('uk'),
  z.literal('us-east-staticip'),
  z.literal('us-west-staticip'),
]);

export type Region = z.infer<typeof region>;
