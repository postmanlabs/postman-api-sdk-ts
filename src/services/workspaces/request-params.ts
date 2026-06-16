import { WorkspaceTypeQuery, workspaceTypeQuery } from './models/workspace-type-query';
import { WorkspaceIncludeQuery, workspaceIncludeQuery } from './models/workspace-include-query';
import {
  WorkspaceElementTypeQuery,
  workspaceElementTypeQuery,
} from './models/workspace-element-type-query';
import { ElementType2, elementType2 } from './models/element-type-2';
import {
  WorkspaceIncludeScimQuery,
  workspaceIncludeScimQuery,
} from './models/workspace-include-scim-query';

export interface GetWorkspacesParams {
  type?: WorkspaceTypeQuery;
  createdBy?: number;
  include?: WorkspaceIncludeQuery;
  elementType?: WorkspaceElementTypeQuery;
  elementId?: string;
  cursor?: string;
  limit?: number;
}

export interface GetWorkspaceParams {
  include?: WorkspaceIncludeQuery;
}

export interface GetWorkspaceActivityFeedParams {
  userId?: number | null;
  elementType?: ElementType2 | null;
  limit?: number;
  cursor?: string;
}

export interface GetWorkspaceRolesParams {
  include?: WorkspaceIncludeScimQuery;
}

export interface UpdateWorkspaceRolesParams {
  identifierType?: string;
}

export interface GetWorkspaceUpdatesParams {
  cursor?: string;
  category?: string;
}
