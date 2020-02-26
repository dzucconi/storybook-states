import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "../src/States";

export default {
  title: "Button"
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button: React.FC<ButtonProps> = props => <button {...props} />;

export const Example = () => (
  <States<ButtonProps>
    states={[{}, { title: "Button", tabIndex: 2 }, { autoFocus: true }]}
  >
    <Button onClick={action("clicked")}>Hello</Button>
  </States>
);
