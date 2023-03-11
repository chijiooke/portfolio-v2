import Aos from "aos";
import React, { Children, FC, ReactNode, useEffect, useState } from "react";

export const ScrollSnapWrapper: FC<{ children: ReactNode; id: string }> = ({
  children,
  id,
}) => {
  useEffect(() => {
    Aos.init();
    // Aos.refresh()
  }, []);

  // const [isAtBottom, setIsAtBottom] = useState<boolean>(false);
  // useEffect(() => {
  //   window.onscroll = function (ev) {
  //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //       setIsAtBottom(true);
  //     }
  //     setIsAtBottom(false);
  //   };
  // }, [window.scrollY]);

  return (
    <div
      id={id}
      style={{
        boxSizing: "border-box",
        color: "#fff",
        width: "100vw",
        maxWidth: "100vw",
        minHeight: "100vh",
        maxHeight: "100vh",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        MozBoxSizing: "border-box",
        scrollSnapAlign: "start",
        position: "relative",
        // padding:'200px'
      }}
    >
      {children}
    </div>
  );
};
