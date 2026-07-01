import { z } from 'zod';

export const informationSchema2 = z.literal(
  'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
);

export type InformationSchema2 = z.infer<typeof informationSchema2>;
