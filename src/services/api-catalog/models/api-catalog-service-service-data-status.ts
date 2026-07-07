import { z } from 'zod';

export enum ApiCatalogServiceServiceDataStatus {
  HEALTHY = 'healthy',
  WARNING = 'warning',
  CRITICAL = 'critical',
  INACTIVE = 'inactive',
}
