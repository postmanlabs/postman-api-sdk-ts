# TaggedUsers

Information about users tagged in the `body` comment.

**Properties**

| Name       | Type     | Required | Description                                                                                                                                |
| :--------- | :------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| _userName_ | UserName | ❌       | An object that contains information about the tagged user. The object's name is the user's Postman username. For example, `@user-postman`. |

# UserName

An object that contains information about the tagged user. The object's name is the user's Postman username. For example, `@user-postman`.

**Properties**

| Name | Type         | Required | Description       |
| :--- | :----------- | :------- | :---------------- |
| type | UserNameType | ✅       | The `user` value. |
| id   | string       | ✅       | The user's ID.    |

# UserNameType

The `user` value.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| USER | string | ✅       | "user"      |
