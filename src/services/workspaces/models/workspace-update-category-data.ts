import { z } from 'zod';

export enum WorkspaceUpdateCategoryData {
  IMPROVEMENT = 'improvement',
  NEW_FEATURE = 'new_feature',
  BUG_FIX = 'bug_fix',
  BREAKING_CHANGE = 'breaking_change',
  ANNOUNCEMENT = 'announcement',
}
