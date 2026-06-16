# InvitePartnerResponse

**Properties**

| Name            | Type                                                              | Required | Description                                          |
| :-------------- | :---------------------------------------------------------------- | :------- | :--------------------------------------------------- |
| targetEntity    | string                                                            | ❌       | The target entity.                                   |
| targetEntityId  | string                                                            | ❌       | The target entity's ID.                              |
| roleId          | string                                                            | ❌       | The role ID assigned to the users.                   |
| action          | string                                                            | ❌       | The action peformed.                                 |
| roleDisplayName | RoleDisplayName                                                   | ❌       | The assigned role's display name.                    |
| results         | [InvitePartnerResponseResults](InvitePartnerResponseResults.md)[] | ❌       | A list of the action results for each email address. |

# RoleDisplayName

The assigned role's display name.

**Properties**

| Name                    | Type   | Required | Description               |
| :---------------------- | :----- | :------- | :------------------------ |
| VIEWER                  | string | ✅       | "Viewer"                  |
| EDITOR                  | string | ✅       | "Editor"                  |
| VIEWER_AND_PARTNER_LEAD | string | ✅       | "Viewer and Partner Lead" |
| EDITOR_AND_PARTNER_LEAD | string | ✅       | "Editor and Partner Lead" |
