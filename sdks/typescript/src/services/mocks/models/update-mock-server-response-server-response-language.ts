import { z } from 'zod';

export const updateMockServerResponseServerResponseLanguage = z.union([
  z.literal('text'),
  z.literal('javascript'),
  z.literal('json'),
  z.literal('html'),
  z.literal('xml'),
]);

export type UpdateMockServerResponseServerResponseLanguage = z.infer<
  typeof updateMockServerResponseServerResponseLanguage
>;
