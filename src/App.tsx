import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "./sections/navigation/Navigation";
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

  // wrapper div ref
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);

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
          ref={wrapperRef}
          className="scroll__snap__container"
          onScroll={(e) => {
            e.stopPropagation();
            AOS.init();
            if (
              !!wrapperRef.current?.scrollTop &&
              wrapperRef.current?.scrollTop >= 2000
            ) {
              setIsAtBottom(true);
            } else {
              setIsAtBottom(false);
            }
          }}
        >
          <Navbar />
          <LandingSection smallDotRef={smallDotRef} bigDotRef={bigDotRef} />
          <AboutMe />
          <Projects />
          <Contact />
        </div>
        <ScrollGuide isAtBottom={isAtBottom} />

        <div ref={bigDotRef} className="cursor-dot-outline"></div>
        <div ref={smallDotRef} className="cursor-dot"></div>
      </PageWapper>
    </ThemeContext.Provider>
  );
};

export default App;
