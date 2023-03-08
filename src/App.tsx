import { useEffect, useRef } from "react";
import { useMousePosition } from "./utils/useMousePosition";

import { PageWapper } from "./components/PageWapper";
import { ScrollGuide } from "./components/ScrollGuide";
import { LandingSection } from "./sections/landing-section/LandingSection";
import { AboutMe } from "./sections/about-me/AboutMe";
import { Navbar } from "./components/Navbar";
import { ThemeContext } from "./ThemeContext";
import { Projects } from "./sections/projects/Projects";
import { Contact } from "./sections/contact/Contact";

const App = () => {
  // mouse refs
  const position = useMousePosition();
  const smallDotRef = useRef<HTMLDivElement | null>(null);
  const bigDotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (position && !!bigDotRef.current && !!smallDotRef.current) {
      smallDotRef.current.style.top = `${position.y}px`;
      smallDotRef.current.style.left = `${position.x}px`;

      bigDotRef.current.style.top = `${position.y - 25}px`;
      bigDotRef.current.style.left = `${position.x - 25}px`;
    }
    return;
  }, [position]);

  return (
    <ThemeContext.Provider value={{ smallDotRef, bigDotRef }}>
      <PageWapper>
        <div
          style={{
            boxSizing: "border-box",
            color: "#fff",
            margin: 0,
            padding: 0,
            zIndex: 20,
            top: 0,
            position: "relative",
            overflow: "scroll",
            scrollSnapPointsY: "repeat(100vh)",
            scrollSnapType: "y mandatory",
            overflowX: "hidden",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Navbar />
          <LandingSection smallDotRef={smallDotRef} bigDotRef={bigDotRef} />
          <AboutMe />
          <Projects />
          <Contact/>
        </div>
        <ScrollGuide />

        <div ref={bigDotRef} className="cursor-dot-outline"></div>
        <div ref={smallDotRef} className="cursor-dot"></div>
      </PageWapper>
    </ThemeContext.Provider>
  );
};

export default App;
