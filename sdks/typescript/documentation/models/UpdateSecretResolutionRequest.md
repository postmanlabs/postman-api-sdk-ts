# UpdateSecretResolutionRequest

**Properties**

| Name        | Type                                    | Required | Description                                                                                                                                                                                                                                                                                              |
| :---------- | :-------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| resolution  | UpdateSecretResolutionRequestResolution | ✅       | The secret's updated resolution status: - `FALSE_POSITIVE` — The discovered secret is not an actual secret. - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue. - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it. |
| workspaceId | string                                  | ✅       | The ID of the workspace that contains the secret.                                                                                                                                                                                                                                                        |

# UpdateSecretResolutionRequestResolution

The secret's updated resolution status: - `FALSE_POSITIVE` — The discovered secret is not an actual secret. - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue. - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.

**Properties**

| Name           | Type   | Required | Description      |
| :------------- | :----- | :------- | :--------------- |
| FALSE_POSITIVE | string | ✅       | "FALSE_POSITIVE" |
| REVOKED        | string | ✅       | "REVOKED"        |
| ACCEPTED_RISK  | string | ✅       | "ACCEPTED_RISK"  |
