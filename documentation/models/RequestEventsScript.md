# RequestEventsScript

Information about the Javascript code that can be used to to perform setup or teardown operations in a response.

**Properties**

| Name | Type     | Required | Description                                                                                                                |
| :--- | :------- | :------- | :------------------------------------------------------------------------------------------------------------------------- |
| id   | string   | ❌       | The script's ID.                                                                                                           |
| type | string   | ❌       | The type of script. For example, `text/javascript`.                                                                        |
| exec | string[] | ❌       | A list of script strings, where each line represents a line of code. Separate lines makes it easy to track script changes. |
