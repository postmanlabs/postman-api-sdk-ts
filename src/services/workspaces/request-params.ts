import { WorkspaceTypeQuery } from './models/workspace-type-query';
import { WorkspacesIncludeQuery } from './models/workspaces-include-query';
import { WorkspaceElementTypeQuery } from './models/workspace-element-type-query';
import { ElementType3 } from './models/element-type-3';

export interface GetWorkspacesParams {
  type?: WorkspaceTypeQuery;
  createdBy?: number;
  include?: WorkspacesIncludeQuery;
  elementType?: WorkspaceElementTypeQuery;
  elementId?: string;
  cursor?: string;
  limit?: number;
}

export interface GetWorkspaceParams {
  include?: string;
}

export interface GetWorkspaceActivityFeedParams {
  userId?: number | null;
  elementType?: ElementType3 | null;
  limit?: number;
  cursor?: string;
}

export interface GetWorkspaceRolesParams {
  include?: string;
}

export interface UpdateWorkspaceRolesParams {
  identifierType?: string;
}

export interface GetWorkspaceUpdatesParams {
  cursor?: string;
  category?: string;
}
