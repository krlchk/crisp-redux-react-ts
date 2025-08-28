import { Link } from "react-router-dom";
import type { NavChildProps } from "./types";

export const NavChild = ({ children, to }: NavChildProps) => {
  return (
    <Link
      className="border-b-2 border-transparent px-2 transition hover:border-red-500"
      to={to}
    >
      {children}
    </Link>
  );
};
