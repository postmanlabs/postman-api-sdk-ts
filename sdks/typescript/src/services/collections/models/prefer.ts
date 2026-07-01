import { z } from 'zod';

export const prefer = z.literal('respond-async');

export type Prefer = z.infer<typeof prefer>;
