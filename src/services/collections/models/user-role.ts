import { z } from 'zod';

export const userRole = z.union([z.literal('VIEWER'), z.literal('EDITOR')]);

export type UserRole = z.infer<typeof userRole>;
