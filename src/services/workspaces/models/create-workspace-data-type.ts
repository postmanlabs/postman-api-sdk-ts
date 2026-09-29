import { z } from 'zod';

export enum CreateWorkspaceDataType {
  PERSONAL = 'personal',
  PRIVATE_ = 'private',
  PUBLIC_ = 'public',
  TEAM = 'team',
  PARTNER = 'partner',
}
