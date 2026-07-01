# AccountInformation

Information about the account.

**Properties**

| Name         | Type                              | Required | Description                                                                                                                                                                                     |
| :----------- | :-------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| billingEmail | string                            | ❌       | The email address to which invoices are sent.                                                                                                                                                   |
| id           | number                            | ❌       | The account's ID.                                                                                                                                                                               |
| state        | string                            | ❌       | The account's current state: - `FREE` - `PAID` - `EXPIRED_TRIAL` - `OVERDUE` - `SUSPENDED` - `BLOCKED` - `PAYMENT_DISPUTED`                                                                     |
| teamId       | number                            | ❌       | The team's ID associated with the account.                                                                                                                                                      |
| salesChannel | SalesChannel                      | ❌       | The sales channel from which the account was created: - `SELF_SERVE` — The user purchased the account plan. - `SALES_SERVE` — The account was purchased through the Postman sales team process. |
| slots        | [InvoicesSlots](InvoicesSlots.md) | ❌       | Information about the team's slots.                                                                                                                                                             |

# SalesChannel

The sales channel from which the account was created: - `SELF_SERVE` — The user purchased the account plan. - `SALES_SERVE` — The account was purchased through the Postman sales team process.

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| SELF_SERVE  | string | ✅       | "SELF_SERVE"  |
| SALES_SERVE | string | ✅       | "SALES_SERVE" |
