import { z } from 'zod';

export enum UpdateWorkspaceDataType {
  PRIVATE_ = 'private',
  PERSONAL = 'personal',
  TEAM = 'team',
  PUBLIC_ = 'public',
}
