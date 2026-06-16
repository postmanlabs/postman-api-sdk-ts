# UpdateDetectedSecretResolutionsOkResponse

**Properties**

| Name        | Type                         | Required | Description                                                                                                                                                                                                                                                                                                                                 |
| :---------- | :--------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| secretHash  | string                       | ❌       | The SHA-256 hash of the detected secret.                                                                                                                                                                                                                                                                                                    |
| workspaceId | string                       | ❌       | The ID of the workspace that contains the secret.                                                                                                                                                                                                                                                                                           |
| resolution  | SuccessfulResponseResolution | ❌       | The secret's current resolution status: - `ACTIVE` — The secret is active. - `FALSE_POSITIVE` — The discovered secret is not an actual secret. - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue. - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it. |
| history     | [History](History.md)[]      | ❌       | The history of the secret's resolution status changes.                                                                                                                                                                                                                                                                                      |

# SuccessfulResponseResolution

The secret's current resolution status: - `ACTIVE` — The secret is active. - `FALSE_POSITIVE` — The discovered secret is not an actual secret. - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue. - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.

**Properties**

| Name           | Type   | Required | Description      |
| :------------- | :----- | :------- | :--------------- |
| FALSE_POSITIVE | string | ✅       | "FALSE_POSITIVE" |
| ACCEPTED_RISK  | string | ✅       | "ACCEPTED_RISK"  |
| REVOKED        | string | ✅       | "REVOKED"        |
| ACTIVE         | string | ✅       | "ACTIVE"         |
