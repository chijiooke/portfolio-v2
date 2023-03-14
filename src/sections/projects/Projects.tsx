import { ArrowRight3, DocumentCode, ExportSquare } from "iconsax-react";
import { ScrollSnapWrapper } from "../../components/ScrollSnapWrapper";
import { SectionHeader } from "../../components/SectionHeader";
import { UnderlinedAnchor } from "../../components/UnderlinedAnchor";
import { useThemeContext } from "../../ThemeContext";
import projects from "./project-data";
import "./projects.css";
import { skills } from "./skills-data";
import cv from "../../assets/resume.pdf";
import ThreeJsDonutComponent from "../../components/ThreeJSDonutComponent";
import { Canvas } from "@react-three/fiber";

export const Projects = () => {
  const { smallDotRef, bigDotRef } = useThemeContext();
  return (
    <ScrollSnapWrapper id="projects-&-skills">
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
          position={[-6, 0, 1]}
          wireframe={true}
          smallDotRef={smallDotRef}
          bigDotRef={bigDotRef}
        />
      </Canvas>
      <div className="skill__section__wrapper">
        <div>
          {" "}
          <SectionHeader>Featured Projects</SectionHeader>
          <div className="project__card__wrapper">
            {projects.map((project, index) => (
              <div
                className="project__card"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay={800 + 200 * index}
              >
                <p className="project__title">{project.title}</p>
                <p className="project__description">{project.description}</p>
                <p className="project__skills">{project.skills.join(" · ")}</p>
                <div className="project__footer">
                  {" "}
                  <p className="alt__descr">{project.altDescription}</p>
                  <p className="project__type">{project.type}</p>
                  <div>
                    {project.links.website ? (
                      <UnderlinedAnchor to={project.links.website}>
                        <ExportSquare color="#37d67a" />
                      </UnderlinedAnchor>
                    ) : (
                      ""
                    )}{" "}
                    {project.links.github ? (
                      <UnderlinedAnchor to={project.links.github}>
                        <DocumentCode color="#37d67a" />
                      </UnderlinedAnchor>
                    ) : (
                      ""
                    )}
                  </div>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {" "}
          <SectionHeader>Skills & Resume</SectionHeader>
          <div
            className="skills__and__resume"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="800"
          >
            <div className="skill__wrapper">
              {skills.map((skill) => (
                <div className="skill">
                  <ArrowRight3 color="#37d67a" />
                  {skill.skill}
                </div>
              ))}
            </div>

            <div className="resume__wrapper">
              <p>For more info</p>
              <UnderlinedAnchor to={cv} download removeUnderline>
                <button>Download Resume</button>
              </UnderlinedAnchor>
            </div>
          </div>
        </div>
      </div>
    </ScrollSnapWrapper>
  );
};
