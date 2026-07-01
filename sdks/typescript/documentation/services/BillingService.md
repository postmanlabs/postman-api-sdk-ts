# BillingService

A list of all methods in the `BillingService` service. Click on the method name to view detailed information about that method.

| Methods                                   | Description                                                                            |
| :---------------------------------------- | :------------------------------------------------------------------------------------- |
| [getAccounts](#getaccounts)               | Gets Postman billing account details for the given team.                               |
| [getAccountInvoices](#getaccountinvoices) | Gets all invoices for a Postman billing account filtered by the status of the invoice. |

## getAccounts

Gets Postman billing account details for the given team.

- HTTP Method: `GET`
- Endpoint: `/accounts`

**Return Type**

`AccountInformation`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.billing.getAccounts();

  console.log(data);
})();
```

## getAccountInvoices

Gets all invoices for a Postman billing account filtered by the status of the invoice.

- HTTP Method: `GET`
- Endpoint: `/accounts/{accountId}/invoices`

**Parameters**

| Name      | Type                                                      | Required | Description           |
| :-------- | :-------------------------------------------------------- | :------- | :-------------------- |
| accountId | string                                                    | ✅       | The account's ID.     |
| status    | [BillingAccountStatus](../models/BillingAccountStatus.md) | ✅       | The account's status. |

**Return Type**

`GetAccountInvoices`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const billingAccountStatus = 'PAID';

  const data = await postmanApiSdk.billing.getAccountInvoices('123456', {
    status: billingAccountStatus,
  });

  console.log(data);
})();
```
