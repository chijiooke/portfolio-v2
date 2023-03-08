import React, { useContext } from "react";

type data = {
  smallDotRef?: React.MutableRefObject<HTMLDivElement | null>;
  bigDotRef?: React.MutableRefObject<HTMLDivElement | null>;
};
export const ThemeContext = React.createContext<data>({});

export const useThemeContext = () => useContext(ThemeContext);
