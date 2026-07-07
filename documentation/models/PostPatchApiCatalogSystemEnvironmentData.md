# PostPatchApiCatalogSystemEnvironmentData

Information about the system environment.

**Properties**

| Name         | Type    | Required | Description                                                           |
| :----------- | :------ | :------- | :-------------------------------------------------------------------- |
| id           | string  | ✅       | The system environment's ID.                                          |
| name         | string  | ✅       | The system environment's name.                                        |
| label        | string  | ✅       | A lowercase, terminal-friendly identifier for the system environment. |
| color        | string  | ✅       | A six-digit hex color code.                                           |
| description  | string  | ✅       | A description of the system environment.                              |
| isProduction | boolean | ✅       | If true, the system environment is a production environment.          |
| createdAt    | string  | ✅       | The date and time at which the system environment was created.        |
| updatedAt    | string  | ✅       | The date and time at which the system environment was last updated.   |
