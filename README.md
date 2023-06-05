# @aramazanov/eslint-config

## Installation

If you are using eslint-loader in your build config don't forget to check the last version
it supports. For example, webpack 4 eslint-loader supports eslint up to version 7, so install
^eslint7.0.0

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
  }
  ```

Base config suits for node project usage, so if you want to use this config in React project,
you have to extend it from /react import path

  ```
  {
    "extends": ["@aramazanov/eslint-config/react"],
  }
  ```

You can explicitly specify node config usage by providing /node

  ```
  {
    "extends": ["@aramazanov/eslint-config/node"],
  }
  ```

2. Add script to package.json

  ```
  {
    "scripts": {
      "lint": "eslint src/ --fix"
    }
  }
  ```
