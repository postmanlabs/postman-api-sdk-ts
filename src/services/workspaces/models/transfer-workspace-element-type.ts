import { z } from 'zod';

export enum TransferWorkspaceElementType {
  COLLECTION = 'collection',
  ENVIRONMENT = 'environment',
  API = 'api',
  FLOW = 'flow',
  MOCK = 'mock',
  MONITOR = 'monitor',
}
