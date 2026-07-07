import { z } from 'zod';

export enum CreateRequestDataMode {
  RAW = 'raw',
  URLENCODED = 'urlencoded',
  FORMDATA = 'formdata',
  BINARY = 'binary',
  GRAPHQL = 'graphql',
}
