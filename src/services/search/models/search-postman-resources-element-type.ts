import { z } from 'zod';

export enum SearchPostmanResourcesElementType {
  REQUESTS = 'requests',
  COLLECTIONS = 'collections',
  WORKSPACES = 'workspaces',
  ENVIRONMENTS = 'environments',
  DOCUMENTS = 'documents',
  FLOWS = 'flows',
  SPECS = 'specs',
}
