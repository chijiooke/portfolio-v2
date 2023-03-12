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

  const closeNavigation = () => {
    setToggleSideNav((prev) => !prev);
    backgroundTimeOut();
  };

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
            color={theme.colors.mildGreen}
            data-aos="fade-left"
            data-aos-delay="300"
            onClick={() => {
              settoggled((prev) => !prev);
              setToggleSideNav((prev) => !prev);
              // closeNavigation();
              // setToggleSideNav((prev) => !prev);
            }}
          />
          <UnderlinedAnchor to={cv}>
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
          closeNavigation();
        }}
      >
        <animated.div
          className="side__nav"
          style={{ right: right }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <button
            className="nav__close__btn"
            onClick={() => {
              closeNavigation();
            }}
          >
            <CloseCircle />
          </button>
          <div className="navigation">
            {navData.map((nav) => (
              <a
                href={`#${nav}`}
                onClick={() => {
                  window.location.href = `#${nav}`;
                  closeNavigation();
                }}
              >
                {nav.split("-").join(" ")}
              </a>
            ))}
          </div>
          <div className="social__links__Resume__wrapper">
            <UnderlinedAnchor to={cv}>
              <button
                className="download__resume"
                onClick={() => {
                  closeNavigation();
                  window.open(`${cv}`, "_blank");
                }}
              >
                My Resume
              </button>
            </UnderlinedAnchor>
            <div
              className="social__links"
              // onClick={() => {
              //   closeNavigation();
              // }}
            >
              <UnderlinedAnchor
                to=""
                onClick={() => {
                  closeNavigation();
                  window.open("https://github.com/chijiooke", "_blank");
                }}
              >
                GH
              </UnderlinedAnchor>
              <UnderlinedAnchor
                to=""
                onClick={() => {
                  closeNavigation();
                  window.open("https://twitter.com/chijiooke_", "_blank");
                }}
              >
                TW
              </UnderlinedAnchor>
              <UnderlinedAnchor
                to=""
                onClick={() => {
                  closeNavigation();
                  window.open(
                    "https://www.linkedin.com/in/chijiooke",
                    "_blank"
                  );
                }}
              >
                LN
              </UnderlinedAnchor>
              <UnderlinedAnchor
                to=""
                onClick={() => {
                  closeNavigation();
                  window.open("mailto:michaelsylva36@gmail.com", "_blank");
                }}
              >
                MAIL
              </UnderlinedAnchor>
            </div>
          </div>
        </animated.div>
      </animated.div>
    </>
  );
};
