# SdkGitConnectionStatus

The lifecycle status of the Git connection: - `active` — The connection is live and all opened pull requests ship SDK updates into the repository. - `disconnected` — The connection was explicitly disconnected by the owner, and no pull requests can be opened. The historical record is preserved. - `inaccessible` — Access to the repository was revoked or its no longer reachable.

**Properties**

| Name         | Type   | Required | Description    |
| :----------- | :----- | :------- | :------------- |
| ACTIVE       | string | ✅       | "active"       |
| DISCONNECTED | string | ✅       | "disconnected" |
| INACCESSIBLE | string | ✅       | "inaccessible" |
