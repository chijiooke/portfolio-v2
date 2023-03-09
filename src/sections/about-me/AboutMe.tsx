import me from "../../assets/display-picture.jpg";
import { Container } from "../../components/Container";
import { ScrollSnapWrapper } from "../../components/ScrollSnapWrapper";
import { SectionHeader } from "../../components/SectionHeader";
import { StyledSpanTags } from "../../components/StyledSpanTags";
import { UnderlinedAnchor } from "../../components/UnderlinedAnchor";
import "./about-me.css";
// import Fade from 'react-reveal/Fade';

export const AboutMe = () => {


  return (
    <ScrollSnapWrapper>
      {/* <Canvas
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
          // position={[-9, 0, 0]}
          wireframe={true}
          smallDotRef={smallDotRef}
          bigDotRef={bigDotRef}
        />
      </Canvas> */}
{/* 


<Fade bottom>
          <h1>React Reveal</h1>
        </Fade> */}


      <Container>
        <SectionHeader>About Me</SectionHeader>
        <div className="about__me__wrapper">
          <div className="about__me__text__wrapper">
            <p className="about__me__text">
              2 years before graduating from the{" "}
              <UnderlinedAnchor to="https://fupre.edu.ng/">
                Federal University of Petroleum Resources, Effurun, Nigeria.
              </UnderlinedAnchor>{" "}
              <StyledSpanTags> (BSc. Mathematics)</StyledSpanTags> we were
              exposed to the basics of web design/development, where I learnt
              how to add colors to web-pages and make alerts pop up at a click
              of a button. I was amazed and seamingly obsessed with my new
              trick and with some personal study I learnt the basics of HTML, CSS, JS &
              PHP. In no time I took on a voluteer role at an NGO as a web
              developer for a time period to better improve.{" "}
            </p>
            <p className="about__me__text">
              fast forward a couple of years later, I've been oportuned to work
              in various sectors{" "}
              <UnderlinedAnchor to="https://raaxo.ng/">SAAS</UnderlinedAnchor>,{" "}
              <UnderlinedAnchor to="https://multonion.com/">
                Procurement
              </UnderlinedAnchor>{" "}
              and even{" "}
              <UnderlinedAnchor to="https://fastmeet.cam">
                open source
              </UnderlinedAnchor>{" "}
              while utilizing my passion for combining typography, imagery,
              Interactions, data and colors to create solutions to diverse
              business problems.
            </p>{" "}
          </div>
          <div className="image__wrapper">
            <img
              src={me}
              alt="me"
              className="my__image"
              onMouseEnter={() => {}}
            />
          </div>
        </div>
      </Container>
    </ScrollSnapWrapper>
  );
};
