import { z } from 'zod';

export const protocolVersion = z.union([z.literal('http1'), z.literal('http2'), z.literal('auto')]);

export type ProtocolVersion = z.infer<typeof protocolVersion>;
