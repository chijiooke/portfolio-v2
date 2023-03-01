import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Material, Mesh } from "three";

const Cylinder3d = (props: any) => {
  const ref = useRef<Mesh<BufferGeometry, Material | Material[]> | undefined>();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  //   }
  return (
    <mesh
      {...props}
      ref={ref}
    //   scale={hovered ? 2.05 : 2}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => {
        hover(true);
        // ref.current.scale = 4
      }}
    //   rotation.x
      onPointerOut={(event) => {
        hover(false);
        // ref.current.rotation.x
      }}
    >
      {/* <pointLight position={[10, 10, 10]} /> */}
      <cylinderGeometry args={[1, 4, 4]} />
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={hovered ? "hotpink" : "green"}
      />
    </mesh>
  );
};

export default Cylinder3d;

// React.Ref<Mesh<BufferGeometry, Material | Material[]>> | undefined
