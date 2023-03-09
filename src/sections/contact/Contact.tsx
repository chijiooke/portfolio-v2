import { useForm } from "@formspree/react";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Container } from "../../components/Container";
import { ScrollSnapWrapper } from "../../components/ScrollSnapWrapper";
import { SectionHeader } from "../../components/SectionHeader";
import ThreeJsDonutComponent from "../../components/ThreeJSDonutComponent";
import { UnderlinedAnchor } from "../../components/UnderlinedAnchor";
import { useThemeContext } from "../../ThemeContext";
import "./contact.css";

export const Contact = () => {
  type message = {
    email: string;
    message: string;
  };
  const [state, handleSubmit] = useForm("xnqyzayg");
  const { smallDotRef, bigDotRef } = useThemeContext();
  const [data, setData] = useState<message>({ email: "", message: "" });

  if (state.succeeded) {
    return <div>Payment has been handled successfully!</div>;
  }
  return (
    <ScrollSnapWrapper>
      {" "}
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
        <ThreeJsDonutComponent
          position={[0, -4, 1]}
          scale={0.25}
          rotation={[0, 0, 0]}
          wireframe={true}
          smallDotRef={smallDotRef}
          bigDotRef={bigDotRef}
        />
      </Canvas>
      {/* <Container> */}
      <SectionHeader>Get In Touch</SectionHeader>
      <form
        className="contact__form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(data);
        }}
      >
        <p className="info__text">
          Hi <span className="waving__hand">👋🏿</span>, I'm always interested in
          contributing to open source projects.
          <br></br> <br></br>Kindly Reach out or email me at{" "}
          <UnderlinedAnchor to="mailto:michaelsylva36@gmail.com">
            michaelsylva36@gmail.com
          </UnderlinedAnchor>{" "}
          for open-source collaborations, proposals & banter on why Iron Man is
          earth's greatest super hero.
        </p>
        {/* <div style={{ display: "flex", gap: "1rem" }}> */}
        <div className="contact__inputfield">
          <label className="input__label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Tony Stark"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
        </div>
        <div className="contact__inputfield">
          <label className="input__label" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="richesttony01@mail.com"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
        </div>
        {/* </div> */}

        <div className="contact__inputfield">
          <label className="input__label" htmlFor="messsage">
            Message
          </label>
          <textarea
            id="messsage"
            name="message"
            placeholder="hello there.."
            rows={4}
            onChange={(e) => {
              setData({ ...data, message: e.target.value });
            }}
          />
        </div>

        <button type="submit" disabled={state.submitting || data.email === ""}>
          {state.submitting ? "sending..." : "Send"}
        </button>
      </form>
      {/* </Container> */}
      <div className="footer">
        Designed & Built by Silva Chijioke Michael
        <p className="info__text">Built with ReactJS · Typescript · ThreeJS</p>
      </div>
    </ScrollSnapWrapper>
  );
};
