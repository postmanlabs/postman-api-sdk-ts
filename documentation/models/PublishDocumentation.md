# PublishDocumentation

**Properties**

| Name                | Type                                                                        | Required | Description                                                                                                                                                                                                                      |
| :------------------ | :-------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customColor         | [DocumentationColorSettings](DocumentationColorSettings.md)                 | ✅       | The theme's colors, in six digit hexcode. The values in this object must match the hexcode values of either the `light` or `dark` theme defined in the `appearance` object.                                                      |
| customization       | [DocumentationCustomizationSettings](DocumentationCustomizationSettings.md) | ✅       | Information about the documentation's customization.                                                                                                                                                                             |
| environmentUid      | string                                                                      | ❌       | The unique ID of the environment to publish with the documentation. The initial values of all variables are published with the documentation. Make certain they don't contain sensitive information such as passwords or tokens. |
| documentationLayout | DocumentationLayout                                                         | ❌       | The documentation's default layout style: - `classic-single-column` — Displays sample code inline beneath each request. - `classic-double-column` — Displays sample code in a column next to the documentation.                  |

# DocumentationLayout

The documentation's default layout style: - `classic-single-column` — Displays sample code inline beneath each request. - `classic-double-column` — Displays sample code in a column next to the documentation.

**Properties**

| Name                  | Type   | Required | Description             |
| :-------------------- | :----- | :------- | :---------------------- |
| CLASSIC_SINGLE_COLUMN | string | ✅       | "classic-single-column" |
| CLASSIC_DOUBLE_COLUMN | string | ✅       | "classic-double-column" |
