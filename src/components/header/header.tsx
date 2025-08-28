import { Link } from "react-router-dom";
import { CartLogo, LikeLogo, LogoIcon, SearchIcon } from "./icons";
import { NavChild } from "./components/nav-child";

export const Header = () => {
  return (
    <header className="flex h-28 w-full items-center justify-between bg-black px-5 py-9 font-Oswald text-white">
      <Link to="/">
        <LogoIcon className="stroke-white transition hover:stroke-gray-500" />
      </Link>
      <nav className="absolute tablet:hidden left-1/2 flex -translate-x-1/2 gap-5">
        <NavChild to="/">HOME</NavChild>
        <NavChild to="/">SHOP</NavChild>
        <NavChild to="/">BLOG</NavChild>
        <NavChild to="/">SALE</NavChild>
        <NavChild to="/">CONTACT US</NavChild>
        <div className="flex items-center gap-2">
          <SearchIcon className="stroke-white transition hover:stroke-gray-500" />
          <input
            className="px-1 bg-black py-0.5 outline-none"
            type="text"
            placeholder="SEARCH"
          />
        </div>
      </nav>
      <div className="flex items-center gap-3.5">
        <div className="mr-3 flex gap-3.5">
          <NavChild to="/">SIGN IN</NavChild>
          <NavChild to="/">CREATE AN ACCOUNT</NavChild>
        </div>
        <Link to="/">
          <LikeLogo className="stroke-white transition hover:stroke-red-500" />
        </Link>
        <Link to="/" className="flex items-center gap-2.5">
          <CartLogo className="stroke-white transition hover:stroke-gray-500" />
          <div>
            <p>Shopping Cart</p>
            <p>0,00 EUR</p>
          </div>
        </Link>
      </div>
    </header>
  );
};
