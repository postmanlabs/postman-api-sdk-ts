# SdkGitConnectionPullRequest

Information about a pull request that shipped the SDK update.

**Properties**

| Name      | Type                                                    | Required | Description                                                   |
| :-------- | :------------------------------------------------------ | :------- | :------------------------------------------------------------ |
| number    | number                                                  | ✅       | The pull request's ID.                                        |
| url       | string                                                  | ✅       | The pull request's URL.                                       |
| status    | [SdkGitConnectionPrStatus](SdkGitConnectionPrStatus.md) | ✅       | The lifecycle status of a pull request.                       |
| createdAt | string                                                  | ✅       | The date and time at which the pull request was created.      |
| updatedAt | string                                                  | ✅       | The date and time at which the pull request was last updated. |
| sdk       | [Sdk](Sdk.md)                                           | ❌       | Information about the generated SDK.                          |
