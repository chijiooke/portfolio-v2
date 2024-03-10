import { Canvas } from "@react-three/fiber";
import React, { FC } from "react";
import { Color } from "three";
import { Container } from "../../components/Container";
import { ScrollSnapWrapper } from "../../components/ScrollSnapWrapper";
import { StyledSpanTags } from "../../components/StyledSpanTags";
import ThreeJsCylinderComponent from "../../components/ThreeJSCylinderComponent";
import "./landing-section.css";

export const LandingSection: FC<{
  smallDotRef?: React.MutableRefObject<HTMLDivElement | null>;
  bigDotRef?: React.MutableRefObject<HTMLDivElement | null>;
}> = ({ smallDotRef, bigDotRef }) => {
  const yearsOFExperience = new Date().getFullYear() - 2019
  return (
    <ScrollSnapWrapper id="home">
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          transition: "0.8s",
          position: "absolute",
          top: 0,
          zIndex: 0,
          display: window.screen.width < 600 ? "none" : "block",
        }}
      >
        <ambientLight />
        <ThreeJsCylinderComponent
          position={[6, 0, 0]}
          wireframe={true}
          smallDotRef={smallDotRef}
          bigDotRef={bigDotRef}
        />
      </Canvas>
      <Container>
        <div className="landing__section__wrapper">
          <StyledSpanTags>Hi, my name is</StyledSpanTags>

          <p
            className="name__text"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="800"
          >
            {" "}
            chijioke.
          </p>
          <p
            className="description__text"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="1000"
          >
            I am a{" "}
            <StyledSpanTags>
              Senior Frontend Engineer {"  "}
            </StyledSpanTags>
            with over {yearsOFExperience}+ years of experience, focused on creatively solving business problems using{" "}
            <StyledSpanTags>
              modern technologies
            </StyledSpanTags>{" "}
            , I am open to collaborating on{" "}
            <StyledSpanTags>freelance and open source projects.</StyledSpanTags>
          </p>
        
          <a href="#contact" style={{ textDecoration: "none" }}>
            {" "}
            <button
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-delay="1200"
              style={{
                width: "fit-content",
                zIndex: "9",
                position: "relative",
                backgroundColor: "#242424",
                color: "#fff",
              }}
            >
              {" "}
              Get In Touch
            </button>
          </a>
        </div>
      </Container>
    </ScrollSnapWrapper>
  );
};
