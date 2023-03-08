import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Material, Mesh } from "three";
import { useSpring, animated, config } from "@react-spring/three";

const ThreeJsDonutComponent = (props: any) => {
  const ref = useRef<Mesh<BufferGeometry, Material | Material[]> | undefined>();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const [up, setUp] = useState(false);
  useFrame((state, delta) => {});
  useEffect(() => {
    // if (ref.current) {
    //     ref.current.rotation.y += 13.500;
    //   }
    props.bigDotRef.current.style.borderColor = hovered
      ? "hotpink"
      : "chartreuse";
    props.smallDotRef.current.style.scale = hovered ? 0.5 : 1;
  }, [hovered]);
  const { scale, positionY } = useSpring({
    scale: hovered ? 0.28 : 0.2,
    positionY: up ? 2 : 0,
    config: config.wobbly,
  });

  useEffect(() => {
    setUp(!up);
  }, [2000]);

  return (
    <animated.mesh
      style={{ zIndex: 200 }}
      {...props}
      //   rotation=[20,20,20]
      position={[-8, 0, 0]}
      ref={ref}
      scale={scale || 1}
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
