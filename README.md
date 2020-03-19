# storybook-states

Visually drive out component states in Storybook

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![npm](https://img.shields.io/npm/v/storybook-states)](https://www.npmjs.com/package/storybook-states) [![Build Status](https://travis-ci.org/dzucconi/storybook-states.svg?branch=master)](https://travis-ci.org/dzucconi/storybook-states)

## What is this?

Wrap your component and use an array of states to drive out different variations in Storybook.

## Installation

```bash
yarn add storybook-states
```

## Usage

```tsx
import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";

export default { title: "Button" };

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button: React.FC<ButtonProps> = props => <button {...props} />;

export const Example = () => (
  <States<ButtonProps>
    states={[{}, { title: "Button", tabIndex: 2 }, { autoFocus: true }]}
  >
    <Button onClick={action("clicked")}>Hello</Button>
  </States>
);
```

![Example](http://static.damonzucconi.com/_capture/15NictAbjHIX.png)

## Interface

```typescript
const States: <T>({
  states,
  children,
  styles,
  ...rest
}: Props<T>) => JSX.Element;
```
