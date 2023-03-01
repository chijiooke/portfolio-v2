import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Cylinder3d from "./CylinderComponent";

const App = () => {
  return (
    <>
      <section className="App-header">
        <Canvas style={{width:'100vw', height:'100vh', transition: "0.8s"}}>
          <pointLight position={[1, 10, 10]} />
          <ambientLight />
          {/* <Cylinder3d position={[-1.2, 0, 0]} /> */}
          <Cylinder3d position={[5, 1, 0]} wireframe={true} />
        </Canvas>
      </section>
    </>
  );
};

export default App;
