import React, { FC, ReactNode } from "react";
import theme from "../assets/theme";

export const StyledSpanTags: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span
      style={{ fontStyle: "italic", color: theme.colors.mildGreen, opacity: 1 }}
    >
      {children}
    </span>
  );
};
