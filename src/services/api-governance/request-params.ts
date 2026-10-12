import { ApiGovernanceInclude } from './models/api-governance-include';
import { TargetType } from './models/target-type';

export interface GetAllCustomFunctionsParams {
  cursor?: string;
  limit?: number;
}

export interface GetCustomFunctionParams {
  include?: ApiGovernanceInclude;
}

export interface GetAllGovernanceGroupsParams {
  cursor?: string;
  limit?: number;
}

export interface GetGovernanceGroupWorkspacesParams {
  cursor?: string;
  limit?: number;
}

export interface GetAllRulesetsParams {
  cursor?: string;
  limit?: number;
}

export interface GetRulesetParams {
  include?: ApiGovernanceInclude;
}

export interface DeleteRulesetAssignmentParams {
  targetType: TargetType;
  targetId: string;
}
