import React from "react";
import { HambergerMenu } from "iconsax-react";
import { DocumentText } from "iconsax-react";
import logo from "../assets/wireframe-globe.png";
import theme from "../assets/theme";

export const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        padding: "1rem 3rem",
        marginTop: "1rem",
        maxWidth: "1920px",
        zIndex: "900",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.02rem" }}>
        <img src={logo} width="50px" height="50px" style={{}} />{" "}
        <p style={{ fontSize:'1.2rem',letterSpacing: "-0.15rem", color: theme.colors.mildGreen }}>
          chijioke{" "}
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
        <HambergerMenu size="32" color={theme.colors.mildGreen} />
        <DocumentText size="25" color={theme.colors.mildGreen} />
      </div>
    </div>
  );
};
