import React, { useContext } from "react";
import { isRenderProps } from "../lib/isRenderProps";
import { stringifyProps } from "./stringifyProps";
import { omit } from "../lib/omit";
import { isEmpty } from "../lib/isEmpty";
import { Styles } from "./Styles";

interface Props {
  children: any;
  props: any;
}

export const StateProps: React.FC<Props> = ({ props, children }) => {
  const styles = useContext(Styles);
  const childrenProps = omit(children.props, ...Object.keys(props || {}));

  return (
    <div style={styles.stateProps}>
      {"<"}
      <span>{children.type.displayName || children.type.name}</span>{" "}
      {!isEmpty(props) && (
        <strong style={styles.statePropsActive}>{stringifyProps(props)}</strong>
      )}{" "}
      {!isRenderProps(children) && !isEmpty(childrenProps) && (
        <span>{stringifyProps(childrenProps)}</span>
      )}
      <span>{" />"}</span>
    </div>
  );
};
