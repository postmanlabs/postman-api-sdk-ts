import { z } from 'zod';

export const indentCharacter = z.union([z.literal('Tab'), z.literal('Space')]);

export type IndentCharacter = z.infer<typeof indentCharacter>;
