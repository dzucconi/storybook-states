export const truncate = (string: string, maxLength = 25) => {
  if (!string) return null;
  const ellipsis = string.length > maxLength;
  return `${string.substring(0, maxLength)}${ellipsis ? "..." : ""}`;
};
