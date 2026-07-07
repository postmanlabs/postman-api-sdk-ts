import { WorkspaceTypeQuery } from './models/workspace-type-query';
import { WorkspaceIncludeQuery } from './models/workspace-include-query';
import { WorkspaceElementTypeQuery } from './models/workspace-element-type-query';
import { ElementType2 } from './models/element-type-2';
import { WorkspaceIncludeScimQuery } from './models/workspace-include-scim-query';

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
