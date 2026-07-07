# CreatePullRequest

Information about the pull request.

**Properties**

| Name          | Type     | Required | Description                                        |
| :------------ | :------- | :------- | :------------------------------------------------- |
| title         | string   | ✅       | The title of the pull request.                     |
| reviewers     | string[] | ✅       | A list of reviewers to assign to the pull request. |
| destinationId | string   | ✅       | The collection ID to merge the pull request into.  |
| description   | string   | ❌       | The pull request's description.                    |
