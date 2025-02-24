import lodash from 'eslint-plugin-lodash';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import sortKeys from 'eslint-plugin-sort-keys';
import unusedImports from 'eslint-plugin-unused-imports';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/stylistic',
      'next/core-web-vitals',
      'plugin:react/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:jsx-a11y/strict',
      'plugin:typescript-sort-keys/recommended'
    )
  ),
  {
    ignores: [
      'node_modules/*',
      'public/*',
      'out/*',
      '.next/*',
      'build/*',
      './next-i18next.config.js',
    ],
    plugins: {
      lodash,
      prettier,
      react: fixupPluginRules(react),
      'simple-import-sort': simpleImportSort,
      'sort-destructure-keys': sortDestructureKeys,
      'sort-keys': sortKeys,
      'unused-imports': unusedImports,
    },

    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',

      '@typescript-eslint/no-non-null-assertion': 'off',

      '@typescript-eslint/no-unnecessary-type-constraint': 'off',

      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/sort-type-constituents': 'warn',
      'arrow-body-style': ['error', 'as-needed'],
      'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
      'import/dynamic-import-chunkname': 'warn',
      'import/first': 'warn',
      'import/namespace': [
        'error',
        {
          allowComputed: true,
        },
      ],
      'import/newline-after-import': 'warn',
      'import/no-cycle': 'warn',
      'jsx-a11y/alt-text': [
        'warn',
        {
          area: ['Area'],
          elements: ['img', 'object', 'area', 'input[type="image"]'],
          img: ['Image', 'ImageWithFallback'],
          'input[type="image"]': ['InputImage'],
          object: ['Object'],
        },
      ],
      'jsx-a11y/anchor-has-content': [
        'warn',
        {
          components: ['a', 'Link', 'Button', 'button'],
        },
      ],

      'jsx-a11y/anchor-is-valid': [
        'warn',
        {
          components: ['Link'],
          specialLink: ['to'],
        },
      ],
      'jsx-a11y/control-has-associated-label': [
        'warn',
        {
          controlComponents: ['a', 'Link', 'button', 'input', 'textarea'],
          labelAttributes: ['aria-label'],
        },
      ],
      'lodash/import-scope': [2, 'method'],
      'no-empty': 'warn',
      'no-param-reassign': [
        'warn',
        {
          ignorePropertyModificationsForRegex: ['^acc'],
          props: true,
        },
      ],

      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              message: 'Please import from next-i18next.',
              name: 'react-i18next',
            },
          ],
        },
      ],

      'no-use-before-define': 'error',

      'object-shorthand': 'error',

      'prefer-const': 'warn',
      'prefer-template': 'warn',
      'prettier/prettier': [
        'warn',
        {
          usePrettierrc: true,
        },
      ],

      quotes: [2, 'single', 'avoid-escape'],

      'react-hooks/exhaustive-deps': 'warn',

      'react-hooks/rules-of-hooks': 'error',
      'react/display-name': 'off',
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'arrow-function',
        },
      ],
      'react/jsx-boolean-value': 'warn',
      'react/jsx-curly-brace-presence': 'error',
      'react/jsx-fragments': 'warn',
      'react/jsx-handler-names': [
        'warn',
        {
          checkInlineFunction: true,
          checkLocalVariables: true,
          eventHandlerPrefix: '(handle|set|toggle|render)',
          eventHandlerPropPrefix: '(render|on)',
        },
      ],
      'react/jsx-no-constructed-context-values': 'warn',
      'react/jsx-no-leaked-render': [
        'warn',
        {
          validStrategies: ['coerce', 'ternary'],
        },
      ],

      'react/jsx-no-useless-fragment': 'warn',

      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          multiline: 'first',
          reservedFirst: true,
          shorthandLast: true,
        },
      ],

      'react/no-array-index-key': 'warn',

      'react/no-danger': 'warn',
      'react/no-multi-comp': 'warn',
      'react/no-object-type-as-default-prop': 'warn',
      'react/no-unknown-property': [
        'error',
        {
          ignore: ['global', 'jsx'],
        },
      ],

      'react/no-unstable-nested-components': 'warn',

      'react/no-unused-prop-types': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',

      'react/self-closing-comp': 'warn',

      'simple-import-sort/exports': 'error',

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$', '^react-', '^next', '^[a-z]'],
            ['^antd'],
            ['^@ant', '^lucide'],
            ['^~'],
            ['^@reduxjs'],
            ['^@/'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^\\u0000'],
            ['.style$', '.scss$'],
          ],
        },
      ],

      'sort-destructure-keys/sort-destructure-keys': 'error',

      'sort-keys': 'off',

      'sort-keys/sort-keys-fix': 'warn',

      'unused-imports/no-unused-imports': 'error',

      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },

    settings: {
      'import/resolver': {
        typescript: {},
      },

      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*Slice.ts'],

    rules: {
      'no-param-reassign': [
        'warn',
        {
          ignorePropertyModificationsForRegex: ['^state$', '^acc'],
          props: true,
        },
      ],
    },
  },
];
