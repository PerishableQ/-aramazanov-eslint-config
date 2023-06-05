import { Linter } from 'eslint'

const config: Linter.Config = {
    root: true,
    env: {
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
        "tsconfigRootDir": "./"
    },
    extends: [
        "eslint-config-airbnb-base",
        "eslint-config-airbnb-typescript/base",
        "plugin:sonarjs/recommended",

        "plugin:import/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
    plugins: [
        "@typescript-eslint",
        "import",
        "sonarjs"
    ],
    rules: {
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/no-empty-interface": ["off"],
        "@typescript-eslint/no-shadow": ["off"],
        "@typescript-eslint/no-unused-vars": ["error", {
            "vars": "all",
            "args": "after-used",
            "argsIgnorePattern": "^_",
            "caughtErrors": "all",
            "destructuredArrayIgnorePattern": "^_",
            "ignoreRestSiblings": true
        }],
        "@typescript-eslint/no-use-before-define": ["error", { "functions": false }],
        "@typescript-eslint/semi": ["error", "never"],
        "arrow-body-style": ["off"],
        "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
        "import/prefer-default-export": ["off"],
        "linebreak-style": ["off"],
        "max-len": ["error", {
            "code": 120,
            "ignorePattern": "^(import|export|function) ",
            "ignoreComments": true,
            "ignoreTrailingComments": true,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true
        }],
        "newline-per-chained-call": ["off"],
        "no-await-in-loop": ["off"],
        "no-console": ["error", { "allow": ["warn", "error"] }],
        "no-continue": ["off"],
        "no-multi-spaces": ["error", { "ignoreEOLComments":  true } ],
        "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["out"], "ignorePropertyModificationsForRegex": ["^_"] }],
        "no-restricted-syntax": ["off"],
        "object-curly-newline": ["error", {
            "ObjectExpression": { "consistent": true },
            "ObjectPattern": { "consistent": true },
            "ImportDeclaration": { "consistent": true },
            "ExportDeclaration": { "consistent": true }
        }],

        "import/order": [
            "error", {
                "groups": [
                    "builtin", "external", "internal", "parent", "sibling", "index"
                ],
                "newlines-between": "always"
            }
        ],
        "import/extensions": ["error", {
            "ts": "never",
            "tsx": "never",
            "svg": "always",
            "png": "always",
            "json": "always"
        }],
        "import/no-extraneous-dependencies": "off",
        "padding-line-between-statements": [ "error",
            { "blankLine": "always", "prev": [
                    "const", "let"
                ], "next": "*" },
            { "blankLine": "any", "prev": [
                    "const", "let"
                ], "next": [
                    "const", "let"
                ] },
            { "blankLine": "always", "prev": "*", "next": "return" },
            { "blankLine": "always", "prev": "*", "next": "break" }
        ]
    }
}

module.exports = config
