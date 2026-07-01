# GetApiCatalogServiceOwnerData

The service's owner. If no owner is assigned, this returns a null value.

**Properties**

| Name          | Type                              | Required | Description                             |
| :------------ | :-------------------------------- | :------- | :-------------------------------------- |
| type          | GetApiCatalogServiceOwnerDataType | ✅       | The type of owner.                      |
| id            | string                            | ✅       | The owner's ID.                         |
| name          | string                            | ✅       | The owner's display name.               |
| profilePicUrl | string                            | ✅       | The URL of the owner's profile picture. |
| publicHandle  | string                            | ✅       | The URL of the owner's public profile.  |

# GetApiCatalogServiceOwnerDataType

The type of owner.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| USER  | string | ✅       | "user"      |
| GROUP | string | ✅       | "group"     |
