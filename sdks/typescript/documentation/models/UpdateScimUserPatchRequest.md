# UpdateScimUserPatchRequest

# UpdateActiveState

**Properties**

| Name       | Type                                                            | Required | Description                                                              |
| :--------- | :-------------------------------------------------------------- | :------- | :----------------------------------------------------------------------- |
| schemas    | string[]                                                        | ❌       | The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml). |
| operations | [UpdateActiveStateOperations](UpdateActiveStateOperations.md)[] | ❌       | Information about the user update operation.                             |

# UpdateUsername

**Properties**

| Name       | Type                                                      | Required | Description                                                              |
| :--------- | :-------------------------------------------------------- | :------- | :----------------------------------------------------------------------- |
| schemas    | string[]                                                  | ❌       | The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml). |
| operations | [UpdateUsernameOperations](UpdateUsernameOperations.md)[] | ❌       | Information about the user update operation.                             |
