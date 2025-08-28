import type { LogoProps } from "./types";

export const SearchIcon = ({ className }: LogoProps) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="6.15385" cy="6.15385" r="4.95385" strokeWidth="2.4" />
      <path d="M11.4872 11.4871L16 15.9999" strokeWidth="2.4" />
    </svg>
  );
};
