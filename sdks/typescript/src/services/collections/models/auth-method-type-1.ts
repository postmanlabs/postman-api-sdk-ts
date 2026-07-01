import { z } from 'zod';

export const authMethodType1 = z.union([
  z.literal('noauth'),
  z.literal('basic'),
  z.literal('bearer'),
  z.literal('apikey'),
  z.literal('digest'),
  z.literal('oauth1'),
  z.literal('oauth2'),
  z.literal('hawk'),
  z.literal('awsv4'),
  z.literal('ntlm'),
  z.literal('edgegrid'),
]);

export type AuthMethodType1 = z.infer<typeof authMethodType1>;
