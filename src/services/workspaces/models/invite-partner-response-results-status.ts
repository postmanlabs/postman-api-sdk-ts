import { z } from 'zod';

export enum InvitePartnerResponseResultsStatus {
  EMAIL_SENT = 'EMAIL_SENT',
  ALREADY_INVITED = 'ALREADY_INVITED',
  PARTNER_ADDED = 'PARTNER_ADDED',
  FAILED = 'FAILED',
}
