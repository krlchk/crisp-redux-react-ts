import { Link } from "react-router-dom";
import { BurgerIcon, CartLogo, LikeLogo, LogoIcon } from "./icons";
import { NavChild } from "./components/nav-child";
import { NavMenu } from "./components/nav-menu";
import { ModalWindow } from "./components/modal-window";
import { useState } from "react";

export const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalWindow = () => {
    setModalOpen((p) => !p);
  };

  return (
    <header className="flex h-28 w-full items-center justify-between bg-black px-5 py-9 font-Oswald text-white">
      <Link to="/">
        <LogoIcon className="stroke-white transition hover:stroke-gray-500" />
      </Link>
      <NavMenu className="absolute left-1/2 flex -translate-x-1/2 gap-5 tablet:hidden" />
      <div className="flex items-center justify-between gap-3.5">
        <div className="mr-3 flex gap-3.5 mobile:hidden">
          <NavChild to="/">SIGN IN</NavChild>
          <NavChild to="/">CREATE AN ACCOUNT</NavChild>
        </div>
        <Link to="/">
          <LikeLogo className="stroke-white transition hover:stroke-red-500" />
        </Link>
        <Link to="/" className="flex items-center gap-2.5">
          <CartLogo className="stroke-white transition hover:stroke-gray-500" />
          <div className="mobile:hidden">
            <p className="font-Roboto text-xs leading-7">Shopping Cart</p>
            <p className="font-semibold">0,00 EUR</p>
          </div>
        </Link>
        <button onClick={handleModalWindow} className="hidden mobile:block">
          <BurgerIcon className="stroke-white transition hover:stroke-gray-500" />
        </button>
      </div>
      <ModalWindow modalOpen={modalOpen} />
    </header>
  );
};
