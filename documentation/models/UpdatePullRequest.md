# UpdatePullRequest

**Properties**

| Name        | Type     | Required | Description                                                                                                                                                      |
| :---------- | :------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title       | string   | ✅       | The pull request's updated title.                                                                                                                                |
| reviewers   | string[] | ✅       | An updated list of the pull request's assigned reviewers. This replaces all existing users assigned to the pull request with those you pass in the request body. |
| description | string   | ❌       | The updated pull request description.                                                                                                                            |
