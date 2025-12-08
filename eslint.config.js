// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettierConfig = require('eslint-config-prettier');
// const prettierPlugin = require("eslint-plugin-prettier");
const simpleImportSort = require('eslint-plugin-simple-import-sort');

// const prettierOptions = require("./.prettierrc.json");

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    ignores: ['src/app/**/*.routes.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      prettierConfig,
    ],
    plugins: {
      'simple-import-sort': simpleImportSort,
      // prettier: prettierPlugin,
    },
    processor: angular.processInlineTemplates,
    rules: {
      // Angular style guide rules
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],
      '@angular-eslint/no-output-on-prefix': 'error',
      '@angular-eslint/no-input-prefix': 'error',
      '@angular-eslint/no-empty-lifecycle-method': 'warn',
      '@angular-eslint/prefer-standalone': 'error',

      // TypeScript rules
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/member-ordering': [
        'warn',
        {
          default: [
            'static-field',
            'instance-field',
            'constructor',
            'instance-method',
            'private-method',
            'static-method',
          ],
        },
      ],

      // // Prettier rules
      // "prettier/prettier": ["error", prettierOptions],

      // Import Sorting Rules
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
      // prettierConfig,
    ],
    rules: {},
  },
);
