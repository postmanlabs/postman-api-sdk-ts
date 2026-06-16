// Prettier configuration for code-formatter lambda
// Aligned with sdk-gen/prettier.config.ts

module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'always',
  overrides: [
    {
      files: '.editorconfig',
      options: { parser: 'yaml' },
    },
    {
      files: 'LICENSE',
      options: { parser: 'markdown' },
    },
    {
      files: '*.php',
      options: {
        parser: 'php',
        phpVersion: '8.0',
        trailingCommaPHP: false,
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
        phpVersion: '8.0',
        trailingCommaPHP: false,
      },
    },
  ],
};
