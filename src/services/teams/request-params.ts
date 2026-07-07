import { TeamsInclude } from './models/teams-include';

export interface GetTeamsParams {
  cursor?: string;
  limit?: number;
  settings?: boolean;
  userRoles?: boolean;
  identifierType?: string;
}

export interface CreateTeamParams {
  identifierType?: string;
}

export interface GetTeamParams {
  include?: TeamsInclude;
  identifierType?: string;
}

export interface GetTeamAccessRequestsParams {
  cursor?: string;
  limit?: number;
  identifierType?: string;
}

export interface CreateAccessRequestParams {
  identifierType?: string;
}

export interface ApproveDenyAccessRequestParams {
  identifierType?: string;
}

export interface ManageTeamMemberRolesParams {
  identifierType?: string;
}

export interface RemoveTeamMembersParams {
  identifierType?: string;
}
