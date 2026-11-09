# UpdateComponentResponse

Information about the component.

**Properties**

| Name   | Type                                  | Required | Description                                                                                                                                                                                                                                                    |
| :----- | :------------------------------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id     | string                                | ❌       | The component's ID.                                                                                                                                                                                                                                            |
| name   | string                                | ❌       | The component's name.                                                                                                                                                                                                                                          |
| status | [ComponentStatus](ComponentStatus.md) | ❌       | The component's lifecycle state: - `active` — The component is active and can be edited and published. - `archive` — The component is archived and read-only. Archived components can't be edited or published, but their existing versions remain accessible. |
