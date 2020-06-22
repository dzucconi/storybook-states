import React from "react";
import { RenderProps } from "../lib/isRenderProps";
import { State } from "./State";

export interface Props<T> {
  states?: T[];
  children: JSX.Element | RenderProps<T>;
}

export const States = <T,>({
  states = [{} as T],
  children,
  ...rest
}: Props<T>) => {
  return (
    <>
      {states.map((props, i) => (
        <State<T> key={i} props={props} {...rest}>
          {children}
        </State>
      ))}
    </>
  );
};
