import { Linter } from 'eslint'

const enum Setting {
    OFF = 'off',
    WARN = 'warn',
    ERROR = 'error',
}

const config: Linter.Config = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'jsdoc',
        'react',
        'react-hooks',
        'import',
        'jsx-a11y',
        'sonarjs',
        'optimize-regex',
        'promise'
    ],
    extends: [
        'airbnb',
        'airbnb-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsx-a11y/recommended',
        'plugin:sonarjs/recommended',
        'plugin:optimize-regex/recommended',
        'plugin:promise/recommended'
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': Setting.WARN,
        '@typescript-eslint/explicit-module-boundary-types': Setting.OFF,
        '@typescript-eslint/no-var-requires': Setting.ERROR,
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow'
            },
            { selector: 'typeLike', format: ['PascalCase'] },
            { selector: 'enum', format: ['PascalCase', 'UPPER_CASE'] }
        ],
        'dot-notation': Setting.OFF,
        '@typescript-eslint/dot-notation': [Setting.WARN],
        '@typescript-eslint/explicit-member-accessibility': Setting.OFF,
        indent: Setting.OFF,
        '@typescript-eslint/indent': 'off',
        'no-empty-function': Setting.OFF,
        '@typescript-eslint/no-empty-function': Setting.OFF,
        '@typescript-eslint/no-explicit-any': Setting.ERROR,
        '@typescript-eslint/no-inferrable-types': Setting.ERROR,
        '@typescript-eslint/no-require-imports': Setting.ERROR,
        'no-use-before-define': Setting.OFF,
        '@typescript-eslint/no-use-before-define': Setting.OFF,
        '@typescript-eslint/prefer-namespace-keyword': Setting.OFF,
        quotes: Setting.OFF,
        '@typescript-eslint/quotes': [Setting.ERROR, 'single', { avoidEscape: true }],
        '@typescript-eslint/type-annotation-spacing': Setting.ERROR,
        'brace-style': [Setting.ERROR, '1tbs'],
        'comma-dangle': [Setting.ERROR, 'always-multiline'],
        curly: [Setting.ERROR, 'all'],
        'default-case': Setting.ERROR,
        eqeqeq: [Setting.ERROR, 'smart'],
        'id-blacklist': [
            'off',
            'any',
            'Number',
            'number',
            'String',
            'string',
            'Boolean',
            'boolean',
            'Undefined',
            'undefined'
        ],
        'jsdoc/check-alignment': Setting.ERROR,
        'jsdoc/check-indentation': Setting.ERROR,
        'jsdoc/newline-after-description': Setting.ERROR,
        'max-len': [Setting.ERROR, {
            code: 120, 'ignoreComments': true,
            'ignoreTrailingComments': true,
            'ignoreUrls': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
            'ignoreRegExpLiterals': true
        }],
        'no-bitwise': Setting.WARN,
        'no-caller': Setting.ERROR,
        'no-eval': Setting.ERROR,
        'no-new-wrappers': Setting.ERROR,
        'no-shadow': [Setting.ERROR, { hoist: 'all' }],
        'no-trailing-spaces': Setting.ERROR,
        'no-var': Setting.ERROR,
        radix: Setting.ERROR,
        'spaced-comment': [Setting.ERROR, 'always', { markers: ['/'] }],
        'class-methods-use-this': Setting.OFF,
        'consistent-return': Setting.OFF,
        'no-restricted-syntax': Setting.OFF,
        '@typescript-eslint/semi': [Setting.ERROR, 'never'],
        'object-curly-spacing': [Setting.ERROR, 'always'],
        'padding-line-between-statements': [
            Setting.ERROR,
            { 'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*' },
            { 'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var'] },
            { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
            { 'blankLine': 'always', 'prev': '*', 'next': 'break' }
        ],
        'import/order': [
            Setting.ERROR, {
                'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always'
            }
        ],
        'import/extensions': [Setting.ERROR, {
            'ts': 'never',
            'tsx': 'never',
            'svg': 'always',
            'png': 'always',
            'json': 'always'
        }],
        'import/prefer-default-export': Setting.OFF,
        'import/no-extraneous-dependencies': Setting.OFF,
        'react/jsx-filename-extension': [Setting.ERROR, { extensions: ['.tsx', '.jsx'] }],
        'react/require-default-props': Setting.OFF,
        'react/jsx-props-no-spreading': Setting.OFF,
        'no-param-reassign': [Setting.ERROR, {
            props: true,
            ignorePropertyModificationsFor: [
                'state'
            ]
        }],
        'jsx-a11y/no-static-element-interactions': Setting.OFF,
        'react/function-component-definition': Setting.OFF,
        'object-curly-newline': Setting.OFF,
        'arrow-body-style': Setting.OFF,
        'react/jsx-one-expression-per-line': Setting.OFF,
        'promise/always-return': Setting.OFF
    },
    settings: {
        'import/resolver': {
            'typescript': {}
        }
    }
}

module.exports = config
