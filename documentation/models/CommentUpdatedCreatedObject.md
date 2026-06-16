# CommentUpdatedCreatedObject

**Properties**

| Name | Type                            | Required | Description |
| :--- | :------------------------------ | :------- | :---------- |
| data | CommentUpdatedCreatedObjectData | ❌       |             |

# CommentUpdatedCreatedObjectData

**Properties**

| Name      | Type   | Required | Description                                          |
| :-------- | :----- | :------- | :--------------------------------------------------- |
| id        | number | ❌       | The comment's ID.                                    |
| threadId  | number | ❌       | The comment's thread ID.                             |
| createdBy | number | ❌       | The user ID of the user who created the comment.     |
| createdAt | string | ❌       | The date and time at which the comment was created.  |
| updatedAt | string | ❌       | The date and time when the comment was last updated. |
| body      | string | ❌       | The contents of the comment.                         |
