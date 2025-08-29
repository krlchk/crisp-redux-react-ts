import { NavMenu } from "./nav-menu";

export const ModalWindow = ({ modalOpen }: { modalOpen: boolean }) => {
  return (
    <div
      className={
        modalOpen
          ? "absolute left-0 top-0 mt-28 flex h-full w-full justify-center bg-black"
          : "hidden"
      }
    >
      <NavMenu className="flex flex-col justify-center gap-5 text-4xl" />
    </div>
  );
};
