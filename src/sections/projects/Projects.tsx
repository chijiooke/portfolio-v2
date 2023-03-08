import { Canvas } from "@react-three/fiber";
import {
    ArrowRight3,
    DocumentCode,
    ExportSquare
} from "iconsax-react";
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
          position={[-6, 0, 0]}
          wireframe={true}
          smallDotRef={smallDotRef}
          bigDotRef={bigDotRef}
        />
        <ThreeJsDonutComponent
          position={[22, 0, -10]}
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
            {projects.map((project) => (
              <div className="project__card">
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
          <div className="skill__wrapper">
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
