import React from "react";
import { RenderProps } from "../lib/isRenderProps";
import { State } from "./State";
import { styles as defaultStyles, StateStyles, Styles } from "./Styles";

export interface Props<T> {
  states?: T[];
  children: JSX.Element | RenderProps;
  styles?: StateStyles;
}

export const States = <T,>({
  states = [],
  children,
  styles = defaultStyles,
  ...rest
}: Props<T>) => {
  return (
    <Styles.Provider value={styles}>
      {states.map((props, i) => (
        <State<T> key={i} props={props} {...rest}>
          {children}
        </State>
      ))}
    </Styles.Provider>
  );
};
