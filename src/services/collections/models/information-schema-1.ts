import { z } from 'zod';

export const informationSchema1 = z.literal(
  'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
);

export type InformationSchema1 = z.infer<typeof informationSchema1>;
