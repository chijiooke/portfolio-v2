import React from "react";
import { ArrowRight } from "iconsax-react";

export const ScrollGuide = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        transform: "rotate(-90Deg)",
        position: "fixed",
        left: "3rem",
        animation: "mymove 1.8s infinite",
      }}
    >
      Scroll Up <ArrowRight />
    </div>
  );
};
