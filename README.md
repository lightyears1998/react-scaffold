# A Scaffold for Using React with Typescript and Other Tech

This scaffold include:

1. JavaScript Compiler Babel
2. TypeScript
3. ESLint
4. Webpack
5. React

## Steps

This template use yarn as node.js package manager.

```sh
# Babel
yarn add --dev @babel/core @babel/cli @babel/preset-env @babel/register
yarn add --dev babel-eslint  # A Babel parser wrapper for ESlint.

# TypeScript
yarn add --dev typescript @babel/preset-typescript
yarn add --dev @types/node

# ESlint
yarn add --dev eslint

# Webpack
yarn add --dev webpack webpack-cli webpack-dev-server style-loader css-loader
yarn add --dev babel-loader
yarn add --dev @types/webpack

# React
yarn add --dev react react-dom
yarn add --dev @babel/preset-react
yarn add --dev @types/react @types/react-dom @types/react
```

## Linter

TSLint is migrating to ESLint. Check this article: [TSLint 2019](https://medium.com/palantir/tslint-in-2019-1a144c2317a9).

---

## Reference

- [Creating a React App… From Scratch.](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)
