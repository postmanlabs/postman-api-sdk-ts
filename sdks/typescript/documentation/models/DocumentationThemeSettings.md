# DocumentationThemeSettings

**Properties**

| Name   | Type                                                        | Required | Description                                                                                                                                                                 |
| :----- | :---------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name   | DocumentationThemeSettingsName                              | ❌       | The `light` or `dark` theme.                                                                                                                                                |
| colors | [DocumentationColorSettings](DocumentationColorSettings.md) | ❌       | The theme's colors, in six digit hexcode. The values in this object must match the hexcode values of either the `light` or `dark` theme defined in the `appearance` object. |
| logo   | string                                                      | ❌       | The URL to the documentation's logo image. By default, public documentation uses your team logo.                                                                            |

# DocumentationThemeSettingsName

The `light` or `dark` theme.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| DARK  | string | ✅       | "dark"      |
| LIGHT | string | ✅       | "light"     |
