# @aramazanov/eslint-config

## Installation

If you are using eslint-loader in your build config don't forget to check the last version
it supports. For example, webpack 4 eslint-loader supports eslint up to version 7, so install
eslint@7.0.0

``
yarn add -D @aramazanov/eslint-config eslint
``

``
yarn add -D https://github.com/PerishableQ/eslint-config.git eslint
``

## Usage

1. Add .eslintrc to the project root

  ```
  {
    "extends": ["@aramazanov/eslint-config"],
    "env": {
        "browser": true
    },
    "parserOptions": {
        "project": "tsconfig.json"
    }
  }
  ```

2. Add script to package.json

  ``eslint --color --ext .ts,.tsx,.js,.jsx src/ --fix``
