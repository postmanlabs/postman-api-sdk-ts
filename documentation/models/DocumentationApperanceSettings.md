# DocumentationApperanceSettings

Information about the documentation appearance, such as colors and theme.

**Properties**

| Name    | Type                                                          | Required | Description                                                                                       |
| :------ | :------------------------------------------------------------ | :------- | :------------------------------------------------------------------------------------------------ |
| default | Default\_                                                     | ❌       | The default color theme (`light` or `dark`). Documentation uses the given theme value by default. |
| themes  | [DocumentationThemeSettings](DocumentationThemeSettings.md)[] | ❌       | A list of theme settings for the `light` and `dark` themes.                                       |

# Default\_

The default color theme (`light` or `dark`). Documentation uses the given theme value by default.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| LIGHT | string | ✅       | "light"     |
| DARK  | string | ✅       | "dark"      |
