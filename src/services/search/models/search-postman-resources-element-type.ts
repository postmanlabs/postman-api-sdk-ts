import { z } from 'zod';

export enum SearchPostmanResourcesElementType {
  REQUESTS = 'requests',
  COLLECTIONS = 'collections',
  WORKSPACES = 'workspaces',
  ENVIRONMENTS = 'environments',
  FLOWS = 'flows',
  SPECS = 'specs',
}
