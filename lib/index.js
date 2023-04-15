"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
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
        '@typescript-eslint/no-unused-vars': "warn" /* Setting.WARN */,
        '@typescript-eslint/explicit-module-boundary-types': "off" /* Setting.OFF */,
        '@typescript-eslint/no-var-requires': "error" /* Setting.ERROR */,
        'dot-notation': "off" /* Setting.OFF */,
        '@typescript-eslint/dot-notation': ["warn" /* Setting.WARN */],
        '@typescript-eslint/explicit-member-accessibility': "off" /* Setting.OFF */,
        '@typescript-eslint/indent': 'off',
        'no-empty-function': "off" /* Setting.OFF */,
        '@typescript-eslint/no-empty-function': "off" /* Setting.OFF */,
        '@typescript-eslint/no-explicit-any': "error" /* Setting.ERROR */,
        '@typescript-eslint/no-inferrable-types': "error" /* Setting.ERROR */,
        '@typescript-eslint/no-require-imports': "error" /* Setting.ERROR */,
        'no-use-before-define': "off" /* Setting.OFF */,
        '@typescript-eslint/no-use-before-define': "off" /* Setting.OFF */,
        '@typescript-eslint/prefer-namespace-keyword': "off" /* Setting.OFF */,
        quotes: "off" /* Setting.OFF */,
        '@typescript-eslint/quotes': ["error" /* Setting.ERROR */, 'single', { avoidEscape: true }],
        '@typescript-eslint/type-annotation-spacing': "error" /* Setting.ERROR */,
        'brace-style': ["error" /* Setting.ERROR */, '1tbs'],
        'comma-dangle': ["error" /* Setting.ERROR */, 'always-multiline'],
        curly: ["error" /* Setting.ERROR */, 'all'],
        'default-case': "error" /* Setting.ERROR */,
        eqeqeq: ["error" /* Setting.ERROR */, 'smart'],
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
        'jsdoc/check-alignment': "error" /* Setting.ERROR */,
        'jsdoc/check-indentation': "error" /* Setting.ERROR */,
        'jsdoc/newline-after-description': "error" /* Setting.ERROR */,
        'max-len': ["error" /* Setting.ERROR */, {
                code: 120, 'ignoreComments': true,
                'ignoreTrailingComments': true,
                'ignoreUrls': true,
                'ignoreStrings': true,
                'ignoreTemplateLiterals': true,
                'ignoreRegExpLiterals': true
            }],
        'no-bitwise': "warn" /* Setting.WARN */,
        'no-caller': "error" /* Setting.ERROR */,
        'no-eval': "error" /* Setting.ERROR */,
        'no-new-wrappers': "error" /* Setting.ERROR */,
        'no-trailing-spaces': "error" /* Setting.ERROR */,
        'no-var': "error" /* Setting.ERROR */,
        radix: "error" /* Setting.ERROR */,
        'spaced-comment': ["error" /* Setting.ERROR */, 'always', { markers: ['/'] }],
        'class-methods-use-this': "off" /* Setting.OFF */,
        'consistent-return': "off" /* Setting.OFF */,
        'no-restricted-syntax': "off" /* Setting.OFF */,
        '@typescript-eslint/semi': ["error" /* Setting.ERROR */, 'never'],
        'object-curly-spacing': ["error" /* Setting.ERROR */, 'always'],
        'padding-line-between-statements': [
            "error" /* Setting.ERROR */,
            { 'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*' },
            { 'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var'] },
            { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
            { 'blankLine': 'always', 'prev': '*', 'next': 'break' }
        ],
        'import/order': [
            "error" /* Setting.ERROR */, {
                'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always'
            }
        ],
        'import/extensions': ["error" /* Setting.ERROR */, {
                'ts': 'never',
                'tsx': 'never',
                'svg': 'always',
                'png': 'always',
                'json': 'always'
            }],
        'import/prefer-default-export': "off" /* Setting.OFF */,
        'import/no-extraneous-dependencies': "off" /* Setting.OFF */,
        'react/jsx-filename-extension': ["error" /* Setting.ERROR */, { extensions: ['.tsx', '.jsx'] }],
        'react/require-default-props': "off" /* Setting.OFF */,
        'react/jsx-props-no-spreading': "off" /* Setting.OFF */,
        'no-param-reassign': ["error" /* Setting.ERROR */, {
                props: true,
                ignorePropertyModificationsFor: [
                    'state'
                ]
            }],
        'jsx-a11y/no-static-element-interactions': "off" /* Setting.OFF */,
        'react/function-component-definition': ["error" /* Setting.ERROR */, {
                'namedComponents': 'arrow-function',
                'unnamedComponents': 'arrow-function'
            }],
        'object-curly-newline': "off" /* Setting.OFF */,
        'arrow-body-style': "off" /* Setting.OFF */,
        'react/jsx-one-expression-per-line': "off" /* Setting.OFF */,
        'promise/always-return': "off" /* Setting.OFF */,
        "no-tabs": "off" /* Setting.OFF */,
        "react/react-in-jsx-scope": "off" /* Setting.OFF */,
        "indent": ["error" /* Setting.ERROR */, 4],
        "react/jsx-indent": ["error" /* Setting.ERROR */, 4],
        "react/jsx-indent-props": ["error" /* Setting.ERROR */, 4],
        "linebreak-style": ["error" /* Setting.ERROR */, "windows"],
        "@typescript-eslint/naming-convention": [
            "warn", {
                "selector": "default",
                "format": ["camelCase", "PascalCase", "UPPER_CASE"]
            }
        ],
        "no-shadow": "off" /* Setting.OFF */,
        "@typescript-eslint/no-shadow": "error" /* Setting.ERROR */,
        "sonarjs/no-duplicate-string": "off" /* Setting.OFF */,
        "react/no-array-index-key": "off" /* Setting.OFF */,
        "jsx-a11y/mouse-events-have-key-events": "off" /* Setting.OFF */
    },
    settings: {
        'import/resolver': {
            'typescript': {}
        }
    }
};
module.exports = config;
//# sourceMappingURL=index.js.map