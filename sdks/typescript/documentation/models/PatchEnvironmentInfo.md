# PatchEnvironmentInfo

Information about the environment.

**Properties**

| Name      | Type                                                          | Required | Description                                                  |
| :-------- | :------------------------------------------------------------ | :------- | :----------------------------------------------------------- |
| id        | string                                                        | ❌       | The environment's ID.                                        |
| name      | string                                                        | ❌       | The environment's name.                                      |
| owner     | string                                                        | ❌       | The ID of environment's owner.                               |
| createdAt | string                                                        | ❌       | The date and time at which the environment was created.      |
| updatedAt | string                                                        | ❌       | The date and time at which the environment was last updated. |
| values    | [PatchEnvironmentInfoValues](PatchEnvironmentInfoValues.md)[] | ❌       | Information about the environment's variables.               |
| uid       | string                                                        | ❌       | The environment's unique ID.                                 |
