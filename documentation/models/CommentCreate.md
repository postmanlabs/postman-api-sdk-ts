# CommentCreate

Information about the comment.

**Properties**

| Name     | Type                          | Required | Description                                                                               |
| :------- | :---------------------------- | :------- | :---------------------------------------------------------------------------------------- |
| body     | string                        | ✅       | The contents of the comment.                                                              |
| threadId | number                        | ❌       | The comment's thread ID. To create a reply on an existing comment, include this property. |
| tags     | [TaggedUsers](TaggedUsers.md) | ❌       | Information about users tagged in the `body` comment.                                     |
