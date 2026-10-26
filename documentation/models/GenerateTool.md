# GenerateTool

**Properties**

| Name         | Type   | Required | Description                             |
| :----------- | :----- | :------- | :-------------------------------------- |
| requestId    | string | ✅       | The public collection's request ID.     |
| collectionId | string | ✅       | The Public API Network collection's ID. |
| config       | Config | ✅       | Information about the request.          |

# Config

Information about the request.

**Properties**

| Name           | Type           | Required | Description                                                                                           |
| :------------- | :------------- | :------- | :---------------------------------------------------------------------------------------------------- |
| language       | ConfigLanguage | ✅       | The programming language to use.                                                                      |
| agentFramework | AgentFramework | ✅       | The AI agent framework to use. Note that the `autogen` framework only supports the `python` language. |

# ConfigLanguage

The programming language to use.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| JAVASCRIPT | string | ✅       | "javascript" |
| TYPESCRIPT | string | ✅       | "typescript" |
| PYTHON     | string | ✅       | "python"     |

# AgentFramework

The AI agent framework to use. Note that the `autogen` framework only supports the `python` language.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| OPENAI    | string | ✅       | "openai"    |
| MISTRAL   | string | ✅       | "mistral"   |
| GEMINI    | string | ✅       | "gemini"    |
| ANTHROPIC | string | ✅       | "anthropic" |
| LANGCHAIN | string | ✅       | "langchain" |
| AUTOGEN   | string | ✅       | "autogen"   |
