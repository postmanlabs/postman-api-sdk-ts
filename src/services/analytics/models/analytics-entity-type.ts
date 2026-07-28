import { z } from 'zod';

export enum AnalyticsEntityType {
  COLLECTION = 'collection',
  SPECIFICATION = 'specification',
  MOCK = 'mock',
  FLOW = 'flow',
  SDK_COLLECTION = 'sdk-collection',
  SDK_SPECIFICATION = 'sdk-specification',
}
