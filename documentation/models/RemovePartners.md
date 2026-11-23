# RemovePartners

The request body for removing partners from a Partner Workspace.

**Properties**

| Name           | Type                                                                                                  | Required | Description                                             |
| :------------- | :---------------------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------ |
| targetEntity   | RemovePartnersTargetEntity                                                                            | ✅       | The `workspace` value.                                  |
| targetEntityId | string                                                                                                | ✅       | The Partner Workspace ID from which to remove partners. |
| action         | RemovePartnersAction                                                                                  | ✅       | The `remove_partner` action.                            |
| target         | [ManagePartnerWorkspaceInvitesTargetObjectUserId](ManagePartnerWorkspaceInvitesTargetObjectUserId.md) | ✅       | The target on which to perform the action.              |

# RemovePartnersTargetEntity

The `workspace` value.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| WORKSPACE | string | ✅       | "workspace" |

# RemovePartnersAction

The `remove_partner` action.

**Properties**

| Name           | Type   | Required | Description      |
| :------------- | :----- | :------- | :--------------- |
| REMOVE_PARTNER | string | ✅       | "remove_partner" |
