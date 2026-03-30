import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  {
    ignores: ['lib/**', '**/*.js'],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.ts', '__tests__/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['__tests__/**/*.ts'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        expect: 'readonly',
        it: 'readonly',
      },
    },
  },
]
