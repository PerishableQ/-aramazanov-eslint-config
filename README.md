# @aramazanov/eslint-config

## Installation

``
yarn add -D @aramazanov/eslint-config eslint
``

``
yarn add -D https://github.com/PerishableQ/eslint-config.git
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
