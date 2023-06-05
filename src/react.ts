import { Linter } from 'eslint'

const config: Linter.Config = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint-config-airbnb",
        "eslint-config-airbnb-typescript",

        "plugin:react-hooks/recommended",

        require.resolve('./node'),
    ],
    plugins: [
        "react-hooks"
    ],
    rules: {
        "react/jsx-indent": ["error", 4, { "checkAttributes": true, "indentLogicalExpressions": true }],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-tag-spacing": ["error", { "closingSlash": "never", "beforeSelfClosing": "never", "afterOpening": "never", "beforeClosing": "never" }],
        "react/require-default-props": ["off"],
        "react/react-in-jsx-scope": ["off"],

        "react/jsx-props-no-spreading": "off",
        "react/jsx-filename-extension": ["error", { "extensions": [
                ".tsx", ".jsx"
            ] }],
        "react/function-component-definition": ["error", {
            "namedComponents": "arrow-function",
            "unnamedComponents": "arrow-function"
        }]
    }
}

module.exports = config
