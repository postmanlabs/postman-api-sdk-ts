import { z } from 'zod';

export const authAttributesType = z.union([
  z.literal('string'),
  z.literal('boolean'),
  z.literal('number'),
  z.literal('array'),
  z.literal('object'),
  z.literal('any'),
]);

export type AuthAttributesType = z.infer<typeof authAttributesType>;
