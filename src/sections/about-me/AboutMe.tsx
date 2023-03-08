import { Container } from "../../components/Container";
import { ScrollSnapWrapper } from "../../components/ScrollSnapWrapper";
import { StyledSpanTags } from "../../components/StyledSpanTags";
import { UnderlinedAnchor } from "../../components/UnderlinedAnchor";
import me from "../../assets/display-picture.jpg";
import "./about-me.css";

export const AboutMe = () => {
  return (
    <ScrollSnapWrapper>
      <Container>
        <h6>About Me</h6>
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
              tricks with personal study I learnt the basics of HTML,CSS, JS &
              PHP an in no time I took on a voluteer role at an NGO as a web
              developer for a time period.{" "}
            </p>
            <p className="about__me__text">
              fast forward a couple of years later I have had the oportunity to
              work in various sectors{" "}
              <UnderlinedAnchor to="https://raaxo.ng/">
                SAAS
              </UnderlinedAnchor>
              ,{" "}
              <UnderlinedAnchor to="https://multonion.com/">
                Procurement
              </UnderlinedAnchor>{" "}
              and even{" "}
              <UnderlinedAnchor to="https://fastmeet.cam">
                 open source
              </UnderlinedAnchor>{" "}
              fallen hoplessly in love with combining typography, imagery,
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
