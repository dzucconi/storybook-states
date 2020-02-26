export type RenderProps = {
  (props: any): JSX.Element;
};

export const isRenderProps = (
  children: JSX.Element | RenderProps
): children is RenderProps => typeof children === "function";
