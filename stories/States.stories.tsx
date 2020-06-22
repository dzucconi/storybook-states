import React from "react";
import { action } from "@storybook/addon-actions";
import { States, StylesProvider } from "../src";

export default { title: "Button" };

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  outlined?: boolean;
};

const Button: React.FC<ButtonProps> = ({ outlined, ...rest }) => (
  <button
    style={{
      ...(outlined
        ? { border: "1px solid black" }
        : { border: "1px dotted gray" }),
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
      { outlined: false },
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

export const WithCustomTheme = () => (
  <StylesProvider
    styles={{
      state: {
        border: "1px dotted red",
        padding: "0.5rem",
        marginBottom: "1rem",
      },
      stateProps: {
        display: "block",
        marginTop: "0.5rem",
        paddingTop: "0.5rem",
        fontFamily: "'Times New Roman', serif",
        backgroundColor: "#eee",
        fontSize: "0.8125rem",
        color: "#999",
        borderTop: "2px dotted red",
      },
    }}
  >
    <RenderPropsExample />
  </StylesProvider>
);
