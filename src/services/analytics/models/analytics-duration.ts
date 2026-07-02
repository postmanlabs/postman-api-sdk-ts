import { z } from 'zod';

export enum AnalyticsDuration {
  LAST_30_DAYS = 'last_30_days',
  LAST_180_DAYS = 'last_180_days',
  LAST_MONTH = 'last_month',
  LAST_6_MONTHS = 'last_6_months',
  LAST_7_DAYS = 'last_7_days',
  LAST_1_YEAR = 'last_1_year',
}
