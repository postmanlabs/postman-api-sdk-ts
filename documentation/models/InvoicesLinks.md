# InvoicesLinks

A [JSON API spec](https://jsonapi.org/format/#document-links) object containing hypermedia links.

**Properties**

| Name | Type | Required | Description                                        |
| :--- | :--- | :------- | :------------------------------------------------- |
| web  | Web  | ❌       | An object containing web-based account references. |

# Web

An object containing web-based account references.

**Properties**

| Name | Type   | Required | Description                                                       |
| :--- | :----- | :------- | :---------------------------------------------------------------- |
| href | string | ❌       | A URL where you can download the invoice in PDF and view details. |
