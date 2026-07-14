import { SdkBuildStatus } from './models/sdk-build-status';
import { SdkLanguage } from './models/sdk-language';
import { SdkGitConnectionStatus } from './models/sdk-git-connection-status';
import { SdkGitConnectionPrStatus } from './models/sdk-git-connection-pr-status';

export interface GetSdksParams {
  workspaceId: string;
  sdkIds?: string[];
  buildStatus?: SdkBuildStatus;
  language?: SdkLanguage;
  sourceId?: string;
  cursor?: string;
  limit?: number;
}

export interface GetSdkGitConnectionsParams {
  workspaceId: string;
  sourceId?: string;
  language?: SdkLanguage;
  status?: SdkGitConnectionStatus;
  repositoryUrl?: string;
  cursor?: string;
  limit?: number;
}

export interface GetSdkGitConnectionPullRequestsParams {
  status?: SdkGitConnectionPrStatus;
  cursor?: string;
  limit?: number;
}
