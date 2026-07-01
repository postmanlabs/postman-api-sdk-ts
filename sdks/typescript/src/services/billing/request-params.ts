import { BillingAccountStatus, billingAccountStatus } from './models/billing-account-status';

export interface GetAccountInvoicesParams {
  status: BillingAccountStatus;
}
