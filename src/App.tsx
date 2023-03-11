import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { Navbar } from "./components/Navbar";
import { PageWapper } from "./components/PageWapper";
import { ScrollGuide } from "./components/ScrollGuide";
import { AboutMe } from "./sections/about-me/AboutMe";
import { Contact } from "./sections/contact/Contact";
import { LandingSection } from "./sections/landing-section/LandingSection";
import { Projects } from "./sections/projects/Projects";
import { ThemeContext } from "./ThemeContext";
import { useMousePosition } from "./utils/useMousePosition";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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
    <ThemeContext.Provider value={{ smallDotRef, bigDotRef}}>
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
          onScroll={ () =>  AOS.init()}
        >
          <Navbar />
          <LandingSection smallDotRef={smallDotRef} bigDotRef={bigDotRef} />
          <AboutMe />
          <Projects />
          <Contact />
        </div>
        <ScrollGuide />

        <div ref={bigDotRef} className="cursor-dot-outline"></div>
        <div ref={smallDotRef} className="cursor-dot"></div>
      </PageWapper>
    </ThemeContext.Provider>
  );
};

export default App;
