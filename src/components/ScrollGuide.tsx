import { ArrowRight } from "iconsax-react";
import { FC } from "react";

export const ScrollGuide: FC<{ isAtBottom: boolean }> = ({ isAtBottom }) => {
  return (
    <div
      style={{
        display: `${isAtBottom ? "none" : "flex"}`,
        transition: "0.8s",
        gap: "0.5rem",
        transform: "rotate(90Deg)",
        position: "fixed",
        left: "3rem",
        animation: "mymove 1.8s infinite",
      }}
    >
      Scroll Up <ArrowRight />
    </div>
  );
};
