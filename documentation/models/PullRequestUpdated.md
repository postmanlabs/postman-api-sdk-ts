# PullRequestUpdated

**Properties**

| Name          | Type                     | Required | Description                                              |
| :------------ | :----------------------- | :------- | :------------------------------------------------------- |
| createdAt     | string                   | ❌       | The date and time at which the pull request was created. |
| createdBy     | string                   | ❌       | The ID of the user who created the pull request.         |
| description   | string                   | ❌       | The pull request's description.                          |
| destinationId | string                   | ❌       | The pull request's merge destination ID.                 |
| forkType      | string                   | ❌       | The type of forked element.                              |
| id            | string                   | ❌       | The pull request's ID.                                   |
| sourceId      | string                   | ❌       | The unique ID of the source element.                     |
| status        | PullRequestUpdatedStatus | ❌       | The pull request's status.                               |
| title         | string                   | ❌       | The pull request's title.                                |
| updatedAt     | string                   | ❌       | The date and time at which the pull request was updated. |

# PullRequestUpdatedStatus

The pull request's status.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| OPEN     | string | ✅       | "open"      |
| APPROVED | string | ✅       | "approved"  |
| DECLINED | string | ✅       | "declined"  |
| MERGED   | string | ✅       | "merged"    |
