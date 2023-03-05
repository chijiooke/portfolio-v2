import React, { FC, ReactNode } from "react";

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        maxWidth: "1920px",
        display: "flex",
        flexDirection: "column",
        padding:'0 1rem '
      }}
    >
      {children}
    </div>
  );
};
