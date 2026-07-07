import { z } from 'zod';

export enum GetApiCatalogServiceDataStatus {
  HEALTHY = 'healthy',
  WARNING = 'warning',
  CRITICAL = 'critical',
  INACTIVE = 'inactive',
}
