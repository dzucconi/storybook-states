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
export const Example = () => (
  <States<ButtonProps>
    states={[
      {},
      { children: "Goodbye" },
      { outlined: true },
      { outlined: false }
    ]}
  >
    <Button onClick={action("clicked")}>Hello</Button>
  </States>
);
```

![Example](http://static.damonzucconi.com/_capture/15NictAbjHIX.png)

[View the example stories](https://github.com/dzucconi/storybook-states/blob/master/stories/States.stories.tsx) for more usage details.

## Interface

```typescript
const States: <T>({
  states,
  children,
  styles,
  ...rest
}: Props<T>) => JSX.Element;
```
