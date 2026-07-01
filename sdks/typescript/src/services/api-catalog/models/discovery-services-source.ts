import { z } from 'zod';

export const discoveryServicesSource = z.union([
  z.literal('api_gateway_app'),
  z.literal('insights_project'),
  z.literal('infra_watcher'),
  z.literal('public_api'),
]);

export type DiscoveryServicesSource = z.infer<typeof discoveryServicesSource>;
