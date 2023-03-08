import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Material, Mesh } from "three";
import { useSpring, animated, config } from "@react-spring/three";

const ThreeJsCylinderComponent = (props: any) => {
  const ref = useRef<Mesh<BufferGeometry, Material | Material[]> | undefined>();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
    }
  });
  useEffect(() => {
    props.bigDotRef.current.style.borderColor = hovered
      ? "hotpink"
      : "chartreuse";
    props.smallDotRef.current.style.scale = hovered ? 0.5 : 1;
  }, [hovered]);
  const { scale } = useSpring({
    scale: hovered ? 2.1 : 1.8,
    config: config.wobbly,
  });

  return (
    <animated.mesh
      style={{ zIndex: 200 }}
      {...props}
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
      <capsuleGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={hovered ? "hotpink" : "green"}
      />
    </animated.mesh>
  );
};

export default ThreeJsCylinderComponent;
