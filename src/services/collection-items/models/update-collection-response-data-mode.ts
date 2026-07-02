import { z } from 'zod';

export enum UpdateCollectionResponseDataMode {
  RAW = 'raw',
  URLENCODED = 'urlencoded',
  FORMDATA = 'formdata',
  BINARY = 'binary',
  GRAPHQL = 'graphql',
}
