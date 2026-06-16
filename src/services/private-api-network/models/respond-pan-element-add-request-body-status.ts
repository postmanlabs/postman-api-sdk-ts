import { z } from 'zod';

export const respondPanElementAddRequestBodyStatus = z.union([
  z.literal('denied'),
  z.literal('approved'),
]);

export type RespondPanElementAddRequestBodyStatus = z.infer<
  typeof respondPanElementAddRequestBodyStatus
>;
