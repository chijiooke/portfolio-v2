import React, { FC, ReactNode } from "react";

export const SectionHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return <p className="section__header">{children}</p>;
};
