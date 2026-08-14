export interface GetPackagesParams {
  limit?: number;
  cursor?: string;
}

export interface CreatePackageParams {
  workspace: string;
}
