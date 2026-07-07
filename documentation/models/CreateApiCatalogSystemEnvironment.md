# CreateApiCatalogSystemEnvironment

**Properties**

| Name         | Type    | Required | Description                                                                                                                           |
| :----------- | :------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| name         | string  | ✅       | The system environment's name. This value must be unique within the team.                                                             |
| color        | string  | ✅       | A six-digit hex color code.                                                                                                           |
| label        | string  | ❌       | A lowercase, terminal-friendly identifier for the system environment. Accepts only alphanumeric characters, hyphens, and underscores. |
| description  | string  | ❌       | A description of the system environment. To remove a description, pass this value as an empty string.                                 |
| isProduction | boolean | ❌       | If true, the system environment is a production environment.                                                                          |
