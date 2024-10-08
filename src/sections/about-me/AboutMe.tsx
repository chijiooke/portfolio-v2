import { useState } from "react";
import me from "../../assets/display-picture.png";
import naruto from "../../assets/naruto-vs-sasuke-anime.gif";
import { Container } from "../../components/Container";
import { ScrollSnapWrapper } from "../../components/ScrollSnapWrapper";
import { SectionHeader } from "../../components/SectionHeader";
import { StyledSpanTags } from "../../components/StyledSpanTags";
import { UnderlinedAnchor } from "../../components/UnderlinedAnchor";
import "./about-me.css";

export const AboutMe = () => {
  const [imgSrc, setImgSrc] = useState(me);

  const yearsOFExperience = new Date().getFullYear() - 2019
  const yearsOfFrontendExperience = new Date().getFullYear() - 2020
  return (
    <ScrollSnapWrapper id="about">
      <Container>
        <SectionHeader>About Me</SectionHeader>
        <div className="about__me__wrapper">
          <div className="about__me__text__wrapper">
            <p
              className="about__me__text"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-delay="800"
            >
              I am a software engineer with over {yearsOFExperience}+ years of experience working with web technologies . I am familiar with tools/progamming languages like{" "}
              <StyledSpanTags>
                Typescript, Javascript, Golang, ReactJS, VueJS, Redux, RTK, CSS, Sass, Pub/SUb, Rabbit MQ
                Docker, Kafka, NodeJs and Express.
              </StyledSpanTags>
              <br></br>
              I have experience working with distributed systems and variety of software achitechural patterns.
            </p>
            <p
              className="about__me__text"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-delay="800"
            >
              With a bachelors from the{" "}
              <UnderlinedAnchor to="https://fupre.edu.ng/">
                Federal University of Petroleum Resources, Effurun, Nigeria.
              </UnderlinedAnchor>{" "}
              <StyledSpanTags> (BSc. Mathematics)</StyledSpanTags> and
              experience in optimizing processes for faster and better results, I have been oportuned to work
              in various sectors{" "}
              <UnderlinedAnchor to="https://raaxo.ng/">SAAS</UnderlinedAnchor>,{" "}
              <UnderlinedAnchor to="https://multonion.com/">
                Procurement
              </UnderlinedAnchor>{" "}
              and have contributed to a number of{" "}
              <UnderlinedAnchor to="https://github.com/chijiooke">
                Open-Source
              </UnderlinedAnchor>{" "}
              projects while utilizing my passion for combining typography,
              imagery, Interactions, data and colors to create solutions to
              diverse business problems.
            </p>{" "}
          </div>
          <div
            className="image__wrapper"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="600"
          >
            <img
              // onMouseOver={() => setImgSrc(naruto)}
              // onMouseLeave={() => setImgSrc(me)}
              src={imgSrc}
              alt="image of Chijoke's face"
              className="my__image"
              onMouseEnter={() => {}}

            />
          </div>
        </div>
      </Container>
    </ScrollSnapWrapper>
  );
};
