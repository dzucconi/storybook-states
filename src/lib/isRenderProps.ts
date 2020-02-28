export type RenderProps<T> = {
  (props: T): JSX.Element;
};

export const isRenderProps = <T>(
  children: JSX.Element | RenderProps<T>
): children is RenderProps<T> => typeof children === "function";
