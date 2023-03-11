import Aos from "aos";
import React, { Children, FC, ReactNode, useEffect } from "react";

export const ScrollSnapWrapper: FC<{ children: ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    Aos.init();
    // Aos.refresh()
  }, []);

  return (
    <div
      style={{
        boxSizing: "border-box",
        color: "#fff",
        width: "100vw",
        maxWidth: "100vw",
        minHeight: "100vh",
        maxHeight: "100vh",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        MozBoxSizing: "border-box",
        scrollSnapAlign: "start",
        position: "relative",
        // padding:'200px'
      }}
    >
      {children}
    </div>
  );
};
