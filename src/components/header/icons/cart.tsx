import type { LogoProps } from "./types";

export const CartLogo = ({ className }: LogoProps) => {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.8682 6.2002L16.7266 20.7998H1.27344L2.13184 6.2002H15.8682Z"
        strokeWidth="2.4"
      />
      <path
        d="M5 5V3C5 2.44772 5.44772 2 6 2H12C12.5523 2 13 2.44772 13 3V5"
        strokeWidth="2.4"
      />
    </svg>
  );
};
