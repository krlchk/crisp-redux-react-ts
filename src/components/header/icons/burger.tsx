import type { LogoProps } from "./types";

export const BurgerIcon = ({ className }: LogoProps) => {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="20" height="3" fill="white" />
      <rect y="6" width="20" height="3" fill="white" />
      <rect y="12" width="20" height="3" fill="white" />
    </svg>
  );
};
