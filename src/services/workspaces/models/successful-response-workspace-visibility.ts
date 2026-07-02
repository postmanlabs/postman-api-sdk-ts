import { z } from 'zod';

export enum SuccessfulResponseWorkspaceVisibility {
  PERSONAL = 'personal',
  TEAM = 'team',
  PRIVATE_ = 'private',
  PUBLIC_ = 'public',
  PARTNER = 'partner',
}
