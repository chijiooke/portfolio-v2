import React, { FC, ReactNode } from "react";

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        maxWidth: "80vw",
        display: "flex",
        flexDirection: "column",
        padding:'0 4rem '
      }}
    >
      {children}
    </div>
  );
};
