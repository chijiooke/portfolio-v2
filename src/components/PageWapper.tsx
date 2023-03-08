import React, { FC, ReactNode } from "react";

export const PageWapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        display: "flex",
      }}
    >
      {children}
    </div>
  );
};
