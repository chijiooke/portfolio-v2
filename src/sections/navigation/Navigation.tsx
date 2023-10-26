import { animated, config, useSpring } from "@react-spring/web";
import { CloseCircle, DocumentText, HambergerMenu } from "iconsax-react";
import { useEffect, useState } from "react";
import cv from "../../assets/silva_chijioke_resume.pdf";
import theme from "../../assets/theme";
import logo from "../../assets/wireframe-globe.png";
import { UnderlinedAnchor } from "../../components/UnderlinedAnchor";
import { contactLinks, navData } from "./nav-data";
import "./navigation.css";

export const Navbar = () => {
  const [toggled, settoggled] = useState<boolean>(false);
  // const [toggleSideNav, setToggleSideNav] = useState<boolean>(false);
  const [right, setRight] = useState<number>(-400);

  const openNavigation = () => {
    // setToggleSideNav((prev) => !prev);
    settoggled(true);
    setRight(-600);
    slideAnimation1();
    slideAnimation2();
  };

  const closeNavigation = () => {
    // setToggleSideNav((prev) => !prev);
    setRight(-600);
    backgroundTimeOut();
  };

  const slideAnimation1 = () =>
    setTimeout(() => {
      setRight(80);
      // clearInterval()
    }, 20);

  const slideAnimation2 = () =>
    setTimeout(() => {
      setRight(30);
    }, 1000);

  const backgroundTimeOut = () =>
    setTimeout(() => {
      settoggled((prev) => !prev);
    }, 1200);

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

        <div className="large__device__nav">
          {" "}
          {navData.map((nav, index) => (
            <a
              className="nav_link_item"
              key={index}
              href={`#${nav}`}
              onClick={() => {
                window.location.href = `#${nav}`;
              }}
            >
              {nav.split("-").join(" ")}
            </a>
          ))}
          <UnderlinedAnchor to="https://docs.google.com/document/d/1hSHnlShZCinjZqNDsObMgTQ6t0ALyFZ_d_VPB0MvAcE/edit?usp=sharing">
            <button>Resume</button>
          </UnderlinedAnchor>
        </div>
        <div className="smaller__device__nav">
          <HambergerMenu
            size="32"
            color={theme.colors.mildGreen}
            data-aos="fade-left"
            data-aos-delay="300"
            onClick={openNavigation}
          />

          <a
            href="https://docs.google.com/document/d/1hSHnlShZCinjZqNDsObMgTQ6t0ALyFZ_d_VPB0MvAcE/edit?usp=sharing"
            style={{ display: "flex" }}
          >
            <DocumentText
              size="25"
              color={theme.colors.mildGreen}
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-delay="400"
            />
          </a>
        </div>
      </div>
      <div
        className="side__nav__wrapper "
        style={{ display: toggled ? "flex" : "none" }}
        onClick={() => {
          closeNavigation();
        }}
      >
        <div
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
            {navData.map((nav, index) => (
              <a
                key={index}
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
            <div className="social__links">
              {contactLinks.map((contactlink, index) => (
                <UnderlinedAnchor
                  keyProp={index}
                  to={contactlink.link}
                  onClick={() => {
                    closeNavigation();
                    window.open(contactlink.link, "_blank");
                  }}
                >
                  {contactlink.acronym}
                </UnderlinedAnchor>
              ))}
            </div>
            <UnderlinedAnchor to={cv} removeUnderline>
              <button
                className="download__resume"
                onClick={() => {
                  closeNavigation();
                  window.open(`${cv}`, "_blank");
                }}
              >
                View My Resume
              </button>
            </UnderlinedAnchor>
          </div>
        </div>
      </div>
    </>
  );
};
