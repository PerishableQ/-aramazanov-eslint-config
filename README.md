# @aramazanov/eslint-config

## Installation

``
yarn add -D @aramazanov/eslint-config eslint
``

## Usage

1. Add .eslintrc to the project root

  ```
  {
    extends: ["@aramazanov"],
    parserOptions: {
        project: './tsconfig.json',
    },
  }
  ```

2. Add script to package.json

  ``eslint --color --ext .ts,.tsx,.js,.jsx src/``
