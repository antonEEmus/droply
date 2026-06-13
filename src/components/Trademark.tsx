import { AUTHOR, COPYRIGHT_SYMBOL } from "../constants";

const year = new Date().getFullYear();

export function Trademark() {
  return (
    <span className="flex flex-row gap-2">
      <span>{COPYRIGHT_SYMBOL}</span>
      <span>{AUTHOR}</span>
      <span>{year}</span>
    </span>
  );
}
