# PatchEnvironmentBadRequestResponse

**Properties**

| Name     | Type             | Required | Description                                                               |
| :------- | :--------------- | :------- | :------------------------------------------------------------------------ |
| title    | string           | ❌       | A short summary of the error.                                             |
| status   | number           | ❌       | The error's HTTP status code.                                             |
| detail   | BadRequestDetail | ❌       | Details about the occurrence of the error.                                |
| type     | string           | ❌       | The error type.                                                           |
| instance | string           | ❌       | The URI reference that identifies the specific occurrence of the problem. |

# BadRequestDetail

Details about the occurrence of the error.
