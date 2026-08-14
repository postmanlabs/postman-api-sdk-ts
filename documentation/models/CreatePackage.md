# CreatePackage

**Properties**

| Name        | Type   | Required | Description                                                                                      |
| :---------- | :----- | :------- | :----------------------------------------------------------------------------------------------- |
| name        | string | ✅       | The package's import name. The service stores this value in lowercase.                           |
| description | string | ❌       | The package's description. This value may be empty and only supports printable ASCII characters. |
| script      | string | ❌       | The package's initial index script content. This value may be empty.                             |
