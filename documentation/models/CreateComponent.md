# CreateComponent

**Properties**

| Name    | Type                                                | Required | Description                                                                                                                                                       |
| :------ | :-------------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name    | string                                              | ✅       | The component's name. This must be unique within the team and can only contain letters, digits, hyphens, underscores, and periods and can't exceed 60 characters. |
| type    | [ComponentType](ComponentType.md)                   | ✅       | The component's type. Corresponds to the specification that the component's content adheres to.                                                                   |
| content | string                                              | ✅       | The component's content, up to a maximum of 500 KB (UTF-8).                                                                                                       |
| format  | [ComponentContentFormat](ComponentContentFormat.md) | ❌       | The component's content format.                                                                                                                                   |
