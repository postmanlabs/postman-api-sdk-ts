# UpdateApiCatalogSystemEnvironment

**Properties**

| Name         | Type    | Required | Description                                                                                           |
| :----------- | :------ | :------- | :---------------------------------------------------------------------------------------------------- |
| name         | string  | ❌       | The system environment's name. This value must be unique within the team.                             |
| description  | string  | ❌       | A description of the system environment. To remove a description, pass this value as an empty string. |
| color        | string  | ❌       | A six-digit hex color code.                                                                           |
| isProduction | boolean | ❌       | If true, the system environment is a production environment.                                          |
