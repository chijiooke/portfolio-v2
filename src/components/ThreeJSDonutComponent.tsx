import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Material, Mesh } from "three";
import { useSpring, animated, config } from "@react-spring/three";

const ThreeJsDonutComponent = (props: any) => {
  const ref = useRef<Mesh<BufferGeometry, Material | Material[]> | undefined>();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const [up, setUp] = useState(false);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.z += 0.003;
    }
  });
  useEffect(() => {
    props.bigDotRef.current.style.borderColor = hovered
      ? "hotpink"
      : "chartreuse";
    props.smallDotRef.current.style.scale = hovered ? 0.5 : 1;
  }, [hovered]);
  const { scale } = useSpring({
    scale: hovered ? 0.18 : 0.15,
    config: config.wobbly,
  });

  useEffect(() => {
    setUp(!up);
  }, [2000]);

  return (
    <animated.mesh
      style={{ zIndex: 200 }}
      {...props}
     
      rotation={props.rotation}
      // position={[-8, 0, 0]}
      ref={ref}
      scale={props.scale || scale}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => {
        hover(true);
      }}
      onPointerOut={(event) => {
        hover(false);
      }}
    >
      <torusGeometry args={[10, 3, 16, 100]} />
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={hovered ? "hotpink" : "green"}
      />
    </animated.mesh>
  );
};

export default ThreeJsDonutComponent;
