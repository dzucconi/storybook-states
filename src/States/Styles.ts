import React from "react";

export type StateStyles = {
  state: React.CSSProperties;
  stateProps: React.CSSProperties;
  statePropsActive: React.CSSProperties;
};

export const styles: StateStyles = {
  state: {
    border: "1px dotted #ddd",
    padding: "0.5rem",
    marginBottom: "1rem"
  },
  stateProps: {
    display: "block",
    marginTop: "0.5rem",
    paddingTop: "0.5rem",
    fontFamily:
      "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
    fontSize: "0.8125rem",
    color: "#999",
    borderTop: "1px dotted #ddd"
  },
  statePropsActive: {
    color: "#111",
    textDecoration: "underline"
  }
};

export const Styles = React.createContext(styles);
