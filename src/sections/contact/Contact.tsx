import { useForm } from "@formspree/react";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
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
    name: string;
  };
  const [state, handleSubmit] = useForm("xnqyzayg");
  const { smallDotRef, bigDotRef } = useThemeContext();
  const [smallScreen, setsmallScreen] = useState(false);
  const [data, setData] = useState<message>({
    email: "",
    message: "",
    name: "",
  });

  useEffect(() => {
    state.succeeded &&
      setData({
        email: "",
        message: "",
        name: "",
      });
    if (window.screen.width < 600) {
      setsmallScreen(true);
    } else {
      setsmallScreen(false);
    }
  }, [state.succeeded, window.screen.width]);

  return (
    <ScrollSnapWrapper id="contact">
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          transition: "0.8s",
          position: "absolute",
          top: 0,
          zIndex: 0,
          display: smallScreen ? "none" : "block",
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
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-delay="800"
        // data-aos-anchor-placement="center-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(data);
        }}
      >
        {state.succeeded ? (
          <div className="appreciation__message">
            Thanks for reaching out, you should get a response in no time ✨
          </div>
        ) : (
          <p
            className="info__text form__greeting__text"
            style={{ display: window.screen.height < 900 ? "none" : "block" }}
          >
            Hello, I'm always interested in contributing to open source
            projects.
            <br></br> <br></br>Kindly Reach out or email me at{" "}
            <UnderlinedAnchor to="mailto:silva.chijioke.michael@gmail.com">
              silva.chijioke.michael@gmail.com
            </UnderlinedAnchor>{" "}
            for open-source collaborations, proposals or banter on why Iron Man
            is earth's greatest super hero.
          </p>
        )}
        {/* <div style={{ display: "flex", gap: "1rem" }}> */}
        <div className="contact__inputfield">
          <label
            className="input__label"
            htmlFor="name"
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1200"
            data-aos-offset="300"
          >
            Name
          </label>
          <input
            data-aos="fade-in"
            data-aos-delay="1500"
            data-aos-easing="ease-in-sine"
            data-aos-offset="300"
            id="name"
            type="text"
            name="name"
            placeholder="Enter Your Name..."
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          />
        </div>
        <div className="contact__inputfield">
          <label
            className="input__label"
            htmlFor="email"
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-offset="300"
            data-aos-delay="1800"
          >
            Email Address
          </label>
          <input
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-offset="300"
            data-aos-delay="2100"
            id="email"
            type="email"
            name="email"
            value={data.email}
            placeholder="example@mail.com"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
        </div>
        {/* </div> */}

        <div className="contact__inputfield">
          <label
            className="input__label"
            htmlFor="messsage"
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            // data-aos-offset="300"
            data-aos-delay="2400"
          >
            Message
          </label>
          <textarea
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            // data-aos-offset="300"
            data-aos-delay="2700"
            id="messsage"
            name="message"
            value={data.message}
            placeholder="hello there.."
            rows={4}
            onChange={(e) => {
              setData({ ...data, message: e.target.value });
            }}
          />
        </div>
        {/* <div > */}
        <button
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="3300"
          type="submit"
          disabled={
            state.submitting ||
            data.email === "" ||
            data.message === "" ||
            data.name === ""
          }
        >
          {state.submitting ? "sending..." : "Send"}
        </button>
        {/* </div> */}

        <p
          className="email__me"
          style={{
            display: window.screen.height < 900 ? "block" : "none",
            textAlign: "center",
          }}
        >
          or email me at{" "}
          <UnderlinedAnchor to="mailto:michaelsylva36@gmail.com">
            michaelsylva36@gmail.com
          </UnderlinedAnchor>{" "}
        </p>
      </form>
      <div className="footer">
        Designed & Built by Silva Chijioke Michael
        <p className="info__text">Built with ReactJS · Typescript · ThreeJS</p>
      </div>
    </ScrollSnapWrapper>
  );
};
