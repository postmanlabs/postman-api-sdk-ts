import { z } from 'zod';

export const authMethodType2 = z.union([
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
  z.literal('jwt'),
  z.literal('asap'),
]);

export type AuthMethodType2 = z.infer<typeof authMethodType2>;
