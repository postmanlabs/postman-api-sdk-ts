import { z } from 'zod';

export enum AnalyticsResource {
  USER = 'user',
  TEAM = 'team',
  WORKSPACE = 'workspace',
  AI = 'ai',
  API_DEVELOPMENT = 'api_development',
  API_TESTING = 'api_testing',
  API_PRODUCTION = 'api_production',
  API_DISTRIBUTION = 'api_distribution',
  API_MANAGEMENT = 'api_management',
}
