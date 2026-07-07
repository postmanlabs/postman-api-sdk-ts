import { z } from 'zod';

export enum ApiInclude {
  COLLECTIONS = 'collections',
  VERSIONS = 'versions',
  SCHEMAS = 'schemas',
  GIT_INFO = 'gitInfo',
}
