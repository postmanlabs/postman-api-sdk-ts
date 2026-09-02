# SecretResolutionStatus

The secret's resolution status: - `ACTIVE` — The secret is active. - `FALSE_POSITIVE` — The discovered secret is not an actual secret. - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue. - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.

**Properties**

| Name           | Type   | Required | Description      |
| :------------- | :----- | :------- | :--------------- |
| FALSE_POSITIVE | string | ✅       | "FALSE_POSITIVE" |
| ACCEPTED_RISK  | string | ✅       | "ACCEPTED_RISK"  |
| REVOKED        | string | ✅       | "REVOKED"        |
| ACTIVE         | string | ✅       | "ACTIVE"         |
