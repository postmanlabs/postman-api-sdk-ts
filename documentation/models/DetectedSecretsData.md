# DetectedSecretsData

**Properties**

| Name                | Type                                                | Required | Description                                                                                                                                                                                                                                                                                                                         |
| :------------------ | :-------------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| detectedAt          | string                                              | ❌       | The date and time at which the secret was first detected.                                                                                                                                                                                                                                                                           |
| secretType          | string                                              | ❌       | The type of the secret.                                                                                                                                                                                                                                                                                                             |
| workspaceVisibility | DetectedSecretsDataWorkspaceVisibility              | ❌       | The workspace's [visibility setting](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility).                                                                                                                                                               |
| secretHash          | string                                              | ❌       | The SHA-256 hash of the detected secret.                                                                                                                                                                                                                                                                                            |
| workspaceId         | string                                              | ❌       | The ID of the workspace that contains the secret.                                                                                                                                                                                                                                                                                   |
| resourceType        | string                                              | ❌       | If querying by resource, the resource type.                                                                                                                                                                                                                                                                                         |
| resourceId          | string                                              | ❌       | If querying by resource, the resource's ID.                                                                                                                                                                                                                                                                                         |
| secretId            | string                                              | ❌       | The detected secret's ID.                                                                                                                                                                                                                                                                                                           |
| obfuscatedSecret    | string                                              | ❌       | The secret's obfuscated value.                                                                                                                                                                                                                                                                                                      |
| resolution          | [SecretResolutionStatus](SecretResolutionStatus.md) | ❌       | The secret's resolution status: - `ACTIVE` — The secret is active. - `FALSE_POSITIVE` — The discovered secret is not an actual secret. - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue. - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it. |
| occurrences         | number                                              | ❌       | The number of times the secret was found in the workspace.                                                                                                                                                                                                                                                                          |

# DetectedSecretsDataWorkspaceVisibility

The workspace's [visibility setting](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility).

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| PERSONAL  | string | ✅       | "personal"  |
| PRIVATE\_ | string | ✅       | "private"   |
| TEAM      | string | ✅       | "team"      |
| PUBLIC\_  | string | ✅       | "public"    |
