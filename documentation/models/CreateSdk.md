# CreateSdk

**Note:** - Only the object passed in the request body that matches the value in the `language` property gets read, and all other objects are ignored. - The language option object is optional. When the language identifier is omitted, it's derived from the `source` element name and its workspace.

**Properties**

| Name              | Type                                      | Required | Description                                                                                                                       |
| :---------------- | :---------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| source            | [SdkSource](SdkSource.md)                 | ✅       | The collection or specification that the SDK is generated from.                                                                   |
| language          | [SdkLanguage](SdkLanguage.md)             | ✅       | The target output language for the generated SDK.                                                                                 |
| sdkVersion        | string                                    | ❌       | An optional override for the SDK version. If this isn't provided, the next version is resolved from the latest auto-pull request. |
| authors           | [SdkAuthorData](SdkAuthorData.md)[]       | ❌       | A list of package authors written into the generated manifest.                                                                    |
| retry             | [SdkRetryOptions](SdkRetryOptions.md)     | ❌       | Retry behavior baked into the generated SDK's HTTP client. A power-user option; sensible defaults apply for any field left unset. |
| typescriptOptions | [TypescriptOptions](TypescriptOptions.md) | ❌       | TypeScript-specific SDK generation options.                                                                                       |
| pythonOptions     | [PythonOptions](PythonOptions.md)         | ❌       | Python-specific SDK generation options.                                                                                           |
| goOptions         | [GoOptions](GoOptions.md)                 | ❌       | Go-specific SDK generation options.                                                                                               |
| javaOptions       | [JavaOptions](JavaOptions.md)             | ❌       | Java-specific SDK generation options.                                                                                             |
| csharpOptions     | [CsharpOptions](CsharpOptions.md)         | ❌       | C#-specific SDK generation options.                                                                                               |
| rubyOptions       | [RubyOptions](RubyOptions.md)             | ❌       | Ruby-specific generation options.                                                                                                 |
| phpOptions        | [PhpOptions](PhpOptions.md)               | ❌       | PHP-specific SDK generation options.                                                                                              |
| kotlinOptions     | [KotlinOptions](KotlinOptions.md)         | ❌       | Kotlin-specific SDK generation options.                                                                                           |
| rustOptions       | [RustOptions](RustOptions.md)             | ❌       | Rust-specific SDK generation options.                                                                                             |
| cliOptions        | [CliOptions](CliOptions.md)               | ❌       | CLI-specific SDK generation options.                                                                                              |
