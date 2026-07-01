import { z } from 'zod';

export const createMockServerResponseServerResponseLanguage = z.union([
  z.literal('text'),
  z.literal('javascript'),
  z.literal('json'),
  z.literal('html'),
  z.literal('xml'),
]);

export type CreateMockServerResponseServerResponseLanguage = z.infer<
  typeof createMockServerResponseServerResponseLanguage
>;
