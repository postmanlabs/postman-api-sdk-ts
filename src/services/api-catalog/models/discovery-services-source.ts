import { z } from 'zod';

export enum DiscoveryServicesSource {
  API_GATEWAY_APP = 'api_gateway_app',
  INSIGHTS_PROJECT = 'insights_project',
  INFRA_WATCHER = 'infra_watcher',
  PUBLIC_API = 'public_api',
}
