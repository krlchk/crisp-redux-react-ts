import { SearchIcon } from "../icons";
import { NavChild } from "./nav-child";
import type { NavMenuProps } from "./types";

export const NavMenu = ({ className }: NavMenuProps) => {
  return (
    <nav className={className}>
      <NavChild to="/">HOME</NavChild>
      <NavChild to="/">SHOP</NavChild>
      <NavChild to="/">BLOG</NavChild>
      <NavChild to="/">SALE</NavChild>
      <NavChild to="/">CONTACT US</NavChild>
      <div className="flex items-center gap-2">
        <SearchIcon className="stroke-white transition hover:stroke-gray-500" />
        <input
          className="bg-black px-1 py-0.5 outline-none"
          type="text"
          placeholder="SEARCH"
        />
      </div>
    </nav>
  );
};
