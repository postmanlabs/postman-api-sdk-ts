export interface GetMonitorsParams {
  workspace?: string;
  active?: boolean;
  owner?: number;
  collectionUid?: string;
  environmentUid?: string;
  cursor?: string;
  limit?: number;
}

export interface CreateMonitorParams {
  workspace: string;
}

export interface RunMonitorParams {
  async?: boolean;
}

export interface GetRunnerInstancesParams {
  limit?: number;
  cursor?: string;
}
