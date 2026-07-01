import { z } from 'zod';

export const createApiSchemaResponseType = z.union([
  z.literal('proto:2'),
  z.literal('proto:3'),
  z.literal('graphql'),
  z.literal('openapi:3_1'),
  z.literal('openapi:3'),
  z.literal('openapi:2'),
  z.literal('openapi:1'),
  z.literal('raml:1'),
  z.literal('raml:0_8'),
  z.literal('wsdl:2'),
  z.literal('wsdl:1'),
  z.literal('asyncapi:2'),
]);

export type CreateApiSchemaResponseType = z.infer<typeof createApiSchemaResponseType>;
