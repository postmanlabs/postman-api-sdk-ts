import { z } from 'zod';

export enum FileFormat {
  JSON = 'json',
  YAML = 'yaml',
  PROTO = 'proto',
  GRAPHQL = 'graphql',
  SMITHY = 'smithy',
}
