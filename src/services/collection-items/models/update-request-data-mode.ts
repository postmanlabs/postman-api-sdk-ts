import { z } from 'zod';

export enum UpdateRequestDataMode {
  RAW = 'raw',
  URLENCODED = 'urlencoded',
  FORMDATA = 'formdata',
  BINARY = 'binary',
  GRAPHQL = 'graphql',
}
