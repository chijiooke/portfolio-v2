import { Canvas } from "@react-three/fiber";
import React, { FC } from "react";
import { Container } from "../../components/Container";
import { ScrollSnapWrapper } from "../../components/ScrollSnapWrapper";
import { StyledSpanTags } from "../../components/StyledSpanTags";
import ThreeJsCylinderComponent from "../../components/ThreeJSCylinderComponent";
import "./landing-section.css";

export const LandingSection: FC<{
  smallDotRef?: React.MutableRefObject<HTMLDivElement | null>;
  bigDotRef?: React.MutableRefObject<HTMLDivElement | null>;
}> = ({ smallDotRef, bigDotRef }) => {
  return (
    <ScrollSnapWrapper>
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          transition: "0.8s",
          position: "absolute",
          top: 0,
          zIndex: 0,
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
            Client-Side focused Software Engineer {"  "}
          </StyledSpanTags>
          (Core Typescript) currently based in{" "}
          <StyledSpanTags>Abuja, Nigeria.</StyledSpanTags> <br></br>Currently, I
          am focused on creatively solving problems and I am open to
          collaborating on{" "}
          <StyledSpanTags>freelance and open source projects.</StyledSpanTags>
        </p>
        <button
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="1200"
          style={{ width: "fit-content", zIndex: "900" }}
        >
          {" "}
          Get In Touch
        </button>
      </Container>
    </ScrollSnapWrapper>
  );
};
