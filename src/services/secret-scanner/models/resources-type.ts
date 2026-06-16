import { z } from 'zod';

export const resourcesType = z.union([
  z.literal('collection'),
  z.literal('environment'),
  z.literal('extensible-collection'),
  z.literal('globals'),
  z.literal('example'),
  z.literal('request'),
  z.literal('folder'),
  z.literal('extensible-collection-meta'),
  z.literal('extensible-request'),
  z.literal('extensible-folder'),
  z.literal('extensible-example'),
  z.literal('extensible-message'),
]);

export type ResourcesType = z.infer<typeof resourcesType>;
