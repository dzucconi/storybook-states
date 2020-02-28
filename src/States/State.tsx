import React, { useContext } from "react";
import { isRenderProps, RenderProps } from "../lib/isRenderProps";
import { StateProps } from "./StateProps";
import { Styles } from "./Styles";

interface Props<T> {
  props: T;
  children: JSX.Element | RenderProps<T>;
}

export const State = <T,>({ props, children, ...rest }: Props<T>) => {
  const styles = useContext(Styles);

  const Specimen = isRenderProps(children)
    ? children(props)
    : React.cloneElement(children, props);

  const innerChildren = isRenderProps(children) ? children(props) : children;

  return (
    <div style={styles.state} {...rest}>
      {Specimen}

      <StateProps props={props}>{innerChildren}</StateProps>
    </div>
  );
};
