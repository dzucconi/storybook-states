import { truncate } from "../lib/truncate";

export const stringifyProps = (props: any) => {
  const stringifiedProps = Object.entries(props || {}).reduce(
    (memo: string, [key, value]) => {
      if (key === "children") return `${memo} children={...}`;
      if (typeof value === "string")
        return `${memo} ${key}="${truncate(value)}"`;
      if (typeof value === "function") return `${memo} ${key}={fn}`;
      if (typeof value === "boolean")
        return `${memo} ${key}${value ? "" : "={false}"}`;
      if (typeof value === "number") return `${memo} ${key}={${value}}`;
      if (typeof value === "object") return `${memo} ${key}={...}`;

      return `${memo} ${key}=${value}`;
    },
    ""
  );

  return stringifiedProps.trim();
};
