import { ComponentType } from './models/component-type';
import { ComponentStatus } from './models/component-status';

export interface GetAllComponentsParams {
  type?: ComponentType;
  status?: ComponentStatus;
  hasVersions?: boolean;
  include?: string;
  expand?: string;
}

export interface GetComponentParams {
  include?: string;
  expand?: string;
}

export interface GetComponentVersionsParams {
  include?: string;
}

export interface GetComponentVersionParams {
  include?: string;
}
