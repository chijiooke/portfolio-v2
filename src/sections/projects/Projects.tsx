import { Canvas } from "@react-three/fiber";
import { ArrowRight3, DocumentCode, ExportSquare } from "iconsax-react";
import { ScrollSnapWrapper } from "../../components/ScrollSnapWrapper";
import { SectionHeader } from "../../components/SectionHeader";
import ThreeJsDonutComponent from "../../components/ThreeJSDonutComponent";
import { UnderlinedAnchor } from "../../components/UnderlinedAnchor";
import { useThemeContext } from "../../ThemeContext";
import projects from "./project-data";
import "./projects.css";
import { skills } from "./skills-data";

export const Projects = () => {
  const { smallDotRef, bigDotRef } = useThemeContext();
  return (
    <ScrollSnapWrapper>
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
                <p>{project.title}</p>
                <p className="project__description">{project.description}</p>
                <p>{project.skills.join(" · ")}</p>
                <div className="project__footer">
                  {" "}
                  <p>{project.type}</p>
                  <div>
                    {project.links.website ? (
                      <UnderlinedAnchor to={project.links.website}>
                        <ExportSquare color="#37d67a" />{" "}
                      </UnderlinedAnchor>
                    ) : (
                      ""
                    )}

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
          <SectionHeader>Skills & Tools</SectionHeader>
          <div
            className="skill__wrapper"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="800"
          >
            {skills.map((skill) => (
              <div className="skill">
                <ArrowRight3 color="#37d67a" />
                {skill.skill}
              </div>
            ))}
            <div className="resume__wrapper">
              For more info
              <UnderlinedAnchor to="">
                <button>Download Resume</button>
              </UnderlinedAnchor>
            </div>
          </div>
        </div>
      </div>
    </ScrollSnapWrapper>
  );
};
