# Steps

This template use yarn as node.js package manager.

```sh
# Babel
yarn add --dev @babel/core @babel/cli @babel/preset-env @babel/register @babel/parser
yarn add --dev babel-eslint  # A Babel parser wrapper for ESlint.

# TypeScript
yarn add --dev typescript @babel/preset-typescript

# TypeScript type definition
yarn add --dev @types/webpack @types/node

# ESlint
yarn add --dev eslint

# Webpack
yarn add --dev webpack webpack-cli webpack-dev-server babel-loader style-loader css-loader

# React
yarn add --dev @babel/preset-react
```

## Linter

ESLint is enough. Check this article: [TSLint 2019](https://medium.com/palantir/tslint-in-2019-1a144c2317a9).

---

## Reference

- [Creating a React App… From Scratch.](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)