# AccountInvoice

Information about the invoice.

**Properties**

| Name        | Type                              | Required | Description                                                                                       |
| :---------- | :-------------------------------- | :------- | :------------------------------------------------------------------------------------------------ |
| id          | string                            | ❌       | The invoice's ID.                                                                                 |
| status      | string                            | ❌       | The invoice's status.                                                                             |
| issuedAt    | string                            | ❌       | The date on which the invoice was issued.                                                         |
| totalAmount | [InvoicesTotal](InvoicesTotal.md) | ❌       | Information about the invoice's total billed amount.                                              |
| links       | [InvoicesLinks](InvoicesLinks.md) | ❌       | A [JSON API spec](https://jsonapi.org/format/#document-links) object containing hypermedia links. |
