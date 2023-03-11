import React, { FC, ReactNode } from "react";

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="container"
    
    >
      {children}
    </div>
  );
};
