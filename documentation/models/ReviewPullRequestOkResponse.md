# ReviewPullRequestOkResponse

**Properties**

| Name       | Type       | Required | Description                                                                                                                                                                                                                                                      |
| :--------- | :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id         | string     | ❌       | The pull request's ID.                                                                                                                                                                                                                                           |
| reviewedBy | ReviewedBy | ❌       | Information about the user who reviewed the pull request review.                                                                                                                                                                                                 |
| status     | string     | ❌       | The pull request's current review status: - `open` — The pull request is still open. - `approved` — The pull request was approved by its reviewers. - `declined` — The pull request was not approved by its reviewers. - `merged` — The pull request was merged. |
| updatedAt  | string     | ❌       | The date and time at which the pull request was updated.                                                                                                                                                                                                         |

# ReviewedBy

Information about the user who reviewed the pull request review.

**Properties**

| Name     | Type   | Required | Description          |
| :------- | :----- | :------- | :------------------- |
| id       | number | ❌       | The user's ID.       |
| name     | string | ❌       | The user's name.     |
| username | string | ❌       | The user's username. |
