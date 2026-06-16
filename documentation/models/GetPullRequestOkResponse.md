# GetPullRequestOkResponse

**Properties**

| Name        | Type                        | Required | Description                                                                                                                                                                                                            |
| :---------- | :-------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| createdAt   | string                      | ❌       | The date and time at which the pull request was created.                                                                                                                                                               |
| updatedAt   | string                      | ❌       | The date and time at which the pull request was updated.                                                                                                                                                               |
| id          | string                      | ❌       | The pull request's ID.                                                                                                                                                                                                 |
| title       | string                      | ❌       | The pull request's title.                                                                                                                                                                                              |
| description | string                      | ❌       | The pull request's description.                                                                                                                                                                                        |
| createdBy   | string                      | ❌       | The ID of the user who created the pull request.                                                                                                                                                                       |
| updatedBy   | string                      | ❌       | The ID of the user who last updated the pull request.                                                                                                                                                                  |
| comment     | string                      | ❌       | If the pull request is a `decline` status, an optional comment about why the pull request was declined.                                                                                                                |
| fortkType   | string                      | ❌       | The type of element the pull request was forked from.                                                                                                                                                                  |
| source      | Source                      | ❌       | Information about the pull request's source (parent) element.                                                                                                                                                          |
| destination | Destination                 | ❌       | Information about the pull request destination element.                                                                                                                                                                |
| status      | string                      | ❌       | The pull request's current review status: - `open` — The pull request is still open. - `approved` — The pull request was approved by its reviewers. - `declined` — The pull request was not approved by its reviewers. |
| merge       | Merge                       | ❌       | Information about the current progress of the pull request's merge.                                                                                                                                                    |
| reviewers   | [Reviewers](Reviewers.md)[] | ❌       | Information about the reviewers assigned to the pull request.                                                                                                                                                          |

# Source

Information about the pull request's source (parent) element.

**Properties**

| Name     | Type    | Required | Description                                              |
| :------- | :------ | :------- | :------------------------------------------------------- |
| id       | string  | ❌       | The pull request's source ID.                            |
| name     | string  | ❌       | The source element's name.                               |
| forkName | string  | ❌       | The name of the fork created from the source element.    |
| exists   | boolean | ❌       | If true, whether the element is present and not deleted. |

# Destination

Information about the pull request destination element.

**Properties**

| Name   | Type    | Required | Description                                              |
| :----- | :------ | :------- | :------------------------------------------------------- |
| id     | string  | ❌       | The destination element's ID.                            |
| name   | string  | ❌       | The destination element's name.                          |
| exists | boolean | ❌       | If true, whether the element is present and not deleted. |

# Merge

Information about the current progress of the pull request's merge.

**Properties**

| Name   | Type        | Required | Description                                                                                                                                                                                  |
| :----- | :---------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status | MergeStatus | ❌       | The pull request's current merge status: - `inactive` — There is no merge in progress. - `inprogress` — The pull request is currently merging. - `failed` — The pull request's merge failed. |

# MergeStatus

The pull request's current merge status: - `inactive` — There is no merge in progress. - `inprogress` — The pull request is currently merging. - `failed` — The pull request's merge failed.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| INACTIVE   | string | ✅       | "inactive"   |
| INPROGRESS | string | ✅       | "inprogress" |
| FAILED     | string | ✅       | "failed"     |
