# PullRequestMergeData

Information about the current progress of the pull request's merge.

**Properties**

| Name   | Type                       | Required | Description                                                                                                                                                                                  |
| :----- | :------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status | PullRequestMergeDataStatus | ❌       | The pull request's current merge status: - `inactive` — There is no merge in progress. - `inprogress` — The pull request is currently merging. - `failed` — The pull request's merge failed. |

# PullRequestMergeDataStatus

The pull request's current merge status: - `inactive` — There is no merge in progress. - `inprogress` — The pull request is currently merging. - `failed` — The pull request's merge failed.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| INACTIVE   | string | ✅       | "inactive"   |
| INPROGRESS | string | ✅       | "inprogress" |
| FAILED     | string | ✅       | "failed"     |
