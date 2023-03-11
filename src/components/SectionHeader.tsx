import React, { FC, ReactNode } from "react";

export const SectionHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <p
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="400"
      className="section__header"
    >
      {children}
    </p>
  );
};
