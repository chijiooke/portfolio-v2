// import { config, useSpring } from "@react-spring/three";
import { animated, config, useSpring } from "@react-spring/web";
import { CloseCircle, DocumentText, HambergerMenu } from "iconsax-react";
import { useState } from "react";
import cv from "../../assets/SILVA_MICHAEL_CV.pdf";
import theme from "../../assets/theme";
import logo from "../../assets/wireframe-globe.png";
import { UnderlinedAnchor } from "../../components/UnderlinedAnchor";
import { navData } from "./nav-data";
import "./navigation.css";

export const Navbar = () => {
  const [toggled, settoggled] = useState<boolean>(false);
  const [toggleSideNav, setToggleSideNav] = useState<boolean>(false);

  const { right } = useSpring({
    right: toggleSideNav ? 30 : -400,
    config: config.gentle,
  });

  const backgroundTimeOut = () =>
    setTimeout(() => {
      settoggled((prev) => !prev);
    }, 800);

  return (
    <>
      <div
        className="nav__bar"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-delay="100"
      >
        <div
          style={{ display: "flex", alignItems: "center", gap: "0.02rem" }}
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-delay="400"
        >
          <img src={logo} width="50px" height="50px" style={{}} />{" "}
          <p
            style={{
              fontSize: "1.2rem",
              letterSpacing: "-0.15rem",
              color: theme.colors.mildGreen,
            }}
          >
            chijioke{" "}
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
          <HambergerMenu
            size="32"
            // className="hamburger"
            color={theme.colors.mildGreen}
            data-aos="fade-left"
            // data-aos-easing="linear"
            data-aos-delay="300"
            onClick={() => {
              settoggled((prev) => !prev);
              setToggleSideNav((prev) => !prev);
            }}
          />
          <UnderlinedAnchor to={cv} download>
            <DocumentText
              size="25"
              color={theme.colors.mildGreen}
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-delay="400"
            />
          </UnderlinedAnchor>
        </div>
      </div>
      <animated.div
        className="side__nav__wrapper "
        style={{ display: toggled ? "flex" : "none" }}
        onClick={() => {
          setToggleSideNav((prev) => !prev);
          backgroundTimeOut();
        }}
      >
        <animated.div className="side__nav" style={{ right: right }}>
          <button className="nav__close__btn">
            <CloseCircle />
          </button>
          <div className="navigation">
            {navData.map((nav) => (
              <a href={`#${nav}`}>{nav.split("-").join(" ")}</a>
            ))}
          </div>
          <div className="social__links__Resume__wrapper">
            <UnderlinedAnchor to={cv} download>
              <button className="download__resume">My Resume</button>
            </UnderlinedAnchor>
            <div className="social__links">
              <UnderlinedAnchor to="https://github.com/chijiooke">
                GH
              </UnderlinedAnchor>
              <UnderlinedAnchor to="https://twitter.com/chijiooke_">
                TW
              </UnderlinedAnchor>
              <UnderlinedAnchor to="https://www.linkedin.com/in/chijiooke">
                LN
              </UnderlinedAnchor>
              <UnderlinedAnchor to="mailto:michaelsylva36@gmail.com">
                MAIL
              </UnderlinedAnchor>
            </div>
          </div>
        </animated.div>
      </animated.div>
    </>
  );
};
