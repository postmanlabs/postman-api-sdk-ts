import { z } from 'zod';

export const successfulResponseDataType = z.union([z.literal('DEFAULT'), z.literal('TEAM_REGEX')]);

export type SuccessfulResponseDataType = z.infer<typeof successfulResponseDataType>;
