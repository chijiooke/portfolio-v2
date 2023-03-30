import { FC, ReactNode } from "react";
import theme from "../assets/theme";
import { useThemeContext } from "../ThemeContext";

export const UnderlinedAnchor: FC<{
  children: ReactNode;
  to: string;
  download?: boolean;
  onClick?: () => void;
  removeUnderline?: boolean;
}> = ({ children, to, download, onClick, removeUnderline }) => {
  const { smallDotRef, bigDotRef } = useThemeContext();

  return (
    <a
      onClick={onClick}
      style={{ cursor: "none", textDecoration: removeUnderline?"none": "underline" }}
      href={to}
      rel="noreferrer noopener"
      target="_blank"
      download={download}
      onMouseEnter={() => {
        if (!!bigDotRef?.current && !!smallDotRef?.current) {
          smallDotRef.current.style.backgroundColor = theme.colors.hotpink;
          smallDotRef.current.style.scale = "0.4";
          bigDotRef.current.style.scale = "0.6";
          bigDotRef.current.style.border = "none";
          bigDotRef.current.style.backgroundColor = theme.colors.ghostpink;
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
