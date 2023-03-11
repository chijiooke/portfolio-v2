import React, { FC, ReactNode } from "react";
import theme from "../assets/theme";
import "../index.css"

export const StyledSpanTags: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="600"
      className="span__tag"
    >
      {children}
    </span>
  );
};
