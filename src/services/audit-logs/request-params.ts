import { AscDescDefaultDesc, ascDescDefaultDesc } from '../common/asc-desc-default-desc';

export interface GetAuditLogsParams {
  userId?: number;
  action?: string;
  since?: string;
  until?: string;
  limit?: number;
  cursor?: string;
  orderBy?: AscDescDefaultDesc;
  orderBy1?: AscDescDefaultDesc;
}
