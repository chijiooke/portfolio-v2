import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import ThreeJsCylinderComponent from "./components/ThreeJSCylinderComponent";
import { useMousePosition } from "./utils/useMousePosition";
import { LandingSection } from "./sections/LandingSection";

const App = () => {
  const position = useMousePosition();
  const smallDotRef = useRef<HTMLDivElement | null>(null);
  const bigDotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (position && !!bigDotRef.current && !!smallDotRef.current) {
      smallDotRef.current.style.top = `${position.y}px`;
      smallDotRef.current.style.left = `${position.x}px`;

      bigDotRef.current.style.top = `${position.y - 25}px`;
      bigDotRef.current.style.left = `${position.x - 25}px`;
    }
    return;
  }, [position]);
  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        display: "flex",
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          color: "#fff",
          margin: 0,
          padding: 0,
          zIndex: 20,
          top: 0,
          position: "relative",
          overflow: "scroll",
          scrollSnapPointsY: "repeat(100vh)",
          scrollSnapType: "y mandatory",
          overflowX: "hidden",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
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
          <ThreeJsCylinderComponent
            position={[6, 0, 0]}
            wireframe={true}
            smallDotRef={smallDotRef}
            bigDotRef={bigDotRef}
          />
        </Canvas>
        <LandingSection />
        <LandingSection />
      </div>

      <div ref={bigDotRef} className="cursor-dot-outline"></div>
      <div ref={smallDotRef} className="cursor-dot"></div>
    </div>
  );
};

export default App;
