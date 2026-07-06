import { z } from 'zod';

export enum CollectionResponseCreatedDataMode {
  RAW = 'raw',
  URLENCODED = 'urlencoded',
  FORMDATA = 'formdata',
  BINARY = 'binary',
  GRAPHQL = 'graphql',
}
