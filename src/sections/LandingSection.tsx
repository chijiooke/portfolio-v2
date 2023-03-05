import React from "react";
import { Container } from "../components/Container";
import { ScrollSnapWrapper } from "../components/ScrollSnapWrapper";

export const LandingSection = () => {
  return (
    <ScrollSnapWrapper>
      <Container>
        <span
          style={{
            fontSize: "1.5rem",
            marginBottom: "-40",
            padding: 0,
            alignSelf: "start",
          }}
        >
          Hello, my name is
        </span>
        <p
          style={{
            fontSize: "8rem",
            margin: 0,
            padding: 0,
            lineHeight: "8rem",
            height: "8rem",
            fontWeight: "bolder",
          }}
        >
          {" "}
          Chijioke
        </p>
      </Container>
    </ScrollSnapWrapper>
  );
};
