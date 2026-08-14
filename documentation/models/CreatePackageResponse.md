# CreatePackageResponse

Information about the package.

**Properties**

| Name        | Type   | Required | Description                                                                                      |
| :---------- | :----- | :------- | :----------------------------------------------------------------------------------------------- |
| id          | string | ✅       | The package's ID.                                                                                |
| name        | string | ✅       | The package's immutable, lowercase import name.                                                  |
| description | string | ✅       | The package's description. This value may be empty and only supports printable ASCII characters. |
| script      | string | ✅       | The package's current index script content. This value may be empty.                             |
| createdBy   | number | ✅       | The user ID of the user who created the package.                                                 |
| createdAt   | string | ✅       | The date and time at which the package was created.                                              |
| updatedAt   | string | ✅       | The date and time at which the package or its script was last updated.                           |
