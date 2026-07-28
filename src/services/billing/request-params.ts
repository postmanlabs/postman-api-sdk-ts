import { BillingAccountStatus } from './models/billing-account-status';

export interface GetAccountInvoicesParams {
  status: BillingAccountStatus;
}
