# CommentData

Information about the comment.

**Properties**

| Name      | Type              | Required | Description                                          |
| :-------- | :---------------- | :------- | :--------------------------------------------------- |
| id        | number            | ❌       | The comment's ID.                                    |
| threadId  | number            | ❌       | The comment's thread ID.                             |
| status    | CommentDataStatus | ❌       | The comment's current status.                        |
| createdBy | number            | ❌       | The user ID of the user who created the comment.     |
| createdAt | string            | ❌       | The date and time at which the comment was created.  |
| updatedAt | string            | ❌       | The date and time when the comment was last updated. |
| body      | string            | ❌       | The contents of the comment.                         |

# CommentDataStatus

The comment's current status.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| OPEN     | string | ✅       | "Open"      |
| RESOLVED | string | ✅       | "Resolved"  |
