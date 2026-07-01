import { z } from 'zod';

export const specType = z.union([
  z.literal('OPENAPI:2.0'),
  z.literal('OPENAPI:3.0'),
  z.literal('OPENAPI:3.1'),
  z.literal('ASYNCAPI:2.0'),
  z.literal('ASYNCAPI:3.0'),
  z.literal('PROTOBUF:2'),
  z.literal('PROTOBUF:3'),
  z.literal('GRAPHQL'),
  z.literal('SMITHY:2.0'),
]);

export type SpecType = z.infer<typeof specType>;
