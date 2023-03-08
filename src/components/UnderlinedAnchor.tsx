import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import theme from "../assets/theme";
import { useThemeContext } from "../ThemeContext";

export const UnderlinedAnchor: FC<{ children: ReactNode; to: string }> = ({
  children,
  to,
}) => {
  const { smallDotRef, bigDotRef } = useThemeContext();

  return (
    <a
      style={{ cursor: "none" }}
      href={to}
      rel="noreferrer"
      target="_blank"
      onMouseEnter={() => {
        if (!!bigDotRef?.current && !!smallDotRef?.current) {
          smallDotRef.current.style.backgroundColor = theme.colors.hotpink;
          smallDotRef.current.style.scale = "0.4";
          bigDotRef.current.style.scale = "0.6";
        //   bigDotRef.current.style.animation = "none";
          bigDotRef.current.style.border = "none";
          bigDotRef.current.style.backgroundColor = theme.colors.ghostpink;
          // bigDotRef.current.style.opacity = "0.1";
        }
      }}
      onMouseLeave={() => {
        if (!!bigDotRef?.current && !!smallDotRef?.current) {
          smallDotRef.current.style.backgroundColor = theme.colors.mildGreen;
          smallDotRef.current.style.scale = "1";
          bigDotRef.current.style.scale = "1";
          bigDotRef.current.style.animation = "scaleCursor infinite 1s";
          bigDotRef.current.style.border = `1px dashed ${theme.colors.mildGreen}`;
          bigDotRef.current.style.backgroundColor = "transparent";
          bigDotRef.current.style.opacity = "1";
        }
      }}
    >
      {children}
    </a>
  );
};
