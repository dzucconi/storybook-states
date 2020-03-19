import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "../src/States";

export default { title: "Button" };

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  outlined?: boolean;
};

const Button: React.FC<ButtonProps> = ({ outlined, ...rest }) => (
  <button
    style={{
      ...(outlined
        ? { border: "1px solid black" }
        : { border: "1px dotted gray" })
    }}
    {...rest}
  />
);

export const EmptyExample = () => (
  <States<ButtonProps>>
    <Button onClick={action("clicked")}>Hello</Button>
  </States>
);

export const SimpleExample = () => (
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

export const RenderPropsExample = () => (
  <States<ButtonProps>
    states={[{}, { children: "Goodbye" }, { outlined: true }]}
  >
    {({ children, ...rest }) => (
      <Button onClick={action("clicked")} {...rest}>
        {children || "Hello"}
      </Button>
    )}
  </States>
);
