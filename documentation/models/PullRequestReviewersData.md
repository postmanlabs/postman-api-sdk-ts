# PullRequestReviewersData

**Properties**

| Name   | Type                           | Required | Description                            |
| :----- | :----------------------------- | :------- | :------------------------------------- |
| id     | string                         | ❌       | The reviewer's user ID.                |
| status | PullRequestReviewersDataStatus | ❌       | The reviewer's review status response. |

# PullRequestReviewersDataStatus

The reviewer's review status response.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| APPROVED | string | ✅       | "approved"  |
| DECLINED | string | ✅       | "declined"  |
