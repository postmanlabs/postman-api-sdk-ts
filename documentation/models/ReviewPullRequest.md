# ReviewPullRequest

**Properties**

| Name    | Type                    | Required | Description                                                                                                                                                                                                                                                                                                |
| :------ | :---------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| action  | ReviewPullRequestAction | ✅       | The action to perform on the pull request: - `approve` — Approve the pull request for merge. - `decline` — Decline the pull request. - `merge` — Merge the pull request into its parent element. - `unapprove` — Revokes a pull request's `approve` status. This action does not decline the pull request. |
| comment | string                  | ❌       | If the pull request is a `decline` status, an optoinal comment about why the pull request was declined.                                                                                                                                                                                                    |

# ReviewPullRequestAction

The action to perform on the pull request: - `approve` — Approve the pull request for merge. - `decline` — Decline the pull request. - `merge` — Merge the pull request into its parent element. - `unapprove` — Revokes a pull request's `approve` status. This action does not decline the pull request.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| APPROVE   | string | ✅       | "approve"   |
| DECLINE   | string | ✅       | "decline"   |
| MERGE     | string | ✅       | "merge"     |
| UNAPPROVE | string | ✅       | "unapprove" |
